require("@nomiclabs/hardhat-waffle");

OPTIMISM_GOERLI_RPC_URL='https://lively-wandering-mound.optimism-goerli.discover.quiknode.pro/a0e4b7e50e6e99557fe1bd16cb12a26e0091c416/'
PRIVATE_KEY='ddb3b2a67d04f89e346f8a6d5d29c873d945fb23b2e25dcd4bdaa18adb4a4aff'

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.0",
  networks: {
    optimismGoerli: {
      url: OPTIMISM_GOERLI_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 420,
    },
  },
};

// npx hardhat run scripts/deploy.js --network rinkeby
// 0xB06f44329c3B2f92B1C9C78440Ca76063d575208;
