import { BrowserRouter as Router } from "react-router-dom"
import Panel from "./layouts/Panel"
import Header from "./layouts/Header"
import Navbar from "./components/Navbar"
import Main from "./layouts/Main"
import Footer from "./layouts/Footer"
import "./App.scss"


export default function App() {

  return (
    <div className="app">
      <Router>
        <Panel />
        <Header />
        <Navbar />
        <Main />
        <Footer />
      </Router>
    </div>
  )
}


