import React, { useState } from "react";
import { 
    Button, 
    IconButton,
    TextField
} from "@mui/material";
import { 
    Replay as ReplayIcon, 
    Tune as TuneIcon, 
    ExpandMore as ExpandMoreIcon,
    SwapCalls as SwapCallsIcon,
    QuestionMark as QuestionMarkIcon
} from "@mui/icons-material";
import { Images as IMAGES } from "../../images";

type SwapCompProps = {
    handleSwapCompClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export default function SwapComponent(props: SwapCompProps) {

    const {
        handleSwapCompClick
    } = props;

    const cryptoAmtObj = {
        baseCryptoAmt: "0",
        quoteCryptoAmt: "0"
    }

    const [cryptoAmtVal, setCryptoAmtVal] = useState(cryptoAmtObj);

    const handleCryptoAmtChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        e.preventDefault();

        setCryptoAmtVal(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <div className="swap-comp-cover-flex">
            <div className="swap-comp-cover-item">
                <div className="swap-intro-cover-flex">
                    <div className="swap-intro-cover-item">
                        <div className="swap-form-cover-flex">
                            <div className="swap-form-cover-item">
                                <div className="section1-cover-flex">
                                    <div className="section1-cover-item">
                                        <div className="title-cover">
                                            <h2 className="swap-title">Swap</h2>
                                        </div>
                                    </div>
                                    <div className="section1-cover-item">
                                        <div className="connect-opt-cover-flex">
                                            <div className="connect-opt-cover-item">
                                                <IconButton className="icon-btn">
                                                    <ReplayIcon className="btn-icon" />
                                                </IconButton>
                                            </div>
                                            <div className="connect-opt-cover-item">
                                                <IconButton className="icon-btn">
                                                    <TuneIcon className="btn-icon" />
                                                </IconButton>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swap-form-cover-item">
                                <div className="section2-cover-flex">
                                    <div className="section2-cover-item">
                                        <div className="currency-logo-cover-flex">
                                            <div className="currency-logo-cover-item">
                                                <Button 
                                                    className="select-curr-btn"
                                                    onClick={handleSwapCompClick}
                                                >
                                                    <div className="btn-elems">
                                                        <img className="logo" src={IMAGES.currencies.xrp} alt="xrp logo" />
                                                        <span className="curr-name-span">XRP</span>
                                                        <ExpandMoreIcon className="expand-more-icon" />
                                                    </div>
                                                </Button>
                                                <p className="address-bal-p">Balance:</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="section2-cover-item">
                                        <div className="crypto-amt-cover">
                                            <TextField 
                                                className="crypto-amt-input"
                                                type="text"
                                                name="baseCryptoAmt"
                                                value={cryptoAmtVal.baseCryptoAmt}
                                                onChange={handleCryptoAmtChange}
                                            />
                                        </div>
                                        {/* <p className="crypto-value-p">{xrpBal.value? parseFloat(xrpBal.value).toFixed(2): "0.00"}</p>
                                        <p className="dollar-value-p">{`~$${parseFloat(xrpToUsdValue).toFixed(2)}`}</p> */}
                                    </div>
                                </div>
                                <div className="swap-icon-cover">
                                    <SwapCallsIcon className="swap-icon" />
                                </div>
                            </div>
                            <div className="swap-form-cover-item">
                                <div className="section3-cover-flex">
                                    <div className="section3-cover-item">
                                        <div className="currency-logo-cover-flex">
                                            <div className="currency-logo-cover-item">
                                                <Button 
                                                    className="select-curr-btn"
                                                    onClick={handleSwapCompClick}
                                                >
                                                    <div className="btn-elems">
                                                        {/* <img className="logo" src={IMAGES.currencies.xrp} alt="xrp logo" /> */}
                                                        <QuestionMarkIcon className="ques-icon" />
                                                        <span className="curr-name-span">Select</span>
                                                        <ExpandMoreIcon className="expand-more-icon" />
                                                    </div>
                                                </Button>
                                                <p className="address-bal-p">Balance:-</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="section3-cover-item">
                                        <div className="crypto-amt-cover">
                                            <TextField 
                                                className="crypto-amt-input"
                                                type="text"
                                                name="quoteCryptoAmt"
                                                value={cryptoAmtVal.quoteCryptoAmt}
                                                onChange={handleCryptoAmtChange}
                                            />
                                        </div>
                                        {/* { accountInfoState.data.reserve !== undefined ? `${accountInfoState.data.reserve.totalReserve} ${xrpBal.currency}`: "0" } */}
                                    </div>
                                </div>
                            </div>
                            <div className="swap-form-cover-item">
                                <div className="section4-cover-flex">
                                    <div className="section4-cover-item">
                                        <div className="swap-btn-cover-flex">
                                            <div className="swap-btn-cover-item">
                                            <Button
                                                className="swap-btn"
                                                variant="contained"
                                                disabled
                                            >
                                                Choose asset
                                            </Button>
                                            </div>
                                        </div>
                                        <div className="footer-text-cover-flex">
                                            <div className="footer-text-cover-item">
                                                <p className="footer-text">
                                                    <a className="footer-text-link" href="/liquidity">Provide liquidity</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}