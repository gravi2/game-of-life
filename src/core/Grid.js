import Cell from './Cell.js';

/**
 * Grid class hold the grid of the Conway game of the life.
 */
class Grid {
  /**
     * Contrutor
     * @param {*} width of the grid
     * @param {*} height of the grid
     */
  constructor(width = 100, height = 100) {
    this.width = width;
    this.height = height;
    this.build();
  }

  /**
   * Builds the grid based the width and height.
   * Each cell in the grid will be a instance of the Cell class.
   */
  build() {
    this.cells = new Array(this.width);
    for (let w = 0; w < this.width; w++) {
      this.cells[w] = new Array(this.height);
      for (let h = 0; h < this.height; h++) {
        this.cells[w][h] = new Cell({x: w, y: h, alive: Math.random() > 0.95});
      }
    }
  }

  /**
   * Returns the neighboring cells for the passed/specified cell
   * @param {*} cell
   * @return {Array} of cells
   */
  getNeighbors(cell) {
    const neighbors = [];
    const x = cell.x;
    const y = cell.y;

    if (x > 0 && x < (this.width - 1) && y > 0 && y < (this.height - 1)) {
      neighbors.push(this.cells[x - 1][y]);
      neighbors.push(this.cells[x - 1][y - 1]);
      neighbors.push(this.cells[x - 1][y + 1]);
      neighbors.push(this.cells[x][y - 1]);
      neighbors.push(this.cells[x][y + 1]);
      neighbors.push(this.cells[x + 1][y]);
      neighbors.push(this.cells[x + 1][y - 1]);
      neighbors.push(this.cells[x + 1][y + 1]);
    } else {
      if (x === 0) {
        neighbors.push(this.cells[x + 1][y]);
      }

      if (y === 0) {
        neighbors.push(this.cells[x][y + 1]);
      }

      if (x < this.width - 1) {
        neighbors.push(this.cells[x + 1][y]);
      }
    }
    return neighbors;
  }

  /**
   * Returns the next generation of the cells
   * This is the core logic of the Game of life.
   * @return {Array} Two dimensional array of new generation of cells
   */
  getNextGeneration() {
    const newGeneration = new Array(this.cells.length);
    // const newGeneration = this.cells.map((row) => {
    //   return row.slice(0);
    // });
    for (let i = 0; i < this.cells.length; i++) {
      newGeneration[i] = new Array(this.cells[i].length);
      for (let j = 0; j < this.cells[i].length; j++) {
        newGeneration[i][j] = this.cells[i][j];
        newGeneration[i][j].setAlive(this.getNeighbors(this.cells[i][j]));
      }
    }
    this.cells = newGeneration;
    return newGeneration;
  }
}

export default Grid;
