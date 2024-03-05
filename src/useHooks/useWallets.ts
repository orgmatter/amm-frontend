import React from "react";
import * as GEM_WALLET from "@gemwallet/api" ;
import sdk from "@crossmarkio/sdk";

type CrossmarkSdk = typeof sdk

type WalletProps = {
    GEM_WALLET?: typeof import ("@gemwallet/api")
    CROSSMARK_WALLET?: CrossmarkSdk
}
const CROSSMARK_WALLET: CrossmarkSdk = sdk;

export const useWallets = (): WalletProps => {
    return {
        GEM_WALLET,
        CROSSMARK_WALLET
    }
}