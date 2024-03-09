import React,{useState} from "react";
import { 
    IconButton,
    TextField,
    InputAdornment
} from "@mui/material";
import {
    ArrowBackIos as ArrowBackIosIcon,
    Search as SearchIcon
} from "@mui/icons-material";
import SearchTokensComponent from "./SearchTokensComponent";
import ListTokensComponent from "./ListTokensComponent";
import { demoTokens as DEMO_TOKENS } from "./demo_tokens";

type SwapCoinCompProps = {
    handleSwapCoinCompClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}


export default function SwapCoinListComponent(props: SwapCoinCompProps) {

    const {
        handleSwapCoinCompClick
    } = props;

    const searchTokenObj = {
        searchToken: ""
    }

    const { searchTokens, listTokens } = DEMO_TOKENS

    const [searchTokenVal, setSearchTokenVal] = useState(searchTokenObj);

    const handleSearchTokenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        setSearchTokenVal(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <div className="swap-coin-list-comp-cover-flex">
            <div className="swap-coin-list-comp-cover-item">
                <div className="swap-intro-cover-flex">
                    <div className="swap-intro-cover-item">
                        <div className="swap-form-cover-flex">
                            <div className="swap-form-cover-item">
                                <div className="section1-cover-flex">
                                    <div className="section1-cover-item">
                                        <div className="back-icon-cover">
                                            <IconButton 
                                                className="icon-btn"
                                                onClick={handleSwapCoinCompClick}
                                            >
                                                <ArrowBackIosIcon className="arrow-back-icon" />
                                            </IconButton>
                                        </div>
                                    </div>
                                    <div className="section1-cover-item">
                                        <div className="connect-opt-cover-flex">
                                            <div className="connect-opt-cover-item">
                                                <h2 className="select-text">Select token</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swap-form-cover-item">
                                <div className="section2-cover-flex">
                                    <div className="section2-cover-item">
                                        <div className="search-token-input-cover">
                                            <TextField 
                                                className="search-token-input"
                                                type="text"
                                                name="searchToken"
                                                value={searchTokenVal.searchToken}
                                                onChange={handleSearchTokenChange}
                                                fullWidth
                                                placeholder="Search token"
                                                InputProps={{
                                                    startAdornment: 
                                                    <InputAdornment className="input-adornment" position="start">
                                                        <SearchIcon className="search-icon" />
                                                    </InputAdornment>
                                                }}
                                            />
                                        </div>
                                        <div className="search-tokens-cover-flex">
                                            <div className="search-tokens-cover-item">
                                                <div className="tokens-cover-flex">
                                                    {
                                                        searchTokens.map((searchToken, index) => {
                                                            return (
                                                                <SearchTokensComponent
                                                                    searchToken={searchToken}
                                                                    indexKey={index}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swap-form-cover-item">
                                <div className="section3-cover-flex">
                                    <div className="section3-cover-item">
                                        <div className="list-tokens-cover-flex">
                                            <div className="list-tokens-cover-item">
                                                <div className="tokens-balance-cover-flex">
                                                    {
                                                        listTokens.map((listToken, index) => {
                                                            return (
                                                                <ListTokensComponent
                                                                    listToken={listToken}
                                                                    indexKey={index}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swap-form-cover-item">
                                <div className="section4-cover-flex">
                                    <div className="section4-cover-item">
                                        <div className="footer-text-cover">
                                            <p className="footer-text">Add token</p>
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