<?php

$action = filter_input(INPUT_GET, 'action');
if ($action != 'contact') {
    $action = filter_input(INPUT_POST, 'action');
    if ($action != 'contact')
        header('Location: ../pages/contact.html');
}

if ($action == 'contact') {
    $name = filter_input(INPUT_POST, 'name');
    $from = filter_input(INPUT_POST, 'email');
    $number = filter_input(INPUT_POST, 'number');
    $subject = filter_input(INPUT_POST, 'subject');
    $body = filter_input(INPUT_POST, 'body');

    $to = 'solorzke.business@gmail.com';
    $body = "Name: " . $name . "\n" . $body . "\n" . 'Phone Number: ' . $number;
    /* Send E-mail message */
    if (mail($to, $subject, $body, 'From: ' . $from))
        header('Location: ../pages/index.html');
    else
        echo ("Email did not go through...");
}
