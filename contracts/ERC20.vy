# @version ^0.2.0

from vyper.interfaces import ERC20

implements: ERC20

total_supply: public(uint256)
minter: address

name: public(String[64])
symbol: public(String[32])
decimals: public(uint256)

balances: public(HashMap[address, uint256])
allowances: public(HashMap[address, HashMap[address, uint256]])

event Transfer:
	sender: indexed(address)
	receiver: indexed(address)
	value: uint256

event Approval:
	owner: indexed(address)
	spender: indexed(address)
	value: uint256 

@external
def __init__(_name: String[64], _symbol: String[32], _decimals: uint256, _supply: uint256):
	
	init_supply: uint256 = _supply * 10 ** _decimals
	self.name = _name
	self.symbol = _symbol
	self.decimals = _decimals
	self.balances[msg.sender] = init_supply
	self.total_supply = init_supply
	self.minter = msg.sender
	log Transfer(ZERO_ADDRESS, msg.sender, init_supply)
	

@external
def totalSupply() -> uint256:
	
	return self.total_supply

@external
def balanceOf(_account: address) -> uint256:

	return self.balances[_account]

@external
def transfer(_recipient: address, _amount: uint256) -> bool:

	assert _recipient != ZERO_ADDRESS, 'Recipient cannot be zero address'
	assert msg.sender != ZERO_ADDRESS, 'Sender cannot be zero address'
	assert self.balances[msg.sender] >= _amount

	self.balances[msg.sender] -= _amount
	self.balances[_recipient] += _amount

	log Transfer(msg.sender, _recipient, _amount)

	return True

@external
@view
def allowance(_owner: address, _spender: address) -> uint256:
	
	return self.allowances[_spender][_owner]

@external
def approve(_spender: address, _amount: uint256) -> bool:
	
	self.allowances[_spender][msg.sender] = 0
	self.allowances[_spender][msg.sender] = _amount

	log Approval(msg.sender, _spender, _amount)

	return True

@external
def transferFrom(_sender: address, _recipient: address, _amount: uint256) -> bool:

	assert _recipient != ZERO_ADDRESS, 'Recipient cannot be zero address'
	assert _sender != ZERO_ADDRESS, 'Sender cannot be zero address'
	assert self.balances[_sender] >= _amount
	assert self.allowances[msg.sender][_sender] >= _amount

	self.balances[_sender] -= _amount
	self.balances[_recipient] += _amount

	log Transfer(_sender, _recipient, _amount)

	return True

@external
def increaseAllowance(_spender: address, _addedValue: uint256) -> bool:

	assert _spender != ZERO_ADDRESS, 'Spender cannot be zero address'

	self.allowances[_spender][msg.sender] += _addedValue

	return True

@external
def decreaseAllowance(_spender: address, _subtractedValue: uint256) -> bool:

	assert _spender != ZERO_ADDRESS, 'Spender cannot be zero address'
	assert self.allowances[_spender][msg.sender] >= _subtractedValue, 'Insufficient allowance to subtract'

	self.allowances[_spender][msg.sender] -= _subtractedValue

	return True

@external
def mint(_recipient: address, _amount: uint256):
	
	assert msg.sender == self.minter, 'Not authorised to mint'
	assert _recipient != ZERO_ADDRESS, 'Recipient cannot be zero address'

	self.total_supply += _amount

	self.balances[_recipient] += _amount

	log Transfer(ZERO_ADDRESS, _recipient, _amount)

@internal
def _burn(_account: address, _amount: uint256):

	assert _account != ZERO_ADDRESS
	assert self.balances[_account] >= _amount

	self.balances[_account] -= _amount

	self.total_supply -= _amount

	log Transfer(_account, ZERO_ADDRESS, _amount)

@external
def burn(_account: address, _amount: uint256):

	self._burn(_account, _amount)


@external
def burnFrom(_account: address, _amount: uint256):
	
	self.allowances[msg.sender][_account] -= _amount
	self._burn(_account, _amount)