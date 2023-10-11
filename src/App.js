import { Route, Routes } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import Layout from "./components/layout";
import ScrollToTop from "./components/shared/ScrollToTop";
import CharacterPage from "./components/character/CharacterPage";
import EpisodesPage from "./components/episode/EpisodesPage"
import EpisodeContexProvider from "./components/context/EpisodeContexProvider";
import ListPage from "./components/ListPage"

function App() {
  return (
    <EpisodeContexProvider>
<Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<ListPage />} />
        <Route path="/episodes/:slug" element={<EpisodesPage />} />
        <Route path="/characters/:slug" element={<CharacterPage />} />
      </Routes>
    </Layout>
    </EpisodeContexProvider>
    
  );
}

export default App;
