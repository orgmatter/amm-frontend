import React, { useEffect, useState } from "react";
import { Button, IconButton } from "@mui/material";
import { 
    Refresh as RefreshIcon, 
    SwapCalls as SwapCallsIcon, 
    Wallet as WalletIcon,
    Logout as LogoutIcon,
    FolderCopy as FolderCopyIcon,
    Launch as LaunchIcon
} from "@mui/icons-material";
import { accountAction } from "../../store/actions/accountAction";
import { connect } from "react-redux";
import { useCurrencyConverter } from "../../useHooks/useCurrencyConverter";
import { Images as IMAGES } from "../../images";


type HomeCompProps = {
    handleShowWalletList: (e: React.MouseEvent<HTMLButtonElement>) => void
    userWalletAddress: string
    isWalletInstalled: boolean
    accountInfoProps: any
    accountDispatchAction: (address: string) => void
}

function HomeComponent(props: HomeCompProps) {

    const { 
        handleShowWalletList, 
        userWalletAddress, 
        isWalletInstalled,
        accountInfoProps,
        accountDispatchAction
    } = props;

    const [xrpToUsdValue, setXrpToUsdValue] = useState("0.00");

    const { accountInfoState } = accountInfoProps;

    const xrpBal = accountInfoState.data.hasOwnProperty("balances") && accountInfoState.data.balances.find((balance:{currency: string, value: string}) => balance.currency === "XRP");

    useEffect(() => {

        if((typeof userWalletAddress === "string") && (userWalletAddress !== "Connect wallet")) {
            accountDispatchAction(userWalletAddress);
        }
    
        if((typeof xrpBal.value === "string") && (xrpBal.value !== "")) {

            fetch("https://api.xrpl.to/api/tokens?limit=0", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(resp => resp.json())
            .then(res => {
                console.log("res :", res)
                const { exch } = res;
                const xrpToUsd = (xrpBal.value/exch.USD);
                console.log("xrpToUsd :", xrpToUsd)
                setXrpToUsdValue(xrpToUsd.toString());
            })
            .catch(e => {
                console.log("currency converter error: ", e)
            })

            setInterval(() => {

                fetch("https://api.xrpl.to/api/tokens?limit=0", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                .then(resp => resp.json())
                .then(res => {
                    console.log("res :", res)
                    const { exch } = res;
                    const xrpToUsd = (xrpBal.value/exch.USD);
                    console.log("xrpToUsd :", xrpToUsd)
                    setXrpToUsdValue(xrpToUsd.toString());
                })
                .catch(e => {
                    console.log("currency converter error: ", e)
                })
            }, 30000)
        }

    }, [userWalletAddress, xrpBal.value])
    
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
                                        <div className="section2-cover-item">
                                            <div className="currency-logo-cover-flex">
                                                <div className="currency-logo-cover-item">
                                                    <img className="logo" src={IMAGES.currencies.xrp} alt="xrp logo" />
                                                </div>
                                                <div className="currency-logo-cover-item">
                                                    {xrpBal.currency? xrpBal.currency: "XRP"}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="section2-cover-item">
                                            <p className="crypto-value-p">{xrpBal.value? parseFloat(xrpBal.value).toFixed(2): "0.00"}</p>
                                            <p className="dollar-value-p">{`~$${parseFloat(xrpToUsdValue).toFixed(2)}`}</p>
                                        </div>
                                    </div>
                                    <div className="swap-icon-cover">
                                        <SwapCallsIcon className="swap-icon" />
                                    </div>
                                </div>
                                <div className="swap-form-cover-item">
                                    <div className="section3-cover-flex">
                                        <div className="section3-cover-item">Reserve</div>
                                        <div className="section3-cover-item">
                                            { accountInfoState.data.reserve !== undefined ? `${accountInfoState.data.reserve.totalReserve} ${xrpBal.currency}`: "0" }
                                        </div>
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

const mapDispatchToProps = (dispatch:any) => ({
    accountDispatchAction: (address:any) => dispatch(accountAction(address))
})

export default connect(null, mapDispatchToProps)(HomeComponent);