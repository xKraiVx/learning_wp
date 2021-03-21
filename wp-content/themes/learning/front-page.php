<?php

/**
 * Template Name: Main page
 *
 */
get_header() ?>
<main>
    Main Page
    <div class="canvas">
        <canvas class="anim-canvas anim-canvas_1"  data-width="20" data-length="35" data-color="red" resize="true"></canvas>
    </div>
    <div class="canvas">
        <canvas class="anim-canvas anim-canvas_2" data-width="10" data-length="20" data-color="blue" resize="true"></canvas>
    </div>
    <div class="canvas">
        <canvas class="anim-canvas anim-canvas_3" data-width="5" data-length="10" data-color="green" resize="true"></canvas>
    </div>
    <canvas id="canvas"></canvas>
</main>

<?php get_footer(); ?>