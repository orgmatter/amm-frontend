import React, {useState} from 'react';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Routes as ROUTES } from './Routes';
import HeaderComponent from './components/Navigation/Header';
import FooterComponent from './components/Navigation/Footer';
import WalletList from './components/WalletList';
import { useWallets } from './useHooks/useWallets';
import "../src/sass/app.scss";
import { GetAddressResponse, IsInstalledResponse } from '@gemwallet/api';

function App() {

  const [isWalletListShow, setIsWalletListShow] = useState(false);
  const [isWalletInstalled, setIsWalletInstalled] = useState(false);
  const [userWalletAddress, setUserWalletAddress] = useState<string|undefined>("Connect wallet");

  const { GEM_WALLET, CROSSMARK_WALLET } = useWallets();

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

    GEM_WALLET?.isInstalled().then((installedResp: IsInstalledResponse) => {
        if(installedResp.result.isInstalled) {

          // get wallet address
          GEM_WALLET?.getAddress().then((addrResp: GetAddressResponse) => {

            // set the user wallet address here
            setUserWalletAddress(addrResp.result?.address);
            setIsWalletInstalled(true);
          })
        }
        setIsWalletListShow(false);
    })
  }

  // handle connect Crossmark here
  const handleCrossmarkWalletClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    let signIn = await CROSSMARK_WALLET?.methods.signInAndWait();

    if(signIn?.response.data.address !== "") {
      setUserWalletAddress(signIn?.response.data.address);
      setIsWalletInstalled(true);
      setIsWalletListShow(false);
    }
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
            isWalletInstalled={isWalletInstalled}
          />
        </div>
        <div className="app-body">
          <div className="body-offset-div"></div>
          {
            isWalletListShow ? 
            <WalletList 
              handleGemWalletClick={handleGemWalletClick}
              handleCrossmarkWalletClick={handleCrossmarkWalletClick}
            />:
            <Router>
              <Routes>
                {
                  ROUTES.map((route, index) => {
                    if(route.name === "Home") {
                      return <Route 
                                path={route.url} 
                                element={
                                <route.component 
                                  handleShowWalletList={handleShowWalletList} 
                                  userWalletAddress={userWalletAddress}
                                  isWalletInstalled={isWalletInstalled}
                                />} 
                              />
                    }
                    <Route path={route.url} element={<route.component />} />
                  })
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
