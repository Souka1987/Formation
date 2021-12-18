<template>
  <div>
    <div>
      <b-carousel
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000"
        fade
        indicators
        img-width="1024"
        img-height="480"
      >
        <b-carousel-slide
          caption="First slide"
          img-src="https://s1.1zoom.me/b5043/737/Beautiful_Hair_Face_Glance_White_background_Dark_530442_3840x2160.jpg"
        ></b-carousel-slide>
        <b-carousel-slide
          caption="Second Slide"
          img-src="https://images.hdqwalls.com/download/blonde-girl-hair-gv-3840x2160.jpg"
        ></b-carousel-slide>
        <b-carousel-slide
          caption="Third Slide"
          img-src="https://images7.alphacoders.com/637/637293.jpg"
        ></b-carousel-slide>
        <b-carousel-slide
          caption="Third Slide"
          img-src="https://s2.best-wallpaper.net/wallpaper/3840x2160/1909/Blue-eyes-fashion-girl-makeup-red-lip-earrings_3840x2160.jpg"
        ></b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {};
  },
};
</script>

<style>
  
</style>