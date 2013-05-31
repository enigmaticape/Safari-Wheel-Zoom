zoomWithWheel = false; 
zoomLevel     = 1;
zoomIncrement = 0.2;

document.addEventListener("mousewheel", function( event ) {
    
    
    if( zoomWithWheel  )  {
        
        event.preventDefault();
        event.stopPropagation();
        
        if( event.wheelDeltaY > 0  ) {
            zoomLevel += zoomIncrement;
        }
        if( event.wheelDeltaY < 0 ) {
            zoomLevel -= zoomIncrement;
        }
        
        // CSS transform works much less jankily than zoom
        document.body.style.webkitTransform = "scale(" + zoomLevel + ")";
        document.body.style.webkitTransformOrigin="0 0";
        
    }
}, true );

document.addEventListener("click", function( event ) {
    
    if(event.button == 1) {
      
      event.preventDefault();
      event.stopPropagation();
      
      zoomWithWheel = !zoomWithWheel;

    }
}, true);
