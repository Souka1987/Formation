import React from "react";

// MUI
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

// Les actions du STORE sont contenus dans les PROPS
const Cards = (props) => {
  const [spacing] = React.useState(2);
  return (
    <div className="card">
      {/* <Box
        // sx={{
        //   display: "flex",
        //   flexDirection: "row",
        //   flexWrap: "wrap",
        // }}
      > */}
        <Grid sx={{ flexGrow: 2 }}>
          <Grid item>
            <Grid
              container
              columns={{ xs: 4, sm: 8, md: 12 }}
              justifyContent="space-arround"
              spacing={{ xs: 2, md: 3 }}
            >
              {[0, 0.5, 1, 2, 3, 4, 8, 12].map((value) => (
                <Grid key={value} item xs={6}>
                  {props.data.length > 0 &&
                    props.data.map((img) => {
                      // console.log("test", img);
                      return (
                        <Card>
                          <CardMedia
                            component="img"
                            height="230"
                            image={img.url}
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              {img.id}
                            </Typography>
                            <Typography variant="body2">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Excepturi sit eum architecto nobis sapiente
                              qui, laudantium laborum at quas reiciendis
                              explicabo beatae ducimus, quasi, illo repudiandae
                              voluptates ipsa quam hic.
                            </Typography>
                          </CardContent>
                          <CardActions>
                            <Stack spacing={2}>
                              <Button variant="contained" size="small">
                                Go
                              </Button>
                              {/* <Button variant="contained" color="error" size="small">Supprimer</Button> */}
                            </Stack>
                          </CardActions>
                        </Card>
                      );
                    })}
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      {/* </Box> */}
    </div>
  );
};

export default Cards;
