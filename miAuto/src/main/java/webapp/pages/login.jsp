<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Login</title>
</head>
<body>
<form action="login" method="POST">
    <h2>Login</h2>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required><br>

    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required><br>

    <!-- aca permite elegir si te estas queriendo loginear como driver o como servicio -->
    <input type="radio" id="driver" name="userType" value="driver" checked>
    <label for="driver">Driver User</label><br>

    <input type="radio" id="service" name="userType" value="service">
    <label for="service">Service User</label><br>

    <!-- este boton debería loginear al usuario en la base de datos, llamando la función loginServlet -->
    <button type="submit">Log In</button>
</form>
</body>
</html>
