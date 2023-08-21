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