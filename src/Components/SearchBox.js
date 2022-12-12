import React from "react";
import { Box, TextField, FormControl, Typography } from "@mui/material";

function SearchBox({ mapDetail }) {
  return (
    <Box
      sx={{
        p: 2,
        m: 2,
        bgcolor: "#fff",
        borderRadius: "md",
        boxShadow: "sm",
      }}
    >
      <FormControl fullWidth sx={{ m: 1 }}>
        <TextField id="autocomplete" label="Search" variant="outlined" />
      </FormControl>
      <Box sx={{ m: 1, p: 1 }}>
        <Typography>Place Name: {mapDetail.placeName}</Typography>
        <Typography>Longitude: {mapDetail.longitude}</Typography>
        <Typography>Latitude: {mapDetail.latitude}</Typography>
      </Box>
    </Box>
  );
}

export default SearchBox;
