# 19th Century Presidents Clicky Game

## What the project does:

-   This project uses React JS framework to create a clicky game with a 19th century presidents theme.
-   It's a functional component version of my prior clicky game... which was class-based.

---

## How users can get started with the project:

-   Clone the GitHub repo and deploy 'as is' wherever you'd like.

---

## About the code in this project:

This project uses 4 components which are utilized in **src/App.js** (which is the only file using **State**), then are rendered through **src/index.js** to the root id element in **public/index.html**... the main (and only) page. The default State of App.js is as follows:

```js
const [topScore, setTopScore] = useState(0);
const [score, setScore] = useState(0);
const [scoreColorType, setScoreColorType] = useState('initial');
const [message, setMessage] = useState({ text: 'Click a president to begin.', subText: null, colorType: 'dark' });
const [presidentsArray, setPresidentsArray] = useState(presidentPics);
const [gameOver, setGameOver] = useState(false);
```

The 4 components are:

-   header.js
-   instructions.js
-   pic.js
-   footer.js

Each of the components reside in the **src/components** folder. Two of the components (header and pic) have their own subfolders within the components folder because they also have associated css files and/or images they need to be grouped with.

The president pics are stored in the **public/images/presidents**, imported into App.js with their references in **config/presidentPics.json**.

I used an ES6 version of the classic Fisher-Yates shuffle to randomly display the president pics upon each click or page load.

```js
shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};
```

At the end of every game... whether that be because of an incorrect click or 12 consecutive successful clicks... the **resetGame()** function is called. That function resets the State of score and the pics array, but not topScore or message.

**Props** are passed from App.js to the pic component.

Context is used to pass the _Score_ and _Top Score_ values to their respective components (both of which are subcomponents of the _header_).

---

## This project was created and is maintained by:

-   Mike Gullo
-   Live version: https://react-clicky-game-fc.mikegullo.com/
-   This project's github repo: https://github.com/mike14747/react-clicky-game-fc
-   Me on github: https://github.com/mike14747
-   Contact me at: mike14747@oh.rr.com for more info about this project.
