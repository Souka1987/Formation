import React from "react";

// MUI
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

// Les actions du STORE sont contenus dans les PROPS
const Cards = (img) => {
  return (
    <div className="card">
      {/* Array à 1 pour éviter de répéter le même tableau*/}
      {[0].map((value) => (
        // J'ai demandé l'ID unique de chaque images
        <Grid key={value.id}>
          <Box
            sx={{ width: 1 }}
            display="grid"
            // Colonne 4
            gridTemplateColumns="repeat(3, 1fr)"
            gap={4}
          >
            {img.data.length > 0 &&
              img.data.map((img) => {
                // console.log("test", img);
                return (
                  <Card>
                    <CardMedia component="img" height="230" image={img.url} />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {img.id}
                      </Typography>
                      <Typography variant="body2">
                        <p>{img.content}</p>
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Stack spacing={2}></Stack>
                    </CardActions>
                  </Card>
                );
              })}
          </Box>
        </Grid>
      ))}
    </div>
  );
};

export default Cards;
