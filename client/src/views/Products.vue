<template>
  <div>
    <Header />
    <ListProducts />
    <Pagination/>
  </div>
</template>

<script>
import Header from "../components/products/Header";
import ListProducts from "../components/products/ListProducts";
import Pagination from "../components/products/Pagination";
export default {
  name: "Products",
  data() {
    return {};
  },
  components: {
    Header,
    ListProducts,
    Pagination

  }
};
</script>
