

/**
 * Base Class for all Renderers. Sub classes should override the implement the
 * respective methods
 */
class BaseRenderer {
  /**
     * Constructor takes the gridData
     * @param {*} gridData the Conway's' Game of Life data to be used for rendering
     */
  constructor(gridData) {
    this.gridData = gridData;
    this.gameBoardElment = document.getElementById('gameBoard');
  }

  /**
   * This function should renderer the updates to the Game. This function will be called on each
   */
  render() {
    throw new Error('render() Not implemented. Renderer should use this function to renderer the Game Grid');
  }

  /**
     * This function should renderer the updates to the Game. This function will be called on each
     * Tick of render loop.
     */
  update() {
    throw new Error('update() Not implemented. Renderer should use this function to renderer the Game updates');
  }

  /**
     * This function should reset i.e clean and restart the Game
     */
  reset() {
    throw new Error('reset() Not implemented. Renderer should use this function to reset the Game');
  }
}

export default BaseRenderer;
