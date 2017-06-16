
// JAVASCRIPT DE LOGIN Y REGISTRO

//Crear arreglos para almacenar múltiples usuarios
    var n = new Array();
    var c = new Array();
    var p = new Array();

    var nom;
    var corr;
    var contra;

    var z;

    var usuario;
    var mail;
    var pass;
    var conf;

//Función para dirigir a otras partes de la app
function navegar(liga){
    window.location.assign(liga);
}


//Función de botón REGISTRO
function guardar(){
    //CAPTURAMOS LOS VALORES EN VARIABLES
    nombre = document.getElementById('usuario').value;
    correo = document.getElementById('correo').value;
    contraseña = document.getElementById('contraseña').value;
    confirmar = document.getElementById('confirmar-contraseña').value;
    
    //Validar si hay algún input en blanco
    if(nombre == "" || correo == "" || contraseña == "" || confirmar == ""){
        document.getElementById('error').innerHTML = "*Hay uno o más campos vacíos.";
        if(navigator.vibrate){
                navigator.vibrate('3000');
            }else{
            }
        
        document.querySelector('.error').style.fontSize = "1em";
    }
    
    else{
        //Validar si los inputs de las contraseñas coinciden
    if(contraseña==confirmar){
        //Verificar si ya hay un contador almacenado 
        if(localStorage.getItem('contador')){
            
            nom = JSON.parse(localStorage['usuarios']);
            corr = JSON.parse(localStorage['correos']);
            contra = JSON.parse(localStorage['contraseñas']);
    
            contador = localStorage.getItem('contador');
            
            n = [];
            p = [];
            c = [];
            
            for(var i=0; i<=contador; i++){
             n.push(nom[i]);
             c.push(corr[i]);
             p.push(contra[i]);
        }
            contador++;
            
            n[contador] = nombre;
            c[contador] = correo;
            p[contador] = contraseña;
            

            //Crear espacio en localStorage para los arreglos
            var usuarios = JSON.stringify(n);
            localStorage.setItem('usuarios',usuarios);
            
            var correos = JSON.stringify(c);
            localStorage.setItem('correos',correos);
            
            var contraseñas = JSON.stringify(p);
            localStorage.setItem('contraseñas',contraseñas);
            
            localStorage.setItem('contador',contador);
            
            alert('Listo! Tus datos han sido guardados exitosamente.');
            navegar('index.html');
    }
        else{
            //Crear contador e inicializarlo
            localStorage.setItem('contador','0');
            
            n.push(nombre);
            c.push(correo);
            p.push(contraseña);
            
            var usuarios = JSON.stringify(n);
            localStorage.setItem('usuarios',usuarios);
            
            var correos = JSON.stringify(c);
            localStorage.setItem('correos',correos);
            
            var contraseñas = JSON.stringify(p);
            localStorage.setItem('contraseñas',contraseñas);
            
            alert('Listo! Tus datos han sido guardados exitosamente.');
            navegar('index.html');
        }
        
    }
        
    else{
        //Mensaje de error si contraseñas no coinciden
        document.getElementById('error').innerHTML = "*Las contraseñas no coinciden.";
        if(navigator.vibrate){
                navigator.vibrate('3000');
            }else{
            }
        document.querySelector('.error').style.fontSize = "1em";
    }

    }
}

function login(){
    
    //Obtener texto de inputs en Login
    user = document.getElementById('user').value;
    pass = document.getElementById('password').value;
    //Obtener contador almacenado
    contador = localStorage.getItem('contador');
    
    //Validar si hay algún input sin contestar
    if(user=="" || pass==""){
        document.getElementById('error1').innerHTML = "*Hay uno o más campos vacíos.";
        
        document.querySelector('.error1').style.fontSize = "1.1em";
        if(navigator.vibrate){
                navigator.vibrate('3000');
            }else{
            }
    }
    else{
        //Almacenar los arreglos de usuarios en localStrage en nueva variable
        if(localStorage.getItem('usuarios')){
        
        nom = JSON.parse(localStorage['usuarios']);
        contra = JSON.parse(localStorage['contraseñas']);
        //Validar si hay algún usuario registrado en el arreglo
        if(localStorage.getItem('usuarios'))
        for(var i=0; i<=contador; i++){
        
            //Si los usuarios y contraseñas coinciden dirigir al inicio de la app
        if(nom[i] == user && contra[i] == pass){
            z = i;
            localStorage.setItem('z', z);
        }
            else{
            }
    }
            if(localStorage.getItem('z')){
                alert('Inicio de sesión exitoso!');
            navegar('home.html');
            }
            else{
                
                document.getElementById('error1').innerHTML = "*El usuario y contraseña no coinciden.";
                document.querySelector('.error1').style.fontSize = "1.1em";
                if(navigator.vibrate){
                navigator.vibrate('3000');
            }else{
            }
                
            }
    }
        else{
            //Mensaje de error en caso de que el usuario no esté registrado
            document.getElementById('error1').innerHTML = "*El usuario no está registrado.";
            document.querySelector('.error1').style.fontSize = "1.1em";
            if(navigator.vibrate){
                navigator.vibrate('3000');
            }else{
            }
        }
    }

}


//JAVASCRIPT DE INICIO APP

var centesimas = 0;
var segundos = 0;
var minutos = 0;
var horas = 0;
var descanso = false;

function guardarPersonales(){
    //CAPTURAMOS LOS VALORES EN VARIABLES
    //a = document.getElementById('name').value;
    b = document.getElementById('code').value;
    //alert(a,b);
    if(typeof(Storage) !== "undefined") {
            
            if (/*a.length < 1 || */b.length < 1 ){
                // enable vibration support
                    navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;

                    if (navigator.vibrate) {
                        // vibration API supported
                        navigator.vibrate(250);
                    }
                document.getElementById('error').innerHTML = "*Ingresa un lenguaje de programación.";
                navigator.vibrate(350);
                return;
            }else{
                //localStorage.datos = {'nombre':document.getElementById('name').value,'codigo': document.getElementById('code').value};
                //localStorage.setItem('nombre',a);
                document.getElementById('error').innerHTML = "";
                localStorage.setItem('codigo',b);
                var timer = setTimeout(function() {
                    navegar('app.html');
                }, 1000);
        }
        //document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
    } else {
        alert("Sorry, your browser does not support web storage...");
    }

}

function cargarPersonales(){
    //CARGAMOS LOS DATOS GUARDADOS EN LOCALSTORAGE
    //name =  localStorage.getItem('nombre');
    code =  localStorage.getItem('codigo');
    //document.getElementById('texto1').innerHTML = name;
    document.getElementById('code').innerHTML += " "+ code;
}

function verAlerta(contenido){
    document.getElementById('alerta-titulo').innerHTML = contenido;
}

//JAVASCRIPT DE  CRONÓMETRO


function inicio () {
    control = setInterval(cronometro,10);
    document.getElementById("inicio").disabled = true;
    document.getElementById("parar").disabled = false;
    document.getElementById("continuar").disabled = true;
    document.getElementById("reinicio").disabled = false;
}
function parar () {
    clearInterval(control);
    document.getElementById("parar").disabled = true;
    document.getElementById("continuar").disabled = false;
}

function reinicio () {
    clearInterval(control);
    centesimas = 0;
    segundos = 0;
    minutos = 0;
    horas = 0;
    //Centesimas.innerHTML = ":00";
    Segundos.innerHTML = ": 00";
    Minutos.innerHTML = "00 ";
    //Horas.innerHTML = "00";
    document.getElementById("inicio").disabled = false;
    document.getElementById("parar").disabled = true;
    document.getElementById("continuar").disabled = true;
    document.getElementById("reinicio").disabled = true;
}

function cronometro () {
    if (centesimas < 99) {
        centesimas++;
        if (centesimas < 10) { centesimas = "0"+centesimas }
        //Centesimas.innerHTML = ":"+centesimas;
    }
    if (centesimas == 99) {
        centesimas = -1;
    }
    if (centesimas == 0) {
        segundos ++;
        if (segundos < 10) { segundos = "0"+segundos }
        Segundos.innerHTML = ": "+segundos;
    }
    if (segundos == 59) {
        segundos = -1;
    }
    if ( (centesimas == 0)&&(segundos == 0) ) {
        minutos++;

        if(minutos < 25){

            if(descanso==false){

                if (minutos < 10) { minutos = "0"+minutos }
                Minutos.innerHTML = ""+minutos;
            }else{

                if(minutos < 5){

                    if (minutos < 10) { minutos = "0"+minutos }
                    Minutos.innerHTML = ""+minutos;
                }else{
                    descanso = false;
                    navigator.vibrate(550);
                    alert("De vuelta a trabajar!");
                    reinicio();
                    inicio();
                }

            }

        }else{
            descanso = true;
            navigator.vibrate(550);
            alert("Es tiempo de un descanso!");
            reinicio();
            inicio();
        }         
    }
    if (minutos == 25) {
        minutos = -1;
    }
    if ( (centesimas == 0)&&(segundos == 0)&&(minutos == 0) ) {
        horas ++;
        if (horas < 10) { horas = "0"+horas }
        //Horas.innerHTML = horas;
    }
}


function guardarAjustes(){
    //CAPTURAMOS LOS VALORES EN VARIABLES
    usuario = document.getElementById('usuario').value;
    mail = document.getElementById('c').value;
    pass = document.getElementById('p').value;
    conf = document.getElementById('confirmar-c').value;
    

    //Validar si hay algún input en blanco
    
    if(usuario != "" || mail != "" || pass != "" || conf != ""){
    
      contador = localStorage.getItem('contador');
        z = localStorage.getItem('z');    

        
        if(usuario != ""){
            document.getElementById('error').innerHTML = "";
            nom = JSON.parse(localStorage['usuarios']);
            n = [];
            for(var i=0; i<=contador; i++){
            n.push(nom[i]);
        }
            n[z] = usuario;
            var usuarios = JSON.stringify(n);
            localStorage.setItem('usuarios',usuarios);
            nom = JSON.parse(localStorage['usuarios']);
        }
        
        if(mail != ""){
            document.getElementById('error').innerHTML = "";
            corr = JSON.parse(localStorage['correos']);
            c = [];
            for(var i=0; i<=contador; i++){
            c.push(corr[i]);
        }
            c[z] = mail;
            var correos = JSON.stringify(c);
            localStorage.setItem('correos',correos);
            corr = JSON.parse(localStorage['correos']);

        }
        
        if( pass != "" && conf != ""){
            document.getElementById('error').innerHTML = "";
            if( pass == conf){
                contra = JSON.parse(localStorage['contraseñas']);
                p = [];
                for(var i=0; i<=contador; i++){
                    p.push(contra[i]);
        }
                p[z] = pass;
                var contraseñas = JSON.stringify(p);
                localStorage.setItem('contraseñas',contraseñas);
                contra = JSON.parse(localStorage['contraseñas']);
            }
            else{
                document.getElementById('error').innerHTML = "*Las contraseñas no coinciden.";
                document.querySelector('.error').style.fontSize = "1em";
            }
        }
    }
    else{
        document.getElementById('error').innerHTML = "*Hay uno o más espacios vacíos.";
                document.querySelector('.error').style.fontSize = "1em";
    }
}


