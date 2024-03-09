import React,{} from "react";

type ListTokensProps = {
    listToken: {
        name: string
        logo: string
        balance: string
    }
    indexKey: number
}

export default function ListTokensComponent(props: ListTokensProps) {

    const { listToken, indexKey } = props;
    
    return (
        <div className="tokens-balance-cover-item" key={indexKey}>
            <div className="tokens-balance-content-cover-flex">
                <div className="tokens-balance-content-cover-item">
                    <span className="token-logo">{listToken.logo}</span>
                    <span className="token-name">{listToken.name}</span>
                </div>
                <div className="tokens-balance-content-cover-item">
                    <span className="token-balance">{listToken.balance}</span>
                </div>
            </div>
        </div>
    )
}