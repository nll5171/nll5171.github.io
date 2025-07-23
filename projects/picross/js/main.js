window.onload = () => {
    const maxWidth = (Math.floor(document.querySelector("#puzzle-display").clientWidth / 16) - 12) * 16;
    const maxHeight = (Math.floor(document.querySelector("#puzzle-display").clientHeight / 16) - 8) * 16;
    let widthHeight = (maxWidth > maxHeight) ? maxHeight : maxWidth;

    //console.log('Page Loaded');

    const app = new PIXI.Application({
        width: widthHeight,
        height: widthHeight
    });

    // Scene dimensions
    const sceneWidth = app.view.width;
    const sceneHeight = app.view.height;

    // The set of images used by the game.
    const imageNames = [
        "goomba",
        "kirby",
        "link",
        "mario",
        "waddle-dee"
    ];

    let images = [];

    let promises = [];

    let music, selectSound, deselectSound, hoverSound;

    // Generate promises for loading images. Need to be done before making Picross board
    for (let a = 0; a < imageNames.length; a++) {
        let image = new Image(imageNames[a], sceneWidth, sceneHeight);
        promises.push(image.constructBlocks());
    }

    // Handle loading everything once images have loaded
    Promise.all(promises).then((values) => {
        values.forEach(value => images.push(value));
        app.loader.onComplete.add(displayPuzzle);
        app.loader.load();

        // Load sounds
        music = new Howl({
            src: ['audio/romantic.mp3'],
            autoplay: true,
            loop: true,
            volume: 0.3
        });

        selectSound = new Howl({
            src: ['audio/select.wav']
        });

        deselectSound = new Howl({
            src: ['audio/deselect.wav']
        });

        hoverSound = new Howl({
            src: ['audio/hover.wav']
        });

        music.play();
    });

    let selectedImage;
    let selectedBlocks;

    let displayTable;

    function displayPuzzle() {
        resetPuzzles();

        // selects a random image
        selectedImage = images[getRandomInt(images.length)];
        //console.log(selectedImage);
        selectedBlocks = selectedImage.blocks;

        const blockWidth = sceneWidth / selectedBlocks.length;
        const blockHeight = sceneHeight / selectedBlocks[0].length;

        displayTable = document.createElement("table");
        const topRow = document.createElement("tr");

        const borderWeight = 1;

        let currentElement = document.createElement("td");
        topRow.appendChild(currentElement);

        // Create the nested table for column hints
        const columnTable = document.createElement("table");
        columnTable.id = "column-table";
        columnTable.style.width = `${sceneWidth}px`;

        const columnRow = document.createElement("tr");
        const puzzleColumns = selectedImage.puzzleColumns;

        for (let a = 0; a < puzzleColumns.length; a++) {
            currentElement = document.createElement("td");

            currentElement.style.width = `${blockWidth}px`;

            if (a == 0) {
                currentElement.style.borderLeft = "1px solid black";
                currentElement.style.borderRight = "1px solid black";
            }

            else
                currentElement.style.borderRight = "1px solid black";

            for (let b = 0; b < puzzleColumns[a].length; b++) {
                let currentNum = document.createElement("p");
                currentNum.innerHTML = puzzleColumns[a][b];
                currentElement.appendChild(currentNum);
            }

            columnRow.appendChild(currentElement);
        }

        // Completes the nested table and top row of table
        columnTable.appendChild(columnRow);

        // Adds the columnTable to a td element before adding it
        currentElement = document.createElement("td");
        currentElement.appendChild(columnTable);

        topRow.appendChild(currentElement);
        displayTable.appendChild(topRow);

        const bottomRow = document.createElement("tr");

        // Create the nested table for row hints
        const rowTable = document.createElement("table");
        rowTable.id = "row-table";
        rowTable.style.height = `${sceneHeight}px`;

        const puzzleRows = selectedImage.puzzleRows;

        for (let a = 0; a < puzzleRows.length; a++) {
            let currentRow = document.createElement("tr");
            currentElement = document.createElement("td");

            currentElement.style.height = `${blockHeight}px`;

            if (a == 0) {
                currentElement.style.borderTop = "1px solid black";
                currentElement.style.borderBottom = "1px solid black";
            }

            else
                currentElement.style.borderBottom = "1px solid black";

            for (let b = 0; b < puzzleRows[a].length; b++) {
                let currentNum = document.createElement("p");
                currentNum.innerHTML = puzzleRows[a][b];
                currentElement.appendChild(currentNum);
            }

            currentRow.appendChild(currentElement);
            rowTable.appendChild(currentRow);
        }

        currentElement = document.createElement("td");
        currentElement.appendChild(rowTable);
        bottomRow.appendChild(currentElement);

        // // Create PIXI.js canvas
        // for (let a = 0; a < selectedBlocks.length; a++) {
        //     let blockRow = selectedBlocks[a];

        //     for (let b = 0; b < blockRow.length; b++) {
        //         app.stage.addChild(blockRow[b]);
        //     }
        // }

        // app.view.addEventListener('contextmenu', event => event.preventDefault());

        // currentElement = document.createElement("td");
        // currentElement.appendChild(app.view);
        // bottomRow.appendChild(currentElement);
        // displayTable.appendChild(bottomRow);

        // document.querySelector("#puzzle-display").appendChild(displayTable);
        // //document.querySelector("#puzzle-display").appendChild(app.view);

        // app.ticker.add(checkResults);

        // addReplayButton();
    }

    function checkResults() {
        if (puzzleComplete()) {
            //console.log("Puzzle Complete!");
            app.ticker.remove(checkResults);
            removeBlockInteraction();
            app.ticker.add(displayCompletePuzzle);
        }
    }

    function puzzleComplete() {
        for (let a = 0; a < selectedBlocks.length; a++) {
            for (let b = 0; b < selectedBlocks[a].length; b++) {
                if (selectedBlocks[a][b].filled != selectedBlocks[a][b].selected) {
                    //console.log(`Row ${a} column ${b}: is ${selectedBlocks[a][b].selected} should be ${selectedBlocks[a][b].filled}`);
                    return false;
                }
                //return false;
            }
        }

        return true;
    }

    function removeBlockInteraction() {
        for (let a = 0; a < selectedBlocks.length; a++) {
            for (let b = 0; b < selectedBlocks[a].length; b++)
                selectedBlocks[a][b].interactive = false;
        }
    }

    let blockCounter = 0;

    function displayCompletePuzzle() {
        let currentBlock = selectedBlocks[Math.floor(blockCounter / selectedBlocks.length)][blockCounter % selectedBlocks[0].length];
        currentBlock.displayColor = currentBlock.color;
        currentBlock.drawBlock(currentBlock.displayColor);
        blockCounter++;

        if (blockCounter == selectedBlocks.length * selectedBlocks[0].length)
            app.ticker.remove(displayCompletePuzzle);
    }

    function resetPuzzles() {
        images.forEach(image => image.resetPuzzle());
        blockCounter = 0;

        if (displayTable != null) document.querySelector("#puzzle-display").removeChild(displayTable);
        if (replayButton != null) document.querySelector("#button-container").removeChild(replayButton);
    }

    let replayButton;

    function addReplayButton() {
        replayButton = document.createElement("button");
        replayButton.type = "button";
        replayButton.id = "replay-button";
        replayButton.classList.add("btn");
        replayButton.classList.add("btn-lg");
        replayButton.innerHTML = "Generate New Puzzle";

        replayButton.addEventListener("click", displayPuzzle);
        document.querySelector("#button-container").appendChild(replayButton);
    }
}