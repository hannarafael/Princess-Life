var db = require("../models");

module.exports = function(app) {
  // Load index page
 
 

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json("example", {
        example: dbExample
      });
    });
  });


  app.post("/login", function(req, res) {
     
      res.json("200", {
        example: req.body
      });
  });

  app.post("/search", function(req, res) {
     
    res.json("200", {
      example: req.body
    });
});


app.post("/signup", function(req, res) {

  axios.get('https://api.yelp.com/v3/businesses/search?term=food&location=philadelphia', {
        headers: {
            Authorization: "Bearer 0XmJFcySOehBbfOmxvf1H63RKMdvpEJsvTNpomcB9O4QnuuUkQbAh8Nxy9HZ88xfGJ3xOXuypueX1qjo4mdVJfmHioHkHfczT0b3evJAUkSBhqhinqHk1erdbNjrXXYx"
        }
    }).then((response) => {
            console.log(response.data.businesses);
     
  res.json("200", {
    example: req.body
  });
});


  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.json("404");
  });
});

};
