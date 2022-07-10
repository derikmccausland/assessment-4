const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Look how... creative... your code is!",
					 "You aren't smelly today!",
					 "Your Javascript skills aren't mid... I guess.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortunes = ["A fresh start will put you on your way, bitch.", "A friend is a present you give yourself, bitch.", "A friend asks only for your time not your money, bitch.", "A hunch is creativity trying to tell you something, bitch.", "A smile is your personal welcome mat, bitch."]

  let randomIndex = Math.floor(Math.random() * fortunes.length)
  let randomFortune = fortunes[randomIndex]

  res.status(200).send(randomFortune)
})


const {getMovies, deleteMovie, createMovie, updateMovie} = require('./controller.js')

app.get(`/api/movies`, getMovies)
app.delete(`/api/movies/:id`, deleteMovie)
app.post(`/api/movies`, createMovie)
app.put(`/api/movies/:id`, updateMovie)


app.listen(4000, () => console.log("Server running on 4000"));
