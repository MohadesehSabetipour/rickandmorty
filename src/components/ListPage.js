import React,{useContext} from "react";
import { useQuery } from "@apollo/client";
import { EpisodeContext } from "../components/context/EpisodeContexProvider";
import { Avatar, Container, Grid, Typography,Button } from "@mui/material";
import CardLi from "./shared/CardLi";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { useNavigate } from "react-router-dom";


function ListPage() {
  const {state,dispatch}=useContext(EpisodeContext);
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg">
      <Grid container mt={10}>
      <Grid item xs={12} mt={9} display="flex" justifyContent="space-between">
          <Typography
            component="h2"
            variant="h4"
            color="primary"
            fontWeight={700}
          >
            لیست تماشا
          </Typography>
          <ArrowBackRoundedIcon onClick={() => navigate(-1)} />
        </Grid>
        <Grid item xs={12} mt={6}>
          <Grid container spacing={1} mt={2}>
            {state.selectedItems.map((i) => (
              <Grid item xs={12} sm={6} md={4} key={i.id}>
                <CardLi
                  name={i.name}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Button variant="contained" sx={{width:"100%",mt:"30px"}} onClick={()=>dispatch({type:"CLEAR"})}>
            پاک کردن لیست
          </Button>
      </Grid>
    </Container>
  );
}

export default ListPage;
