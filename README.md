# <img src="public/images/jbex05Orange.png" alt="Alt Text" width="50">
# Portfolio Site 2023


## What's Happening?

* This is where my personal website (johnston-m.com) is being re-built.
* Once I have thrown a little more substance and styling in here it will replace the site's current content.
* See ya soon!

## File Structure 
##### (currently)

- `public/`: This directory contains static assets like stylesheets and images.
    - `data/`: This directory contains text files.
        - `sudokuSolver.txt`: Downloadable text file for the sudoku solver java code.
    - `images/`: This directory contains image files.
        - `jbex05Orange.png`
        - `jbexFaviconBlack.ico`
    - `styles/`: This directory contains CSS files.
        - `stylesheet.css`: The main stylesheet for the project.
        - `uapStylesheet.css`: The UAP page stylesheet.
- `views/`: This directory contains EJS view templates.
    - `partials/`: This directory contains reusable partial templates.
        - `main`: main pages partials.
            - `footer.ejs`: Reusable footer partial.
            - `header.ejs`: Reusable header partial.
        - `uap`: uap page partials.
            - `footer.ejs`: Reusable footer partial.
            - `header.ejs`: Reusable header partial.
            - `uapMap.ejs`: Mapbox linked UAP map.
    - `index.ejs`: The main EJS view template.
    - `sudoku.ejs`: The sudoku EJS view template.
    - `uap.ejs`: The UAP EJS view template.
- `.gitignore`: This file tells git which files it should not track / not maintain a version history for.
- `index.js`: This is the main server file for the project.
- `package-lock.json`: This is an automatically generated file that locks the versions of installed npm packages.
- `package.json`: This file contains metadata about the project and its dependencies.
- `README.md`: This is the main README file that provides information about the project.

<!-- START: contents list -->
1. `.gitignore` 
2. `Dockerfile` 
3. `README.md` 
4. `authorizationConfig.js` 
5. `deployPortfolio.sh` 
6. `generateDirectoryContentList.js` 
7. `index.js` 
8. `package-lock.json` 
9. `package.json` 
10. **`[public]`** 
  1. **`[data]`** 
    1. `sudokuSolver.txt` 
  2. **`[documents]`** 
    1. `BiographicalSketchJohnstonMichaelNoPII.pdf` 
    2. `Johnston-M-UCCS-CeDiploma.pdf` 
    3. `JohnstonMichaelCV.pdf` 
    4. `JohnstonResume.pdf` 
  3. **`[images]`** 
    1. **`[home]`** 
      1. `ibexBoredChair02.jpg` 
      2. `memojiFace.png` 
    2. `ibexSuitChair.jpg` 
    3. `ibexSuitChairRelax.jpg` 
    4. `jbex05Orange.png` 
    5. `jbexFaviconBlack.ico` 
    6. `manReactsT0Secret.jpg` 
    7. `portfolioPipeline.svg` 
    8. `portfolioPipelineWhiteLine.svg` 
  4. **`[scripts]`** 
    1. `modal.js` 
  5. **`[styles]`** 
    1. `apiAuthMain.css` 
    2. **`[fonts]`** 
      1. `momsTypewriter.ttf` 
    3. `navbarStylesheet.css` 
    4. `stylesheet.css` 
    5. `uapStylesheet.css` 
11. **`[views]`** 
  1. `academic.ejs` 
  2. `apiAuthIndex.ejs` 
  3. `inProgress.ejs` 
  4. `index.ejs` 
  5. `military.ejs` 
  6. **`[partials]`** 
    1. **`[main]`** 
      1. `footer.ejs` 
      2. `header.ejs` 
      3. `navbar.ejs` 
    2. **`[uap]`** 
      1. `uapFooter.ejs` 
      2. `uapHeader.ejs` 
      3. `uapMap.ejs` 
  7. `pipeline.ejs` 
  8. `resume.ejs` 
  9. `sudoku.ejs` 
  10. `uap.ejs` 
<!-- END: contents list -->