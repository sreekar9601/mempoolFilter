var nodemailer = require('nodemailer');
var ethers = require("ethers");
require('dotenv').config();
var fromMail = process.env.email_from; 
var toMail = process.env.email_to;
var uniswapV3 = '0xE592427A0AEce92De3Edee1F18E0157C05861564';
var threshold = 0.001;
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
var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
    service: 'gmail',
//     debug: false,
//     logger: true ,
//   secure: false,
    auth: {
      user: fromMail,
      pass: process.env.password
    }
    
  });
 
function uniswapFilter(provider, tx){
  
    provider.getTransaction(tx).then(async function (transaction) {
      try{
        if(transaction.to == uniswapV3){
          const txData = transaction.data;
          const iface = new ethers.utils.Interface(ABI2);

        //   console.log(iface)
          const decodeData = await iface.decodeFunctionData('exactInputSingle', txData);
          const etherValue = await ethers.utils.formatEther(decodeData.params.amountOutMinimum);
          try{
            if(etherValue>threshold){
          var textSent = 'Swap Size:' + etherValue;
                console.log(etherValue)
                var mailOptions = {
                    from: fromMail,
                    to: toMail,
                    subject: 'ALERT: Uniswap Swap value greater than threshold!',
                    text: textSent
                  };
                  
                  console.log(mailOptions)
                  transporter.sendMail(mailOptions, function(error, info){
                    if (error) {
                      console.log(error);
                    } else {
                      console.log('Email sent: ' + info.response);
                    }
                  });
            }
          }
          catch{
            console.log("swap under threshold")
          }
  

      }
      }
      catch{
      }
    });
  
  }

  module.exports = {uniswapFilter}