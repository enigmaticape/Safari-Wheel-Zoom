zoomWithWheel = false; 
zoomLevel     = 1;
zoomIncrement = 0.2;

document.addEventListener("mousewheel", function( event ) {

    if( zoomWithWheel ) {
        if( event.wheelDeltaY > 0  ) {
            zoomLevel += zoomIncrement;
        }
        if( event.wheelDeltaY < 0 ) {
            zoomLevel -= zoomIncrement;
        }
        document.body.style.zoom = zoomLevel;
        return false;
    }
}, true );

document.addEventListener("click", function( event ) {
    if(event.button == 1) {
      event.preventDefault();
      zoomWithWheel = !zoomWithWheel;
    }
}, true);
