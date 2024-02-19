import React from "react";
import { Button } from "@mui/material";
import { Refresh as RefreshIcon } from "@mui/icons-material";

export default function HomeComponent() {
    
    return (
        <div className="home-comp-cover-flex">
                <div className="home-comp-cover-item">
                    <div className="swap-intro-cover-flex">
                        <div className="swap-intro-cover-item">
                            <div className="swap-form-cover-flex">
                                <div className="swap-form-cover-item">
                                    <div className="section1-cover-flex">
                                        <div className="section1-cover-item">Swap</div>
                                        <div className="section1-cover-item">
                                            <RefreshIcon className="swap-icon" />
                                        </div>
                                    </div>
                                </div>
                                <div className="swap-form-cover-item">
                                    <div className="section2-cover-flex">
                                        <div className="section2-cover-item">XRP</div>
                                        <div className="section2-cover-item">0</div>
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