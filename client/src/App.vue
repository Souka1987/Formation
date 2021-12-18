<template>
  <div id="app">
    <app-Head></app-Head>
    <Head />
    <Footer />
    <app-Footer></app-Footer>
  </div>
</template>

<script>
import Footer from "./components/Footer";
import Head from "./components/Head";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    Head,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
