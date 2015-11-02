<?php
file_put_contents("file.txt",str_replace('find','replace',file_get_contents("file.txt")));
echo file_put_contents("file.txt",'');
?>
