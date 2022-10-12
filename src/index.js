import './style.css';
import { leaderBoard } from './scores.js';
import Scores from './show.js';

const form = document.querySelector('.add-score');
const submit= document.querySelector('#btn');
const refresh= document.querySelector('#refresh');
const newUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/YWeqzTn9QGXjVzrbdb8U/scores/';

const user = document.querySelector('.name');
const score = document.querySelector('.score');



form.addEventListener('submit', (e) => {
    e.preventDefault();
    leaderBoard(user.value, Number(score.value));
    form.reset();
  });
  
  refresh.addEventListener('click', async () => {
    window.location.reload();
    const storedScores = await fetch(newUrl);
    const response = await storedScores.json();
    Scores.displayScores(response.result);
  });
  
  document.addEventListener('DOMContentLoaded', async () => {
    const storedScores = await fetch(newUrl);
    const response = await storedScores.json();
    Scores.displayScores(response.result);
  });
