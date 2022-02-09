var enableMouse = true

document.addEventListener('mousemove', function(ev){
  if(!enableMouse) return
  document.getElementById('top-block').style.height = ev.clientY - 40 + 'px';
  document.getElementById('bottom-block').style.height = document.body.clientHeight - ev.clientY -40 + 'px';

  document.getElementById('left-block').style.width = ev.clientX - 40 + 'px'
  document.getElementById('right-block').style.width = document.body.clientWidth - ev.clientX -40 + 'px';
  
},false);


function beans(x, y, scale){
    enableMouse = false
    document.getElementById('top-block').style.height = y - scale/2 + 'px';
  document.getElementById('bottom-block').style.height = document.body.clientHeight - y - scale/2 + 'px';

  document.getElementById('left-block').style.width = x - scale/2 + 'px'
  document.getElementById('right-block').style.width = document.body.clientWidth - x -scale/2 + 'px';
}

function expand(scale) {
  let id = null;
  const elem = document.getElementById("animate");   
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
/*
      document.getElementById('left-block').style.width =
      document.getElementById('right-block').style.width =
      document.getElementById('top-block').style.width =
      document.getElementById('bottom-block').style.width =
        */
    }
  }
}
