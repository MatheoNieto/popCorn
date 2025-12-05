import { Box, Card, Text } from "@shared/ui/components";
import React from "react";
import { Film } from "../entities/film";

type Props = {
  film: Film;
};

const CardTopRatedFilm: React.FC<Props> = ({ film }) => {
  return (
    <Card>
      <Box>
        <Text>film {film.original_title}</Text>
      </Box>
    </Card>
  );
};

export default CardTopRatedFilm;
