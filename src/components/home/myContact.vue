<template>
  <div class="q-pa-md">
      <div class="row">
          <div class="col-6">
            <q-img
            transition="flip-right"
            src="~/assets/moon.jpg"
            style="width: 100%;height:45vh"
            >
            <div class="absolute-bottom text-subtitle1 text-center">
                Envoyer moi un message
            </div>
            </q-img>
          </div>
          <div class="col-6">
              <div class="q-ma-md text-grey-4">
                  <h4><u>{{ title }}</u></h4>
              </div>
              <div class="q-ma-md text-grey-10">
                  <p>{{ lorem }}</p>
              </div>
          </div>
      </div>
      <div class='row q-pa-lg'>
        <div class="col-6 q-pa-md">
            <q-input rounded standout v-model="text" label="Email" />
        </div>
        <div class="col-6 q-pa-md">
            <q-input rounded standout v-model="text" label="Nom" />
        </div>
        <div class="col-12 q-pa-md">
          <q-input rounded standout v-model="text" label="Sujet" />
        </div>
        <div class="col-12 q-pa-md">
            <q-input
                rounded
                standout
                v-model="text"
                label="Message"
                type="textarea"
            />
        </div>
        <div class="col-12 q-pa-md text-center">
            <q-btn rounded color="" icon="mail" icon-right="send" label="Envoyer un message" />
        </div>
      </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      text: 'Ici',
      title: 'ME CONNECTER',
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
    }
  }
}
</script>
