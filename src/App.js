import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
                <Route component={Profile} path="/profile"/>
                <Route component={Dialogs} path="/dialogs"/>
                <Route component={News} path="/news"/>
                <Route component={Music} path="/music"/>
                <Route component={Settings} path="/settings"/>
        </div>
      </div>
    </Router>
  );
}

export default App;
// ctrl + k + f - форматирование кода
