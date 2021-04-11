<?php

function makeConn() {
	incude_once "aurh.php";
	try {
		$conn = new PDO(...Auth());
		$conn->setAttribute

	} catch(PDOException $e) {
		die('{"error":"Connection Error: '.$e-> getMessage().'"}');
	}
}


function 
// connection, prepared statement, parameters
function makeQuery($c,$ps,$p,$makeResults=true) {
	try{
		if(count($p)) {
			$stmt = $c->prepare($ps);
			$stmt = execute($p);
		} else {
			$stmt = $c->query($ps);
		}

		$r
	}catch(PDOException $e) {
		return ["error" : "Connection Error: ".$e->getMessage()];
	}
}