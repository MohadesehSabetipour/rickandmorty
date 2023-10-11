import React from "react";

import { useQuery } from "@apollo/client";
import { GET_Characters_INFO } from "../../graphql/queries";
import { Avatar, Divider, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Loader from "../shared/Loader";

function Characters() {
  const { loading, data, errors } = useQuery(GET_Characters_INFO);

  if (loading) return <Loader />;

  if (errors) return <h3>Error...</h3>;

  const { characters } = data;
  
  return (
    <Grid
      container
      sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4 }}
    >
      {characters.results.map((character, index) => (
        <React.Fragment key={character.id}>
          <Grid item xs={12} padding={2}>
            <Link
              to={`/characters/${character.id}`}
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <Avatar src={character.image} sx={{ marginLeft: 2 }} />
              <Typography component="p" variant="p" color="text.secondary">
                {character.name}
              </Typography>
            </Link>
          </Grid>
          {index !== characters.length - 1 && (
            <Grid item xs={12}>
              <Divider variant="middle" />
            </Grid>
          )}
        </React.Fragment>
      ))}
    </Grid>
  );
}

export default Characters;
