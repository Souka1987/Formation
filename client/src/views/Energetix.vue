<template>
  <div>
    <HeaderEnergetix />
    <ProductsEnergetix />
    <Contact />
  </div>
</template>

<script>
import HeaderEnergetix from "../components/energetix/HeaderEnergetix";
import ProductsEnergetix from "../components/energetix/ProductsEnergetix";
import Contact from "../components/energetix/Contact";
export default {
  name: "Energetix",
  data() {
    return {};
  },
  components: {
    HeaderEnergetix,
    ProductsEnergetix,
    Contact,
  },
};
</script>
