import BaseRenderer from './BaseRenderer.js';

/**
 * Basic Canvas Renderer
 */
class CanvasRenderer extends BaseRenderer {
  /**
     *
     * @param {*} gridData
     */
  constructor(gridData) {
    super(gridData);
    this.canvas = document.createElement('canvas');
    this.canvas.setAttribute('style', 'width:800px;height:800px; ');
    this.canvasCtx = this.canvas.getContext('2d');
    this.canvasCtx.lineWidth = 0.01;
    this.canvasCtx.strokeStyle = 'rgb(0,0,0)';
    this.gameBoardElment.appendChild(this.canvas);
    this.fixDPI();
    this.colWidth = this.canvas.width / this.gridData.width;
    this.colHeight = this.canvas.height / this.gridData.height;
  }

  /**
   * Lets fix the blurry canvas
   * Fix the Canvas DPI for device pixel ratio
   */
  fixDPI() {
    // get DPI
    const dpi = window.devicePixelRatio;
    // get CSS height
    // the + prefix casts it to an integer
    // the slice method gets rid of "px"
    const styleHeight = +getComputedStyle(this.canvas).getPropertyValue('height').slice(0, -2);
    // get CSS width
    const styleWidth = +getComputedStyle(this.canvas).getPropertyValue('width').slice(0, -2);
    // scale the canvas
    this.canvas.setAttribute('height', styleHeight * dpi);
    this.canvas.setAttribute('width', styleWidth * dpi);
  }

  /**
     * Render the initial state of the canvas
     */
  render() {
    this.update(this.gridData.cells);
  }

  /**
   * Update the canvas with the new passed data
   * @param {Array} cells passed grid data
   */
  update(cells) {
    cells.map((row) => {
      row.map((cell) => {
        const x = cell.x * this.colWidth;
        const y = cell.y * this.colHeight;
        this.canvasCtx.fillStyle = cell.alive ? 'black' : 'lightgrey';
        this.canvasCtx.fillRect(x, y, this.colWidth, this.colHeight);
      });
    });
  }
}

export default CanvasRenderer;
