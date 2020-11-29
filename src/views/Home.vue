<template>
  <div class="home">
    <v-row  class="no-gutters" >
      <v-col class="logo">
         <v-img contain max-height="100%" class="logo-image" src="@/assets/lovii_redondo.png"/>
      </v-col>
    </v-row>
    <v-row class="no-gutters" >
      <v-col class="photos">
          <v-img @click="goToInsta" class="photo" src="@/assets/photos/1.jpg"/>
          <v-img @click="goToInsta" class="photo" src="@/assets/photos/2.jpg"/>
          <v-img @click="goToInsta" class="photo" src="@/assets/photos/3.jpg"/>
          <v-img @click="goToInsta" class="photo" src="@/assets/photos/4.jpg"/>
          <v-img @click="goToInsta" class="photo" src="@/assets/photos/5.jpg"/>
          <v-img @click="goToInsta" class="photo" src="@/assets/photos/6.jpg"/>
          <v-img @click="goToInsta" class="photo" src="@/assets/photos/7.jpg"/>
          <v-img @click="goToInsta" class="photo" src="@/assets/photos/8.jpg"/>
          <v-img @click="goToInsta" class="photo" src="@/assets/photos/9.jpg"/>
          <v-img @click="goToInsta" class="photo" src="@/assets/photos/10.jpg"/>
          <v-img @click="goToInsta" class="photo" src="@/assets/photos/11.jpg"/>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  goToInsta(){
    window.location.href = 'https://www.instagram.com/loviipersonalizados/'
  }
}
</script>

<style scoped lang="scss">
.home {
  display: block;
}
  .logo {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-height: 500px;
    background-color: #f7a94a;
    overflow: hidden;
  }
  .photos {
    padding: 24px;
    width: 100%;
    background-color: #e83171;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    .photo {
      max-height: 400px;
      max-width: 400px;
      margin: 12px;
      cursor: pointer;

      @media screen and (max-width: 400px){
        width: 100%;
      }

      &:after {
        content: '\A';
        position: absolute;
        width: 100%; height:100%;
        top:0; left:0;
        background:rgba(0,0,0,0.6);
        opacity: 0;
        transition: all 1s;
        -webkit-transition: all 1s;
      }
      &:hover:after {
        opacity: 1;
      }
    }
  }
</style>
