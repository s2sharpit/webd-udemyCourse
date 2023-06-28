const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB");

const articleSchema = {
    title: String,
    content: String
};

const Article = mongoose.model("Article", articleSchema);

///////////////////////////////////////Requests Targetting all Articles////////////////////////////////////

app.route("/articles")
.get((req, res) => {
    Article.find((err, foundArticles) => {
        res.send((!err) ? foundArticles : err);
    });
})
.post((req, res) => {
    const newArticle = new Article({
        title: req.body.title,
        content: req.body.content
    });
    newArticle.save((err) => {
        res.send((!err) ? "Successfully added a new artilce." : err);
    });
})
.delete((req, res) => {
    Article.deleteMany((err) => {
        res.send((!err) ? "Successfully deleted all articles." : err);
    });
});

/////////////////////////////////////Requests Targetting a Specific Article////////////////////////////////////

app.route("/articles/:articleTitle")
.get((req, res) => {

    Article.findOne({title: req.params.articleTitle}, (err, foundArticle) => {
        res.send((foundArticle) ? foundArticle : "No articles matching that title was found.");
    });
})
.put((req, res) => {
    Article.updateOne(
        {title: req.params.articleTitle},
        {title: req.body.title, content: req.body.content},
        {new: true},
        (err) => {
            res.send((!err) ? "Successfully updated article." : err);
        }
    );
})
.patch((req, res) => {
    Article.findOneAndUpdate(
        {title: req.params.articleTitle},
        {$set: req.body},
        (err) => {
            res.send((!err) ? "Successfully updated article." : err);
        }
    );
})
.delete((req, res) => {
    Article.deleteOne({title: req.params.articleTitle}, (err) => {
        res.send((!err) ? "Successfully deleted the corresponding article." : err)
    });
});

app.listen(3000, () => {
    console.log("Server started on port 3000.");
});