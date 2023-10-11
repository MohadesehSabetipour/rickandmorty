import React from "react";

import { useQuery } from "@apollo/client";
import { Grid } from "@mui/material";
import { GET_Episodes_INFO } from "../../graphql/queries";
import CardEL from "../shared/CardEL";
import Loader from "../shared/Loader";

function Episodes() {
  const { loading, data, errors } = useQuery(GET_Episodes_INFO);

  if (loading) return <Loader />;

  if (errors) return <h4>Error...</h4>;

  return (
    <Grid container spacing={2}>
      {data.episodes.results.map((i) => (
        <Grid item xs={12} sm={6} md={4} key={i.id}>
          <CardEL {...i} slug={i.id}/>
        </Grid>
      ))}
    </Grid>
  );
}

export default Episodes;
