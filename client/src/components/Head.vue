<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/products">Nos Produits</router-link>
      <router-link to="/energetix">Energetix</router-link>
      <router-link to="/admin">Admin</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Head",
  data() {
    return {};
  },
};
</script>

<style>
#nav {
  position: relative;
  height: 90px;
  background-color: #f4b0b0;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  /*margin: 0 auto;*/
  text-transform: uppercase;
}

#nav a {
  width: 50%;
  vertical-align: top;
  color: #fff;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.25em;
  box-sizing: border-box;
}

#nav a.router-link-exact-active {
  color: #fff;
}
</style>
