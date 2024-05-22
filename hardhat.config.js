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
      url: `https://polygon-amoy.g.alchemy.com/v2/vkTR7T80RK9fA-7o_XBHtsC5vCZJCjMm`,
      accounts: [process.env.ACCOUNT_PRIVATE_KEY],
    },
  },
};
