	function Calendar(id, size, labelSettings) {
	  this.id = id;
	  this.size = size;
	  this.labelSettings = labelSettings;

	  meses = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
	  label = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];

	  this.meses = meses;

	  this.label = [];
	  this.labels = []; 
	  for (var i = 0; i < 7; i++)
	    this.label.push(label[(label.indexOf(labelSettings[0]) + this.label.length >= label.length) ? Math.abs(label.length - (label.indexOf(labelSettings[0]) + this.label.length)) : (label.indexOf(labelSettings[0]) + this.label.length)]);
	  for (var i = 0; i < 7; i++)
	    this.labels.push(this.label[i].substring(0, (labelSettings[1] > 3) ? 3 : labelSettings[1]));

	  this.date = new Date();

	  this.draw();
	  this.update();
	}

	Calendar.prototype.constructor = Calendar;
	
	Calendar.prototype.draw = function () {
	  anteriorSvg = '<svg style="width: 24px; height: 24px;" viewBox="0 0 24 24"><path fill="' + "white" + '" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"></path></svg>';
	  siguienteSvg = '<svg style="width: 24px; height: 24px;" viewBox="0 0 24 24"><path fill="' + "white" + '" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path></svg>';

	  theCalendar = document.createElement( "DIV");
	  theCalendar.className = "calendar " + "small";

	  document.getElementById(this.id).appendChild(theCalendar);

	  contenedores = [], nombres = [ 'year', 'month', 'labels', 'days' ];
	  for (var i = 0; i < nombres.length; i++) {
	    contenedores[i] = document.createElement( "DIV");
	    contenedores[i].className = nombres[i];

	    if (nombres[i] != "days") {
	      if (nombres[i] != "month") {
	        contenedores[i].style.backgroundColor = "rgba(4, 176, 16, 2)";
	        contenedores[i].style.color = "white";

	        if (nombres[i] != "labels") {
	          anterior = document.createElement("DIV");
	          anterior.id = this.id + "-year-back";
	          anterior.insertAdjacentHTML('beforeend', anteriorSvg);
	          contenedores[i].appendChild(anterior);
	          
	          texto = document.createElement("SPAN");
	          texto.id = this.id + "-" + nombres[i];
	          contenedores[i].appendChild(texto);
	          
	          siguiente = document.createElement("DIV");
	          siguiente.id = this.id + "-year-next";
	          siguiente.insertAdjacentHTML('beforeend', siguienteSvg);
	          contenedores[i].appendChild(siguiente);
	        }
	      } else {
	        contenedores[i].style.backgroundColor = "#07DF35";
	        contenedores[i].style.color = "white";

	        anterior = document.createElement("DIV");
	        anterior.id = this.id + "-month-back";
	        anterior.insertAdjacentHTML('beforeend', anteriorSvg);
	        contenedores[i].appendChild(anterior);
	        
	        texto = document.createElement("SPAN");
	        texto.id = this.id + "-" + nombres[i];
	        contenedores[i].appendChild(texto);
	        
	        siguiente = document.createElement("DIV");
	        siguiente.id = this.id + "-month-next";
	        siguiente.insertAdjacentHTML('beforeend', siguienteSvg);
	        contenedores[i].appendChild(siguiente);
	      }
	    }
	  }

	  for (var i = 0; i < this.labels.length; i++) {
	    labell = document.createElement("SPAN");
	    labell.id = this.id + "-label-" + (i + 1);
	    labell.appendChild(document.createTextNode(this.labels[i]));

	    contenedores[2].appendChild(labell);
	  }

	  filas = [], dDias = [], rRadios = [];
	  for (var i = 0; i < 6; i++) {
	    filas[i] = document.createElement("DIV");
	    filas[i].className = "row";
	  }
	  
	  for (var i = 0, j = 0; i < 42; i++) {
	    rRadios[i] = document.createElement("INPUT");
	    rRadios[i].className = "day-radios";
	    rRadios[i].type = "radio";
	    rRadios[i].name = this.id + "-day-radios";
	    rRadios[i].id = this.id + "-day-radio-" + (i + 1);

	    dDias[i] = document.createElement("LABEL");
	    dDias[i].className = "day";
	    dDias[i].htmlFor = this.id + "-day-radio-" + (i + 1);
	    dDias[i].id = this.id + "-day-" + (i + 1);

	    texto = document.createElement("SPAN");
	    texto.id = this.id + "-day-num-" + (i + 1);

	    dDias[i].appendChild(texto);
	  
	    filas[j].appendChild(rRadios[i]);
	    filas[j].appendChild(dDias[i]);

	    if ((i + 1) % 7 == 0) {
	      j++;
	    }
	  }

	  for (var i = 0; i < 6; i++) {
	    contenedores[3].appendChild(filas[i]);
	  }
	  
	  for (var i = 0; i < contenedores.length; i++) {
	    theCalendar.appendChild(contenedores[i]);
	  }

	  document.getElementById(this.id).appendChild(theCalendar);
	}

	Calendar.prototype.update = function () {
	  document.getElementById(this.id + '-year').innerHTML = this.date.getFullYear();
	  document.getElementById(this.id + '-month').innerHTML = meses[this.date.getMonth()];

	  for (i = 1; i <= 42; i++) {
	    document.getElementById(this.id + '-day-num-' + i).innerHTML = "";
	    document.getElementById(this.id + '-day-' + i).className = this.id + " day";
	  }

	  primerDia = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();
	  ultimoDia = new Date((this.date.getMonth() + 1 > 11) ? this.date.getFullYear() + 1 : this.date.getFullYear(), (this.date.getMonth() + 1 > 12) ? 0 : this.date.getMonth() + 1, 0).getDate();

	  penultimoDia = new Date((this.date.getMonth() < 0) ? this.date.getFullYear() - 1 : this.date.getFullYear(), (this.date.getMonth() < 0) ? 11 : this.date.getMonth(), 0).getDate();

	  if (primerDia != 0)
	    for (i = 0, j = penultimoDia; i < this.label.indexOf(label[primerDia]); i++, j--) {
	      document.getElementById(this.id + '-day-num-' + (1 + i)).innerHTML = j;
	      document.getElementById(this.id + '-day-' + (1 + i)).className = this.id + " day diluted";
	    }

	  for (i = 1; i <= ultimoDia; i++) {
	    document.getElementById(this.id + '-day-num-' + (this.label.indexOf(label[primerDia]) + i)).innerHTML = i;
	    if (i == this.date.getDate())
	      document.getElementById(this.id + '-day-radio-' + (this.label.indexOf(label[primerDia]) + i)).checked = true;
	  }

	  for (i = ultimoDia + 1, j = 1; (this.label.indexOf(label[primerDia]) + i) <= 42; i++, j++) {
	    document.getElementById(this.id + '-day-num-' + (this.label.indexOf(label[primerDia]) + i)).innerHTML = j;
	    document.getElementById(this.id + '-day-' + (this.label.indexOf(label[primerDia]) + i)).className = this.id + " day diluted";
	  }
	}

	function Organizer(id, calendar) {
	  this.id = id;
	  this.calendar = calendar;

	  this.draw();
	  this.update();
	}

	Organizer.prototype = {
	  constructor: Organizer,
	  back: function (func) {
	    date = this.calendar.date;
	    ultimoDia = new Date((date.getMonth() + 1 > 11) ? date.getFullYear() + 1 : date.getFullYear(), (date.getMonth() + 1 > 12) ? 0 : date.getMonth() + 1, 0).getDate();
	    penultimoDia = new Date((date.getMonth() < 0) ? date.getFullYear() - 1 : date.getFullYear(), (date.getMonth() < 0) ? 11 : date.getMonth(), 0).getDate();

	    if (func == "day") {
	      if (date.getDate() != 1) {
	        this.changeDateTo(date.getDate() - 1);
	      } else {
	        this.back('month');
	        this.changeDateTo(ultimoDia);
	      }
	    } else {
	      if (func == "month") {
	        if (date.getDate() > penultimoDia) {
	          this.changeDateTo(penultimoDia);
	        }
	        if (date.getMonth() != 0)
	          date.setMonth(date.getMonth() - 1);
	        else {
	          date.setMonth(11);
	          date.setFullYear(date.getFullYear() - 1);
	        }
	      } else
	        date.setFullYear(date.getFullYear() - 1);
	    }
	    
	    this.calendar.update();  
	    this.update();
	  },
	  next: function (func) {
	    date = this.calendar.date;
	    ultimoDia = new Date((date.getMonth() + 1 > 11) ? date.getFullYear() + 1 : date.getFullYear(), (date.getMonth() + 1 > 12) ? 0 : date.getMonth() + 1, 0).getDate();
	    sLDia = new Date((date.getMonth() + 2 > 11) ? date.getFullYear() + 1 : date.getFullYear(), (date.getMonth() + 2 > 12) ? 0 : date.getMonth() + 2, 0).getDate();

	    if (func == "day") {
	      if (date.getDate() != ultimoDia) {
	        date.setDate(date.getDate() + 1);
	      } else {
	        this.next('month');
	        date.setDate(1);        
	      }
	    } else {
	      if (func == "month") {
	        if (date.getDate() > sLDia) {
	          this.changeDateTo(sLDia);
	        }
	        if (date.getMonth() != 11)
	          date.setMonth(date.getMonth() + 1);
	        else {
	          date.setMonth(0);
	          date.setFullYear(date.getFullYear() + 1);
	        }
	      } else
	        date.setFullYear(date.getFullYear() + 1);
	    }
	    
	    this.calendar.update();
	    this.update();
	  },
	  changeDateTo: function (dia, bloque) {
	    if ((bloque >= 31 && dia <= 11) || (bloque <= 6 && dia >= 8)) {
	      if (bloque >= 31 && dia <= 11)
	        this.next('month');
	      else if (bloque <= 6 && dia >= 8)
	        this.back('month');
	    }
	    this.calendar.date.setDate(dia);
	    this.calendar.update();
	    this.update();
	    calendar = this.calendar;
	    setTimeout(function () { calendar.update(); }, 10);
	  }
	}

	Organizer.prototype.draw = function () {
	  anteriorSvg = '<svg style="width: 24px; height: 24px;" viewBox="0 0 24 24"><path fill="' + "white" + '" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"></path></svg>';
	  siguienteSvg = '<svg style="width: 24px; height: 24px;" viewBox="0 0 24 24"><path fill="' + "white" + '" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path></svg>';
	  
	  controlador = document.createElement( "DIV");
	  controlador.className = "events " + this.calendar.size;

	  fecha = document.createElement( "DIV");
	  fecha.className = "date";
	  fecha.style.backgroundColor = "rgba(4, 176, 16)";
	  fecha.style.color = "white";

	  anterior = document.createElement("DIV");
	  anterior.id = this.id + "-day-back";
	  anterior.insertAdjacentHTML('beforeend', anteriorSvg);
	  fecha.appendChild(anterior);
	  
	  texto = document.createElement("SPAN");
	  texto.id = this.id + "-date";
	  fecha.appendChild(texto);
	  
	  siguiente = document.createElement("DIV");
	  siguiente.id = this.id + "-day-next";
	  siguiente.insertAdjacentHTML('beforeend', siguienteSvg);
	  fecha.appendChild(siguiente);

	  filas = document.createElement( "DIV");
	  filas.className = "rows";

	  lista = document.createElement("OL");
	  lista.className = "list";
	  lista.id = this.id + "-list";

	  filas.appendChild(lista);
	  
	  controlador.appendChild(fecha);
	  controlador.appendChild(filas);

	  document.getElementById(this.id).appendChild(controlador);
	}

	Organizer.prototype.update = function () {
	  document.getElementById(this.id + "-date").innerHTML = this.calendar.meses[this.calendar.date.getMonth()] + " " + this.calendar.date.getDate() + ", " + this.calendar.date.getFullYear();
	  document.getElementById(this.id + "-list").innerHTML = "";
	}

	Organizer.prototype.list = function (data) {
	  document.getElementById(this.id + "-list").innerHTML = "";

	  contenido = ""; 
	  for (var i = 0; i < data.length; i++) {
	    contenido += '<li id="' + this.id + '-list-item-' + i + '"><div><span class="' + this.id + ' time" id="' + this.id + '-list-item-' + i + '-time">' + data[i].startTime + ' - ' + data[i].endTime + '</span><span class="' + this.id + ' m" id="' + this.id + '-list-item-' + i + '-m">' + data[i].mTime + '</span></div><p id="' + this.id + '-list-item-' + i + '-text">' + data[i].text + '</p></li>';
	  }

	  document.getElementById(this.id + "-list").innerHTML = contenido;
	}

	Organizer.prototype.setupBlock = function (bloqueId, controlador, llamada) {
	  document.getElementById(calendarioId + "-day-" + bloqueId).addEventListener('click', function () {
	    if (document.getElementById(calendarioId + "-day-num-" + bloqueId).innerHTML.length > 0) {
	      controlador.changeDateTo(document.getElementById(calendarioId + "-day-num-" + bloqueId).innerHTML, bloqueId);
	      llamada();
	    }
	  });
	}

	Organizer.prototype.setOnClickListener = function (Caso, anteriorLlamada, siguienteLlamada) {
	  calendarioId = this.calendar.id;
	  controladorId = this.id;

	  controlador = this;

	  switch (Caso) {
	    case "days-blocks":
	      for (i = 1; i <= 42; i++) {
	        controlador.setupBlock(i, controlador, anteriorLlamada);
	      }
	      break;
	    case "day-slider":
	      document.getElementById(controladorId + "-day-back").addEventListener('click', function () {
	        controlador.back('day');
	        anteriorLlamada();  
	      });
	      document.getElementById(controladorId + "-day-next").addEventListener('click', function () {
	        controlador.next('day');
	        siguienteLlamada();
	      });
	      break;
	    case "month-slider":
	      document.getElementById(calendarioId + "-month-back").addEventListener('click', function () {
	        controlador.back('month');
	        anteriorLlamada();
	      });
	      document.getElementById(calendarioId + "-month-next").addEventListener('click', function () {
	        controlador.next('month');
	        siguienteLlamada();
	      });
	      break;
	    case "year-slider":
	      document.getElementById(calendarioId + "-year-back").addEventListener('click', function () {
	        controlador.back('year');
	        anteriorLlamada();
	      });
	      document.getElementById(calendarioId + "-year-next").addEventListener('click', function () {
	        controlador.next('year');
	        siguienteLlamada();
	      });
	      break;
	  }
	};

	// end of library
	// full tutorial on how to use it is on GitHub
	// https://github.com/nizarmah/Calendar-Javascript-Library/blob/master/README.md

	/* end of library; everything is explained below; i'm sorry for the messy code and my bad practices; please criticise me */

	var calendar = new Calendar("calendarContainer", "small", [ "Wednesday", 3 ], [ "#e91e63", "#c2185b", "#ffffff", "#f8bbd0" ]);
	var organizer = new Organizer("organizerContainer", calendar);

	currentDay = calendar.date.getDate(); // used this in order to make anyday today depending on the current today

	// my best way of organizing data, maybe that can be the outcome of joining multiple tables in the database and then parsing them in such a manner, easier for the person to push use a date and the events of it
	data = {
	  years: [
	    {
	      int: 1999,
	      meses: [
	        {
	          int: 4,
	          days: [
	            {
	              int: 28,
	              events: [
	                {
	                	startTime: "6:00",
	                	endTime: "6:30",
	                	mTime: "pm",
	                	text: "Weirdo was born"
	                },
	                {
	                	startTime: "4:00",
	                	endTime: "5:00",
	                	mTime: "pm",
	                	text: "Eventos registrado"
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    },
	    {
	      int: (new Date().getFullYear()),
	      meses: [
	        {
	          int: (new Date().getMonth() + 1),
	          days: [
	            {
	              int: (new Date().getDate()),
	              events: [
	                {
	                  startTime: "4:00",
	                  endTime: "5:00",
	                  mTime: "pm",
	                  text: "Eventos registrado"
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	};

	function showEvents() {
	  aAño = -1, mes = -1, dia = -1;
	  for (i = 0; i < data.years.length; i++) {
	    if (calendar.date.getFullYear() == data.years[i].int) {
	      aAño = i;
	      break;
	    }
	  }
	  if (aAño == -1) return;
	  for (i = 0; i < data.years[aAño].meses.length; i++) {
	    if ((calendar.date.getMonth() + 1) == data.years[aAño].meses[i].int) {
	      mes = i;
	      break;
	    }
	  }
	  if (mes == -1) return;
	  for (i = 0; i < data.years[aAño].meses[mes].days.length; i++) {
	    if (calendar.date.getDate() == data.years[aAño].meses[mes].days[i].int) {
	      dia = i;
	      break;
	    }
	  }
	  if (dia == -1) return;
	  theEvents = data.years[aAño].meses[mes].days[dia].events;  
	  organizer.list(theEvents); // what's responsible for listing
	}

	showEvents();

	organizer.setOnClickListener('day-slider', function () { showEvents(); 
	console.log("Day back slider clicked"); }, function () { showEvents();
	console.log("Day next slider clicked"); });
	organizer.setOnClickListener('days-blocks', function () { showEvents(); 
	console.log("Day block clicked"); }, null);
	organizer.setOnClickListener('month-slider', function () { showEvents(); 
	console.log("Month back slider clicked"); }, function () { showEvents(); 
	console.log("Month next slider clicked"); });
	organizer.setOnClickListener('year-slider', function () { showEvents(); 
	console.log("Year back slider clicked"); }, function () { showEvents(); 
	console.log("Year next slider clicked"); });