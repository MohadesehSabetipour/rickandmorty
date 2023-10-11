import React from "react";
import {
  Avatar,
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

function CardEL({ name, slug,created,air_date }) {
  return (
    <Card sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4 ,bgcolor:"#f3f3f3"}}>
      {name && (
        <CardHeader
          title={
            <Typography component="p" variant="h6" color="text.secondary" fontWeight={600}>
              {name}
            </Typography>
          }
        />
      )}

      <CardContent>
        <Typography
          component="h3"
          variant="h6"
          color="text.primary"
        >
          {air_date}
        </Typography>
      </CardContent>
      <Divider variant="middle" sx={{ margin: "10px" }} />
      <CardActions>
        <Link
          to={`/episodes/${slug}`}
          style={{ textDecoration: "none", width: "100%" }}
        >
          <Button
            variant="outlined"
            size="small"
            sx={{ width: "100%", borderRadius: 3 }}
          >
            شخصیت های این قسمت
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default CardEL;
