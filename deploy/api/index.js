const express = require("express");
const cors = require("cors");

const app  = express ();

const corsOptions = {
  origin: "*",
  methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
  headers: 'Content-Type, Authorization',
  exposedHeaders:'Authorization'
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./routes/produit.routes")(app);
require("./routes/user.routes")(app);

const PORT =  8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});



