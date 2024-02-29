<script setup>

import MainProduct from '../components/MainProduct.vue'
import SortProduct from '../components/SortProduct.vue'

import { ref } from 'vue'
const products = ref([
  {
    image: "https://images.woodenstreet.de/image/cache/data%2Furban-cart%2FElliot+Iconic+Chair%2F1-750x650.jpg",
    name: "Montes Scelerisque",
    price: "$250",
    reviews: "807",
    stars: 4.9,
    sale: "60% Off",
  },
  {
    image: "https://magnoliahome.co.in/wp-content/uploads/2021/08/Jasper-Arm-Chair-1.1-1.jpg",
    name: "Leo Sodales Varius",
    price: "$320",
    reviews: "770",
    stars: 4,
    sale: "50% Off",
  },
  {
    image: "https://ii2.pepperfry.com/media/catalog/product/s/t/494x544/stalley-sheesham-wood-arm-chair-in-gray-dual-print---honey-oak-finish-stalley-sheesham-wood-arm-chai-w4osso.jpg",
    name: "ConfyChair",
    price: "$150",
    reviews: "665",
    stars: 4.5,
  },
  {
    image: "https://www.bassettfurniture.com/dw/image/v2/BGNC_PRD/on/demandware.static/-/Sites-bassett-Library/default/dw353f8e9d/living/chairs/3-col-card-accent-4.jpg",
    name: "Commodo Adipiscing",
    price: "$80",
    reviews: "343",
    stars: 4.8,
    sale: "60% Off",
  },
])

const sortSens = ref("ASC");
const sortActive = ref(4);

const sortTopRated = () => {
  if (sortSens.value === "ASC") {
    products.value.sort((a, b) => b.stars - a.stars)
    sortSens.value = "DESC"
  } else {
    products.value.sort((a, b) => b.stars - a.stars).reverse()
    sortSens.value = "ASC"
  }

  sortActive.value = 1;
}

const sortPopular = () => {
  if (sortSens.value === "ASC") {
    products.value.sort((a, b) => b.stars - a.stars)
    sortSens.value = "DESC"
  } else {
    products.value.sort((a, b) => a.stars - b.stars)
    sortSens.value = "ASC"
  }
  sortActive.value = 2;

}

const sortNewest = () => {
  if (sortSens.value === "ASC") {
    products.value.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    sortSens.value = "DESC"
  } else {
    products.value.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    sortSens.value = "ASC"
  }

  sortActive.value = 3;
}

const sortPrice = () => {
  if (sortSens.value === "ASC") {
    products.value = products.value.sort((a, b) => a.price - b.price)
    sortSens.value = "DESC"

  } else {
    products.value = products.value.sort((a, b) => b.price - a.price)
    sortSens.value = "ASC"

  }
  sortActive.value = 4;
}

import { onMounted } from 'vue'
onMounted(() => {
  sortTopRated();
})
// sort.reverse
</script>

<template>
  <div>
    <SortProduct :sortSens="sortSens" :sortActive="sortActive" @topRated="sortTopRated" @popular="sortPopular"
      @newest="sortNewest" @price="sortPrice" />
    <div class="flex items-center justify-between mx-20 mt-5">
      <MainProduct v-for="product in products" :details="product" :key="product.name" />
    </div>
  </div>
</template>

<style scoped></style>
