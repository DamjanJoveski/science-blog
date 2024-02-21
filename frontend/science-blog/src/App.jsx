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
import {Footer} from "./Footer.jsx";
import {PrivacyPolicy} from "./PrivacyPolicy.jsx";
export  const App = () => {

    const [fact, setFact] = useState(null);

    const [article, setArticle] = useState(JSON.parse(localStorage.getItem('article')));

    useEffect(() => { //fetches the fact of the day
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

    async function getAndSetArticle(title) {
        try {
            const response = await fetch(`http://localhost:3000/articles/title/${title}`);
            if (response.ok) {
                const data = await response.json();
                setArticle(data[0]);
                localStorage.setItem('article', JSON.stringify(data[0]));
            } else {
                throw new Error('Failed to fetch article');
            }
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        if(article){
            const storedArticle = JSON.parse(localStorage.getItem('article'));
            setArticle(storedArticle)
        }
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            <NavBar isMobile={isMobile}/>
            <main className="flex-1">
            <Routes>
                <Route index element={<Home fact={fact}/>} />
                <Route path="/" element={<Home fact={fact}/>}/>
                <Route path="/home" element={<Home fact={fact}/>}/>
                <Route path="/articles" element={<Articles getAndSetArticle={getAndSetArticle} setArticle={setArticle}/>}>
                    <Route index element={<Articles getAndSetArticle={getAndSetArticle} setArticle={setArticle}/>}/>
                    <Route path="category/:category" element={<Articles getAndSetArticle={getAndSetArticle} setArticle={setArticle}/>}/>
                </Route>
                <Route path="/articles/title/:title" element={<Article title={article && article.title} content={article && article.text_content} image={article && article.image} />} />
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
                <Route path="*" element={<NoPage/>} />
            </Routes>
            </main>
            <Footer/>
        </div>
    );
}
