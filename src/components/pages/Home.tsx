import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { homedir } from "os";

export default function Home(): JSX.Element {
  return (
    <Box bg="tomato" w="100%" p={4} color="white">
      This is the Box
    </Box>
  );
}
