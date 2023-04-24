import React from "react";
import hlgLogo from "../../assets/logo/hlg.png";
import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";

function Logo() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        userSelect: "none",
        marginTop: "-100px",
        mx: 2,
      }}
    >
      <motion.img
        src={hlgLogo}
        alt="Higher Lower Logo"
        animate={{
          scale: [1, 1.01, 1],
          rotate: [2, -2, 2],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
      />
      <Typography
        variant="p"
        sx={{
          fontWeight: 800,
          fontSize: "24px",
          marginTop: "-100px",
        }}
      >
        Instagram Edition
      </Typography>
    </Box>
  );
}

export default Logo;
