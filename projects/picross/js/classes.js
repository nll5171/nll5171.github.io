class Image {
    constructor(name, canvasWidth, canvasHeight) {
        this.monochromeImage = document.createElement("img");
        this.colorImage = document.createElement("img");
        this.blocks = [];
        //this.name = name;
        this.monochromeImage.src = `./images/${name}-monochrome.png`;
        this.colorImage.src = `./images/${name}-color.png`;
        this.monochromeImage.loading = 'eager';
        this.colorImage.loading = 'eager';

        this.puzzleRows = [];
        this.puzzleColumns = [];
    
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
    }

    // Creates block for each pixel of the image. Black/White value 
    constructBlocks() {
        // Load invisible canvas on page.
        const canvas = document.querySelector("canvas");
        const ctx = canvas.getContext('2d');

        canvas.width = this.colorImage.width;
        canvas.height = this.colorImage.height;

        let mRGBA;
        let cRGBA;

        return new Promise((resolve) => {
            let monochromePromise = new Promise((resolve) => {
                // this.monochromeImage.addEventListener('load', () => {
                //     ctx.drawImage(this.monochromeImage, 0, 0);
                //     const imageData = ctx.getImageData(0, 0, this.monochromeImage.width, this.monochromeImage.height);
                //     console.log(imageData);
                //     mRGBA = imageData.data;
                //     ctx.clearRect(0, 0, this.monochromeImage.width, this.monochromeImage.height);
                //     resolve();
                // });
                // this.monochromeImage.onload = () => {
                //     //mRGBA = this.getDataOfImage(ctx, this.monochromeImage);
                //     this.getDataOfImage(ctx, this.monochromeImage).then((rgba) => {
                //         mRGBA = rgba;
                //         resolve();
                //     });
                // };
                //this.monochromeImage.src = `./images/${this.name}-monochrome.png`;
                this.monochromeImage.addEventListener('load', () => {
                    mRGBA = this.getDataOfImage(ctx, this.monochromeImage);
                    resolve();
                })
            });

            let colorPromise = new Promise((resolve) => {
                // this.colorImage.addEventListener('load', () => {
                //     ctx.drawImage(this.colorImage, 0, 0);
                //     const imageData = ctx.getImageData(0, 0, this.colorImage.width, this.colorImage.height);
                //     console.log(imageData);
                //     cRGBA = imageData.data;
                //     ctx.clearRect(0, 0, this.colorImage.width, this.colorImage.height);
                //     resolve();
                // });
                // this.colorImage.onload = () => {
                //     //cRGBA = this.getDataOfImage(ctx, this.colorImage);
                //     this.getDataOfImage(ctx, this.colorImage).then((rgba) => {
                //         cRGBA = rgba;
                //         resolve();
                //     });
                // };
                // this.colorImage.src = `./images/${this.name}-color.png`;
                this.colorImage.addEventListener('load', () => {
                    cRGBA = this.getDataOfImage(ctx, this.colorImage);
                    resolve();
                });
            });

            Promise.all([monochromePromise, colorPromise]).then(() => {
                let blockWidth = this.canvasWidth / this.colorImage.width;
                let blockHeight = this.canvasHeight / this.colorImage.height;

                for(let a = 0; a < this.colorImage.width; a++) {
                    let blockRow = [];
            
                    for(let b = 0; b < this.colorImage.height; b++) {
                        // Checks if pixel is filled in
                        let filled = mRGBA[((this.monochromeImage.width * a) + b) * 4] == 0;
                        let completeColor = "0x";

                        for(let c = 0; c < 3; c++)
                            completeColor += cRGBA[((this.colorImage.width * a) + b) * 4 + c].toString(16).padStart(2, "0");

                        let block = new PixelBlock(filled, completeColor, (blockWidth * b), (blockHeight * a), blockWidth, blockHeight);
                        blockRow.push(block);
                    }
            
                    this.blocks.push(blockRow);
                }

                // Copy-pasted section from generatePuzzle()
                // Handle the numbers for the rows first
                for(let a = 0; a < this.blocks.length; a++) {
                    let currentRow = this.blocks[a];
                    let rowHints = [];
                    let consecutiveBlocks = 0;

                    for(let b = 0; b < currentRow.length; b++) {
                        if(currentRow[b].filled)
                            consecutiveBlocks++;

                        else if(consecutiveBlocks > 0) {
                            rowHints.push(consecutiveBlocks);
                            consecutiveBlocks = 0;
                        }
                    }

                    if(consecutiveBlocks > 0 || rowHints.length == 0) 
                        rowHints.push(consecutiveBlocks);

                    this.puzzleRows.push(rowHints);
                }

                // Handles the numbers for the columns
                for(let a = 0; a < this.blocks[0].length; a++) {
                    let columnHints = [];
                    let consecutiveBlocks = 0;

                    for(let b = 0; b < this.blocks.length; b++) {
                        if(this.blocks[b][a].filled)
                            consecutiveBlocks++;
                        
                        else if(consecutiveBlocks > 0) {
                            columnHints.push(consecutiveBlocks);
                            consecutiveBlocks = 0;
                        }
                    }

                    if(consecutiveBlocks > 0 || columnHints.length == 0) 
                    columnHints.push(consecutiveBlocks);

                    this.puzzleColumns.push(columnHints);
                }

                resolve(this);
            });
        });
    }

    resetPuzzle() {
        for(let a = 0; a < this.blocks.length; a++) {
            for(let b = 0; b < this.blocks[a].length; b++) {
                this.blocks[a][b].interactive = true;
                this.blocks[a][b].selected = false;
                this.blocks[a][b].displayColor = 0xFFFFFF;
                //this.blocks[a][b].displayColor = this.blocks[a][b].color;
                this.blocks[a][b].drawBlock();
            }
        }
    }

    // Returns the RGBA data of the image via usage of a canvas
    getDataOfImage(ctx, img) {
        ctx.drawImage(img, 0, 0);
        const rgba = ctx.getImageData(0, 0, img.width, img.height).data;
        ctx.clearRect(0, 0, img.width, img.height);
        return rgba;
    }
}

class PixelBlock extends PIXI.Graphics {
    constructor(filled, color, x = 0, y = 0, width = 0, height = 0) {
        super();
        this.lineStyle(2, 0x000000, 1);
        this.beginFill(0xFFFFFF);
        this.drawRect(0, 0, width, height);
        this.endFill();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.filled = filled; // Boolean
        this.color = color; // String in hex

        this.selected = false;
        this.displayColor = 0xFFFFFF;

        this.interactive = true;

        this.on("pointerover", () => {
            this.drawBlock(0xFFCC00);
            hoverSound.play();
        });

        this.on("pointerout", () => {
            this.drawBlock();
        });

        this.on("click", () => {
            this.selected = !this.selected;
            this.displayColor = (this.displayColor == 0x000000) ? 0xFFFFFF : 0x000000;;
            this.drawBlock();
            selectSound.play();
        });

        this.on("rightclick", () => {
            this.selected = false;
            this.displayColor = (this.displayColor == 0xC0C0C0) ? 0xFFFFFF : 0xC0C0C0;
            this.drawBlock();
            deselectSound.play();
        });
    }

    setDimensions(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    drawBlock(lineColor = 0x000000) {
        this.lineStyle(2, lineColor, 1);
        this.beginFill(this.displayColor);
        this.drawRect(0, 0, this.width, this.height);
        this.endFill();
    }
}