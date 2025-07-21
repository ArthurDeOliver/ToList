<template>
  <div>
    <form>
      <label for="name">Nome:</label>
      <input type="text" id="name" v-model="userPreferences.name" />

      <label for="description">Descrição:</label>
      <textarea
        id="description"
        v-model="userPreferences.description"
      ></textarea>

      <label for="fruit">Fruta favorita:</label>
      <select id="fruit" v-model="userPreferences.fruit">
        <option value="">Selecione</option>
        <option value="maçã">Maçã</option>
        <option value="banana">Banana</option>
        <option value="laranja">Laranja</option>
      </select>

      <label>
        <input type="checkbox" v-model="userPreferences.isChecked" />
        Aceito os termos
      </label>
      <p>O nome objeto modificado é: {{ userPreferences }}</p>
    </form>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "VmodelComponent",
  setup() {
    const userPreferences = ref({
      name: "",
      description: "",
      fruit: "",
      isChecked: false,
    });
    return {
      userPreferences,
    };
  },
});
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 400px;
  margin: 32px auto;
  padding: 24px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

label {
  font-weight: 500;
  margin-bottom: 4px;
}

input[type="text"],
textarea,
select {
  width: 100%;
  padding: 8px 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  margin-top: 4px;
  box-sizing: border-box;
}

input[type="checkbox"] {
  margin-right: 8px;
}

p {
  margin-top: 16px;
  background: #e6f7ff;
  padding: 10px;
  border-radius: 6px;
  font-size: 0.95rem;
  color: #333;
  word-break: break-all;
}
</style>
