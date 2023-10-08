

// Initialize the game
function init() {
    var cvs = document.getElementById("gameCanvas");
    cvs.addEventListener("mousemove", mouseMove);
    cvs.addEventListener("click", mouseClick);
    global.canvas = cvs
    global.ctx = cvs.getContext("2d");
    
    
    resetRand() // math/rng.js
    fitToContainer()
    resetGame()
    requestAnimationFrame(gameLoop);
}


function resetGame(){
    resetRand()
    global.autoResetCountdown = global.autoResetDelay
    
    global.allCircles = []
    global.allPoints = []
    
    var baseRad = global.baseRad
    
    var n = 70
    var dangle = twopi / n
    for( var i = 0 ; i < n ; i++ ){
        let angle = dangle*i
        
        let pos = global.screenCenter.add(vp(angle+pio2,baseRad))
        let endPos = global.screenCenter.add(vp(angle+pio2,baseRad/9))
        let b = new ControlPoint(pos,[pos,endPos])
        b.useOuterFocus = true
        let c = new ControlPoint(global.screenCenter.add(vp(angle-pio2,baseRad)))
        
        global.allPoints.push(b,c)
        let j = global.allPoints.length
        var bases = [j-1,j-2]
        
        pos = global.screenCenter.sub(vp(angle,baseRad*2))
        endPos = global.screenCenter.sub(vp(angle,baseRad/8))
        let extremes = [pos,endPos]
        
        let controlPoint = new ControlPoint(pos,extremes)
        controlPoint.useInnerFocus = true
        global.allPoints.push(controlPoint)
        let cop = global.allPoints.length-1
        global.allCircles.push(new Circle( bases[0], bases[1], cop ))
    }
    
}

// Main game loop
let secondsPassed;
let oldTimeStamp;
let fps;

function gameLoop(timeStamp) {
    
    var msPassed = 0;
    if (oldTimeStamp) {
      msPassed = timeStamp - oldTimeStamp;
    }
    var secondsPassed = msPassed / 1000;
    oldTimeStamp = timeStamp;
    var fps = Math.round(1 / secondsPassed);


    msPassed = Math.min(msPassed,50)

    update(msPassed);
    draw(fps);

    requestAnimationFrame(gameLoop);
}


// Initialize the game
init();

