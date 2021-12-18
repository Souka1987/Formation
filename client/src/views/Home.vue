<template>
  <div>
    <Carousel />
    <About />
    <Service />
    <Gallery />
    <Energetix />
  </div>
</template>

<script>
import Carousel from "../components/home/Carousel";
import About from "../components/home/About";
import Service from "../components/home/Service";
import Gallery from "../components/home/Gallery";
import Energetix from "../components/home/Energetix";
export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    Carousel,
    About,
    Service,
    Gallery,
    Energetix,
  },
};
</script>
