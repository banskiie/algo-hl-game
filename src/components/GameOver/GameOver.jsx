import React, { useContext } from "react";
import { AppContext } from "../../App";
import { Box } from "@mui/material";
import impressive from "../../assets/gif/impressive.gif";
import { motion } from "framer-motion";
import ok from "../../assets/gif/ok.gif";
import sad from "../../assets/gif/sad.gif";

import GameOverBox from "./GameOverBox";

function GameOver() {
  const AppGrp = useContext(AppContext);
  return (
    <motion.div
      initial={{ y: "-100vh" }}
      animate={{ y: 0 }}
      exit={{ y: "-100vh" }}
      style={{ height: "100vh" }}
    >
      <Box
        sx={{
          width: "100vw",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          img: {
            position: "absolute",
            width: "100vw",
            height: "100%",
            objectFit: "cover",
            zIndex: 1,
            filter: "brightness(50%)",
          },
        }}
      >
        <img
          src={
            AppGrp.finalScore <= 2
              ? sad
              : AppGrp.finalScore <= 8
              ? ok
              : impressive
          }
          alt="img"
        />
        <GameOverBox />
      </Box>
    </motion.div>
  );
}

export default React.memo(GameOver);
