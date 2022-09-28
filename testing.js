// var ethers = require("ethers");
// var url = "wss://attentive-fittest-bush.discover.quiknode.pro/55b30e86b09d4b86577281f13624a8f8c6811eba/";
// // var {abi} = require('./contractABI');
// var data = '0x414bf389000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc20000000000000000000000003845badade8e6dff049820680d1f14bd3903a5d00000000000000000000000000000000000000000000000000000000000000bb800000000000000000000000020cb9d94d5ab578fd0a0d01db366f22cdbf1062200000000000000000000000000000000000000000000000000000000618d60c1000000000000000000000000000000000000000000000000000e35fa931a00000000000000000000000000000000000000000000000000007651ba97a28369620000000000000000000000000000000000000000000000000000000000000000'
// var ABI2 = [{
//     "inputs": [
//       {
//         "components": [
//           { "internalType": "address", "name": "tokenIn", "type": "address" },
//           { "internalType": "address", "name": "tokenOut", "type": "address" },
//           { "internalType": "uint24", "name": "fee", "type": "uint24" },
//           { "internalType": "address", "name": "recipient", "type": "address" },
//           { "internalType": "uint256", "name": "deadline", "type": "uint256" },
//           { "internalType": "uint256", "name": "amountIn", "type": "uint256" },
//           {
//             "internalType": "uint256",
//             "name": "amountOutMinimum",
//             "type": "uint256"
//           },
//           {
//             "internalType": "uint160",
//             "name": "sqrtPriceLimitX96",
//             "type": "uint160"
//           }
//         ],
//         "internalType": "struct ISwapRouter.ExactInputSingleParams",
//         "name": "params",
//         "type": "tuple"
//       }
//     ],
//     "name": "exactInputSingle",
//     "outputs": [
//       { "internalType": "uint256", "name": "amountOut", "type": "uint256" }
//     ],
//     "stateMutability": "payable",
//     "type": "function"
//   }]
// //   var ABI = (['function exactInputSingle((address,address,uint24,address,uint256,uint256,uint256,uint160))'])
// var init = async function(){
//   var provider = new ethers.providers.WebSocketProvider(url);
//   const iface = new ethers.utils.Interface(ABI2);
//   const txData = await iface.decodeFunctionData('exactInputSingle', data);
//  await console.log(ethers.utils.formatEther(txData.params.amountOutMinimum))

// }
// init();