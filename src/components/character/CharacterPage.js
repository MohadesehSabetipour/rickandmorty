import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import sanitizeHtml from "sanitize-html";
import {  GET_Character_INFO } from "../../graphql/queries";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import CardEL from "../shared/CardEL";
import Loader from "../shared/Loader";

function CharacterPage() {
  const { slug } = useParams();

  const { loading, data, errors } = useQuery( GET_Character_INFO, {
    variables: {characterId:slug} ,
  });
  if (loading) return <Loader />;

  if (errors) return <h3>Error...</h3>;
  console.log("a",data);
  const {
    character: { name, image, status, type, species,gender,episode },
  } = data;

  return (
    <Container maxWidth="lg">
      <Grid container mt={10}>
        <Grid
          item
          xs={12}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Avatar src={image} sx={{ width: 250, height: 250 }} />
          <Typography component="h3" variant="h5" fontWeight={700} mt={4}>
            {name}
          </Typography>
          <Typography component="p" variant="h5" color="text.secondary" mt={2}>
            {status}
          </Typography>
        </Grid>
        <Grid item xs={12} mt={5}>
          <div
            // dangerouslySetInnerHTML={{
            //   __html: sanitizeHtml(gender.html),
            // }}
          ></div>
        </Grid>
        <Grid item xs={12} mt={6}>
          <Typography component="h3" variant="h5" fontWeight={700}>
            قسمت ها {name}
          </Typography>
          <Grid container spacing={2} mt={2}>
            {episode.map((i) => (
              <Grid item xs={12} sm={6} md={4} key={i.id}>
                <CardEL
                  name={i.name}
                  slug={i.id}
                  {...i}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default CharacterPage;
