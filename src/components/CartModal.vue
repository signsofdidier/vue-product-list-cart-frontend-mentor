<script setup>
// GEBRUIK CartModalStore.js

import orderConfirmedIcon from '@/assets/images/icon-order-confirmed.svg'
import closeButtonIcon from '@/assets/images/icon-remove-item.svg'
import CartPriceSummary from './CartPriceSummary.vue'
import ConfirmBtn from './ConfirmBtn.vue'

import { useCartModalStore } from '@/stores/CartModalStore'
const cartModalStore = useCartModalStore()
</script>
²
<template>
  <transition name="fade">
    <div
      v-show="cartModalStore.showModal"
      class="fixed inset-0 w-full h-full z-50 bg-black/60 flex items-center justify-center px-3 md:px-0"
      @click="cartModalStore.closeModal"
    >
      <!-- modal content -->
      <transition name="scale-fade">
        <div
          v-show="cartModalStore.showModal"
          class="max-w-lg min-h-[600px] rounded-xl bg-white w-full shadow-xl p-8 space-y-7"
          @click.stop
        >
          <div class="flex items-center justify-between">
            <img :src="orderConfirmedIcon" alt="order confirmed icon" />
            <button @click="cartModalStore.closeModal" class="cursor-pointer">
              <img class="w-4" :src="closeButtonIcon" alt="close button" />
            </button>
          </div>
          <div>
            <h2 class="font-bold text-4xl text-rose-900">Order confirmed</h2>
            <p class="text-sm text-rose-400 mt-1">We hope you enjoy your food!</p>
          </div>

          <!-- Cart Summary -->
          <div class="bg-rose-50 p-6 rounded-xl">
            <CartPriceSummary :show-thumbnail="true" />
          </div>

          <!-- start new order button -->
          <ConfirmBtn @click="cartModalStore.closeModal">Start New Order</ConfirmBtn>
        </div>
      </transition>
    </div>
  </transition>
</template>

<style scoped>
/* Fade voor overlay */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Scale + fade voor modal zelf */
.scale-fade-enter-active,
.scale-fade-leave-active {
  transition: all 0.25s ease;
}
.scale-fade-enter-from,
.scale-fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
