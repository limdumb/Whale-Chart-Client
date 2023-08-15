import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MelonChart from "./Platform/Melon/MelonChart";
import MainChart from "./MainChart/MainChart";
import BugsChart from "./Platform/Bugs/BugsChart";
import FloChart from "./Platform/Flo/FloChart";
import GenieChart from "./Platform/Genie/GenieChart";
import VibeChart from "./Platform/Vibe/VibeChart";
import YoutubeMVChart from "./Platform/Youtube/YoutubeMVCahrt";
import YoutubeMusicChart from "./Platform/Youtube/YoutubeMusicChart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainChart />} path="/" />
        <Route element={<MelonChart />} path="/melon/chart" />
        <Route element={<BugsChart />} path="/bugs/chart" />
        <Route element={<FloChart />} path="/flo/chart" />
        <Route element={<GenieChart />} path="/genie/chart" />
        <Route element={<VibeChart />} path="/vibe/chart" />
        <Route element={<YoutubeMVChart />} path="/yotubue/chart/mv" />
        <Route element={<YoutubeMusicChart />} path="/youtube/chart/music" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
