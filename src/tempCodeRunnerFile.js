const movies = require('./data.js');

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return [...new Set(moviesArray.map((element) => element.director))]
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter((element) => (element.director === "Steven Spielberg" && element.genre.includes("Drama"))).length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length <= 0) return 0;
    return Math.round(moviesArray.filter((element) => element.score).reduce((acc, crr) => acc += crr.score, 0)/moviesArray.length*100)/100
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    return scoresAverage(moviesArray.filter((element) => element.genre.includes("Drama")));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    moviesArrayCopy = moviesArray.slice();
    return moviesArrayCopy.sort((a,b) => a.year - b.year || a.title.localeCompare(b.title));
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    moviesArrayCopy = moviesArray.slice();
    moviesArrayCopy.sort((a,b) => a.title.localeCompare(b.title));
    return moviesArrayCopy.map((element) => element.title).slice(0,20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    return moviesArray.map((element) => {
      let hours = element.duration.match(/(\d+)(?=h)/);
      let minutes = element.duration.match(/(\d+)(?=min)/);
  
      let totalMinutes = 0;
      if (hours) totalMinutes += parseInt(hours[0]) * 60; 
      if (minutes) totalMinutes += parseInt(minutes[0]); 
     
      return {
        ...element, 
        duration: totalMinutes 
      };
    });
  }
  

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    allYears = [...new Set(moviesArray.map((movie) => movie.year))];
    allYears.sort((a,b) => a-b)
    bestAvgScorePerYearArray = [];
    allYears.forEach((element) => {
      bestAvgScorePerYearArray.push(`${element} with an average score of ${scoresAverage(moviesArray.filter((elementMoviesArray) => element.year === elementMoviesArray.year))}`);
    });
    return bestAvgScorePerYearArray;
  }
  
  console.log(bestYearAvg(movies));