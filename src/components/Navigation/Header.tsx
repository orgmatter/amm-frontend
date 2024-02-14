import React from "react";
import { AppBar, Toolbar, Button } from "@mui/material";
import { 
    Wallet as WalletIcon,
    GridView as GridViewIcon,
    Rotate90DegreesCcw as Rotate90DegreesCcwIcon,
    CleanHands as CleanHandsIcon,
} from "@mui/icons-material";

type HeaderCompProps = {
    isWalletListShow: boolean
    handleShowWalletList: (e: React.MouseEvent<HTMLButtonElement>) => void
    handleHideWalletList: (e: React.MouseEvent<HTMLButtonElement>) => void
    userWalletAddress: string|undefined
    isGemWalletInstalled: boolean
}

export default function HeaderComponent(props: HeaderCompProps) {

    const { 
        isWalletListShow, 
        handleHideWalletList, 
        handleShowWalletList,
        userWalletAddress,
        isGemWalletInstalled
    } = props;
    
    return (
        <div className="header-comp-cover-flex">
            <div className="header-comp-cover-item">
                <AppBar 
                    className="appbar-cover"
                    elevation={0}
                >
                    <Toolbar className="toolbar-cover">
                        <div className="toolbar-cover-flex">
                            <div className="toolbar-cover-item">
                                <div className="app-logo-cover-flex">
                                    <div className="app-logo-cover-item">AMM XRP</div>
                                </div>
                            </div>
                            <div className="toolbar-cover-item">
                                {
                                    !isWalletListShow && 
                                    <div className="toolbar-menu-cover-flex">
                                        <div className="toolbar-menu-cover-item"></div>
                                        <div className="toolbar-menu-cover-item"></div>
                                        <div className="toolbar-menu-cover-item"></div>
                                        <div className="toolbar-menu-cover-item"></div>
                                    </div>
                                }
                                {
                                    isWalletListShow && 
                                    <div className="toolbar-no-menu">

                                    </div>
                                }
                            </div>
                            <div className="toolbar-cover-item">
                                <div className="connect-btn-cover-flex">
                                    {
                                        !isWalletListShow && 
                                        <div className="connect-btn-cover-item">
                                            <Button
                                                className="connect-btn"
                                                variant="contained"
                                                onClick={handleShowWalletList}
                                            >
                                                <WalletIcon className="wallet-icon" /> {userWalletAddress}
                                            </Button>
                                        </div>
                                    }

                                    {
                                        isWalletListShow &&
                                        <div className="close-btn-cover-item">
                                            <Button
                                                className="connect-btn"
                                                variant="contained"
                                                onClick={handleHideWalletList}
                                            >
                                                x
                                            </Button>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        </div>
    )
}