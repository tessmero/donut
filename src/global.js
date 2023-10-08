const global = {
    // graphics context
    canvas: null,
    ctx: null,
    
    // relate pixels to virtual units
    canvasOffsetX: 0,
    canvasOffsetY: 0,
    canvasScale: 0,

    // mouse
    canvasMousePos: v(0,0),     //pixels
    mousePos: v(0,0),           //internal units

    // 
    backgroundColor: 'black',
    lineColor: 'white',
    lineWidth: .001,
      
    // state
    t: 0, // total time elapsed
    baseRad: .4,
    allPoints: [], // ControlPoint instances
    allCircles: [], // Circle instances
    
    //
    innerFocus: 0, // state (float) bounces between 0 and 1
    innerFocusPeriod: 20000, // duration of complete cycle
    
    //
    outerFocus: 0, // state (float) bounces between 0 and 1
    outerFocusPeriod: 31017, // duration of complete cycle
    
    // move automatically if no user input
    autoMoveCountdown: 0,
    autoMoveDelay: 1000,
    
    //debug
    debugPoints: false,
    debugMouse: false,
}