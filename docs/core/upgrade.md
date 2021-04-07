<!--
order: 15
-->

# In-Place Store Migrations

::: warning
Read and understand all of the in-place store migration documentation before you run a migration on a live chain.
:::

Upgrade your app modules smoothly with custom in-place migration logic. {synopsis}

The Cosmos SDK uses two methods to perform upgrades. 

- Exporting the entire application state to a JSON file using the `export` CLI command, making changes, and then starting a new binary with the changed JSON file as the genesis file. See the [Chain Upgrade Guide](../migrations/chain-upgrade-guide-040.md#upgrade-procedure). 

- Version v0.43 and later can perform upgrades in place to significantly decrease the upgrade time for chains with a larger state. Use the [Migration Upgrade Guide](../building-modules/upgrade.md) guide to set up your application modules to take advantage of in-place upgrades.

## Tracking Module Versions

Each module gets assigned a consensus version by the module developer. The consensus version serves as the breaking change version of the module. The SDK keeps track of all module consensus versions in the x/upgrade `VersionMap` store. During an upgrade, the difference between the old `VersionMap` stored in state and the new `VersionMap` is calculated by the Cosmos SDK. For each identified difference, the module-specific migrations are run and the respective consensus version of each upgraded module is incremented.


## Genesis State

When starting a new chain, the consensus version of each module must be saved to state during the application's genesis. To save the consensus version, add the following line to the `InitChainer` method in `app.go`:

```diff
func (app *MyApp) InitChainer(ctx sdk.Context, req abci.RequestInitChain) abci.ResponseInitChain {
  ...
+ app.UpgradeKeeper.SetModuleVersionMap(ctx, app.mm.GetVersionMap())
  ...
}
```

This information is used by the Cosmos SDK to detect when modules with newer versions are introduced to the app. 

### Consensus Version
The consensus version is defined on each app module by the module developer and serves as the breaking change version of the module. The consensus version informs the SDK on which modules need to be upgraded. For example, if the bank module was version 2 and an upgrade introduces bank module 3, the SDK upgrades the bank module and runs the "version 2 to 3" migration script.

### Version Map
The version map is a mapping of module names to consensus versions. The map is persisted to x/upgrade's state for use during in-place migrations. When migrations finish, the updated version map is persisted to state. 

## Upgrade Handlers

Upgrades use an `UpgradeHandler` to facilitate migrations. The `UpgradeHandler` functions implemented by the app developer must conform to the following function signature. These functions retrieve the `VersionMap` from x/upgrade's state and return the new `VersionMap` to be stored in x/upgrade after the upgrade. The diff between the two `VersionMap`s determines which modules need upgrading.

```golang
type UpgradeHandler func(ctx sdk.Context, plan Plan, fromVM VersionMap) (VersionMap, error)
```

Inside these functions, you must perform any upgrade logic to include in the provided `plan`. All upgrade handler functions must end with the following line of code:

```golang
  return app.mm.RunMigrations(ctx, cfg, fromVM)
```

## Running Migrations

Migrations are run inside of an `UpgradeHandler` using  `app.mm.RunMigrations(ctx, cfg, vm)`. The `UpgradeHandler` functions describe the functionality to occur during an upgrade. The `RunMigration` function loops through the `VersionMap` argument and runs the migration scripts for all versions that are less than the versions of the new binary app module. After the migrations are finished, a new `VersionMap` is returned to persist the upgraded module versions to state.

```golang
cfg := module.NewConfigurator(...)
app.UpgradeKeeper.SetUpgradeHandler("my-plan", func(ctx sdk.Context, plan upgradetypes.Plan, vm module.VersionMap) (module.VersionMap, error) {

    // ...
    // do upgrade logic
    // ...

    // RunMigrations returns the VersionMap
    // with the updated module ConsensusVersions
    return app.mm.RunMigrations(ctx, vm)
})
```

To learn more about configuring migration scripts for your modules, see the [Migration Upgrade Guide](../building-modules/upgrade.md).

## Adding New Modules During Upgrades

You can introduce entirely new modules to the application during an upgrade. New modules are recognized because their consensus version in the `fromVM` `VersionMap` is 0. In this case, `RunMigrations` calls the  `InitGenesis` function from the corresponding module to set up its initial state. If the module requires an initial state, run `InitGenesis` to ensure new modules can successfully upgrade your application without error. 

If the new module does not require an initial state, you can skip running `InitGenesis`. Instead, manually update the value of the module version in the `VersionMap` in `UpgradeHandler`. 

```go
// Foo is a new module being introduced
// in this upgrade plan
import foo "github.com/my/module/foo"

app.UpgradeKeeper.SetUpgradeHandler("my-plan", func(ctx sdk.Context, plan upgradetypes.Plan, vm module.VersionMap)  (module.VersionMap, error) {
    // We make sure to set foo's version to the latest ConsensusVersion in the VersionMap.
    // This will skip running InitGenesis on Foo
    vm["foo"] = foo.AppModule{}.ConsensusVersion()

    return app.mm.RunMigrations(ctx, cfg, vm)
})
```

Using a similar method, you can also run `InitGenesis` on your new module with a custom genesis state:

```go
import foo "github.com/my/module/foo"

app.UpgradeKeeper.SetUpgradeHandler("my-plan", func(ctx sdk.Context, plan upgradetypes.Plan, vm module.VersionMap)  (module.VersionMap, error) {
    vm["foo"] = foo.AppModule{}.ConsensusVersion()

    // Run custom InitGenesis for foo
    app.mm["foo"].InitGenesis(ctx, app.appCodec, myCustomGenesisState)

    return app.mm.RunMigrations(ctx, cfg, vm)
})
```