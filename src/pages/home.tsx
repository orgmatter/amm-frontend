import React from "react";
import HomeComponent from "../components/Home";

type HomePageProps = {
    handleShowWalletList: (e: React.MouseEvent<HTMLButtonElement>) => void
    userWalletAddress: string
}

export default function HomePage(props: HomePageProps) {

    const { handleShowWalletList, userWalletAddress } = props;

    return (
        <div className="home-page-cover-flex">
            <div className="home-page-cover-item">
                <HomeComponent 
                    handleShowWalletList={handleShowWalletList}
                    userWalletAddress={userWalletAddress}
                />
            </div>
        </div>
    )
}