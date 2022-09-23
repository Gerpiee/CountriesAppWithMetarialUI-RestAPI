import React from "react";
import "../App.css";
import AfricaImage from "../Images/Africa.png";
import AmericaImage from "../Images/America.jpeg";
import AsiaImage from "../Images/Asia.jpeg";
import EuropeImage from "../Images/Europe.jpeg";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { display } from "@mui/system";
import { Grid, Typography } from "@mui/material";

const RegionPicker = ({ onRegionPickHandler }) => {
  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <Container fixed>
          <Box
            sx={{
              bgcolor: "#fff",
              minHeight: "90vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              margin: "10px 0",
            }}
          >
            <Grid container spacing={1} columns={12}>
              <Grid item xs={6} sm={6} md={6} lg={6}>
                <div
                  className="region-container"
                  onClick={() => onRegionPickHandler("africa")}
                >
                  <img src={AfricaImage} alt="#" />
                  <Typography variant="h4">Africa</Typography>
                </div>
              </Grid>

              <Grid item xs={6} sm={6} md={6} lg={6}>
                <div
                  className="region-container"
                  onClick={() => onRegionPickHandler("america")}
                >
                  <img src={AmericaImage} alt="#" />
                  <Typography variant="h4">America</Typography>
                </div>
              </Grid>

              <Grid item xs={6} sm={6} md={6} lg={6}>
                <div
                  className="region-container"
                  onClick={() => onRegionPickHandler("asia")}
                >
                  <img src={AsiaImage} alt="#" />
                  <Typography variant="h4">Asia</Typography>
                </div>
              </Grid>

              <Grid item xs={6} sm={6} md={6} lg={6}>
                <div
                  className="region-container"
                  onClick={() => onRegionPickHandler("europe")}
                >
                  <img src={EuropeImage} alt="#" />
                  <Typography variant="h4">Europe</Typography>
                </div>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </React.Fragment>
    </div>
  );
};

export default RegionPicker;
