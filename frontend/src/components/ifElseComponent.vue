<template>
  <button @click="logado = !logado">Alternar Login</button>

  <p v-if="logado">Você está logado.</p>
  <p v-else>Você está deslogado.</p>
</template>

<script>
import { ref } from "vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ifElseComponent",
  setup() {
    const logado = ref(false);
    return { logado };
  },
});
</script>

<style scoped>
button {
  padding: 8px 16px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 16px;
  font-size: 16px;
  transition: background 0.2s;
}

button:hover {
  background-color: #369870;
}

p {
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #333;
}
</style>
