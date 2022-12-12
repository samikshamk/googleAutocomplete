import React, { useState, useEffect } from "react";
import "./App.css";
import Map from "./Components/Map";
import { Box } from "@mui/material";
import SearchBox from "./Components/SearchBox";
import Heading from "./Components/Meta/Heading";

function App() {
  const [mapDetail, setMapDetail] = useState({
    isLoaded: false,
    placeName: "",
    longitude: 0,
    latitude: 0,
  });

  useEffect(() => {
    let autoComplete;
    let options = {
      // componentRestrictions: { country: ["my", "sg"] },
      // fields: ["address_components", "geometry", "icon", "name"],
      // types: ["establishment"],
    };

    autoComplete = new window.google.maps.places.Autocomplete(
      document.getElementById("autocomplete"),
      options
    );
    autoComplete.addListener("place_changed", async function () {
      const place = await autoComplete.getPlace();

      setMapDetail({
        isLoaded: true,
        placeName: place.name,
        longitude: place.geometry.location.lng(),
        latitude: place.geometry.location.lat(),
      });

      //More Details
      console.log({ place });
    });
  }, [mapDetail]);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 1,
        gridTemplateRows: "auto",
        gridTemplateAreas: `"header header header header"
  "main sidebar sidebar sidebar"`,
        bgcolor: "#bbdefb",
      }}
    >
      <Box sx={{ gridArea: "header", m: 2, p: 3 }}>
        <Heading content="Task on Google Place Autocomplete" design="h3" />
      </Box>
      <Box sx={{ gridArea: "main" }}>
        <SearchBox mapDetail={mapDetail} />
      </Box>
      <Box sx={{ gridArea: "sidebar" }}>
        <Map mapDetail={mapDetail} />
      </Box>
    </Box>
  );
}

export default App;
