import Grid from './core/Grid.js';
import CanvasRenderer from './ui/CanvasRenderer.js';

/**
 * Game class is the main entry class that occustrates the game logic.
 */
class Game {
  /**
  * Constructor. Initializes the game.
  */
  constructor({width, height}) {
    this.grid = new Grid(width, height);
    this.renderer = new CanvasRenderer(this.grid);
    this.lastCall = new Date();
    this.targetFPS = 60;
    this.expectedFPSTime = 1000/this.targetFPS;
  }

  /**
   * Starts the Game
   */
  start() {
    this.render();
  }

  /**
   * Play the same
   */
  render() {
    const self = this;
    setTimeout( function() {
      self.renderer.update(self.grid.getNextGeneration());
      requestAnimationFrame(function() {
        self.render();
      });
    }, this.expectedFPSTime);
  }
}

export default Game;
