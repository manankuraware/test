import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import AddPlayer from "./pages/AddPlayer";
import ViewPlayer from "./pages/ViewPlayer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/view-player" element={<ViewPlayer />}></Route>
          <Route path="/add-player" element={<AddPlayer />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
