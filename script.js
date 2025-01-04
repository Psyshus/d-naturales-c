function calcularDias() {
    const fechaInicio = document.getElementById('fechaInicio').value;
    const fechaFin = document.getElementById('fechaFin').value;

    if (!fechaInicio || !fechaFin) {
        document.getElementById('resultado').textContent = "Por favor, selecciona ambas fechas.";
        return;
    }

    const fecha1 = new Date(fechaInicio);
    const fecha2 = new Date(fechaFin);

    // Verificar si las fechas son válidas
    if (isNaN(fecha1.getTime()) || isNaN(fecha2.getTime())) {
        document.getElementById('resultado').textContent = "Una o ambas fechas no son válidas.";
        return;
    }

    // Calcular la diferencia en milisegundos y convertirla a días
    const diferencia = Math.abs(fecha2 - fecha1);
    const dias = Math.ceil(diferencia / (1000 * 3600 * 24));

    document.getElementById('resultado').textContent = `Han pasado ${dias} días naturales.`;
}
