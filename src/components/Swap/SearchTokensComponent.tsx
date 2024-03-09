import React,{} from "react";

type SearchTokensProps = {
    searchToken: {
        name: string
        logo: string
    }
    indexKey: number
}

export default function SearchTokensComponent(props: SearchTokensProps) {

    const { searchToken, indexKey } = props;
    
    return (
        <div className="tokens-cover-item" key={indexKey}>
            <span className="token-logo">{searchToken.logo}</span>
            <span className="token-name">{searchToken.name}</span>
        </div>
    )
}