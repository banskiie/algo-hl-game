import React, { useContext } from "react";
import { Box, Typography, Button } from "@mui/material";
import { AppContext } from "../../App";

const PROMPTS = {
  sad: "Hey atleast you tried!",
  ok: "That's okay! You got an average score",
  impressive: "You did a very good job!",
};

function GameOverBox() {
  const AppGrp = useContext(AppContext);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        zIndex: 100,
      }}
    >
      <Typography variant="label" sx={{ fontSize: 24, fontWeight: 100 }}>
        You scored:
      </Typography>
      <Typography
        variant="h1"
        sx={{
          font: "inherit",
          fontSize: 120,
          fontWeight: 800,
        }}
      >
        {AppGrp.finalScore}
      </Typography>
      <Typography variant="p" sx={{ fontWeight: 300 }}>
        {AppGrp.finalScore <= 2
          ? PROMPTS.sad
          : AppGrp.finalScore <= 8
          ? PROMPTS.ok
          : PROMPTS.impressive}
      </Typography>
      <Button
        sx={{
          font: "inherit",
          fontSize: 18,
          px: 4,
          py: 1,
          borderRadius: 2,
          my: 3,
          boxShadow: 0,
          border: "solid 1px orange",
          bgcolor: "transparent",
          color: "orange",
          ":hover": {
            boxShadow: 0,
            bgcolor: "orange",
            color: "#252525",
          },
        }}
        onClick={AppGrp.playing}
      >
        Play again
      </Button>
    </Box>
  );
}

export default GameOverBox;
