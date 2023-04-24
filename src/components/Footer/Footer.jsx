import React from "react";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";

function Footer() {
  return (
    <Typography
      variant="footer"
      sx={{
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        textAlign: "right",
        background: "transparent",
        p: 1,
        fontSize: "12px",
        color: "whitesmoke",
      }}
    >
      <motion.p
        initial={{ x: 100, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: { delay: 1, type: "spring", stiffness: 120 },
        }}
      >
        Developed by Ivan Sinohon
      </motion.p>
    </Typography>
  );
}

export default Footer;
