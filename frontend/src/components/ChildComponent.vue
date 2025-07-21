<template>
  <button @click="notifyParent">Clique para avisar o Pai</button>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ChildComponent",
  emits: ["call"],
  props: {
    text: String,
  },
  setup(props, { emit }) {
    const notifyParent = () => {
      emit("call", "Oi Pai! O botão foi clicado.");
    };
    return {
      notifyParent,
    };
  },
});
</script>
<style>
button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #42b883;
  color: white;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #35495e;
}
</style>
