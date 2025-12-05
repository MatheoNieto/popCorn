import { Box, Text } from "@shared/ui/components";
import React from "react";
import ListTopFilmsContainer from "../containers/ListTopFilms";

const HomeScreen = () => {
  return (
    <Box flex={1} backgroundColor="primary900">
      <ListTopFilmsContainer />
    </Box>
  );
};

export default HomeScreen;
