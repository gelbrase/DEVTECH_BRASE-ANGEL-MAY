<!DOCTYPE html>
<html>
<head>
    <title></title>
    <style>
div {
  width: 100px;
  background-color: #87CEEB;
  text-align:  center;
 
}
h1{
    width: 500px;
    background-color: #87CEEB;
    text-align: center;
}
h2 {
    
    font-size: 20px;
}
</style>
</head>
<body>
    

    <?php
    

    
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the form data
        $name = $_POST["name"];
        $movie = $_POST["movie"];
        $degree = $_POST["degree"];
        $gender = $_POST["gender"];
        $units = $_POST["units"];

        // Display the results
        echo "<h1>postform_Submitted.php</h1>";
       
        echo "<p>Hello! " . $name . "</p>";
        echo "<p>You like Movie: " . $movie . "</p>";
        echo "<p>You are enrolled in Degree: " . $degree . "</p>";
        echo "<p>Your Gender: " . $gender . "</p>";
        echo "<p>Yur Favourite Subject is: ";
        foreach ($units as $unit) {
            echo $unit . ", ";
        }
        echo "</p>";
    } else {
        ?>

        <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
            <div>Postform.php</div>
            
            <label for="name">Name :</label>
            <input type="text" id="name" name="name" required><br><br>

            <label for="movie">My favourite movie is:</label>
            <input type="text" id="movie" name="movie" required><br><br>

            <label for="degree">My degree is:</label>
            <select id="degree" name="degree" required>
                <option value="bachelor">Bachelor</option>
                <option value="master">Master</option>
                <option value="phd">PhD</option>
            </select><br><br>

            <label for="gender">Gender:</label>
            <input type="radio" id="male" name="gender" value="male" required>
            <label for="male">Male</label>
            <input type="radio" id="female" name="gender" value="female" required>
            <label for="female">Female</label><br><br>

            <label for="units">My favourite unit(s):* multiselect</label>
            <select id="units" name="units[ ]" multiple required>
                <option value="Science">Science</option>
                <option value="Filipino">Filipino</option>
                <option value="English">English</option>
            </select><br><br>

            <input type="submit" value="Submit">
        </form>

        <?php
    }
    ?>

</body>
</html>
