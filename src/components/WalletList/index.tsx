import React from "react";
import { Button } from "@mui/material";

type WalletListCompProps = {
    handleGemWalletClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function WalletListComponent(props: WalletListCompProps) {

    const { handleGemWalletClick } = props;

    return (
        <div className="wallet-list-cover-flex">
            <div className="wallet-list-cover-item">
                <div className="list-cover-flex">
                    <div className="list-cover-item">
                        <Button
                            className="wallet-btn"
                            variant="contained"
                            onClick={handleGemWalletClick}
                        >
                            GemWallet
                        </Button>
                    </div>
                    <div className="list-cover-item"></div>
                </div>
            </div>
        </div>
    )
}