<template>
  <div class="q-pa-md">
      <div class="row">
          <div class="col">
            <q-img
            transition="fade"
            src="~/assets/mars.jpg"
            style="width: 100%;height:45vh"
            >
            <div class="absolute-bottom text-subtitle1 text-center">
                ATTOUMANI
            </div>
            </q-img>
          </div>
          <div class="col text-center">
              <div class="q-ma-md text-grey-4">
                  <h4><u>{{ title }}</u></h4>
              </div>
              <div class="q-ma-md text-grey-10">
                  <p>{{ lorem }}</p>
              </div>
          </div>
      </div>
      <div class='row'>
          <div class="col text-center">
              <div class="q-ma-md text-grey-4">
                  <h4>{{ title }}</h4>
              </div>
              <div class="q-ma-md text-grey-10">
                  <p>{{ lorem }}</p>
              </div>
          </div>
          <div class="col">
            <q-img
            transition="fade"
            src="~/assets/terre.jpg"
            style="width: 100%;height:45vh"
            >
            <div class="absolute-bottom text-subtitle1 text-center">
                Soukainata
            </div>
            </q-img>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Présentation',
      lorem: 'Principium autem unde latius se funditabat, emersit ex negotio tali. Chilo ex vicario et coniux eius Maxima nomine, questi apud Olybrium ea tempestate urbi praefectum, vitamque suam venenis petitam adseverantes inpetrarunt ut hi, quos suspectati sunt, ilico rapti conpingerentur in vincula, organarius Sericus et Asbolius palaestrita et aruspex Campensi. Principium autem unde latius se funditabat, emersit ex negotio tali. Chilo ex vicario et coniux eius Maxima nomine, questi apud Olybrium ea tempestate urbi praefectum, vitamque suam venenis petitam adseverantes inpetrarunt ut hi, quos suspectati sunt, ilico rapti conpingerentur in vincula, organarius Sericus et Asbolius palaestrita et aruspex Campensis.'
    }
  }
}
</script>
