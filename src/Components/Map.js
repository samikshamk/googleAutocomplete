import React from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import ReactLoading from "react-loading";
import { Grid } from "@mui/material";

function Map({ mapDetail }) {
  return (
    <div>
      {mapDetail.isLoaded ? (
        <GoogleMap
          zoom={10}
          center={{
            lat: mapDetail.latitude,
            lng: mapDetail.longitude,
          }}
          mapContainerClassName="map-container"
        >
          <Marker
            position={{
              lat: mapDetail.latitude,
              lng: mapDetail.longitude,
            }}
          />
        </GoogleMap>
      ) : (
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className="map-container"
        >
          <ReactLoading type="spin" color="#262626" />
        </Grid>
      )}
    </div>
  );
}

export default Map;
