document.getElementById("getLocationBtn").addEventListener("click", function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        document.getElementById("locationOutput").innerText = "Geolocalização não é suportada pelo navegador.";
    }
});

function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    document.getElementById("locationOutput").innerText = 
        `Latitude: ${latitude}\nLongitude: ${longitude}`;
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById("locationOutput").innerText = "Usuário negou a solicitação de geolocalização.";
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById("locationOutput").innerText = "Informação de localização indisponível.";
            break;
        case error.TIMEOUT:
            document.getElementById("locationOutput").innerText = "A solicitação de localização expirou.";
            break;
        case error.UNKNOWN_ERROR:
            document.getElementById("locationOutput").innerText = "Ocorreu um erro desconhecido.";
            break;
    }
}
