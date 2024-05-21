require("@nomicfoundation/hardhat-toolbox");
require('dotenv').configDotenv({path:'./.env.local'})
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "polygonAmoy",
  solidity: "0.8.24",
  networks: {
    hardhat:{
      chainId:80002
    },
    polygonAmoy: {
      url: `https://polygon-amoy.blockpi.network/v1/rpc/public`,
      accounts: [process.env.ACCOUNT_PRIVATE_KEY],
    },
  },
};
