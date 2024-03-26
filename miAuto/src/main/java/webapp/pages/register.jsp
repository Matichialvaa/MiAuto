<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Register</title>
    <script>
        function updateUserTypeForm() {
            var userType = document.querySelector('input[name="userType"]:checked').value;
            var serviceUserFields = document.getElementById('serviceUserFields');
            var driverUserFields = document.getElementById('driverUserFields');

            if (userType === 'service') {
                serviceUserFields.style.display = '';
                driverUserFields.style.display = 'none';
            } else {
                serviceUserFields.style.display = 'none';
                driverUserFields.style.display = '';
            }
        }
    </script>
</head>

<body onload="updateUserTypeForm()">
<form action="register" method="POST">
    <h2>Register</h2>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required><br>

    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required><br>

    <input type="radio" id="driver" name="userType" value="driver" checked onchange="updateUserTypeForm()">
    <label for="driver">Driver User</label><br>

    <input type="radio" id="service" name="userType" value="service" onchange="updateUserTypeForm()">
    <label for="service">Service User</label><br>

    <%-- si se quiere registrar como driver, que aparezcan los parametros requeridos como driver --%>
    <div id="driverUserFields">
        <label for="driverLicense">Driver License:</label>
        <input type="text" id="driverLicense" name="driverLicense"><br>
        <!-- Add other driver-specific fields as needed -->
    </div>

    <%-- si se quiere registrar como servicio, que aparezcan los parametros requeridos como servicio --%>
    <div id="serviceUserFields" style="display:none;">
        <label for="serviceArea">Service Area:</label>
        <input type="text" id="serviceArea" name="serviceArea"><br>
        <!-- Add other service-specific fields as needed -->
    </div>

    <button type="submit">Register</button>

</form>
<script>
    updateUserTypeForm(); // Call the function to set the initial state of the form based on the default selected userType
</script>
</body>
</html>
