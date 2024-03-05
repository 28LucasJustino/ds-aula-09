function login(){
    const login = document.getElementById('inputLogin').value;
    const senha = document.getElementById('inputSenha').value;

    if (login == 'admin' && senha == 'admin') {
      
        location.href = "./pages/home.html";
    } 
    else {
        alert('Usúario ou senha incorreto')        
    }

}