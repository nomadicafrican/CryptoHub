import NavBar from "./components/navBar/navbar";
import Home from "./pages/Home/Home";
import SinglePage from "./pages/Home/single/SinglePage";
import Write from "./pages/Home/write/write";
import Settings from "./pages/Home/settings/settings";

function App() {
  return (
    <>
      <NavBar />
      <Settings />;
    </>
  );
}

export default App;
