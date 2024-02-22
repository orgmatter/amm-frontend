import React from "react";
import HomePage from "../pages/home";
import LiquidityPage from "../pages/liquidity";
import SwapPage from "../pages/swap";
import VotingPage from "../pages/voting";

export const Routes = [
    {
        name: "Home",
        url: "/",
        component: (props) => <HomePage {...props} />
    },
    {
        name: "Liquidity",
        url: "/liquidity",
        component: () => <LiquidityPage />
    },
    {
        name: "Swap",
        url: "/swap",
        component: () => <SwapPage />
    },
    {
        name: "Voting",
        url: "/voting",
        component: () => <VotingPage />
    }
]