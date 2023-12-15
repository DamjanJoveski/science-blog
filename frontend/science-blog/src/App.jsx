import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/home/Home.jsx";
import {Articles} from "./pages/articles/Articles.jsx";
import {About} from "./pages/about/About.jsx";
import {Contact} from "./pages/contact/Contact.jsx";
import {NoPage} from "./pages/NoPage.jsx";
import {NavBar} from "./NavBar.jsx";
import {isMobile} from "react-device-detect";
import {Article} from "./pages/articles/Article.jsx";
import {useEffect, useState} from "react";
export  const App = () => {

    const [fact, setFact] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://localhost:3000/fact');
                if (response.ok) {
                    const data = await response.json();
                    setFact(data);
                } else {
                    throw new Error('Failed to fetch data');
                }
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            <NavBar isMobile={isMobile}/>
            <main className="flex-1">
            <Routes>
                <Route index element={<Home fact={fact}/>} />
                <Route path="/" element={<Home fact={fact}/>}/>
                <Route path="/home" element={<Home fact={fact}/>}/>
                <Route path="/articles" element={<Articles/>}>
                    <Route index element={<Articles/>}/>
                    <Route path="id/:id" element={<Article/>}/>
                    <Route path="category/:category" element={<Articles/>}/>
                </Route>
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="*" element={<NoPage/>} />
            </Routes>
            </main>
        </div>
    );
}
