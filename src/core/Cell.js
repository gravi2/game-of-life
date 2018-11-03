/**
 * Cell class instance will be used to represent the cells within the Grid.
 */
class Cell {
  /**
   *
   * @param {*} alive
   * @param {*} x
   * @param {*} y
   */
  constructor({alive = false, x, y}) {
    this.alive = alive;
    this.x = x;
    this.y = y;
  }

  /**
   * Returns a boolean indicating if the cell is dead or alive
   * @return {boolean}
   */
  isAlive() {
    return this.alive;
  }

  /**
   * Sets the alive state of the cell, based on the neighbors.
   * Rules:
   * 1. If a live cell has less than 2 live neighbors, it dies
   * 2. if a live cell has 2 or 3 live neighbors, it lives
   * 3. if a live cell has more than 3 live neighbors, it dies
   * 4. if a dead cell has exactly 3 live neighbors, it becomes live.
   * @param {*} neighbors
   */
  setAlive(neighbors) {
    let count = 0;
    neighbors.forEach((n) => {
      if (n.isAlive()) {
        count++;
      }
    });

    if (this.alive && (count < 2 || count > 3) ) {
      this.alive = false;
    } else if (this.alive && (count === 2 || count === 3)) {
      this.alive = true;
    } else if (!this.alive && count === 3) {
      this.alive = true;
    } else {
      this.alive = false;
    }
  }
}

export default Cell;
