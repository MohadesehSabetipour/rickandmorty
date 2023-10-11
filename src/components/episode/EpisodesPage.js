import React,{useContext} from "react";
import { useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";
import { GET_Episode_INFO } from "../../graphql/queries";
import Loader from "../shared/Loader";
import { Container } from "@mui/system";
import { Avatar, Box, Grid, Typography,Button } from "@mui/material";
import { EpisodeContext } from "../context/EpisodeContexProvider";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

function EpisodesPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const {state,dispatch}=useContext(EpisodeContext);
  const { loading, data, errors } = useQuery(GET_Episode_INFO, {
    variables: { episodeId:slug },
  });

  if (loading) return <Loader />;

  if (errors) return <h3>Error...</h3>;

  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={12} mt={9} display="flex" justifyContent="space-between">
          <Typography
            component="h2"
            variant="h4"
            color="primary"
            fontWeight={700}
          >
            {data.episode.name}
          </Typography>
          <ArrowBackRoundedIcon onClick={() => navigate(-1)} />
        </Grid>
        <Grid container xs={12} mt={7} >
          {data.episode.characters.map((c)=>(
            <Grid item xs={2}>
            <Avatar
            src={c.image}
            sx={{ width: 80, height: 80, marginLeft: 2 }}
          />
            <Typography component="p" variant="h6" fontWeight={100}>
              {c.name}
            </Typography>
            </Grid>

          ))}
          
        </Grid>
        <Button variant="contained" sx={{width:"100%"}} onClick={()=>(dispatch({type:"ADD_ITEM",name:data.episode.name}),navigate("/add"))}>
            اضافه کردن به لیست تماشا
          </Button>
      </Grid>
    </Container>
  );
}

export default EpisodesPage;
