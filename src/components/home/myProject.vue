<template>
  <div class="q-pa-md">
      <div class="row">
          <div class="col-6">
            <q-img
            transition="rotate"
            src="~/assets/skills2.png"
            style="width: 100%;height:45vh"
            >
            <div class="absolute-bottom text-subtitle1 text-center">
                A VENIR ...
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
      <div class='row q-pa-lg' >
        <div class="col-3 q-pa-md col-md-4 col-lg-3 col-sm-6 col-xs-12" :key="n" v-for="n in Projects">
          <q-card class="my-card" style="border: solid, black; opacity: 0.90">
            <q-card-section horizontal style="background-color: black">
              <q-card-section class="q-pt-xs">
                <div class="text" style="font-family: cantarell; color: white">{{n.title}}</div>
                <div class="text-h5 q-mt-sm q-mb-xs" style="font-size: 13px; color: white">{{n.title2}}</div>
                <div class="text-caption text-white" style="font-family: lato">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </q-card-section>

              <q-card-section class="col-5 flex flex-center">
                <q-img :src="n.img"
                  class="rounded-borders"
                />
              </q-card-section>
            </q-card-section>

          </q-card>
        </div>
      </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'MES PROJETS',
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo. Principium autem unde latius se funditabat, emersit ex negotio tali. Chilo ex vicario et coniux eius Maxima nomine, questi apud Olybrium ea tempestate urbi praefectum, vitamque suam venenis petitam adseverantes inpetrarunt ut hi, quos suspectati sunt, ilico rapti conpingerentur in vincula, organarius Sericus et Asbolius palaestrita et aruspex Campensis.',
      Projects: [
        {
          title: 'MON SITE',
          title2: 'Jojo fansite',
          img: 'https://ressources.blogdumoderateur.com/2011/11/website__1_-550x442.jpg'
        },

        {
          title: '....',
          title2: '....',
          img: 'https://ressources.blogdumoderateur.com/2011/11/website__1_-550x442.jpg'
        },

        {
          title: '....',
          title2: '....',
          img: 'https://ressources.blogdumoderateur.com/2011/11/website__1_-550x442.jpg'
        },

        {
          title: '....',
          title2: '....',
          img: 'https://ressources.blogdumoderateur.com/2011/11/website__1_-550x442.jpg'
        }
      ]
    }
  }
}
</script>
