(window.webpackJsonp=window.webpackJsonp||[]).push([[233],{689:function(e,t,a){"use strict";a.r(t);var o=a(1),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"quick-start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quick-start"}},[e._v("#")]),e._v(" Quick Start")]),e._v(" "),a("p",[e._v("This guide serves as a practical introduction to building blockchains with the Cosmos SDK.  It shows how to scaffold the code for a basic blockchain node, build and run it. Several important concepts of the Cosmos SDK are introduced along the way.")]),e._v(" "),a("h2",{attrs:{id:"setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[e._v("#")]),e._v(" Setup")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[e._v("To follow this guide, you need to "),a("a",{attrs:{href:"https://golang.org/doc/install",target:"_blank",rel:"noopener noreferrer"}},[e._v("install golang"),a("OutboundLink")],1),e._v(" and set "),a("a",{attrs:{href:"https://golang.org/doc/code.html#GOPATH",target:"_blank",rel:"noopener noreferrer"}},[e._v("your $GOPATH environment variable"),a("OutboundLink")],1)])]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",[e._v("Make sure you are using the latest stable version of golang available on https://golang.org/dl/")])]),e._v(" "),a("p",[e._v("First, download the "),a("a",{attrs:{href:"https://github.com/cosmos/scaffold",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("scaffold")]),a("OutboundLink")],1),e._v(" tool:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2l0IGNsb25lIGh0dHBzOi8vZ2l0aHViLmNvbS9jb3Ntb3Mvc2NhZmZvbGQK"}}),e._v(" "),a("p",[e._v("The "),a("code",[e._v("scaffold")]),e._v(" tool lets you easily scaffold boilerplate Cosmos SDK applications. Once you have downloaded it, simply install it on your machine:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y2Qgc2NhZmZvbGQKbWFrZQo="}}),e._v(" "),a("h2",{attrs:{id:"create-a-basic-cosmos-sdk-blockchain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-basic-cosmos-sdk-blockchain"}},[e._v("#")]),e._v(" Create a Basic Cosmos SDK Blockchain")]),e._v(" "),a("p",[e._v("To create a basic Cosmos SDK application, simply type in the following command:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c2NhZmZvbGQgYXBwIGx2bC0xICZsdDt1c2VybmFtZXxvcmcmZ3Q7ICZsdDtyZXBvJmd0Owo="}}),e._v(" "),a("p",[e._v("where "),a("code",[e._v("username|org")]),e._v(" is the name of your github/gitlab/atlassian username or organisation, and "),a("code",[e._v("repo")]),e._v(" the name of the distant repository you would push your application too. These arguments are used to configure the imports so that people can easily download and install your application once (if) you upload it.")]),e._v(" "),a("p",[e._v("The command above creates a starter application in a new folder named after the "),a("code",[e._v("repo")]),e._v(" argument. This application contains the "),a("RouterLink",{attrs:{to:"/intro/sdk-app-architecture.html"}},[e._v("basic logic most SDK applications")]),e._v(" need as well as a set of standard "),a("RouterLink",{attrs:{to:"/building-modules/intro.html"}},[e._v("modules")]),e._v(" already hooked up. These include:")],1),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/x/auth/spec/"}},[a("code",[e._v("auth")])]),e._v(": Accounts, signatures and fees.")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/x/bank/spec/"}},[a("code",[e._v("bank")])]),e._v(": Token transfers.")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/x/staking/spec/"}},[a("code",[e._v("staking")])]),e._v(": Proof-of-Stake logic, which is a way of managing validator set changes in public decentralised networks. Also includes delegation logic.")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/x/slashing/spec/"}},[a("code",[e._v("slashing")])]),e._v(": Slash validators that misebehave. Complementary to the "),a("code",[e._v("staking")]),e._v(" module.")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/x/distribution/spec/"}},[a("code",[e._v("distribution")])]),e._v(": Distribution of rewards and fees earned by participants in the Proof-of-Stake system (delegators and validators).")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/x/params/spec/"}},[a("code",[e._v("params")])]),e._v(": Global parameter store of the application.")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/x/supply/spec/"}},[a("code",[e._v("supply")])]),e._v(": Handles global token supply of the application. Enables modules to hold tokens.")],1),e._v(" "),a("li",[a("a",{attrs:{href:"../../x/genutil"}},[a("code",[e._v("genutil")])]),e._v(" and "),a("a",{attrs:{href:"../../x/genaccounts"}},[a("code",[e._v("genaccounts")])]),e._v(": Utility modules to facilitate creation of genesis file.")])]),e._v(" "),a("p",[e._v("Now, go into the application's folder. The structure should look like the following:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"4pSc4pSA4pSAIGFwcC8K4pSCwqDCoCDilJzilIDilIAgYXBwLmdvCuKUgsKgwqAg4pSU4pSA4pSAIGV4cG9ydC5nbwrilJzilIDilIAgY21kLwrilIIgICDilJzilIDilIAgYWNsaS8K4pSCICAg4pSCICAg4pSU4pSA4pSAIG1haW4uZ28K4pSCwqDCoCDilJzilIDilIAgYXVkLwrilIIgICDilIIgICDilJTilIDilIAgbWFpbi5nbwrilJzilIDilIAgTWFrZWZpbGUK4pSc4pSA4pSAIGdvLm1vZArilJTilIDilIAgeC8K"}}),e._v(" "),a("p",[e._v("where:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("app.go")]),e._v(" is the "),a("RouterLink",{attrs:{to:"/basics/app-anatomy.html#core-application-file"}},[e._v("main file")]),e._v(" defining the application logic. This is where the state is intantiated and modules are declared. This is also where the Cosmos SDK is imported as a dependency to help build the application.")],1),e._v(" "),a("li",[a("code",[e._v("export.go")]),e._v(" is a helper file used to export the state of the application into a new genesis file. It is helpful when you want to upgrade your chain to a new (breaking) version.")]),e._v(" "),a("li",[a("code",[e._v("acli/main.go")]),e._v(" builds the command-line interface for your blockchain application. It enables end-users to create transactions and query the chain for information.")]),e._v(" "),a("li",[a("code",[e._v("aud/main.go")]),e._v(" builds the main "),a("RouterLink",{attrs:{to:"/basics/app-anatomy.html#node-client"}},[e._v("daemon client")]),e._v(" of the chain. It is used to run a full-node that will connect to peers and sync its local application state with the latest state of the network.")],1),e._v(" "),a("li",[a("code",[e._v("go.mod")]),e._v(" helps manage dependencies. The two main dependencies used are the Cosmos SDK to help build the application, and Tendermint to replicate it.")]),e._v(" "),a("li",[a("code",[e._v("x/")]),e._v(" is the folder to place all the custom modules built specifically for the application. In general, most of the modules used in an application have already been built by third-party developers and only need to be imported in "),a("code",[e._v("app.go")]),e._v(". These modules do not need to be cloned into the application's "),a("code",[e._v("x/")]),e._v(" folder. This is why the basic application shown above, which uses several modules, works despite having an empty "),a("code",[e._v("x/")]),e._v(" folder.")])]),e._v(" "),a("h2",{attrs:{id:"run-your-blockchain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-your-blockchain"}},[e._v("#")]),e._v(" Run your Blockchain")]),e._v(" "),a("p",[e._v("First, install the two main entrypoints of your blockchain, "),a("code",[e._v("aud")]),e._v(" and "),a("code",[e._v("acli")]),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z28gbW9kIHRpZHkKbWFrZSBpbnN0YWxsCg=="}}),e._v(" "),a("p",[e._v("Make sure the clients are properly installed:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"YWNsaSAtLWhlbHAKYXVkIC0taGVscAo="}}),e._v(" "),a("p",[e._v("Now that you have your daemon client "),a("code",[e._v("aud")]),e._v(" and your command-line interface "),a("code",[e._v("acli")]),e._v(" installed, go ahead and initialize your chain:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"YXVkIGluaXQgJmx0O25vZGUtbW9uaWtlciZndDsgLS1jaGFpbi1pZCB0ZXN0Cg=="}}),e._v(" "),a("p",[e._v("The command above creates all the configuration files needed for your node to run, as well as a default genesis file, which defines the initial state of the network. Before starting the chain, you  need to populate the state with at least one account. To do so, first create a new "),a("RouterLink",{attrs:{to:"/basics/accounts.html"}},[e._v("account")]),e._v(" named "),a("code",[e._v("validator")]),e._v(" (feel free to choose another name):")],1),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"YWNsaSBrZXlzIGFkZCB2YWxpZGF0b3IK"}}),e._v(" "),a("p",[e._v("Now that you have created a local account, go ahead and grant it "),a("code",[e._v("stake")]),e._v(" tokens in your chain's genesis file. Doing so will also make sure your chain is aware of this account's existence:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"YXVkIGFkZC1nZW5lc2lzLWFjY291bnQgJChhY2xpIGtleXMgc2hvdyB2YWxpZGF0b3IgLWEpIDEwMDAwMDAwMHN0YWtlCg=="}}),e._v(" "),a("p",[e._v("Now that your account has some tokens, you need to add a validator to your chain. Validators are special full-nodes that participate in the consensus process (implemented in the "),a("RouterLink",{attrs:{to:"/intro/sdk-app-architecture.html#tendermint"}},[e._v("underlying consensus engine")]),e._v(") in order to add new blocks to the chain. Any account can declare its intention to become a validator operator, but only those with sufficient delegation get to enter the active set (for example, only the top 125 validator candidates with the most delegation get to be validators in the Cosmos Hub). For this guide, you will add your local node (created via the "),a("code",[e._v("init")]),e._v(" command above) as a validator of your chain. Validators can be declared before a chain is first started via a special transaction included in the genesis file called a "),a("code",[e._v("gentx")]),e._v(":")],1),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Ly8gY3JlYXRlIGEgZ2VudHgKYXVkIGdlbnR4IC0tbmFtZSB2YWxpZGF0b3IgLS1hbW91bnQgMTAwMDAwc3Rha2UKCi8vIGFkZCB0aGUgZ2VudHggdG8gdGhlIGdlbmVzaXMgZmlsZQphdWQgY29sbGVjdC1nZW50eHMK"}}),e._v(" "),a("p",[e._v("A "),a("code",[e._v("gentx")]),e._v(" does three things:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("1. Makes the `validator` account you created into a validator operator account (i.e. the account that controls the validator).\n2. Self-delegates the provided `amount` of staking tokens. \n3. Link the operator account with a Tendermint node pubkey that will be used for signing blocks. If no `--pubkey` flag is provided, it defaults to the local node pubkey created via the `aud init` command above. \n")])])]),a("p",[e._v("For more on "),a("code",[e._v("gentx")]),e._v(", use the following command:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"YXVkIGdlbnR4IC0taGVscAo="}}),e._v(" "),a("p",[e._v("Now that everyting is set up, you can finally start your node:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"YXVkIHN0YXJ0Cg=="}}),e._v(" "),a("p",[e._v("You should see blocks come in.")]),e._v(" "),a("h2",{attrs:{id:"send-tokens-and-increase-delegation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#send-tokens-and-increase-delegation"}},[e._v("#")]),e._v(" Send Tokens and Increase Delegation")]),e._v(" "),a("p",[e._v("Now that your chain is running, it is time to try sending tokens from the first account you created to a second account. In a new terminal window, start by running the following query command:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"YWNsaSBxdWVyeSBhY2NvdW50ICQoYWNsaSBrZXlzIHNob3cgdmFsaWRhdG9yIC1hKSAtLWNoYWluLWlkIHRlc3QK"}}),e._v(" "),a("p",[e._v("You should see the current balance of the account you created, equal to the original balance of "),a("code",[e._v("stake")]),e._v(" you granted it minus the amount you delegated via the "),a("code",[e._v("gentx")]),e._v(". Now, create a second account:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"YWNsaSBrZXlzIGFkZCByZWNlaXZlcgo="}}),e._v(" "),a("p",[e._v("The command above creates a local key-pair that is not yet registered on the chain. An account is registered the first time it receives tokens from another account. Now, run the following command to send tokens to the second account:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"YWNsaSB0eCBzZW5kICQoYWNsaSBrZXlzIHNob3cgdmFsaWRhdG9yIC1hKSAkKGFjbGkga2V5cyBzaG93IHJlY2VpdmVyIC1hKSAxMDAwc3Rha2UgLS1jaGFpbi1pZCB0ZXN0Cg=="}}),e._v(" "),a("p",[e._v("Check that the second account did receive the tokens:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"YWNsaSBxdWVyeSBhY2NvdW50ICQoYWNsaSBrZXlzIHNob3cgcmVjZWl2ZXIgLWEpIC0tY2hhaW4taWQgdGVzdAo="}}),e._v(" "),a("p",[e._v("Finally, delegate some of the stake tokens sent to the "),a("code",[e._v("receiver")]),e._v(" account to the validator:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"YWNsaSB0eCBzdGFraW5nIGRlbGVnYXRlICQoYWNsaSBrZXlzIHNob3cgdmFsaWRhdG9yIC0tYmVjaCB2YWwgLWEpIDUwMHN0YWtlIC0tZnJvbSByZWNlaXZlciAtLWNoYWluLWlkIHRlc3QK"}}),e._v(" "),a("p",[e._v("Try to query the total delegations to "),a("code",[e._v("validator")]),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"YWNsaSBxdWVyeSBzdGFraW5nIGRlbGVnYXRpb25zLXRvICQoYWNsaSBrZXlzIHNob3cgdmFsaWRhdG9yIC0tYmVjaCB2YWwgLWEpIC0tY2hhaW4taWQgdGVzdAo="}}),e._v(" "),a("p",[e._v("You should see two delegations, the first one made from the "),a("code",[e._v("gentx")]),e._v(", and the second one you just performed from the "),a("code",[e._v("receiver")]),e._v(" account.")]),e._v(" "),a("h2",{attrs:{id:"next"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[e._v("#")]),e._v(" Next")]),e._v(" "),a("p",[e._v("Congratulations on making it to the end of this short introduction guide! If you want to learn more, check out the following resources:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://tutorials.cosmos.network/nameservice/tutorial/00-intro.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to build a full SDK application from scratch"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/intro/overview.html"}},[e._v("Read the Cosmos SDK Documentation")]),e._v(".")],1)])],1)}),[],!1,null,null,null);t.default=s.exports}}]);