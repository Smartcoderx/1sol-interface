import { PublicKey } from "@solana/web3.js"
import { SWAP_PROGRAM_ID as STABLE_SWAP_PROGRAM_ID } from '@saberhq/stableswap-sdk'
import { TOKEN_SWAP_PROGRAM_ID } from '@solana/spl-token-swap'

import btc from '../assets/token/btc.png'
import usdt from '../assets/token/usdt.png'
import usdc from '../assets/token/usdc.png'
import srm from '../assets/token/srm.png'
import sol from '../assets/token/sol.png'
import eth from '../assets/token/eth.png'

export const SYMBOL_PAIRS = [
  // { name: 'AVAX/USD', key: 'DinfGKkKxJsU3kFnj173zSRdXNhZxxgZY8YC5GCQYhsi' },
  { name: 'BTC', key: '6dbkV6QCToTk6DRfuJyrGuz18kZ4rPUSHLLLVrryWdUC', token: 'BTC', icon: btc },
  { name: 'ETH', key: '8pcXGi4QoHKytv3issKdFF3XRDeYAGEgy6EEAi1ioLe7', token: 'ETH', icon: eth },
  // { name: 'LINK/USD', key: 'DKE5VrYbboAteTfzAycvtV7Hah7VwvyXC56hj2hZ8dfS' },
  // { name: 'MATIC/USD', key: '9Xzp4FjgB9UKF3tDXS1WxHTGauv4dtPmkxxTZdWZsP2x' },
  { name: 'SOL', key: 'FmAmfoyPXiA8Vhhe6MZTr3U6rZfEZ1ctEHay1ysqCqcf', token: 'SOL', icon: sol },
  { name: 'SRM', key: 'ELfANVHk7wYB3ALoxPsiTQgM3t9MXgjbNZQNZyPuBp9C', token: 'SRM', icon: srm },
  { name: 'USDC', key: 'F3Wgm7HqxnxvNznF7MmHMW7566zBQyuwzF5JWRhjhUtc', token: 'USDC', icon: usdc },
  { name: 'USDT', key: 'FG5FPJnT4ubjoNMm9Bh2uAfgbq2bwxP7aY6AKVmYou1p', token: 'USDT', icon: usdt },
]

export const TOKEN_SWAP_NAME = 'Token Swap'
export const SERUM_DEX_MARKET_NAME = 'Serum'
export const ONESOL_NAME = '1Sol'
export const SABER_STABLE_SWAP_NAME = 'Saber'
export const ORCA_SWAP_NAME = 'Orca'
export const RAYDIUM_NAME = 'Raydium'

export const EXCHANGER_SPL_TOKEN_SWAP = 'SplTokenSwap'
export const EXCHANGER_SERUM_DEX = 'SerumDex'
export const EXCHANGER_SABER_STABLE_SWAP = 'SaberStableSwap'
export const EXCHANGER_ORCA_SWAP = 'OrcaSwap'
export const EXCHANGER_RAYDIUM = 'Raydium'

export const PROVIDER_MAP: { [key: string]: string } = {
  best_route: ONESOL_NAME,
  [EXCHANGER_SPL_TOKEN_SWAP]: TOKEN_SWAP_NAME,
  [EXCHANGER_SERUM_DEX]: SERUM_DEX_MARKET_NAME,
  [EXCHANGER_SABER_STABLE_SWAP]: SABER_STABLE_SWAP_NAME,
  [EXCHANGER_ORCA_SWAP]: ORCA_SWAP_NAME,
  [EXCHANGER_RAYDIUM]: RAYDIUM_NAME,
}

export interface DEX_INFO {
  name: string,
  TOKEN_SWAP: PublicKey,
  SERUM: PublicKey,
  SABER: PublicKey,
  ORCA: PublicKey,
  ONESOL: PublicKey,
  RAYDIUM: PublicKey,
}

export const DEXS: DEX_INFO[] = [
  {
    name: 'mainnet-beta',
    TOKEN_SWAP: new PublicKey(TOKEN_SWAP_PROGRAM_ID),
    SERUM: new PublicKey('9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin'),
    SABER: new PublicKey(STABLE_SWAP_PROGRAM_ID),
    ORCA: new PublicKey('9W959DqEETiGZocYWCQPaJ6sBmUzgfxXfqGeTEdp3aQP'),
    ONESOL: new PublicKey('1SoLTvbiicqXZ3MJmnTL2WYXKLYpuxwHpa4yYrVQaMZ'),
    RAYDIUM: new PublicKey('675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8'),
  },
  {
    name: 'devnet',
    TOKEN_SWAP: new PublicKey(TOKEN_SWAP_PROGRAM_ID),
    SERUM: new PublicKey('DESVgJVGajEgKGXhb6XmqDHGz3VjdgP7rEVESBgxmroY'),
    SABER: new PublicKey(STABLE_SWAP_PROGRAM_ID),
    ORCA: new PublicKey('554sF8DLPVoUrLyjKqjKzPEksz7VtzurThPjFuVAoge3'),
    ONESOL: new PublicKey('9Bj8zgNWT6UaNcXMgzMFrnH5Z13nQ6vFkRNxP743zZyr'),
    RAYDIUM: new PublicKey('675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8'),
  }
]

export const getDex = (envName: string) => {
  const dex = DEXS.find(({ name }) => name === envName)

  return dex || DEXS[0]
}