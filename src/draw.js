
    
    
// Render graphics
function draw(fps, t) {
    var g = global.ctx
    var canvas = global.canvas
    g.fillStyle = global.backgroundColor
    g.fillRect( 0, 0, 1, 1 )

    // draw circles
    g.strokeStyle = global.lineColor
    g.lineWidth = global.lineWidth
    g.beginPath()
    global.allCircles.forEach( b => b.draw(g) )
    g.stroke()
    
    
    // debug draw corners
    if( false ){
        global.screenCorners.forEach( c => {
            g.fillStyle = 'red'
            g.beginPath()
            g.moveTo(c.x,c.y)
            g.arc(c.x,c.y,.1,0,twopi)
            g.fill()
        })
    }

    // debug draw mouse
    if( global.debugMouse ){
        let c = global.mousePos
        g.fillStyle = 'red'
        g.beginPath()
        g.moveTo(c.x,c.y)
        g.arc(c.x,c.y,.01,0,twopi)
        g.fill()
    }

    //debug
    if( global.debugPoints ){
        g.fillStyle = 'red'
        g.beginPath()
        global.allPoints.forEach(p => p.draw(g))
        g.fill()
    }
}