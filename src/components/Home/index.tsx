import React from "react";
import { Button, IconButton } from "@mui/material";
import { 
    Refresh as RefreshIcon, 
    SwapCalls as SwapCallsIcon, 
    Wallet as WalletIcon,
    Logout as LogoutIcon,
    FolderCopy as FolderCopyIcon,
    Launch as LaunchIcon
} from "@mui/icons-material";


type HomeCompProps = {
    handleShowWalletList: (e: React.MouseEvent<HTMLButtonElement>) => void
    userWalletAddress: string
    isWalletInstalled: boolean
}

export default function HomeComponent(props: HomeCompProps) {

    const { 
        handleShowWalletList, 
        userWalletAddress, 
        isWalletInstalled 
    } = props;
    
    return (
        <div className="home-comp-cover-flex">
                <div className="home-comp-cover-item">
                    <div className="swap-intro-cover-flex">
                        <div className="swap-intro-cover-item">
                            <div className="swap-form-cover-flex">
                                <div className="swap-form-cover-item">
                                    <div className="section1-cover-flex">
                                        <div className="section1-cover-item">
                                            <div className="connect-btn-cover-flex">
                                                <div className="connect-btn-cover-item">
                                                    <Button
                                                        className="connect-btn"
                                                        variant="contained"
                                                        onClick={!isWalletInstalled? handleShowWalletList:() => false}
                                                    >
                                                        <WalletIcon className="wallet-icon" /> <div className="addr-cover"> {userWalletAddress}</div>
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="section1-cover-item">
                                            {
                                                isWalletInstalled &&
                                                <div className="connect-opt-cover-flex">
                                                    <div className="connect-opt-cover-item">
                                                        <IconButton>
                                                            <FolderCopyIcon className="copy-icon" />
                                                        </IconButton>
                                                    </div>
                                                    <div className="connect-opt-cover-item">
                                                        <IconButton>
                                                            <LaunchIcon className="copy-icon" />
                                                        </IconButton>
                                                    </div>
                                                    <div className="connect-opt-cover-item">
                                                        <IconButton onClick={() => window.location.assign("/")}>
                                                            <LogoutIcon className="copy-icon" />
                                                        </IconButton>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="swap-form-cover-item">
                                    <div className="section2-cover-flex">
                                        <div className="section2-cover-item">XRP</div>
                                        <div className="section2-cover-item">0</div>
                                    </div>
                                    <div className="swap-icon-cover">
                                        <SwapCallsIcon className="swap-icon" />
                                    </div>
                                </div>
                                <div className="swap-form-cover-item">
                                    <div className="section3-cover-flex">
                                        <div className="section3-cover-item">Select</div>
                                        <div className="section3-cover-item">0</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swap-intro-footer-cover-flex">
                        <div className="swap-intro-footer-cover-item">
                            <div className="footer-text-cover">
                                <h2 className="footer-title">Efficiency is Guaranteed</h2>
                                <p className="footer-subtitle">When you trade on the XRPL Automated Market</p>
                            </div>
                            <div className="footer-btn-cover-flex">
                                <div className="footer-btn-cover-item">
                                    <Button
                                        className="footer-btn"
                                        variant="contained"
                                        href="/swap"
                                    >
                                        Get started
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}