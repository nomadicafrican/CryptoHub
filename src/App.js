import NavBar from "./components/navBar/navbar";
import Home from "./pages/Home/Home";
import SinglePage from "./pages/Home/single/SinglePage";
import Write from "./pages/Home/write/write";
import Settings from "./pages/Home/settings/settings";
import Login from "./pages/Home/login/login";

function App() {
  return (
    <>
      <NavBar />
      <Login />;
    </>
  );
}

export default App;
