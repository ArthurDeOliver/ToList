<template>
  <div>
    <ifElseComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ifElseComponent from "./components/ifElseComponent.vue";
import VmodelComponent from "./components/Vmodel.vue";

export default defineComponent({
  name: "App",
  components: {
    VmodelComponent,
    ifElseComponent,
  },
});
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
}
</style>
