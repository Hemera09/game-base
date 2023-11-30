/**
 * @returns {{X: number, Y: number}} The center of the canvas as a point
 */
function getCanvasCenter() {
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    return {
        X: centerX,
        Y: centerY
    };
}