/*importerer soruce, destination, watch og serie funktioner fra Gulp */
const { src, dest, watch, series } = require("gulp");
/*Importerer Gulp-sass plugin fra Gulp */
const sass = require("gulp-sass")(require("sass"));

/** Opret funktion der compiler sass til css
 * Tager Sass fra sourcefilen - index.scss og kører det gennem sass plugin, der omdanner det til en css mappe
 */
function buildStyles() {
  return src("style.scss")
    .pipe(
      sass().on("error", function (err) {
        console.error("Fejl ved kompilering af Sass:", err.message);
      })
    )
    .pipe(dest("css"));
}

console.log("buildTask er færdig");

/*Laver en watch funktion, der holder øje med ændringer i index.scss og automatisk overfører rettelser fra sass til css */
function watchTask() {
  console.log("watchTask aktiveret");
  watch(["style.scss", "sass/*.scss"], buildStyles);
}

/** Bruger series funktion til at eksportere filerne i korrekt rækkefølge */
exports.default = series(buildStyles, watchTask);

/**
 * Åben Terminal og tast npm install gulp gulp-sass sass --save-dev
 *  derefter "gulp" for at compile */

//hvis det ikke fungerer, så prøv sudo rm -rf node_modules for at slette node_modules, og prøv igen.
