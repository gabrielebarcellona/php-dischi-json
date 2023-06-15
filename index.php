<?php
header('Content-Type: application/json');
$json_discs = file_get_contents('./dischi.json');



echo $json_discs;
