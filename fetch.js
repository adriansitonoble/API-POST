document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("Registro");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita el envío automático del formulario

        // Valores del form
        const nombre = document.getElementById("Nombre").value;
        const apellido = document.getElementById("Apellido").value;
        const fechanacimiento = document.getElementById("Fechanacimiento").value;

        const _datos = {
            nombre,
            apellido,
            fechanacimiento
        };

        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            body: JSON.stringify(_datos), // Datos en formato JSON
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data); // Respuesta del servidor
        });
    });
});
