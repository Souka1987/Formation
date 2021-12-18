<template>
  <div>
    <div>
      <b-button v-b-modal.modal-1>Launch demo modal</b-button>

      <b-modal id="modal" title="Add Product">
        <!-- <p class="my-4">Hello from modal!</p> -->
        <b-form-group
          @submit="formAddItem"
          @reset="onReset"
          id="input-group-2"
          label="tilte:"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="form.name"
            required
            placeholder="title"
          ></b-form-input>
        </b-form-group>
      </b-modal>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      form: {
        title: "",
        author: "",
        accept: false,
        date: new Date().toLocaleString(),
      },
    };
  },
  computed: {
    ...mapState("auth", ["sess"]),
  },
  methods: {
    formAddItem() {
      if (this.form.accept !== true) {
        this.$q.notify({
          color: "deep-orange-10",
          textColor: "white",
          icon: "warning",
          message: "Vous devez acceptez les conditions",
        });
      } else {
        if (this.form) {
          this.$q.notify({
            color: "primary",
            textColor: "white",
            icon: "create",
            message: "Produit Creer",
          });
          this.form.author = this.sess.pseudo;
          console.log(this.form);
          this.createProducts(this.form);
          this.modal = false;
        }
      }
    },
    onReset() {
      this.form.title = null;
      this.form.accept = false;
    },
    ...mapActions("products", ["createProducts"]),
  },
  props: {
    modal: {
      default: false,
    },
  },
};
</script>
