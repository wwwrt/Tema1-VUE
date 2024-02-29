<script setup>
defineProps({
    details: Object,
    required: true
})
</script>

<template>
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img class="rounded-t-lg object-cover h-72 w-full" :src="details.image" alt="Product Image" />
        </a>
        <div class="p-5">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white">{{ details.name }}</h5>
            </a>
            <div class="mb-3 flex justify-between items-center">
                <div class="flex items-center">
                    <!-- stelele și numărul de recenzii -->
                    <span v-for="star in parseInt(details.stars)" :key="star" class="bi bi-star-fill text-yellow-400"></span>
                    <span v-if="details.stars % 1 !== 0" class="bi bi-star-half text-yellow-400"></span>
                    <span class="ml-2 text-gray-600 dark:text-gray-400">{{ details.reviews }} reviews</span>
                </div>
            </div>
            <!-- Afișarea prețului și a ofertei pe un nou rând -->
            <p class="mb-3 font-normal text-gray-900 dark:text-white">{{ details.price }} {{ details.sale }}</p>
            <!-- Buton de adăugare în coș și cumpărare -->
            <div class="flex space-x-3">
                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <i class="bi bi-bag-dash mr-2"></i> Add to Cart 
                </a>
                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                     Buy Now 
                </a>
            </div>
        </div>
    </div>
    </template>
    
