import React, { useEffect, useState } from "react";
import truncateEthAddress from 'truncate-eth-address'
import eth from '../imgs/btc.svg'
const ConnectWallet = () => {
    const [currentAccount, setCurrentAccount] = useState("");

    const checkIfWalletIsConnected = async () => {
        try {
            const { ethereum } = window;
            if (!ethereum) {
                console.log("Make sure you have metamask!");
                return;
            } else {
                console.log("We have the ethereum object", ethereum);
            }
            const accounts = await ethereum.request({ method: "eth_accounts" });
            if (accounts.length !== 0) {
                const account = accounts[0];
                console.log("Found an authorized account:", account);
                setCurrentAccount(account);
            } else {
                console.log("No authorized account found")
            }
        } catch (error) {
            console.log(error);
        }
    }
    /**
    * Implement your connectWallet method here
    */
    const handleConnectWallet = async () => {
        try {
            const { ethereum } = window;
            if (!ethereum) {
                alert("Get MetaMask!");
                return;
            }
            const accounts = await ethereum.request({ method: "eth_requestAccounts" });
            console.log("Connected", accounts[0]);
            setCurrentAccount(accounts[0]);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        checkIfWalletIsConnected();
    }, [])
    return (
        <>

            {currentAccount ? <h2 className="inline-flex items-center justify-center w-full h-12 px-6 font-medium text-purple-700">{truncateEthAddress(currentAccount)}</h2> : <button to="/manufacturer"
                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-700 hover:bg-purple-500 focus:shadow-outline focus:outline-none"
                aria-label="Connect Wallet"
                title="Connect Wallet"
                type="button"
                onClick={handleConnectWallet}
            >
                <img src={eth} alt="eth" /><p className="mx-2">Connect Wallet</p>
            </button>}
        </>
    )
}
export default ConnectWallet