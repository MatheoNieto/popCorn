import { Search } from "@shared/components";
import { Box } from "@shared/ui/components";
import React from "react";

const ListTopFilmsContainer = () => {
  const [valueSearch, setValueSearch] = React.useState("");

  return (
    <Box>
      <Search value={valueSearch} onChange={setValueSearch} />
    </Box>
  );
};

export default ListTopFilmsContainer;
