// circle defined by three points
// a,b,c are indices of control points in global.allPoints
class Circle {
    constructor(a,b,c){
        this.a = a
        this.b = b
        this.c = c
    }
    
    xyr(){
        
        var a = global.allPoints[this.a].pos
        var b = global.allPoints[this.b].pos
        var c = global.allPoints[this.c].pos
        
        var xyr = constructCircle( 
            a.x,a.y, 
            b.x,b.y, 
            c.x,c.y )
            
        return xyr
    }
    
    draw(g){
        
        var xyr = this.xyr()
        
        g.moveTo( xyr[0]+xyr[2], xyr[1],  )
        g.arc(  xyr[0], xyr[1], xyr[2], 0, twopi )
    }
    
    
}