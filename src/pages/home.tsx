import React from "react";
import HomeComponent from "../components/Home";
import { useSelector } from "react-redux";

type HomePageProps = {
    handleShowWalletList: (e: React.MouseEvent<HTMLButtonElement>) => void
    userWalletAddress: string
    isWalletInstalled: boolean
}

export default function HomePage(props: HomePageProps) {

    const { 
        handleShowWalletList, 
        userWalletAddress, 
        isWalletInstalled 
    } = props;

    const accountInfoProps = useSelector((accountInfoState) => accountInfoState);

    return (
        <div className="home-page-cover-flex">
            <div className="home-page-cover-item">
                <HomeComponent 
                    handleShowWalletList={handleShowWalletList}
                    userWalletAddress={userWalletAddress}
                    isWalletInstalled={isWalletInstalled}
                    accountInfoProps={accountInfoProps}
                />
            </div>
        </div>
    )
}