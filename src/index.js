/**
 * @type {HTMLCanvasElement}
 */
const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');


/**
 * @param {MouseEvent} event
 */
 
function draw(event){
   
    let mouseX = event.offsetX;
    let mouseY = event.offsetY;
    let ctrlKey = event.ctrlKey

    if (ctrlKey){
        ctx.fillRect(mouseX,mouseY, 10, 10);
    }

    
   
    
}

canvas.addEventListener('mousemove',draw);
