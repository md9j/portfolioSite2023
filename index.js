import express from "express";
import bodyParser from "body-parser";
import fs from 'fs/promises';
import path from'path';

const app = express();
const port = 3000;

// Set up the path variables
const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

// Sudoku Solver content variable to be used for file download
var sudokuSolverContent = "";

app.set('views', path.join(__dirname, 'views'));
// Set the view engine to EJS
app.set('view engine', 'ejs');

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Parse URL-encoded form data using bodyParser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`It's me, port ${port}, I'm the listening port it's me`);
});

// Route handlers
app.get('/', (req, res) => {
    res.render("index.ejs");
});

// UAP route
app.get('/uap', (req, res) => {
    res.render('uap.ejs');
});

// Sudoku route
app.get('/sudoku', (req, res) => {
    res.render('sudoku.ejs', {sudokuSolverContent});
});

// Show Sudoku Solver route
app.get('/sudoku-solver', async (req, res) => {
    const filePath = path.join(__dirname, 'public', 'data', 'sudokuSolver.txt');
    try {
        const data = await fs.readFile(filePath, 'utf8');
        res.render("sudoku", { sudokuSolverContent: data });
    } catch (err) {
        console.error(err);
        res.send('Error reading the file.');
    }
});

// Download Sudoku Solver route
app.get('/download-text', async (req, res) => {
    const filePath = path.join(__dirname, 'public', 'data', 'sudokuSolver.txt');
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        res.send(data);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error reading the file.');
    }
});