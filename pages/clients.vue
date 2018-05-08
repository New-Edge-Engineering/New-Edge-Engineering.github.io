<template>
  <b-container class="clients">
      <h1 class="page-header">Who We Have Helped</h1>
      <b-row class="text-center">
          <b-col><div class="frame"><img src="/clients/incopro.png" width="100" height="60" title="Incopro"/></div></b-col>
          <b-col><div class="frame"><img src="/clients/blackwells.png" width="60" height="60" title="Blackwells Learning"/></div></b-col>
          <b-col><div class="frame"><img src="/clients/orange-digital.jpg" width="60" height="60" title="Orange Digital"/></div></b-col>
          <b-col><div class="frame"><img src="/clients/momentum.png" width="60" height="60" title="Momentum"/></div></b-col>
          <b-col><div class="frame"><img src="/clients/imagination.png" width="100" height="24" title="Imagination"/></div></b-col>
          <b-col><div class="frame"><img src="/clients/77pr.png" width="64" height="60" title="SeventySeven PR"/></div></b-col>
          <b-col><div class="frame"><img src="/clients/wazoku.png" width="100" height="60" title="Wazoku" /></div></b-col>
          <b-col><div class="frame"><img src="/clients/streamingtank.png" width="100" height="38" title="Streaming Tank"/></div></b-col>
          <b-col><div class="frame"><img src="/clients/sky.png" width="100" height="60" title="Sky" /></div></b-col>
          <b-col><div class="frame"><img src="/clients/nativ.png" width="100" height="46" title="Nativ" /></div></b-col>
      </b-row>
  </b-container>
</template>

<style>
.frame {
    height: 175px; /*can be anything*/
    width: 175px; /*can be anything*/
    position: relative;
    margin: auto;
}

img {
    max-height: 100%;
    max-width: 100%;
    width: auto;
    height: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
}

@media (min-width: @grid-float-breakpoint) {
  .frame {
    height: 100px; /*can be anything*/
    width: 100px; /*can be anything*/
  }
}
</style>
