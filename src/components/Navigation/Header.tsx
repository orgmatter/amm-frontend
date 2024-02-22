import React from "react";
import { AppBar, Toolbar, Button } from "@mui/material";
import { 
    Wallet as WalletIcon,
    GridView as GridViewIcon,
    Rotate90DegreesCcw as Rotate90DegreesCcwIcon,
    CleanHands as CleanHandsIcon,
    Close as CloseIcon
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
                                        <div className="toolbar-menu-cover-item">
                                            <a className="menu-link" href="/">
                                                <GridViewIcon className="menu-link-icon" /> &nbsp; Home
                                            </a>
                                        </div>
                                        <div className="toolbar-menu-cover-item">
                                            <a className="menu-link" href="/swap">
                                                <Rotate90DegreesCcwIcon className="menu-link-icon" /> &nbsp; Swap
                                            </a>
                                        </div>
                                        <div className="toolbar-menu-cover-item">
                                            <a className="menu-link" href="/liquidity">
                                                <CleanHandsIcon className="menu-link-icon" /> &nbsp; Liquidity
                                            </a>
                                        </div>
                                        <div className="toolbar-menu-cover-item">
                                            <a className="menu-link" href="/voting">
                                                <CleanHandsIcon className="menu-link-icon" /> &nbsp; Voting
                                            </a>
                                        </div>
                                        <div className="toolbar-menu-cover-item">
                                            <a className="menu-link" href="/">
                                                 More
                                            </a>
                                        </div>
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
                                                onClick={!isGemWalletInstalled? handleShowWalletList:() => false}
                                            >
                                                <WalletIcon className="wallet-icon" /> <div className="addr-cover"> {userWalletAddress}</div>
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
                                                <CloseIcon className="close-icon" />
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