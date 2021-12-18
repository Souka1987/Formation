<template>
  <div>
    <div class="mt-3">
      <!-- <h6 class="text-center">Center alignment</h6> -->
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        align="center"
      ></b-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  data() {
    return {};
  },
};
</script>
