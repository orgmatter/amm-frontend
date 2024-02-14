import React, {useState} from 'react';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Routes as ROUTES } from './Routes';
import HeaderComponent from './components/Navigation/Header';
import FooterComponent from './components/Navigation/Footer';
import WalletList from './components/WalletList';
import { isConnected, isInstalled, getAddress }from "@gemwallet/api";
import "../src/sass/app.scss";

function App() {

  const [isWalletListShow, setIsWalletListShow] = useState(false);
  const [isGemWalletInstalled, setIsGemWalletInstalled] = useState(false);
  const [userWalletAddress, setUserWalletAddress] = useState<string|undefined>("Connect wallet");

  // handle connect wallet btn here
  const handleShowWalletList = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsWalletListShow(true);
  };
  const handleHideWalletList = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsWalletListShow(false);
  };

  // handle connect Gemwallet here
  const handleGemWalletClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    isInstalled().then((installedResp) => {
        if(installedResp.result.isInstalled) {

          // get wallet address
          getAddress().then((addrResp) => {

            // set the user wallet address here
            setUserWalletAddress(addrResp.result?.address);
          })
        }
        setIsGemWalletInstalled(true);
        setIsWalletListShow(false);
    })
  }
  
  return (
    <div className="app-cover-flex">
      <div className="app-cover-item">
        <div className="app-header-cover">
          <HeaderComponent
            isWalletListShow={isWalletListShow}
            handleShowWalletList={handleShowWalletList}
            handleHideWalletList={handleHideWalletList}
            userWalletAddress={userWalletAddress}
            isGemWalletInstalled={isGemWalletInstalled}
          />
        </div>
        <div className="app-body" style={{paddingTop: "100px"}}>
          {
            isWalletListShow ? 
            <WalletList handleGemWalletClick={handleGemWalletClick} />:
            <Router>
              <Routes>
                {
                  ROUTES.map((route, index) => <Route path={route.url} element={<route.component />} />)
                }
              </Routes>
            </Router>
          }
        </div>
        <div className="app-footer-cover">
          <FooterComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
