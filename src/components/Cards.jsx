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
      <Grid sx={{ flexGrow: 1 }} container spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={spacing}>
            {[0, 1, 2].map((value) => (

              <Grid key={value.id} item>
                <Box
                  justifyContent="center"
                  spacing={spacing}
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(1, 1fr)",
                  }}
                >
                  {props.data.length > 0 &&
                    props.data.map((img) => {
                      console.log("test", img);
                      return (
                        <Card sx={{ maxWidth: 340 }}>
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
                            <Stack spacing={2} direction="row">
                              <Button variant="contained" size="small">
                                Valider
                              </Button>
                              {/* <Button variant="contained" color="error" size="small">Supprimer</Button> */}
                            </Stack>
                          </CardActions>
                        </Card>
                      );
                    })}
                </Box>
              </Grid>
              
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
