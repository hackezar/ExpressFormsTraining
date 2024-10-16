// app.js
const express = require("express");
const app = express();
const usersRouter = require("./routes/usersRouter");
const path = require('path');
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/", usersRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Express app listening on port ${PORT}!`));

//The body() function allows you to specify which fields in the request body should be validated and sanitized, as well as how to handle it.
/*
[
  body("birthdate", "Must be a valid date.")
    .optional({ values: "falsy" })
    .isISO8601() // Enforce a YYYY-MM-DD format.
];
*/
//This example marks birthdate field as optional, but still enforces the ISO8601 date format on inputs. This is because { values: "falsy" } means values that aren’t undefined, null, false, or 0 will still be validated.

// Once the validation rulesare applied, you can use validationResult to handle any validation errors:
/*
const controller = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).render("index", {
      errors: errors.array(),
    });
  }

  // do stuff if successful
  res.redirect("/success");
};
*/
//This setup checks for any failed validation checks, and if there are any (the errors array is NOT empty), then the server sends a 400 status code, along with any errors that may be present, to our index view. Otherwise, we’re redirected to the /success route in our router.

