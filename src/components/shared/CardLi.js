import React from "react";
import {
  Avatar,
  Grid,
  Container,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";


function CardLi({ name }) {
  
  return (
    <Container>
      <Grid item>
      <Card item sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4 ,bgcolor:"#f3f3f3"}}>
      {name && (
        <CardHeader
          title={
            <Typography component="p" variant="h6" color="text.secondary" fontWeight={600}>
              {name}
            </Typography>
          }
        />
      )}
    </Card>
      </Grid>
    </Container>
   
    
  );
}

export default CardLi;
