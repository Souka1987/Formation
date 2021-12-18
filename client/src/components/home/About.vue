<template>
  <section>
    <div>
      <div>
        <b-jumbotron header="Bienvenue sur Coiff'Nath">
          <h2>COIFFURE A DOMICILE</h2>
          <div class="separator text-center"></div>
          <div class="container">
            <div class="row">
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </div>
          </div>
        </b-jumbotron>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
  data() {
    return {};
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lora:ital@1&display=swap");
.jumbotron {
  background-color: #ffffff;
}
.display-3 {
  font-size: 30px;
  font-family: "Lora", serif;
  color: #c09f66;
}
h2 {
  font-weight: 600;
  text-transform: uppercase;
  font-size: 30px;
}
.separator {
  height: 1px;
  margin-top: 30px;
  margin-bottom: 30px;
  background-color: #e6d9c2;
  width: 61px;
  position: relative;
  display: block;
}
p {
  /* color: #8c8880; */
  /* font-family: "Lora", sans-serif; */
  font-size: 14px;
  line-height: 24px;
  font-style: normal;
  font-weight: 400;
}
section {
  padding: 130px 0px;
}
</style>
