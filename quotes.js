let xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = () => {
	if(xhttp.readyState == XMLHttpRequest.DONE){
		//alert(xhttp.responseText);
		let resJson = JSON.parse(xhttp.responseText);
		document.getElementById('quote').innerHTML = '<p>'+resJson.quote+'</p>'+'<p>-'+resJson.author+'</p>';
	}
}
xhttp.open('GET', 'https://talaikis.com/api/quotes/random/', true);
xhttp.send(null);

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  // add a zero in front of numbers<10
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
  t = setTimeout(function() {
    startTime()
  }, 500);
}
startTime();