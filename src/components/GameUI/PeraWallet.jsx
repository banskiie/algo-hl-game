import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { PeraWalletConnect } from "@perawallet/connect";

const peraWallet = new PeraWalletConnect();

function PeraWallet() {
  const [accountAddress, setAccountAddress] = useState(null);
  const isConnectedToPeraWallet = !!accountAddress;

  useEffect(() => {
    // Reconnect to the session when the component is mounted
    peraWallet
      .reconnectSession()
      .then((accounts) => {
        peraWallet.connector.on("disconnect", handleDisconnectWalletClick);

        if (accounts.length) {
          setAccountAddress(accounts[0]);
        }
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <Button
      variant="contained"
      onClick={
        isConnectedToPeraWallet
          ? handleDisconnectWalletClick
          : handleConnectWalletClick
      }
      sx={{
        marginY: 2,
        backgroundColor: "transparent",
        boxShadow: 0,
        border: "solid 1px yellow",
        color: "yellow",
        font: "inherit",
        fontWeight: 400,
        fill: "yellow",
        ":hover": {
          bgcolor: "yellow",
          color: "#252525",
          border: "solid 1px yellow",
        },
      }}
    >
      {isConnectedToPeraWallet ? "Disconnect" : "Connect to Pera Wallet"}
    </Button>
  );

  function handleConnectWalletClick() {
    peraWallet
      .connect()
      .then((newAccounts) => {
        peraWallet.connector.on("disconnect", handleDisconnectWalletClick);

        setAccountAddress(newAccounts[0]);
      })
      .catch((error) => {
        if (error?.data?.type !== "CONNECT_MODAL_CLOSED") {
          console.log(error);
        }
      });
  }

  function handleDisconnectWalletClick() {
    peraWallet.disconnect();

    setAccountAddress(null);
  }
}

export default PeraWallet;
