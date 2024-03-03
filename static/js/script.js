function login() {
    var username = $('#username').val();
    var password = $('#password').val();

    $.ajax({
        type: 'POST',
        url: 'funciones/login.php',
        data: {username: username, password: password},
        success: function(response) {
            if (response === 'success') {
                window.location.href = 'dashboard.php';
            } else {
                console.log(response);
                $('#errorMessage').text('Usuario o contraseña incorrectos');
            }
        }
    });
}