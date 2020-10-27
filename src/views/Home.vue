<template>
  <div class="home">
    <v-row class="logo no-gutters" >
      <v-col>
         <v-img  max-height="80vh" contain class="logo-image" src="@/assets/lovii_redondo.png"/>
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
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
.logo {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80vh;
  background-color: #f7a94a;

}
</style>
