<script setup>
import addToCartIcon from '@/assets/images/icon-add-to-cart.svg'
import products from '@/data.json'
</script>

<template>
  <main class="w-full min-h-screen bg-rose-50">
    <section class="container mx-auto p-20">
      <div class="grid grid-cols-12 gap-10">
        <div class="col-span-12 lg:col-span-7 xl:col-span-8">
          <h2 class="text-4xl font-bold text-rose-900">Desserts</h2>
          <!-- Product Cards -->
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
            <div v-for="product in products" :key="product.id" class="card">
              <!-- card image -->
              <div class="">
                <img class="aspect-square rounded-xl" :src="product.image.desktop" alt="" />
              </div>

              <div class="add-to-cart -mt-7 relative">
                <button
                  class="flex items-center justify-center bg-white rounded-full px-6 py-3 gap-2 font-semibold text-rose-900 border border-rose-900 mx-auto hover:text-red transition-all duration-300 cursor-pointer"
                >
                  <span><img class="w-[26px]" :src="addToCartIcon" alt="add to cart icon" /></span
                  >Add to Cart
                </button>
              </div>
              <!-- Card info -->
              <div class="card-info mt-6">
                <p class="text-rose-500">{{ product.category }}</p>
                <h3 class="text-md font-semibold text-rose-900">{{ product.name }}</h3>
                <span class="text-red font-bold text-lg">${{ product.price.toFixed(2) }}</span>
              </div>
            </div>
          </div>
        </div>
        <!-- Cart -->
        <div class="col-span-12 lg:col-span-5 xl:col-span-4 bg-gray-100 rounded-xl">
          <div class="p-6">
            <h2 class="text-2xl font-bold text-red">Your Cart (7)</h2>
            <div>
              <h3>Classic Tiramisu</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
