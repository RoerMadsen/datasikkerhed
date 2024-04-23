Compiling af Sass
fra Udemy course: advanced CSS and Sass, Jonas Schmedtmann

Node js og NPM

tjek at node er installeret: node - v

ls ->vis hvilke undermapper/filer der er i mappen

cd -> change directory
cd .. ->gå til mappen over
cd filNavn.type .. -> dupliker fil til mappen over

mv filNavn.type .. -> flyt fil til mappen over

_installer og kør sass compiling_

sudo npm init ->laver package.json

sudo install node-sass --save-dev ->fortæller at node-sass bruges til at udvikle.

sudo npm uninstall gulp gulp-sass sass --save ->afinstallerer mapper og fjerner dem fra package.json

touch main.scss -> opretter main.scss

tilføj denne linje til package.json under scripts. -w ->watch funktion, så scriptet køres ved ændringer.
"compile:sass": "node-sass sass/main.scss css/style.css -w"

_åben ny fane i terminalen_

npm install live-server -g -> installerer live-server på computeren, så det kan bruges til dette og fremtidige projekter. Live-server åbner og genindlæser automatisk browseren

live-server -> kører live-server

**TERMINAL SKAL BLIVE VED MED AT KØRE**

**PROBLEM MED TILLADELSE TIL AT GEMME I PACKAGE.JSON**

whoami -> fortæller brugernavn
sudo chown amandamadsen package.json -> giver mig rettighederne/ejerskab over filen.

npm run compile:sass -> kører det script der blev lavet i package.json.
