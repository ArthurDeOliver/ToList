<template>
  <div>
    <h1>Father Component</h1>
    <ChildComponent
      @call="handleNotification"
      text="texto passado pelo props"
    />
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
    function handleNotification(mensagemFilho: {
      mensage: string;
      text: string;
    }) {
      console.log("Mensagem recebida do filho:", mensagemFilho.mensage);
    }
    const fatherText = "Texto do componente pai";
    return {
      fatherText,
      handleNotification,
    };
  },
});
</script>
<style scoped>
div {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 20%;
  align-items: center;
  /* background-color: red; */
  padding: 10px;
}
h1 {
  color: #42b883;
  font-size: 24px;
}
</style>
