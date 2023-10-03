import express from "express";
import bodyParser from "body-parser";
import fs from 'fs/promises';
import path from'path';
import { URLSearchParams, URL } from "url";
import axios from "axios";
import { username, password, apiKey, bearerToken } from "./authorizationConfig.js";

const app = express();
const port = 3000;
const API_BASE_URL = "https://secrets-api.appbrewery.com/";

// Set up the path variables
const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

// Sudoku Solver content variable to be used for file download
var sudokuSolverContent = "";

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Serve static files from the "public" directory
app.use(express.static('public'));

// Parse URL-encoded form data using bodyParser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`It's me, port ${port}, I'm the listening port it's me`);
});

// Route handlers ********************
app.get('/', (req, res) => {
    res.render('index.ejs');
});

// Resume route *******************
app.get('/resume', (req, res) => {
    res.render('resume.ejs');
});

app.get('/download-resume', (req, res) => {
    const filePath = __dirname + '/public/documents/JohnstonResume.pdf';
    res.download(filePath);
});

// Academic route *******************
app.get('/academic', (req, res) => {
    res.render('academic.ejs');
});
app.get('/download-academic', (req, res) => {
    const filePath = __dirname + '/public/documents/JohnstonResume.pdf';
    res.download(filePath);
});

// Military route *******************
app.get('/military', (req, res) => {
    res.render('military.ejs');
});

app.get('/download-military', (req, res) => {
    const filePath = __dirname + '/public/documents/JohnstonResume.pdf';
    res.download(filePath);
});

// UAP route *******************
app.get('/uap', (req, res) => {
    res.render('uap.ejs');
});

// Pipeline route *******************
app.get('/pipeline', (req, res) => {
    res.render('pipeline.ejs');
});

// Drumsroute *******************
app.get('/drums', (req, res) => {
    res.render('drums.ejs');
});

// In Progress route *******************
app.get('/inProgress', (req, res) => {
    res.render('inProgress.ejs');
});

// Sudoku route *******************
app.get('/sudoku', (req, res) => {
    res.render('sudoku.ejs', {sudokuSolverContent});
});

// Show Sudoku Solver route
app.get('/sudoku-solver', async (req, res) => {
    const filePath = path.join('public', 'data', 'sudokuSolver.txt');
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
    const filePath = path.join('public', 'data', 'sudokuSolver.txt');
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        res.send(data);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error reading the file.');
    }
});

// API routes *******************
app.get("/apiAuthsSecrets", (req, res) => {
    res.render("apiAuthIndex.ejs", { content: null, error: null, initialModalShown: false });
});

app.get("/noAuth", async (req, res) => {

    const endpoint = "random";
    const url = new URL(endpoint, API_BASE_URL);

    axios.get(url.toString())

    .then((response) => {
        console.log(response.data);
        const responseData = response.data;
        res.render("apiAuthIndex.ejs", { content: responseData, error: null, initialModalShown: true });
    })
    .catch (error => {
        console.error("Failed to make request:", error.message);
        console.trace();
        res.render("apiAuthIndex.ejs", { content: null, error: error.message, initialModalShown: true });
    });
});

app.get("/basicAuth", async (req, res) => {
    
    const endpoint = "all";
    const queryParams = { 
        page: Math.floor(Math.random() * 5),
        limit: 10,
    };
    const url = new URL(endpoint, API_BASE_URL);
    const params = new URLSearchParams(queryParams);
    const authHeader = `Basic ${Buffer.from(`${username}:${password}`).toString("base64")}`;

    url.search = params;

    axios.get(url.toString(), {
        headers: {
            Authorization: authHeader,
        }
    })
    .then((response) => {
        console.log(response.data);
        const responseData = response.data;
        res.render("apiAuthIndex.ejs", { content: responseData, error: null, initialModalShown: true });
        }) 
    .catch (error => {
        console.error("Failed to make request:", error.message);
        console.trace();
        res.render("apiAuthIndex.ejs", { content: null, error: error.message, initialModalShown: true });
    });
});

app.get("/apiKey", async (req, res) => {
    const endpoint = "filter";
    const queryParams = { 
        score: Math.floor(Math.random() * 7),
        apiKey: apiKey,
    };
    const url = new URL(endpoint, API_BASE_URL);
    const params = new URLSearchParams(queryParams);
    const authHeader = `Basic ${Buffer.from(`${username}:${password}`).toString("base64")}`;

    url.search = params;

    axios.get(url.toString(), {
        headers: {
            Authorization: authHeader,
    }
    })
    .then((response) => {
        console.log(response.data);
        const responseData = response.data;
        res.render("apiAuthIndex.ejs", { content: responseData, error: null, initialModalShown: true });
    }) 
    .catch (error => {
        console.error("Failed to make request:", error.message);
        console.trace();
        res.render("apiAuthIndex.ejs", { content: null, error: error.message, initialModalShown: true });
    });
});

app.get("/bearerToken", async (req, res) => {
    const id = Math.floor(Math.random() * 50);
    const endpoint = `secrets/${id}`;

    const url = new URL(endpoint, API_BASE_URL);
    const authHeader = `Bearer ${bearerToken}`;

    axios.get(url.toString(), {
        headers: {
            Authorization: authHeader,
        }
    })
    .then((response) => {
        console.log(response.data);
        const responseData = response.data;
        res.render("apiAuthIndex.ejs", { content: responseData, error: null, initialModalShown: true });
    }) 
    .catch (error => {
        console.error("Failed to make request:", error.message);
        console.trace();
        res.render("apiAuthIndex.ejs", { content: null, error: error.message, initialModalShown: true });
    });
});