<template>
  <div>
    <h1>Father Component</h1>
    <ChildComponent @call="handleNotification" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import ChildComponent from "./ChildComponent.vue";

export default defineComponent({
  name: "FatherComponent",
  components: {
    ChildComponent,
  },
  setup() {
    function handleNotification(message: string) {
      console.log("Mensagem recebida do filho:", message);
    }
    const fatherText = "Texto do componente pai";
    return {
      fatherText,
      handleNotification,
    };
  },
});
</script>
<style>
h1 {
  color: #42b883;
  font-size: 24px;
}
</style>
