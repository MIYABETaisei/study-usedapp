require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const networks: { [key: string]: any } = {
  goerli: {
    url: process.env.ALCHEMY_KINKEBY_URL,
    accounts: [process.env.ACCOUNT_PRIVATE_KEY],
  },
};

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks,
  defaultNetwork: "goerli",
};

export default config;
