<?php
session_start();
fclose($_SEESION['user'].".json");
unset($_SEESION['user']);
session_destroy();


echo "<script>window.location('test.php')</script>";

??