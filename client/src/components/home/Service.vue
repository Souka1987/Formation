<template>
  <div>
    <div class="container">
      <h1>Mes services</h1>
      <div class="row">
        <div>
          <b-card
            title="Service 1"
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <div class="thumbnail">
              <a
                href="https://image.flaticon.com/icons/png/512/31/31449.png"
                title="Hairstyle"
                class=""
              >
                <span
                  class="icon shortcode theme  use-hover"
                  style="color:#b69e59;font-size:70px !important;"
                  ></span
                >
              </a>
            </div>
            <b-card-text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </b-card-text>

            <b-button href="#" variant="primary">Go</b-button>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Service",
  data() {
    return {};
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lora:ital@1&display=swap");
h1 {
  font-size: 21px;
  font-family: "Lora", serif;
  color: #c09f66;
}
/* .services .thumbnail .icon {
  color: #fff;
  border-radius: 100%;
  text-align: center;
  min-height: inherit;
  min-width: inherit;
  position: relative;
  line-height: 100%;
  transform: scale(0.8);
} */
</style>
