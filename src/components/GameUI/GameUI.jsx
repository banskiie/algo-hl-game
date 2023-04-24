import React from "react";
import { Box } from "@mui/material";
import Logo from "./Logo";
import PeraWallet from "./PeraWallet";
import ScoreGame from "./ScoreGame";

function GameUI(props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Logo />
      <PeraWallet />
      <ScoreGame item1={props.item1} item2={props.item2} />
    </Box>
  );
}

export default React.memo(GameUI);
