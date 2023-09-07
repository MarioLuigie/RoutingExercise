import { Routes, Route, useNavigate } from "react-router-dom"

import textContent from "../data/textContent.json"
import Home from "../pages/Home"
import About from "../pages/About"
import Products from "../pages/Products"
import Contact from "../pages/Contact"
import NotFound from "../pages/NotFound"

import "../styles/layouts/Main.scss"

export default function Main () {

    const { 
        navbar : { home, about, products, contact }, 
        main : { notFoundPage } 
    } = textContent
        
    const navigate = useNavigate();

    const redirectTo = (path) => () => {
        navigate(path)
    }

    return (
        <main>
            <Routes>
                <Route 
                    exact 
                    path={home.path} 
                    element={<Home label={home.label}/>}
                />
                <Route 
                    path={about.path} 
                    element={<About label={about.label}/>}
                />
                <Route 
                    path={products.path} 
                    element={<Products label={products.label}/>}
                />
                <Route 
                    path={contact.path} 
                    element={<Contact label={contact.label}/>}
                />
                <Route 
                    path="*" 
                    element={<NotFound label={notFoundPage.label} 
                    onHandle={redirectTo(home.path)} 
                    buttonLabel={notFoundPage.buttonLabel}/>}
                />
            </Routes>
        </main>
    )
}