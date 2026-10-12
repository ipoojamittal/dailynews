const express = require("express");
const router = express.Router();
const { getNews } = require("../services/newsService");

router.get("/", async (req, res) => {
    try {
        const news = await getNews();
        res.json(news);
    } catch (error) {
        res.status(500).json({ message: "Error fetching news" });
    }
});

module.exports = router;