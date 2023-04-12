<?php require('./include/bd.php');

if (isset($_GET['search'])) {
    $req = $bdd->prepare("SELECT * FROM `animaux` WHERE `name` LIKE ?");
    $req->execute(['%' . $_GET['search'] . '%']);
    $result = $req->fetchAll(PDO::FETCH_ASSOC);
    $json = json_encode($result);
    echo $json;
}
// var_dump($_GET['search']);
if (isset($_GET['search2'])) {
    $req2 = $bdd->prepare("SELECT * FROM `animaux` WHERE `name` LIKE ?");
    $req2->execute([$_GET['search2'] . '%']);
    $result2 = $req2->fetchAll(PDO::FETCH_ASSOC);
    $json2 = json_encode($result2);
    echo $json2;
}

if (isset($_GET['id'])) {
    $req = $bdd->prepare("SELECT * FROM `animaux` WHERE `id` = ? ");
    $req->execute([$_GET['id']]);
    $result = $req->fetchAll(PDO::FETCH_ASSOC);
    $json = json_encode($result);
    echo $json;
}
