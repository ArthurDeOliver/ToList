<template>
  <div>
    <ul>
      <li v-for="product in isProductInStock" :key="product.id">
        {{ product.name }}
      </li>
    </ul>
    <button @click="ChangeProductInStock">Alterar o primeiro produto</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from "vue";

export default defineComponent({
  name: "ProductsView",
  setup() {
    const products = reactive({
      items: [
        { id: 1, name: "Chocolate", price: 100, inStock: true },
        { id: 2, name: "Salgadinho", price: 200, inStock: false },
        { id: 3, name: "Refrigerante", price: 300, inStock: true },
      ],
    });

    const isProductInStock = computed(() => {
      const productsInStockFiltered = products.items.filter(
        (products) => products.inStock
      );
      return productsInStockFiltered;
    });

    function ChangeProductInStock() {
      products.items[0].inStock = !products.items[0].inStock;
      console.log("Produto em estoque alterado");
    }

    return {
      products,
      isProductInStock,
      ChangeProductInStock,
    };
  },
});
</script>

<style>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  padding: 8px;
  background-color: #2c2c2c;
  margin-bottom: 4px;
  border-radius: 4px;
}
button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #42b883;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}
</style>
