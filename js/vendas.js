var usuarios;
function iniciarJsonSenhas(){
    $.getJSON("./json/senhas.json", function(data) {        
        usuarios = data.usuarios;
    })
};
function login (){
    var editNome = $("#edtmail"); 
    var editSenha = $("#edtpwd"); 
    var usuario = editNome.val();
    var senha = editSenha.val();
    var msg = $("#erro");
    msg.css('color', 'red')
    msg.css('font-weight', 'bold');
    msg.css('margin-top', '10px');
    msg.css('font-size', '1.5em');
 //   debugger;
    if (usuario == ""){
        msg.html("Preencha o usuário !");
        editNome.css('border-color', 'red');
        editNome.focus();
        return false;
    }

    if (senha == ""){
        msg.html("Preencha a senha !");
        editSenha.css('border-color', 'red');
        editSenha.focus();
        return false;
    }
    
    var deucerto = false;
    
    for (i=0; i < usuarios.length; i++){
        let user = usuarios[i].usuario;
        let passwd = usuarios[i].senha;
        if (usuario=== user||senha===passwd){
            return true;
        }        
    }
    
   /*if (deucerto){
       return true;
   } else { */
    
    msg.html("Usuário e senha não encontrado !");
    
    return false;
   //} */
};