<!DOCTYPE html>
<html lang="ru">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">
  <?php wp_head(); ?>
  <title>
    <?the_title()?>
  </title>
</head>

<body <? body_class() ?>>
  <header class="header">
    <?php if (has_nav_menu('header-menu')) : ?>
      <div class="logo">Logo</div>
      <?php
      $icon = '<i style="color:green">ICON</i>';

      wp_nav_menu([
        //'menu' => 'header_menu',
        'theme_location' => 'header-menu',
        'container' => 'nav',
        'container_class' => 'nav',
        'menu_class' => 'nav-list',
        'before' => $icon
      ]);
      ?>
      <div class="socials">Socials</div>

    <?php else : ?>

      <div class="logo">Logo</div>
      <p style="color: red">Добавьте меню из админки</p>
      <div class="socials">Socials</div>


    <?php endif; ?>


  </header>