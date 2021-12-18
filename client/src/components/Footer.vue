<template>
  <div id="footer">
    <section class="footer-top">
      <div class="container">
        <div class="row row">
          <div class="mb-4 col-md-3">
            <div class=" o-hidden text-left">
              <div>
                <h4 class="card-title">Info</h4>
                <p class="text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
              </div>
            </div>
          </div>
          <div class="mb-4 col-md-3">
            <div class=" o-hidden text-left">
              <div class=" ">
                <h4 class="card-title">Autres Pages</h4>
                <div class=" mb-5">
                  <ul class="list-inline">
                    <li class=" mb-3 "><a href="/products">Nos Produits</a></li>
                    <li class=" mb-3 "><a href="/energetix">Energetix</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-4 mb-lg-0 mb-md-0 col-md-3">
            <div>
              <b-form @submit="onSubmit" v-if="show">
                <b-form-group id="input-group-2" label-for="input-2">
                  <b-form-input
                    id="input-2"
                    v-model="form.name"
                    required
                    placeholder="votre nom"
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  id="input-group-1"
                  label-for="input-1"
                  description=""
                >
                  <b-form-input
                    id="input-1"
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="Votre email"
                  ></b-form-input>
                </b-form-group>

                <b-form-textarea
                  id="textarea"
                  v-model="text"
                  placeholder="Message"
                  rows="3"
                  max-rows="6"
                ></b-form-textarea>

                <b-btn type="submit" class="mt-2">Envoyer</b-btn>
              </b-form>
              <!-- <b-card class="mt-3" header="Form Data Result">
                <pre class="m-0">{{ form }}</pre>
              </b-card> -->
            </div>
          </div>
          <div class="mb-lg-0 mb-md-0 col-md-3">
            <div class=" o-hidden text-left">
              <div>
                <h4 class="card-title">Contact</h4>
                <div class="address-wrap mb-3">
                  <ul class="list-group list-unstyled">
                    <li>
                      <i class="eva eva-pin-outline mr-2"></i>Massot Nathalie
                    </li>
                  </ul>
                </div>
                <div class="address-wrap mb-3">
                  <ul class="list-group list-unstyled">
                    <li>
                      <i class="eva adress mr-2"></i>34 rue de l'échenay <br />
                      72130 Assé le Boisne
                    </li>
                  </ul>
                </div>
                <div class="address-wrap mb-3">
                  <ul class="list-group list-unstyled">
                    <li>
                      <i class="eva eva-email-outline mr-2"></i
                      >massot.nathalie@gmail.com
                    </li>
                  </ul>
                </div>
                <div class="address-wrap mb-3">
                  <ul class="list-group list-unstyled">
                    <li>
                      <i class="eva eva-phone-call-outline mr-2"></i>
                      Tel: 0684167765
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- <div class="footer_bottom_holder">
      <div class="container">
        © 2020 Coiff'Nath By Attoumani Soukainata
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      form: {
        email: "",
        name: "",
        food: null,
        checked: [],
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn",
      ],
      show: true,
    };
  },
  // methods: {
  //   onSubmit(evt) {
  //     evt.preventDefault();
  //     alert(JSON.stringify(this.form));
  //   },
  //   onReset(evt) {
  //     evt.preventDefault();
  //     // Reset our form values
  //     this.form.email = "";
  //     this.form.name = "";
  //     this.form.food = null;
  //     this.form.checked = [];
  //     // Trick to reset/clear native browser form validation state
  //     this.show = false;
  //     this.$nextTick(() => {
  //       this.show = true;
  //     });
  //   },
  // },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");
.footer-top {
  overflow: hidden;
  position: relative;
  z-index: 99;
  font-size: 13px;
  background-color: #f8f8f8;
  padding-top: 115px;
  padding-bottom: 91px;
  padding: 72px 0 52px;
}
h4 {
  color: #000000;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 20px;
}
a {
  color: black;
  text-transform: uppercase;
  font-size: 12px;
}
.text {
  color: #959595;
}
.footer_bottom_holder {
  /* background-color: black; */
  padding: 0px 0px 10px;
  font-size: 13px;
  letter-spacing: 0px;
  font-weight: 400;
  text-transform: none;
  font-style: normal;
  color: white;
}
.btn-secondary {
  border-radius: none;
  background-color: #f4b0b0;
  border-color: #f4b0b0;
}
</style>
