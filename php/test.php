<?php
	session_start();
	if(isset($_POST['name'])){
	$_SESSION['user'] = $_POST['name'];
	$myfile = fopen($_SESSION['user'].".json", "w");
	header("Location: ../index.html");
}
?>
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
<form action="test.php" method="post">
	<input type="text" name="name">
	<input type="submit" name="submit">
</form>
</body>
</html>