# Vyper Implementation of ERC-20

This is a test implementation of ERC-20 based on the ERC-20 standard (https://docs.openzeppelin.com/contracts/2.x/api/token/erc20), and with guidance from the official Vyper example (https://github.com/vyperlang/vyper/blob/master/examples/tokens/ERC20.vy).

You can interact with the token contract through a React app.

## Getting Started

#### Python 3.8

Follow instructions to install the latest version of python for your platform in the [python docs](https://docs.python.org/3/using/unix.html#getting-and-installing-the-latest-version-of-python)

#### Virtual Enviornment

We recommend working within a virtual environment whenever using Python for projects. This keeps your dependencies for each project separate and organaized. Instructions for setting up a virual enviornment for your platform can be found in the [python docs](https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/)

#### PIP Dependencies

Once you have your virtual environment setup and running, install dependencies by running:
```bash
pip install -r requirements.txt
```
This will install all of the required packages we selected within the `requirements.txt` file.

### Local Development

1. Launch your development blockchain in a terminal. Here, we use ganache-cli with port 8545.
```
ganache-cli
```
2. In a separate terminal, navigate to the directory and migrate the contracts to the development blockchain. If your development blockchain is using a different port, please amend `truffle-config.js`.
```
truffle migrate --network development
```
3. Navigate to the `app` directory and launch the React app.
```
cd app
npm start
```

## Authors

Gary Tse