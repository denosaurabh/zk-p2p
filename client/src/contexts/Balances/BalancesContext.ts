import { createContext } from 'react'

import { ContextValues } from './types'

const defaultValues: ContextValues = {
  ethBalance: null,
  usdcBalance: null,
  usdcApprovalToRamp: null,
  refetchUsdcApprovalToRamp: null,
};

const BalancesContext = createContext<ContextValues>(defaultValues)

export default BalancesContext
