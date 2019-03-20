(function() {
    var formulario = document.getElementById("form");
    var elements = formulario.elements;
    //funciones
    var validInputs = function() {
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].type == "text" || elements[i].type == "email" || elements[i].type == "password") {
                if (elements[i].value == 0) {
                    console.log("No llenaste " + elements[i].name);
                    elements[i].className = elements[i].className + " error"
                    return false;
                } else {
                    elements[i].className = elements[i].className.replace(" error", "");
                }

            }
        }
        if (elements.Password.value !== elements.Password2.value) {
            elements.Password.value = "";
            elements.Password2.value = "";
            elements.Password.className = elements.Password.className + " error";
            elements.Password2.className = elements.Password2.className + " error";
        } else {
            elements.Password.className = elements.Password.className.replace(" error", "");
            elements.Password2.className = elements.Password2.className.replace(" error", "");
            return true;
        }
    };

    var validarCheckbox = function() {
        var options = document.getElementById('Ter_y_con');
        var result = false;

        for (var i = 0; i < elements.length; i++) {
          if (elements[i].type == "checkbox") {
            for (var j = 0; j < options.length; j++) {
                if (options[j].checked) {
                    result = true;
                    break;
                }
            }

            if (result == false) {
                elements[i].parentNode.className = elements[i].parentNode.className + " error";
                console.log("El campo 'checkbox' no esta seleccionado");
                return false;
            } 
            else {
              // Eliminamos la clase Error del checkbox
                elements[i].parentNode.className = elements[i].parentNode.className.replace(" error", "");
                return true;
            }
          }
        }
      };

    var enviar = function(e) {
        if (!validInputs()) {
            e.preventDefault();
        }
        else if (!validarCheckbox()) {
            e.preventDefault();
        }
        else {
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
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].type == "text" || elements[i].type == "email" || elements[i].type == "password") {
            elements[i].addEventListener("focus", focusInputs);
            elements[i].addEventListener("blur", blurInputs);
        }
    }
}());