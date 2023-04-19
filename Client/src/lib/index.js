import abi from "../utils/ProductDetection.json";
const contractAddress = "0x2b344bDf24044DAeAffc3A5a8f677e03E1C267Fc";
const contractABI = abi.abi;
export { contractABI, contractAddress };
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: true,
};
export { options };
