import React, {useState} from "react";
import SwapComponent from "../components/Swap";
import SwapCoinListComponent from "../components/Swap/SwapCoinListComponent";

export default function SwapPage() {

    const [isSwapComp, setIsSwapComp] = useState(true);
    const [isSwapCoinComp, setIsSwapCoinComp] = useState(false);

    const handleSwapCompClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        setIsSwapComp(prev => !prev);
        setIsSwapCoinComp(prev => !prev);
    }

    const handleSwapCoinCompClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        setIsSwapCoinComp(prev => !prev);
        setIsSwapComp(prev => !prev);
    }

    return (
        <div className="swap-page-cover-flex">
            <div className="swap-page-cover-item">
                {
                    isSwapComp && 
                    <SwapComponent
                        handleSwapCompClick={handleSwapCompClick}
                    />
                }
                {
                    isSwapCoinComp && 
                    <SwapCoinListComponent
                        handleSwapCoinCompClick={handleSwapCoinCompClick}
                    />
                }
            </div>
        </div>
    )
}