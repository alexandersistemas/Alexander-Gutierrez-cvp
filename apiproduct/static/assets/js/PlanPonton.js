//Al cargar inicialmente la página
$(document).ready( function() {
    $(document).ready( function() {

        document.getElementById('lblDia').style.display = "none";
        document.getElementById('FechaDia').style.display = "none";
        document.getElementById('lblHoraInicio').style.display = "none";
        document.getElementById('lblHoraFin').style.display = "none";
        document.getElementById('HoraInicio').style.display = "none";
        document.getElementById('HoraFin').style.display = "none";
        document.getElementById('lblSeleccionFechas').style.display = "none";
        document.getElementById('lblFechaInicio').style.display = "none";
        document.getElementById('lblFechaFin').style.display = "none";
        document.getElementById('FechaInicio').style.display = "none";
        document.getElementById('FechaFin').style.display = "none";
        document.getElementById('btnReserva').style.display = "none";
        reservaHoras();
    });
});


function reservaHoras() {

    document.getElementById('lblDia').style.display = "block";
    document.getElementById('FechaDia').style.display = "block";
    document.getElementById('lblHoraInicio').style.display = "block";
    document.getElementById('lblHoraFin').style.display = "block";
    document.getElementById('HoraInicio').style.display = "block";
    document.getElementById('HoraFin').style.display = "block";
    document.getElementById('btnReserva').style.display = "block";
    document.getElementById('lblSeleccionFechas').style.display = "none";
    document.getElementById('lblFechaInicio').style.display = "none";
    document.getElementById('lblFechaFin').style.display = "none";
    document.getElementById('FechaInicio').style.display = "none";
    document.getElementById('FechaFin').style.display = "none";

}

function reservaDias() {


    document.getElementById('lblDia').style.display = "none";
    document.getElementById('FechaDia').style.display = "none";
    document.getElementById('lblHoraInicio').style.display = "none";
    document.getElementById('lblHoraFin').style.display = "none";
    document.getElementById('HoraInicio').style.display = "none";
    document.getElementById('HoraFin').style.display = "none";
    document.getElementById('lblSeleccionFechas').style.display = "block";
    document.getElementById('lblFechaInicio').style.display = "block";
    document.getElementById('lblFechaFin').style.display = "block";
    document.getElementById('FechaInicio').style.display = "block";
    document.getElementById('FechaFin').style.display = "block";
    document.getElementById('btnReserva').style.display = "block";
}