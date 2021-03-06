"use strict";

function Board(width, height) {
  this.width = width;
  this.height = height;

  this.startX = null;
  this.startY = null;

  this.spaces = [];
  var x,y;
  for(x = 1; x <= width; x++) {
    this.spaces[x] = [];
    for(y = 1; y<= height; y++){
      this.spaces[x][y] = new Space();
    }
  }
}

Board.prototype.setStart = function(x,y) {
  this.startX = x;
  this.startY = y; 
}

Board.prototype.setWall = function(x,y,direction){
  this.spaces[x][y].setWall(direction)
}
