<template>
  <div class="q-pa-md">
      <div class="row">
          <div class="col-6">
            <q-img
            transition="jump-up"
            src="~/assets/skills.jpg"
            style="width: 100%;height:45vh"
            >
            <div class="absolute-bottom text-subtitle1 text-center">
                SKILLS
            </div>
            </q-img>
          </div>
          <div class="col-6">
              <div class="q-ma-md text-grey">
                  <h4><u>{{ title }}</u></h4>
              </div>
              <div class="q-ma-md text-grey">
                  <p>{{ lorem }}</p>
              </div>
          </div>
      </div>
      <div class='row q-pa-lg' >
        <div class="col-2 q-pa-md col-md-2 col-xs-6" :key="n" v-for="n in skills">
          <q-card class="my-card text-center" style="background-color: black; opacity: 0.90;">
            <q-circular-progress
              show-value
              font-size="60px"
              class="q-ma-md"
              :value="n.value"
              size="100px"
              :thickness="0.15"
              border="solid"
              color="positive"
              track-color="grey-10"
            >
              <q-avatar size="60px">
                <img :src="n.img">
              </q-avatar>
            </q-circular-progress>

            <q-card-actions class="justify-center">
              <q-btn flat style="font-family: cantarell; font-size: 12px; color: white">{{n.name}}</q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'MES COMPETENCES',
      value: 60,
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo. Principium autem unde latius se funditabat, emersit ex negotio tali. Chilo ex vicario et coniux eius Maxima nomine, questi apud Olybrium ea tempestate urbi praefectum, vitamque suam venenis petitam adseverantes inpetrarunt ut hi, quos suspectati sunt, ilico rapti conpingerentur in vincula, organarius Sericus et Asbolius palaestrita et aruspex Campensis.',
      skills: [
        {
          name: 'html',
          value: 100,
          img: 'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_html_icon_130541.png'
        },

        {
          name: 'css',
          value: 100,
          img: 'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_css_icon_130661.png'
        },

        {
          name: 'js',
          value: 50,
          img: 'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_light_js_icon_130458.png'
        },

        {
          name: 'linux',
          value: 50,
          img: 'https://cdn.icon-icons.com/icons2/46/PNG/128/linux_penguin_animal_9362.png'
        },

        {
          name: 'Nginx',
          value: 10,
          img: 'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_nginx_icon_130305.png'
        },

        {
          name: 'Sass',
          value: 50,
          img: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/sass_original_logo_icon_146350.png'
        },

        {
          name: 'Flex',
          value: 10,
          img: 'https://achievement-images.teamtreehouse.com/badges_css_flexbox_layout_stage3.png'
        },

        {
          name: 'Grid',
          value: 10,
          img: 'https://static.vaadin.com/directory/user70309/icon/file3460235915593609009_1554052408926logo.png'
        },

        {
          name: 'Node JS',
          value: 50,
          img: 'https://f0.pngfuel.com/png/306/37/node-js-logo-png-clip-art.png'
        },

        {
          name: 'Vue JS',
          value: 50,
          img: 'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vue_icon_130078.png'
        },

        {
          name: 'Bootstrap',
          value: 100,
          img: 'https://cdn.iconscout.com/icon/free/png-256/bootstrap-7-1175254.png'
        },

        {
          name: 'MongoDB',
          value: 10,
          img: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png'
        }
      ]
    }
  }
}
</script>
