import { Route, Routes } from "react-router-dom";

import Layout from "./components/layout/Layout";
import AllMeetUpsPage from "./pages/AllMeetUps";
import FavoritesPage from "./pages/Favorites";
import NewMeetUpPage from "./pages/NewMeetUp";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetUpsPage />} />
        <Route path="/new-meetup" element={<NewMeetUpPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
