import NavBar from "./components/navBar/navbar";
import Home from "./pages/Home/Home";
import SinglePage from "./pages/Home/single/SinglePage";
import Write from "./pages/Home/write/write";
import Settings from "./pages/Home/settings/settings";
import Login from "./pages/Home/login/login";
import Register from "./pages/Home/register/register";
import Market from './components/market/Market'
import News from "./components/news/News";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  const user = true;
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register"> {user ? <Home /> : <Register />} </Route>
        <Route path="/login"> {user ? <Home /> : <Login />} </Route>
        <Route path="/write"> {user ? <Write /> : <Register />} </Route>
        <Route path="/settings"> {user ? <Settings /> : <Register />} </Route>
        <Route path="/post/:postId">
          <SinglePage />
        </Route>
          <Route path='/market'> { <Market />} </Route> 
      </Switch>
      <Route path="/news">
        {<News/>}
        

      </Route>
       
      




    </Router>
    
  );
  
}


export default App;
