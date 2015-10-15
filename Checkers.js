'use strict';


//Make Checker Class
function CheckerClass(color, position) {
    this.color = color;
    this.position = position;
    if (this.color === 'white') {
        this.symbol = String.fromCharCode(0x125CB);
    } else {
        this.symbol = String.fromCharCode(0x125CF);
    }
    
    // update the checker's position
    this.movePosition = function(newPosition) {
        this.position = newPosition;
    }
}

//Make Board Class
function BoardClass() {
    this.grid = [];
    // creates an 8x8 array, filled with null values
    this.createGrid = function() {
        // loop to create the 8 rows
        for (var row = 0; row < 8; row++) {
            this.grid[row] = [];
            // push in 8 columns of nulls
            for (var column = 0; column < 8; column++) {
                this.grid[row].push(null);
            }
        }
    }

    // prints out the board
    this.viewGrid = function() {
        // add our column numbers
        var string = "  0 1 2 3 4 5 6 7\n";
        for (var row = 0; row < 8; row++) {
            // we start with our row number in our array
            var rowOfCheckers = [row];
            // a loop within a loop
            for (var column = 0; column < 8; column++) {
                // if the location is "truthy" (contains a checker piece, in this case)
                if (this.grid[row][column]) {
                    // push the symbol of the check in that location into the array
                    rowOfCheckers.push(this.grid[row][column].symbol);
                } else {
                    // just push in a blank space
                    rowOfCheckers.push(' ');
                }
            }
            // join the rowOfCheckers array to a string, separated by a space
            string += rowOfCheckers.join(' ');
            // add a 'new line'
            string += "\n";
        }
        console.log(string);
    }
    
    // Our "bag of checkers", starts out empty
    this.checkersArray = [];
    
    // creates the checkers to put into out "bag" (this.checkersArray)
    this.createCheckerInstances = function() {
        
        // hardcoded positions of the checkers
        var whitePositions = [
            [0, 1], [0, 3], [0, 5], [0, 7],
            [1, 0], [1, 2], [1, 4], [1, 6],
            [2, 1], [2, 3], [2, 5], [2, 7]
        ];
        
        var blackPositions = [ 
            [5, 0], [5, 2], [5, 4], [5, 6],
            [6, 1], [6, 3], [6, 5], [6, 7],
            [7, 0], [7, 2], [7, 4], [7, 6],
        ];
        
        for (var i = 0; i < 12; i++) {
            this.checkersArray.push( new CheckerClass('white', whitePositions[i]) );
            this.checkersArray.push( new CheckerClass('black', blackPositions[i]) );
         }
    }
    
    this.placeCheckers = function() {
        for (var i = 0; i < this.checkersArray.length; i++) {
            var currentChecker = this.checkersArray[i];
            this.grid[ currentChecker.position[0] ][ currentChecker.position[1] ] = currentChecker;
        }
    }
    this.selectChecker = function(row, column) {
        return this.grid[row][column];
    }
    
    this.resetGrid = function() {
        this.grid = [];
        this.createGrid();
        this.placeCheckers();
    }
    
    this.killChecker = function(position) {
        var checker = this.selectChecker(position[0], position[1]);
        var checkerIdx = this.checkersArray.indexOf(checker);
        this.checkersArray.splice(checkerIdx, 1);
    }
}

//Make Game Class
function GameClass() {
    this.board = new BoardClass();
    
    this.start = function() {
        this.board.createGrid();
        this.board.createCheckerInstances();
        this.board.placeCheckers();
        this.board.viewGrid();
    }
    
    this.moveChecker = function(start, end) { //[5, 0], [4, 1]
        var checker = this.board.selectChecker(start[0], start[1]);
        checker.movePosition(end);
        if (Math.abs(start[1] - end[1]) === 2) {
            var killPos = [(start[0] + end[0]) / 2, (start[1] + end[1]) / 2];
            this.board.killChecker(killPos);
        }
        this.board.resetGrid();
        this.board.viewGrid();
    }
}

//call functions
var game = new GameClass()
game.start()

//Chnage from manual to get user input
//game.moveChecker([5, 0], [4, 1])