function cursorClick(){
    var camera = document.querySelector("#camera");
    console.log(JSON.stringify(camera.getAttribute('rotation')));
}

$(document).on('click','#links', function(e) {
    var camera = document.querySelector("#camera");
    var cameraY  = camera.getAttribute('rotation').y;
    var background = document.querySelector("#image-360");
    console.log(JSON.stringify("Debug: " +e.target.id));
    
    if(e.target.id == '#twelve_30'){
    $("#links").empty();
       addLink('#twelve_0', -183, 5, 182);
    }
    
    if(e.target.id == '#twelve_0'){
        $("#links").empty();
        addLink('#twelve_30',0, 5, -2);
        addLink('#three_15',60, 5, -25);
        addLink('#nine_45',315, 5, -146);
    }
    
    if(e.target.id == '#three_15'){
        $("#links").empty();
        addLink('#twelve_0', -195, 5, -120);
        addLink('#three_45', -145, 5, 0);
        addLink('#six_30', -101, 5, 134);
    }
    
    if(e.target.id == '#three_45'){
        $("#links").empty();
        addLink('#three_15',176,5,32);
    }
    
    if(e.target.id == '#six_30'){
        $("#links").empty();
        addLink('#three_15',-57, 5, 71);
        addLink('#six_0',-2 ,5, 0);
        addLink('#nine_45', 55, 5, 120);
    }
    
    if(e.target.id == '#six_0'){
        $("#links").empty();
        addLink('#six_30',178, 5, -177);
    }
    
    if(e.target.id == '#nine_45'){
        $("#links").empty();
        addLink('#six_30',-51, 5, -137);
        addLink('#nine_15',0, 5, 0);
        addLink('#twelve_0',55, 5, 150);
    }
    
    if(e.target.id == '#nine_15'){
        $("#links").empty();
        addLink('#nine_45',-183, 5, 180);
    }
     
})

function addLink(name, theta, scale, rotation){
    var link = document.createElement('a-obj-model');
    link.setAttribute('template', 'src: #link');
    link.setAttribute('data-id', name);
    link.setAttribute('data-src', name+'-photo');
    link.setAttribute('data-rotation', rotation);
    link.setAttribute('rotation', {
        x:10,
        y:theta,
        z:0
    });
    link.setAttribute('position', {
        x:-scale*Math.sin(toRadians(theta)),
        y:0,
        z:-scale*Math.cos(toRadians(theta))
    });
    link.setAttribute('scale','.01, .01, .04');
    links.appendChild(link);
}

function toRadians (angle) {
  return angle * (Math.PI / 180);
}