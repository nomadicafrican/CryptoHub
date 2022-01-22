import NavBar from "./components/navBar/navbar";
import Home from "./pages/Home/Home";
import SinglePage from "./pages/Home/single/SinglePage";
import Write from "./pages/Home/write/write";
import Settings from "./pages/Home/settings/settings";
import Login from "./pages/Home/login/login";
import Register from "./pages/Home/register/register";

function App() {
  return (
    <>
      <NavBar />
      <Register />;
    </>
  );
}

export default App;
