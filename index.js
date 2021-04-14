// Load the Express and Multer package as a module
const express = require("express");
const multer = require("multer");

// Access the exported service Express and Multer
const app = express();
const upload = multer();


// Serve content of the "public" subfolder directly
app.use(express.static("public"));

// Serve content of the "public and css" subfolder directly
app.use(express.static("css"));


// Enable CORS (see https://enable-cors.org/server_expressjs.html)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Return a string for requests to the root URL ("/")
app.get("/", (request, response) => {
  response.sendFile(`${__dirname}/views/index.html`);
});

// Return the articles list in JSON format
app.get("/api/countries", (request, response) => {
  response.json(articles);
});

// Start listening to incoming requests
// If process.env.PORT is not defined, port number 3000 is used
const listener = app.listen(process.env.PORT || 3001, () => {
  console.log(`Your app is listening on port ${listener.address().port}`);
});

// Return HTML content for requests to "/ex1"
app.get("/ex1", (request, response) => {
  response.sendFile(`${__dirname}/views/ex1.html`);
 });

// Return HTML content for requests to "/ex2"
app.get("/ex2", (request, response) => {
  response.sendFile(`${__dirname}/views/ex2.html`);
 });

 // Return HTML content for requests to "/ex3"
app.get("/ex3", (request, response) => {
  response.sendFile(`${__dirname}/views/ex3.html`);
 });


// Handle form data submission to the "/ex1" route
app.post("/ex1", upload.array(), (request, response) => {
  //console.log(request.body);
  const name = request.body.name;
  const email = request.body.email;
  response.send(`${name}, Thank you for your order. We will keep you posted on delivery status at ${email}`);
});



// Return the articles list in JSON format
app.get("/api/ex2", (request, response) => {
  response.json(countries);
});