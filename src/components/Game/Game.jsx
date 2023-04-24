import React, { useState, createContext, useContext } from "react";
import { AppContext } from "../../App";
import GameCard from "../GameCard/GameCard";
import GameUI from "../GameUI/GameUI";
import { Box } from "@mui/material";
import gameData from "../../db/gameData.json";
import { AnimatePresence, motion } from "framer-motion";

export const GameContext = createContext();

function Game() {
  const AppGrp = useContext(AppContext);
  const dataLength = Object.keys(gameData.items).length;

  const [item1, setItem1] = useState(
    gameData.items[Math.trunc(Math.random() * dataLength)]
  );
  const [item2, setItem2] = useState(
    gameData.items[Math.trunc(Math.random() * dataLength)]
  );
  const [show, setShow] = useState(true);
  const [revealValue, setRevealValue] = useState(false);

  const UIVariant = {
    hidden: { y: "-100vh" },
    visible: { y: 0, transition: { type: "spring", stiffness: 60 } },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: "-100vh" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 60, delay: 0.25 },
    },
  };

  const newValues = () => {
    setRevealValue((prevState) => !prevState);
    setTimeout(() => {
      setItem1(item2);
      setItem2(gameData.items[Math.floor(Math.random() * dataLength)]);
      setShow((prevState) => !prevState);
      setRevealValue((prevState) => !prevState);
      setTimeout(() => {
        setShow((prevState) => !prevState);
      }, 300);
    }, 2000);
  };

  const lost = () => {
    setRevealValue((prevState) => !prevState);
    setTimeout(() => {
      AppGrp.playing();
      setRevealValue((prevState) => !prevState);
    }, 2000);
  };

  const GameGrp = {
    newValues,
    lost,
    revealValue,
  };

  if (item1.id === item2.id) {
    setItem1(item2);
    setItem2(gameData.items[Math.floor(Math.random() * dataLength)]);
  }

  return (
    <GameContext.Provider value={GameGrp}>
      <Box
        sx={{
          width: "100vw",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <AnimatePresence>
          {show ? (
            <motion.div
              variants={cardVariant}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <GameCard
                item={item1}
                image={item1.image}
                name={item1.name}
                handle={item1.handle}
                value={item1.value}
              />
            </motion.div>
          ) : null}
        </AnimatePresence>
        <motion.div variants={UIVariant} initial="hidden" animate="visible">
          <GameUI item1={item1.value} item2={item2.value} />
        </motion.div>
        <AnimatePresence>
          {show ? (
            <motion.div
              variants={cardVariant}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <GameCard
                item={item2}
                image={item2.image}
                name={item2.name}
                handle={item2.handle}
                value={"?"}
                reveal={revealValue}
              />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </Box>
    </GameContext.Provider>
  );
}

export default React.memo(Game);
