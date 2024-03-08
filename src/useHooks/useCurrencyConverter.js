import React, {useState, useEffect} from "react";
import CurrencyAPI from "@everapi/currencyapi-js";
import {CURRENCY_API_KEY} from "../constants";

export const useCurrencyConverter = (value) => {

    const [xrpToUsdVal, setXrpToUsdVal] = useState("")

    useEffect(() => {

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
                const xrpToUsd = (value/exch.USD);
                console.log("xrpToUsd :", xrpToUsd)
                setXrpToUsdVal(xrpToUsd);
            })
            .catch(e => {
                console.log("currency converter error: ", e)
            })
        }, 30000)

    }, [xrpToUsdVal])

    return {
        xrpToUsdVal
    }
}