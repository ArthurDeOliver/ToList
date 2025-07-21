<template>
  <div>
    <button @click="changeText" id="buttonText">{{ text }}</button>

    <h1>Usuario {{ user.name }}</h1>
    <span>Idade: {{ user.age }}</span>
    <span> O funcionario esta trabalhando? {{ isEmployeeWorking }}</span>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, watch, computed } from "vue";

export default defineComponent({
  name: "ComponentBase",
  props: {
    text: String,
  },
  setup(props) {
    const text = ref(props.text);
    const user = reactive({
      name: "Arthur Angelo Gomes de Oliveira",
      age: 25,
      work: true,
    });

    const changeText = () => {
      text.value = "Nome alterado";
      user.name = "Angelo Arthur Oliveira de Gomes";
      user.work = false;
    };

    const isEmployeeWorking = computed(() => {
      return user.work ? "Sim" : "Nao";
    });

    watch(
      () => user,
      (newValue, oldValue) => {
        console.log(newValue.name + " mudou de " + oldValue.name);
        console.log("Mudanca feita no texto");
      },
      { deep: true }
    );

    return {
      text,
      changeText,
      isEmployeeWorking,
      user,
    };
  },
});
</script>
<style scoped>
#buttonText {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #42b883;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  cursor: pointer;
}
</style>
