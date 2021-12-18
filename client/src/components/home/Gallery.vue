<template>
  <section>
    <div>
      <div class="container">
        <h1>Gallery</h1>
        <div>
          <b-card-group columns>
            <b-card
              img-src="https://www.mavnmodels.com/storage/2018/07/my-hairstyle.jpg"
              overlay
            >
            </b-card>

            <b-card
              img-src="https://s1.1zoom.me/big0/795/Model_Hair_Makeup_Brunette_girl_Beautiful_584422_1280x853.jpg"
              img-alt="Image"
              overlay
            >
            </b-card>

            <b-card
              img-src="https://lifeofhair.com/wp-content/uploads/2016/12/hair-texture-model.jpg"
              img-alt="Image"
              overlay
            >
            </b-card>

            <b-card
              class="bg"
              text-variant="white"
              style="border:1px solid #f4b0b0"
            >
              <blockquote class="card-blockquote">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
                <footer>
                  <small
                    >Someone famous in
                    <cite title="Source Title">Source Title</cite></small
                  >
                </footer>
              </blockquote>
            </b-card>

            <b-card
              img-src="https://images7.alphacoders.com/431/431113.jpg"
              img-alt="Image"
              overlay
            ></b-card>

            <b-card
              img-src="https://images2.alphacoders.com/907/907563.jpg"
              img-alt="Image"
              overlay
            ></b-card>

            <b-card
              img-src="https://lionesse.com/wp-content/uploads/hair.jpg"
              img-alt="Image"
              overlay
            >
            </b-card>
          </b-card-group>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Gallery",
  data() {
    return {};
  },
};
</script>

<style>
section {
  padding: 130px 0px;
}
.bg {
  background-color: #f4b0b0;
}
.card-body {
  border: none;
}
</style>
