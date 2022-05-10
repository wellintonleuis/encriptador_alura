
let $boton_enc = document.querySelector("#b-enc");
let $boton_desc = document.querySelector("#b-desc");
const $div_figura = document.querySelector('#cuadro-figura');
const $div_texto = document.querySelector('.area_desencriptar');
const $input_texto = document.querySelector('#a-encriptar'); 
const $boton_copy = document.querySelector('#copiar');
const $tex_area = document.querySelector('textarea');


$boton_enc.addEventListener('click', (e)=>{
    encriptar();
});

$boton_desc.addEventListener('click', (e)=>{
    desEncriptar ();
});

$boton_copy.addEventListener('click',(e)=>{
    copiar();
})



function encriptar (){
    var texto = $input_texto.value.toLowerCase();
    var textoEncriptado = texto.replace(/e/igm,'enter');
    var textoEncriptado = textoEncriptado.replace(/o/igm,'ober');
    var textoEncriptado = textoEncriptado.replace(/i/igm,'ines');
    var textoEncriptado = textoEncriptado.replace(/a/igm,'ai');
    var textoEncriptado = textoEncriptado.replace(/u/igm,'ufat');

    $div_figura.setAttribute('hidden', true);
    $div_texto.removeAttribute('hidden');
    $boton_copy.removeAttribute('hidden');
    $tex_area.value = textoEncriptado;

};

function desEncriptar (){
    var texto = $input_texto.value.toLowerCase();
    var textoEncriptado = texto.replace(/enter/igm,'e');
    var textoEncriptado = textoEncriptado.replace(/ober/igm,'o');
    var textoEncriptado = textoEncriptado.replace(/ines/igm,'i');
    var textoEncriptado = textoEncriptado.replace(/ai/igm,'a');
    var textoEncriptado = textoEncriptado.replace(/ufat/igm,'u');

    $div_figura.setAttribute('hidden', true);
    $div_texto.removeAttribute('hidden');
    $boton_copy.removeAttribute('hidden');
    $tex_area.value = textoEncriptado;

};

function copiar(){
    var textoAcopiar = $tex_area.value;
        $tex_area.focus()
        document.execCommand('selectAll'); 
        document.execCommand('cut');
        $input_texto.value = "";

        
}



