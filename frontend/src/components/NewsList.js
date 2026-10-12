import React, { useEffect, useState } from "react";
import { fetchNews } from "../Services/api";

const NewsList = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetchNews()
            .then((res) => {
                setNews(res.data);
            })
            .catch((err) => {
                console.error("Fetch error:", err);
            });
    }, []);

    return (
        <div>
            <h2>Latest News</h2>
            {news.map((item, index) => (
                <div key={index}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    );
};

export default NewsList;