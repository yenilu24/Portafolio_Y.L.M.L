import "../styles/main.less";

document.addEventListener("DOMContentLoaded", function () {
    var hmbButton = document.getElementById("hmbButton");
    var nav = document.getElementById("mainNav");

    hmbButton.addEventListener("click", function () {
        var isOpen = nav.classList.toggle("hidden") === false;
        hmbButton.classList.toggle("open", isOpen);
        hmbButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            nav.classList.add("hidden");
            hmbButton.classList.remove("open");
            hmbButton.setAttribute("aria-expanded", "false");
        });
    });

    var isEmptyRegex = /^\s*$/;
    var isValidEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    var form = document.getElementById("contactForm");
    var nombre = document.getElementById("nombre");
    var email = document.getElementById("email");
    var mensaje = document.getElementById("mensaje");
    var formMensaje = document.getElementById("formMensaje");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        var hayError = false;

        document.getElementById("errorNombre").innerHTML = "";
        document.getElementById("errorEmail").innerHTML = "";
        document.getElementById("errorMensaje").innerHTML = "";
        formMensaje.innerHTML = "";

        if (isEmptyRegex.test(nombre.value)) {
            document.getElementById("errorNombre").innerHTML = "El nombre no puede estar vacío.";
            hayError = true;
        }

        if (!isValidEmailRegex.test(email.value)) {
            document.getElementById("errorEmail").innerHTML = "Escribe un correo válido.";
            hayError = true;
        }

        if (isEmptyRegex.test(mensaje.value)) {
            document.getElementById("errorMensaje").innerHTML = "El mensaje no puede estar vacío.";
            hayError = true;
        }

        if (!hayError) {
            var nombreLimpio = nombre.value.trim();
            var asunto = "Contacto desde el portafolio - " + nombreLimpio;
            var cuerpo = "Nombre: " + nombreLimpio +
                "\nCorreo: " + email.value.trim() +
                "\n\n" + mensaje.value.trim();

            window.location.href = "mailto:yenifermelgar@gmail.com" +
                "?subject=" + encodeURIComponent(asunto) +
                "&body=" + encodeURIComponent(cuerpo);

            formMensaje.textContent = "Gracias, " + nombreLimpio + ". Se abrirá tu aplicación de correo para enviar el mensaje.";
            form.reset();
        }
    });
});