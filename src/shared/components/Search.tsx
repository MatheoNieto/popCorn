import { palette } from "@shared/theme";
import { Box, Icon, Input } from "@shared/ui/components";
import React from "react";

type Props = {
  value: string;
  onChange: (newValue: string) => void;
};
const SearchComponent: React.FC<Props> = ({ value, onChange }) => {
  return (
    <Box mx="m">
      <Input
        value={value}
        placeholder="Search"
        onChangeText={(newValueSearch) => onChange(newValueSearch)}
        rightIcon={
          <Icon
            type={"FontAwesome"}
            name={"search"}
            color={palette.primary[100]}
            size={16}
          />
        }
      />
    </Box>
  );
};

export default SearchComponent;
