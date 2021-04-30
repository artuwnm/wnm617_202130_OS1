<?php

function makeConn() {
   include_once "auth.php";
   try {
      $conn = new PDO(...Auth());
      $conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
      return $conn;
   } catch(PDOException $e) {
      die('{"error":"Connection Error: '.$e->getMessage().'"}');
   }
}


function fetchAll($r) {
   $a = [];
   while($row = $r->fetch(PDO::FETCH_OBJ))
      $a[] = $row;
   return $a;
}


// connection, prepared statement, parameters
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
      return ["error"=>"Connection Error: ".$e->getMessage()];
   }
}

function makeStatement($data) {
   $c = makeConn();
   $t = $data->type;
   $p = $data->params;

   switch($t) {
      case "users_all":
         return makeQuery($c,"SELECT * FROM `track_202130_users`",$p);
      case "emotions_all":
         return makeQuery($c,"SELECT * FROM `track_202130_emotions`",$p);
      case "locations_all":
         return makeQuery($c,"SELECT * FROM `track_202130_locations`",$p);


      case "user_by_id":
         return makeQuery($c,"SELECT * FROM `track_202130_users` WHERE id=?",$p);
      case "emotion_by_id":
         return makeQuery($c,"SELECT * FROM `track_202130_emotions` WHERE id=?",$p);
      case "location_by_id":
         return makeQuery($c,"SELECT * FROM `track_202130_locations` WHERE id=?",$p);


      case "emotions_by_user_id":
         return makeQuery($c,"SELECT * FROM `track_202130_emotions` WHERE user_id=?",$p);
      case "locations_by_emotion_id":
         return makeQuery($c,"SELECT * FROM `track_202130_locations` WHERE emotion_id=?",$p);

      case "recent_locations":
         return makeQuery($c,"SELECT *
            FROM `track_202130_emotions` e
            RIGHT JOIN (
               SELECT * FROM `track_202130_locations`
               ORDER BY `date_create` DESC
            ) l
            ON e.id = l.emotion_id
            WHERE e.user_id=?
            GROUP BY l.emotion_id
            ",$p);


      case "check_signin":
         return makeQuery($c,"SELECT id FROM `track_202130_users` WHERE `username`=? AND `password`=md5(?)",$p);


      default:
         return ["error"=>"No Matched Type"];
   }
}

$data = json_decode(file_get_contents("php://input"));

echo json_encode(
   makeStatement($data),
   JSON_NUMERIC_CHECK
);