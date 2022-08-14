import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";
import Header from "./comp/Header"
import Footer from './comp/Footer';

function App() {
  return (
    <>
    <Header></Header>
    <Footer></Footer>
    </>
  );
}

export default App;
