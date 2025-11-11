<script setup>
import { useCartModalStore } from '@/stores/CartModalStore'
const cartModalStore = useCartModalStore()

import addToCartIcon from '@/assets/images/icon-add-to-cart.svg'
import carbonNeutralIcon from '@/assets/images/icon-carbon-neutral.svg'
import incrementIcon from '@/assets/images/icon-increment-quantity.svg'
import decrementIcon from '@/assets/images/icon-decrement-quantity.svg'
import ConfirmBtn from './ConfirmBtn.vue'
import CartSummary from './CartSummary.vue'
import CartModal from './CartModal.vue'
import products from '@/data.json'

import { ref } from 'vue'

const isInCart = ref(false)
</script>

<template>
  <main class="w-full h-full min-h-screen bg-rose-50">
    <section class="container mx-auto px-4 py-8 sm:px-6 lg:px-8 lg:py-20">
      <div class="grid grid-cols-12 gap-6 lg:gap-10">
        <div class="col-span-12 lg:col-span-7 xl:col-span-8 mx-auto">
          <h2 class="text-4xl font-bold text-rose-900">Desserts</h2>
          <!-- Product Cards -->
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
            <div v-for="product in products" :key="product.id" class="card">
              <div class="group">
                <!-- card image -->
                <div
                  class="overflow-hidden rounded-xl"
                  :class="isInCart ? 'border-3 border-red' : 'border-3 border-transparent'"
                >
                  <img
                    class="aspect-square rounded-xl group-hover:scale-110 transition-all duration-400 ease-in-out"
                    :src="product.image.desktop"
                    alt=""
                  />
                </div>

                <!-- items quantity -->
                <div v-if="isInCart" class="add-to-cart -mt-7 relative">
                  <button
                    class="flex items-center justify-between bg-red rounded-full px-4 py-3 gap-2 border border-red mx-auto space-x-9"
                  >
                    <!-- decrement -->
                    <button
                      class="w-5 h-5 flex items-center justify-center border border-white rounded-full cursor-pointer"
                    >
                      <img :src="decrementIcon" alt="decrement icon" />
                    </button>

                    <!-- item quantity -->
                    <p class="text-white">4</p>

                    <!-- increment -->
                    <button
                      class="w-5 h-5 flex items-center justify-center border border-white rounded-full cursor-pointer"
                    >
                      <img :src="incrementIcon" alt="increment icon" />
                    </button>
                  </button>
                </div>

                <!-- product add to cart button -->
                <div v-else class="add-to-cart -mt-7 relative">
                  <button
                    class="flex items-center justify-center bg-white rounded-full px-6 py-3 gap-2 font-semibold text-rose-900 border border-rose-900 mx-auto hover:text-red transition-all duration-300 cursor-pointer"
                  >
                    <span><img class="w-[26px]" :src="addToCartIcon" alt="add to cart icon" /></span
                    >Add to Cart
                  </button>
                </div>
              </div>
              <!-- Card info -->
              <div class="card-info mt-4">
                <p class="text-rose-500">{{ product.category }}</p>
                <h3 class="text-md font-semibold text-rose-900">{{ product.name }}</h3>
                <span class="text-red font-bold text-lg">${{ product.price.toFixed(2) }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Cart -->
        <div class="col-span-12 lg:col-span-5 xl:col-span-4 rounded-xl">
          <div class="p-6 bg-white rounded-xl">
            <h2 class="text-2xl font-bold text-red mb-2">Your Cart (7)</h2>

            <!-- cart product summary -->
            <CartSummary :show-thumbnail="true" />

            <!-- carbon-neutral -->
            <div class="text-center w-full bg-rose-50 rounded-lg mt-5">
              <p class="text-rose-900 flex items-center space-x-2 justify-center py-4">
                <img :src="carbonNeutralIcon" alt="" /> This is a&nbsp;
                <span class="font-semibold">carbon-neutral</span> &nbsp;delivery
              </p>
            </div>

            <!-- Confirm Order Button -->
            <div class="mt-5">
              <ConfirmBtn @click="cartModalStore.toggleModal">Confirm Order</ConfirmBtn>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- modal -->
  <CartModal />
</template>

<style scoped></style>
