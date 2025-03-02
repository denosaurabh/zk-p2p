// struct Deposit {
//   address depositor;
//   uint256[5] packedVenmoId;
//   uint256 depositAmount;
//   uint256 remainingDeposits;          // Amount of remaining deposited liquidity
//   uint256 outstandingIntentAmount;    // Amount of outstanding intents (may include expired intents)
//   uint256 conversionRate;             // Conversion required by off-ramper between USDC/USD
//   uint256 convenienceFee;             // Amount of USDC per on-ramp transaction available to be claimed by off-ramper
//   bytes32[] intentHashes;             // Array of hashes of all open intents (may include some expired if not pruned)
// }
export interface Deposit {
  depositor: string;
  venmoId: string;
  depositAmount: bigint;
  remainingDepositAmount: bigint;
  outstandingIntentAmount: bigint;
  conversionRate: bigint;
  convenienceFee: bigint;
  intentHashes: string[];
}

// struct DepositWithAvailableLiquidity {
// deposit: Deposit;
// uint256: availableLiquidity;
// }
export interface DepositWithAvailableLiquidity {
  depositId: bigint;
  deposit: Deposit;
  availableLiquidity: bigint;
} // DepositsProvider.getAccountDeposits, LiquidityProvider.getDepositFromIds

export interface StoredDeposit extends DepositWithAvailableLiquidity {
  depositId: bigint;
}

export interface IndicativeQuote {
  depositId?: bigint;
  usdAmountToSend?: string;
  error?: string;
}

// struct Intent {
//   address onramper;
//   uint256 deposit;
//   uint256 amount;
//   uint256 intentTimestamp;
//   address to;
// }
export interface Intent {
  onRamper: string;
  deposit: bigint;
  amount: bigint;
  timestamp: bigint;
  to: string;
}

export interface DepositIntent {
  onRamperVenmoHash: string;
  deposit: Deposit;
  intent: Intent;
}

export interface OnRamperIntent {
  depositorVenmoId: string;
  intent: Intent;
}