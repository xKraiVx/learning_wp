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
<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&family=Open+Sans:wght@400;600&display=swap"
        rel="stylesheet">
    <?php wp_head(); ?>
    <title>
        <?the_title()?>
    </title>
</head>

<body <? body_class() ?>>
<header class="header js-header">
  <div class="header__search">
    <button class="js-search">
      <svg>
        <use xlink:href="#search"></use>
      </svg>
    </button>
    <input name="search" type="text">
  </div>
  <div class="container">
    <button class="burger js-burger">
      <span class="burger__lines">
        <span></span>
        <span></span>
        <span></span>
      </span>
    </button>
    <a href="/#" class="logo">
      <svg class="services__item-icon">
        <use xlink:href="#logo"></use>
      </svg>
    </a>
    <nav class="menu menu--header js-menu">
      <ul>
        <li>
          <a href="catalog.html">Каталог</a>
          <span>
            <svg>
              <use xlink:href="#branch"></use>
            </svg>
          </span>
          <span>
            <svg>
              <use xlink:href="#branch"></use>
            </svg>
          </span>
        </li>
        <li>
          <a href="#">Доставка і оплата</a>
          <span>
            <svg>
              <use xlink:href="#branch"></use>
            </svg>
          </span>
          <span>
            <svg>
              <use xlink:href="#branch"></use>
            </svg>
          </span>
        </li>
        <li>
          <a href="#">Про нас</a>
          <span>
            <svg>
              <use xlink:href="#branch"></use>
            </svg>
          </span>
          <span>
            <svg>
              <use xlink:href="#branch"></use>
            </svg>
          </span>
        </li>
        <li>
          <a href="#">Контакти</a>
          <span>
            <svg>
              <use xlink:href="#branch"></use>
            </svg>
          </span>
          <span>
            <svg>
              <use xlink:href="#branch"></use>
            </svg>
          </span>
        </li>
      </ul>
    </nav>
    <button class="header__sign">
      <svg class="services__item-icon">
        <use xlink:href="#user"></use>
      </svg>
    </button>
    <a href="basket.html" class="header__basket">
      <svg class="services__item-icon">
        <use xlink:href="#basket"></use>
      </svg>
      <span class="active js-count-purchase"></span>
    </a>
  </div>

</header>
