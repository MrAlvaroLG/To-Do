var fechaHora = new Date();

var options = { year: 'numeric', month: 'long', day: 'numeric',};
var fechaFormateada = fechaHora.toLocaleDateString('en-EN', options);

document.getElementById("date").innerHTML = fechaFormateada;