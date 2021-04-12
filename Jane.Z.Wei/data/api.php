<?php

function makeConn() {
	include_once "auth.php";
	try {
		$conn = new PDO(...Auth());
		$conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
		return $conn;
	} catch(PDOException $e) {
		die('{"error":"connection Error: '.$e->getMessage().'"}');
	}
}


function fetchAll($r) {
	$a = [];
	while($row = $r->fetch(PDO::FETCH_OBJ))
		$a[] = $row;
	return $a;
}

// connection, pregpared statement, parameters
function makeQuery($c,$ps,$p,$makeResults=true) {
	try {
		if(count($p)) {
			$stmt = $c->prepare($ps);
			$stmt->execute($p);

		} else {
			$stmt = $c->query($ps);
		}


		$r = $makeResults ? fetchAll($stmt) : [];

		return [
			"result"=>$r
		];
	} catch(PDOException $e) {
		return ["error":"connection Error: ".$e->getMessage()];
	}
}

echo json_encode(
	makeQuery(makeConn(),"SELECT * FROM track_202130_users",[]),
	JSON_NUMBERIC_CHECK

);