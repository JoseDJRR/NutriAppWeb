$(document).ready(function(){
	var lista = $('#lista');
	var registro = $('#registro');
	var formularioLista = $('#formulariolista');
	var formularioRegistro = $('#formularioregistro')

	formularioLista.hide(1000);
	lista.css({"background":"none", "color":"#07DF35"});

	registro.click(function(){
		formularioLista.hide(1000);
		lista.css({"background":"none", "color":"#07DF35"});
		registro.css({"background":"#E8C39E", "color":"white"})
		formularioRegistro.show(1000);
	});
	lista.click(function(){
		formularioRegistro.hide(1000);
		registro.css({"background":"none", "color":"#07DF35"});
		lista.css({"background":"#E8C39E", "color":"white"})
		formularioLista.show(1000);
	});
});