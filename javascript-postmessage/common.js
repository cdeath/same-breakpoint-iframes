var sizes = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 960,
  xl: 1200,
};

function setWidth(breakpoints) {
  var style = document.createElement('style'),
      innerHTML = '';

  breakpoints.forEach(function(breakpoint) {
    // add !important if it's really important :D
    var str = 'html,body{width:' + breakpoint.width + ';}';

    if (sizes[breakpoint.size]) {
      str = '@media(min-width:' + sizes[breakpoint.size] + 'px){' + str + '}';
    }

    innerHTML += str;
  });

  style.innerHTML = innerHTML;
  document.head.appendChild(style);
}

window.addEventListener('message', function(event) {
  console.log(document.title, event.data);
  // uncomment and validate your origins here
  // if (event.origin !== window.parent.location.origin) return;
  switch (event.data.action) {
    case 'setWidth':
      // structure the data as you see fit...
      setWidth(event.data.breakpoints);
      break;
    // bonus points: you can use this for other stuff :D
    default:
      break;
  } 
});