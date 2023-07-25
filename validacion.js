const $form = document.querySelector("#form");
const inputs = document.querySelectorAll("#form input");
const inputa = document.querySelectorAll("#form textarea");

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,50}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    asunto: /^[a-zA-ZÀ-ÿ\s]{1,20}$/,
    mensaje: /^[a-zA-ZÀ-ÿ0-9\s]{1,200}$/,
};

const campos = {
    nombre: false,
    email: false,
    asunto: false,
    mensaje: false,
};

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre":
            validarCampo(expresiones.nombre, e.target, "nombre");
            break;
        case "email":
            validarCampo(expresiones.email, e.target, "email");
            break;
        case "asunto":
            validarCampo(expresiones.asunto, e.target, "asunto");
            break;
        case "mensaje":
            textArea(expresiones.mensaje, e.target, "mensaje");
            break;
    }
};

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`input_${campo}`).classList.remove("incorrecto");
        document.getElementById(`input_${campo}`).classList.add("correcto");
        document
            .querySelector(`#input_${campo} i`)
            .classList.remove("fa-times-circle");
        document
            .querySelector(`#input_${campo} i`)
            .classList.add("fa-check-circle");

        campos[campo] = true;
    } else {
        document.getElementById(`input_${campo}`).classList.add("incorrecto");
        document.getElementById(`input_${campo}`).classList.remove("correcto");
        document
            .querySelector(`#input_${campo} i`)
            .classList.add("fa-times-circle");
        document
            .querySelector(`#input_${campo} i`)
            .classList.remove("fa-check-circle");
        campos[campo] = false;
    }
};


inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
});


const textArea = (expresion, textarea, campo) => {
    if (expresion.test(textarea.value)) {
        document.getElementById(`input_${campo}`).classList.remove("incorrecto");
        document.getElementById(`input_${campo}`).classList.add("correcto");
        document
            .querySelector(`#input_${campo} i`)
            .classList.remove("fa-times-circle");
        document
            .querySelector(`#input_${campo} i`)
            .classList.add("fa-check-circle");

        campos[campo] = true;
    } else {
        document.getElementById(`input_${campo}`).classList.add("incorrecto");
        document.getElementById(`input_${campo}`).classList.remove("correcto");
        document
            .querySelector(`#input_${campo} i`)
            .classList.add("fa-times-circle");
        document
            .querySelector(`#input_${campo} i`)
            .classList.remove("fa-check-circle");
        campos[campo] = false;
    }
};
inputa.forEach((textarea) => {
    textarea.addEventListener("keyup", validarFormulario);
    textarea.addEventListener("blur", validarFormulario);
});

const $enviar = document.querySelector("#enviar");

$form.addEventListener("submit", enviarCorreo);

function enviarCorreo(e) {
    e.preventDefault();
    if (
        campos.nombre &&
        campos.email &&
        campos.asunto &&
        campos.mensaje
    ) {
        const form = new FormData(this);
        form.get("nombre");
        form.get("email");
        form.get("asunto");
        form.get("mensaje");

        $enviar.setAttribute(
            "href",
            `mailto:carlostriana7465@gmail.com?subject=Nombre:${form.get("nombre")},E-mail: ${form.get("email"
            )},Asunto: ${form.get("asunto")},&body=${form.get("mensaje")}`
        );
        $enviar.click();
    }
}