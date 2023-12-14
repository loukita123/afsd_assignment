function showAlert() {
    var userName = prompt('What is your name?');

    if (userName) {
        alert('Hello, ' + userName + '! Welcome to the AFSD world!');
    } else {
        alert('Hello, AFSD!');
    }
}
