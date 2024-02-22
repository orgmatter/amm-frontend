import React from "react";
import { Button } from "@mui/material";

type WalletListCompProps = {
    handleGemWalletClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    // handleCrossmarkWalletClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function WalletListComponent(props: WalletListCompProps) {

    const { handleGemWalletClick,  } = props;
    
    return (
        <div className="wallet-list-cover-flex">
            <div className="wallet-list-cover-item">
                <div className="wallet-header-cover-flex">
                    <div className="wallet-header-cover-item">
                        <h2 className="header-title">Connect wallet</h2>
                    </div>
                </div>
                <div className="list-cover-flex">
                    <div className="list-cover-item">
                        <Button
                            className="wallet-btn"
                            variant="contained"
                            onClick={handleGemWalletClick}
                        >
                            Gem Wallet
                        </Button>
                    </div>
                    <div className="list-cover-item">
                        <Button
                            className="wallet-btn"
                            variant="contained"
                            // onClick={handleCrossmarkWalletClick}
                        >
                            Crossmark
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}