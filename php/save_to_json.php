
<?php 
session_start();
if ( !empty($_POST['params'])) {
		
        $params = $_POST['params'];
       
        $arr1 = json_decode(json_encode($params), True);
        $arr4 = array($arr1);
        $arr5 = array('/n');
        $arr6 = array_merge($arr4,$arr5);
       	var_dump($arr1);
       /* $jsonObject = json_encode($params);
   		echo $jsonObject;*/
		$arr2 = json_decode(file_get_contents($_SESSION['user'].".json"), true); 
		$arr3 = array($arr2); 
		$arr7 = array('/n');
        $arr8 = array_merge($arr3,$arr7);
		var_dump($arr2);  
		
		$result_array= array_merge($arr8,$arr6);
		var_dump($result_array);
		file_put_contents($_SESSION['user'].".json", json_encode($result_array));
      /*  $jsonString = file_get_contents('my_json_data.json');
		$data = json_decode($jsonString, true);
		file_put_contents('my_json_data.json', $jsonObject);
		$json = json_encode($data);*/
}
    

?>