function createUser(name,email) {

    name = prompt("Digite seu nome");
    email = prompt("Digite seu email");
    
    let re = /^(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    let isEmailValid = re.test(email);

    if (isEmailValid) {
        createUserInDabase (name,email);
    }
}