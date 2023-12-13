import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/home/Home.jsx";
import {Articles} from "./pages/articles/Articles.jsx";
import {About} from "./pages/about/About.jsx";
import {Contact} from "./pages/contact/Contact.jsx";
import {NoPage} from "./pages/NoPage.jsx";
import {NavBar} from "./NavBar.jsx";
import {isMobile} from "react-device-detect";
import {Article} from "./pages/articles/Article.jsx";

export  const App = () => {
    return (
        <>
            <NavBar isMobile={isMobile}/>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/articles" element={<Articles/>}>
                    <Route index element={<Articles/>}/>
                    <Route path="id/:id" element={<Article/>}/>
                    <Route path="category/:category" element={<Articles/>}/>
                </Route>
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="*" element={<NoPage/>} />
            </Routes>
        </>
    );
}
