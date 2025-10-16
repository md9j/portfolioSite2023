# <img src="public/images/jbex05Orange.png" alt="Alt Text" width="50">
# Johnston-M


## What's Happening?

* This is where my personal website (johnston-m.com) is being re-built.
* The site is now live at [johnston-m.com](https://johnston-m.com).
* Please be aware, this site will always be a work in progress; technologies will be added and removed as I learn and grow, projects will be added as they are adapted for this format, and the appearance will change from time to time.
* Swing by, I hope to see ya soon!

## File Structure 
##### (currently)

### Portfolio Site 2023
<!-- START: contents list -->
- `.DS_Store`
- `.gitignore`
- `Dockerfile`
- `README.md`
- `authorizationConfig.js`
- `deployPortfolio.sh`
- `generateDirectoryContentList.js`
- `index.js`
- `package-lock.json`
- `package.json`
- **[public]**
  - `.DS_Store`
  - **[data]**
    - `sudokuSolver.txt`
  - **[documents]**
    - `Johnston-M-UCCS-CeDiploma.pdf`
    - `JohnstonMichaelCV.pdf`
    - `JohnstonResume.pdf`
    - `Michael_Johnston_MilitaryXP.pdf`
  - **[images]**
    - `.DS_Store`
    - `Johnston_Card_noBackground.png`
    - `Linkedin-logo.png`
    - `centaur.png`
    - `crash.png`
    - `dark-background.jpg`
    - `drum-kit.png`
    - `github-mark.png`
    - **[home]**
      - `ibexBoredChair02.jpg`
      - `memojiFace.png`
      - `steamBadgerChair.jpg`
    - `hydra.png`
    - `ibexSuitChair.jpg`
    - `ibexSuitChairRelax.jpg`
    - `jbex05Orange.png`
    - `jbexFaviconBlack.ico`
    - `kick.png`
    - `manReactsT0Secret.jpg`
    - `minotaur.png`
    - `mnemosyne.png`
    - `mouse-click.png`
    - `portfolioPipeline.svg`
    - `portfolioPipelineWhiteLine.svg`
    - `snare.png`
    - `tom1.png`
    - `tom2.png`
    - `tom3.png`
    - `tom4.png`
    - `werewolf.png`
  - **[scripts]**
    - `drums.js`
    - `game.js`
    - `modal.js`
  - **[sounds]**
    - `blue.mp3`
    - `crash.mp3`
    - `green.mp3`
    - `kick-bass.mp3`
    - `red.mp3`
    - `snare.mp3`
    - `tom-1.mp3`
    - `tom-2.mp3`
    - `tom-3.mp3`
    - `tom-4.mp3`
    - `wrong.mp3`
    - `yellow.mp3`
  - **[styles]**
    - `apiAuthMain.css`
    - `drums.css`
    - **[fonts]**
      - `gelioPasteli.ttf`
      - `metal.ttf`
      - `momsTypewriter.ttf`
    - `mtgCounter.css`
    - `navbarStylesheet.css`
    - `stylesheet.css`
    - `sudokuApp.css`
    - `uapStylesheet.css`
- **[views]**
  - `.DS_Store`
  - `academic.ejs`
  - `apiAuthIndex.ejs`
  - `drums.ejs`
  - `getGood.ejs`
  - `inProgress.ejs`
  - `index.ejs`
  - `military.ejs`
  - `mnemosyne.ejs`
  - **[partials]**
    - `.DS_Store`
    - `crashDrummer.ejs`
    - **[main]**
      - `footer.ejs`
      - `header.ejs`
      - `navbar.ejs`
    - **[uap]**
      - `uapFooter.ejs`
      - `uapHeader.ejs`
      - `uapMap.ejs`
  - `pipeline.ejs`
  - `resume.ejs`
  - `sudoku.ejs`
  - `sudokuApp.ejs`
  - `uap.ejs`
<!-- END: contents list -->

### On the Way

- Card shuffle technique and distribution analysis tool
  - Analyze deck sizes up to 100 cards.
  - Choose any combination of up to 4 shuffle techniques (overhand, pile, mash, riffle).
  - Choose how many iterations of each shuffle technique to perform.
  - Option to label card types and quantity of each.
  - View card distribution over iterations of shuffle types and how the deck 
    approches a near "complete randomization" through visual aids.

- TCG (MTG) score and counter tracker web app.
  - Tracking app that allows for creating multiple private "game rooms"
  - 1 host can create a password protected game room.
  - Room holds up to 10 unique players.
  - Each player controls their score and counters from their personal device (mobile phone, tablet, computer).
  - Each player can view, as well as adjust, the scores and counters for all players.
  - Game log available for players interested in reviewing game activity.