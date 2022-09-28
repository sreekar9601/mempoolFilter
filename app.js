var ethers = require("ethers");
var threshold = 0.001;
var {uniswapFilter} = require("./filter")
require('dotenv').config();
var ABI2 = [{
  "inputs": [
    {
      "components": [
        { "internalType": "address", "name": "tokenIn", "type": "address" },
        { "internalType": "address", "name": "tokenOut", "type": "address" },
        { "internalType": "uint24", "name": "fee", "type": "uint24" },
        { "internalType": "address", "name": "recipient", "type": "address" },
        { "internalType": "uint256", "name": "deadline", "type": "uint256" },
        { "internalType": "uint256", "name": "amountIn", "type": "uint256" },
        {
          "internalType": "uint256",
          "name": "amountOutMinimum",
          "type": "uint256"
        },
        {
          "internalType": "uint160",
          "name": "sqrtPriceLimitX96",
          "type": "uint160"
        }
      ],
      "internalType": "struct ISwapRouter.ExactInputSingleParams",
      "name": "params",
      "type": "tuple"
    }
  ],
  "name": "exactInputSingle",
  "outputs": [
    { "internalType": "uint256", "name": "amountOut", "type": "uint256" }
  ],
  "stateMutability": "payable",
  "type": "function"
}]
var uniswapV3 = '0xE592427A0AEce92De3Edee1F18E0157C05861564';
var init = function () {
  var provider = new ethers.providers.WebSocketProvider(process.env.url);

  
  provider.on("pending", (tx) => {uniswapFilter(provider,tx)});

  provider._websocket.on("error", async () => {
    console.log(`Unable to connect to ${ep.subdomain} retrying in 3s...`);
    setTimeout(init, 3000);
  });
  provider._websocket.on("close", async (code) => {
    console.log(
      `Connection lost with code ${code}! Attempting reconnect in 3s...`
    );
    provider._websocket.terminate();
    setTimeout(init, 3000);
  });
};



init();