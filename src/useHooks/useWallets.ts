import React from "react";
import * as GEM_WALLET from "@gemwallet/api" ;
import sdk from "@crossmarkio/sdk";

type Sdk = typeof sdk

type WalletProps = {
    GEM_WALLET?: typeof import("/Users/user/Desktop/amm-frontend/node_modules/@gemwallet/api/index")
    CROSSMARK_WALLET?: Sdk
}
const CROSSMARK_WALLET: Sdk = sdk;

export const useWallets = (type = null): WalletProps => {

    if(type === "gemwallet") {
        return {GEM_WALLET};
    }
    if(type === "crossmark") {
        return {CROSSMARK_WALLET};
    }
    return {
        GEM_WALLET,
        CROSSMARK_WALLET
    }
}