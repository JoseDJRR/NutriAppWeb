(function() {
    var formulario = document.getElementById("form");
    var elementos = formulario.elements;
    //funciones
    var validInputs = function() {
        for (var i = 0; i < elementos.length; i++) {
            if (elementos[i].type == "email" || elementos[i].type == "password") {
                if (elementos[i].value == 0) {
                    console.log("No llenaste " + elementos[i].name);
                    elementos[i].className = elementos[i].className + " error"
                    return false;
                } else {
                    elementos[i].className = elementos[i].className.replace(" error", "");
                }

            }
        }
        if (elementos.Password.value !== elementos.Password2.value) {
            elementos.Password.value = "";
            elementos.Password2.value = "";
            elementos.Password.className = elementos.Password.className + " error";
            elementos.Password2.className = elementos.Password2.className + " error";
        } else {
            elementos.Password.className = elementos.Password.className.replace(" error", "");
            elementos.Password2.className = elementos.Password2.className.replace(" error", "");
            return true;
        }
    };

    var enviar = function(e) {
        if (!validInputs()) {
            e.preventDefault();
        } else {
            console.log('Enviar datos');
        }
    };

    var focusInputs = function() {
        this.parentElement.children[1].className = "label active";
        this.parentElement.children[0].className = this.parentElement.children[0].className.replace("error", "");
    };
    var blurInputs = function() {
        if (this.value <= 0) {
            this.parentElement.children[1].className = "label";
            this.parentElement.children[0].className = this.parentElement.children[0].className + " error";
        };
    };
    //eventos
    formulario.addEventListener("submit", enviar);
    for (var i = 0; i < elementos.length; i++) {
        if (elementos[i].type == "email" || elementos[i].type == "password") {
            elementos[i].addEventListener("focus", focusInputs);
            elementos[i].addEventListener("blur", blurInputs);
        }
    }
}())