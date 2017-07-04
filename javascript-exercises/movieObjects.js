var movieObjects =
[
  {
    title: "Pride and Prejudice",
    hasWatched: true,
    rating: "5 stars"
  },
  {
    title: "The Revenant",
    hasWatched: false,
    rating: "4.5 stars"
  },
  {
    title: "Hidden Figures",
    hasWatched: true,
    rating: "4.5 stars"
  }
]


for (var index = 0; index < movieObjects.length; index++) {
  var movie = movieObjects[index];
  if (movie.hasWatched === true) {
    console.log("You have watched " + movie.title + " - " + movie.rating)
  } else {
    console.log("You have not seen " + movie.title + " - " + movie.rating)
  }
}

