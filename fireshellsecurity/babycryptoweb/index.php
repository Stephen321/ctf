
<?php

$code = '$kkk=5;$s="e1iwZaNolJeuqWiUp6pmo2iZlKKulJqjmKeupalmnmWjVrI=";$s=base64_decode($s);$res="";for($i=0,$j=strlen($s);$i<$j;$i++){$ch=substr($s,$i,1);$kch=substr($kkk,($i%strlen($kkk))-1,1);$ch=chr(ord($ch)+ord($kch));$res.=$ch;};echo $res;';

$_GET['p'] = 6; //has to be < 235
$_GET['b'] = '5';

if (isset($_GET['p']) && isset($_GET['b']) && strlen($_GET['b']) === 1 && is_numeric($_GET['p']) && (int) $_GET['p'] < 235) {//strlen($code)) {
    $p = (int) $_GET['p'];
    //$code[$p] = $_GET['b'];
    //eval($code);

    $kkk=5;
    $s="e1iwZaNolJeuqWiUp6pmo2iZlKKulJqjmKeupalmnmWjVrI=";
    $s=base64_decode($s);
    echo $s . PHP_EOL . PHP_EOL;
    $res="";

    for($i=0,$j=strlen($s);$i<$j;$i++){
        echo 'i: ' . $i . PHP_EOL;  

        $ch=substr($s,$i,1);   
        echo 'ch: ' . $ch . PHP_EOL;   

        $kch=substr($kkk,($i%strlen($kkk))-1,1);
        echo 'kch: ' . $kch . PHP_EOL;

        $ch=chr(ord($ch)+ord($kch));
        echo 'ch: ' . $ch . PHP_EOL . PHP_EOL;

        $res.=$ch;
        };
    echo $res . PHP_EOL;


} else {
    print "nope\n";
    //show_source(__FILE__);
}

?>    