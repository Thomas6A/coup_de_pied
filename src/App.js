import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./Pages/Accueil";
import auth from "./Services/auth";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import TopGames from "./Pages/TopGames";
import StreamGame from "./Pages/StreamGame";
import Stream from "./Pages/Stream";
import SideNavBar from "./Components/SideNavBar";

export const TokenContext = React.createContext();

function App() {
  const [isTokenSet, setIsTokenSet] = useState(false);

  useEffect(() => {
    auth
      .setAxiosToken()
      .then(() => {
        setIsTokenSet(true);
      })
      .catch((error) => {
        console.error("Error setting the Axios token:", error);
      });
  }, []);

  if (!isTokenSet) {
    // Render a loading state or a placeholder while the token is being set
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <SideNavBar />
      <BrowserRouter>
        <Routes>
          <Route element={<Accueil />} path={"/"} />
          <Route element={<TopGames />} path={"/topgames"} />
          <Route element={<StreamGame />} path={"/StreamGames/:id"} />
          <Route element={<Stream />} path={"/Stream/:user"} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
