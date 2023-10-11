import React,{useContext} from "react";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import BookIcon from "@mui/icons-material/Book";
import { Link } from "react-router-dom";
import { EpisodeContext } from "../context/EpisodeContexProvider";
import styles from "./Header.module.css"

function Header() {
  const {state}=useContext(EpisodeContext);
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography component="h1" variant="h5" fontWeight="700" flex={1}>
            <Link to="/" style={{textDecoration:"none", color: "#fff"}}>ریک و مارتی</Link>
          </Typography>
          <Link to="/" style={{color:"#fff"}}>
            <BookIcon />
          </Link>
          <div className={styles.iconContainer}>
                    <Link to='/add'>لیست تماشا</Link>
                    <span>{state.itemsCounter}</span>
                </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
