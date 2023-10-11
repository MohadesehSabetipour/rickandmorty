import React from "react";
import { Container, Grid, Typography } from "@mui/material";
// import Authors from "../author/Authors";
// import Blogs from "../blog/Blogs";
import Characters from "../character/Character";
import Episodes from "../episode/Episodes"

function HomePage() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} padding={3}>
        <Grid item xs={12} md={3} mt={4}>
          <Typography component="h3" variant="h5" mb={3} fontWeight={700}>
           شخصیت ها
          </Typography>
          <Characters />
        </Grid>
        <Grid item xs={12} md={9} mt={4}>
          {" "}
          <Typography component="h3" variant="h5" mb={3} fontWeight={700}>
            داستان ها
          </Typography>
          <Episodes />
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomePage;
