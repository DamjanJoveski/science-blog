import { useEffect, useState } from "react";
import { CategoriesSidebar } from "./CategoriesSidebar.jsx";
import { ArticlesPreview } from "./ArticlesPreview.jsx";
import { NavLink } from "react-router-dom";
import {Article} from "./Article.jsx";

export const Articles = ({getAndSetArticle, setArticle}) => {
    const [articles, setArticles] = useState([]);

    const [selectedCategory, setSelectedCategory] = useState("");


    const changeCategory = (category) => {
        setSelectedCategory(category);
        fetchCategorizedArticles(category)
    };

    async function fetchCategorizedArticles(category){
        if(category.toLowerCase() === 'all'){
            fetchArticles()
        }
        else {
            try{
                const response = await fetch(`http://localhost:3000/${category.toLowerCase()}`)
                if (response.ok) {
                    const data = await response.json();
                    setArticles(data);
                } else {
                    throw new Error("Failed to fetch data");
                }
            }
            catch (error){
                console.error(error.message)
            }
        }
    }

    async function fetchArticles() {
        try {
            const response = await fetch(`http://localhost:3000//articles`);
            if (response.ok) {
                const data = await response.json();
                setArticles(data);
            } else {
                throw new Error("Failed to fetch data");
            }
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        fetchArticles();
    }, []);

    function getArticle(title){
        getAndSetArticle(title)
    }


    return (
        <section className="flex flex-col md:flex-row">
            <CategoriesSidebar
                selectedCategory={selectedCategory}
                changeCategory={changeCategory}
            />
            <div className="flex flex-col gap-32 mt-36 w-full">
                {articles.map((article, index) => {
                    const title = article.title
                        .toLocaleLowerCase()
                        .replace(/ /g, "-");
                    return (
                        <NavLink
                            key={index}
                            to={`/articles/title/${title}`}
                            onClick={async () => await getArticle(article.title)}
                        >
                            <ArticlesPreview
                                title={article.title}
                                description={article.description}
                                image={article.image}
                            />
                        </NavLink>

                    );
                })}
            </div>

        </section>
    );
};
