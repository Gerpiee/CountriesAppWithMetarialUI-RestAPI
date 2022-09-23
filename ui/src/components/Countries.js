import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import LinearProgress from "@mui/material/LinearProgress";
import { Container } from "@mui/system";
import { Button, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const Countries = ({ clearSelectedRegionHandler, selectedRegion }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: `https://restcountries.com/v3.1/region/${selectedRegion}`,
    })
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, [selectedRegion]);

  return (
    <Container fixed>
      {loading ? (
        <div className="progress">
          <LinearProgress color="secondary" />
        </div>
      ) : (
        <Grid container spacing={3} columns={12} sx={{ margin: "20px 0" }}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Button
              color="primary"
              variant="contained"
              onClick={() => clearSelectedRegionHandler()}
            >
              Pick Another Region
            </Button>
          </Grid>
          {data.map((country) => (
            <Grid item xs={12} sm={12} md={6} lg={6} key={country.name.common}>
              <Card sx={{ maxWidth: 500 }}>
                <CardMedia
                  component="img"
                  image={country.flags.png}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {country.name.common}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {`Population:${country.population}`}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {`Region:${country.region}`}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Countries;
