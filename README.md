
# Mempool Filter

The code filters all uniswapV3 transactions which are pending in the mempool and sends an alert to a specific user through mail whenever a swap is done over a threshold value.



## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`url`: The quicknode mainnet websocket url (starts with wss).

`email_from`: The email id which sends the alert.

`email_to`: The email id which recieves the alert.

`password`: password of the `email_from` id. (use [app password](https://support.google.com/accounts/answer/185833?hl=en) in gmail).





## Installation

Install the following dependencies or `npm install`

```bash
    "dotenv": "^16.0.2",
    "ethers": "^5.7.1",
    "nodemailer": "^6.7.8"
```
To run the project, 
`cd mempoolFilter` &
 `node app.js`, after all dependencies are installed and environment variables are set up.

    
## Explanation of code

### `app.js`
1. The `init()` function initializes the WebSocket Provider and streams pending transactions of the mempool into a websocket.
2. The `uniswapFilter(provider,tx)` is called in `app.js` which is the function containing the main logic for filtering the uniswap transactions, and the logic for sending an email whenever a swap is made over a threshold value.

### `filter.js`
1. This page initialises all necessary constants and variables for the main logic such as the `ABI` of the uniswapV3 contract (which is used to create an interface to decode transaction data).
2. `const decodeData` uses the `decodeFunctionData` to decode the transaction data output and convert it into understandable numbers. The `exactInputSingle` function is called in the deployed transaction to swap a token which is passed in `decodeFunctionData` through the interface using the ABI.
3. The `nodemailer` npm package is used to send an alert through an email whenever a swap is made above a certain `threshold`.
