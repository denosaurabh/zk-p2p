import React, { ReactNode, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate
} from "react-router-dom";

import { Permissions } from "./pages/Permissions";
import { Registration } from "./pages/Registration";
import { Swap } from "./pages/Swap";
import { Deposit } from "./pages/Deposit";
import { TopNav } from "@components/layouts/TopNav";
import { BottomNav } from "@components/layouts/BottomNav";

import AccountProvider from "./contexts/Account/AccountProvider";
import SmartContractsProvider from './contexts/SmartContracts/SmartContractsProvider';
import BalancesProvider from "./contexts/Balances/BalancesProvider";
import RampProvider  from './contexts/Ramp/RampProvider';
import RegistrationProvider  from './contexts/Registration/RegistrationProvider';
import DepositsProvider  from './contexts/Deposits/DepositsProvider';
import PermissionsProvider from './contexts/Permissions/PermissionsProvider';
import OnRamperIntentsProvider  from './contexts/OnRamperIntents/OnRamperIntentsProvider';
import LiquidityProvider from './contexts/Liquidity/LiquidityProvider';
import ProofGenSettingsProvider from "./contexts/ProofGenSettings/ProofGenSettingsProvider";

import "./App.css";
import "./styles.css";


const RedirectToSwap = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/swap');
  }, [navigate]);

  return null;
};

const App = () => {
  return (
    <Router>
      <Providers>
        <div className="app-container">
          <TopNav />

          <div className="app-content">
            <Routes>
              <Route path="/" element={<RedirectToSwap />} />
              <Route path="/swap" element={<Swap />} />
              <Route path="/deposit" element={<Deposit />} />
              <Route path="/register" element={<Registration />} />
              <Route path="/permissions" element={<Permissions />} />
              <Route element={<>Not found</>} />
            </Routes>
          </div>

          <div className="app-footer">
            <BottomNav />
          </div>
        </div>
      </Providers>
    </Router>
  );
};

interface ProvidersProps {
  children: ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <AccountProvider>
      <SmartContractsProvider>
        <BalancesProvider>
          <RampProvider>
            <RegistrationProvider>
              <DepositsProvider>
                <PermissionsProvider>
                  <LiquidityProvider>
                    <OnRamperIntentsProvider>
                      <ProofGenSettingsProvider>
                        { children }
                      </ProofGenSettingsProvider>
                    </OnRamperIntentsProvider>
                  </LiquidityProvider>
                </PermissionsProvider>
              </DepositsProvider>
            </RegistrationProvider>
          </RampProvider>
        </BalancesProvider>
      </SmartContractsProvider>
    </AccountProvider>
  )
}

export default App;
