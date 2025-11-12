<script setup>
import { useCartStore } from '@/stores/cartStore'
const cartStore = useCartStore()

const { showThumbnail } = defineProps({
  showThumbnail: {
    type: Boolean,
    required: true,
  },
})
</script>

<template>
  <div class="cart-items-container">
    <div v-if="cartStore.lastOrder">
      <!-- cart item -->
      <div
        v-for="item in cartStore.lastOrder.items"
        :key="item.id"
        class="border-b border-b-rose-100 first:pt-0 py-4 flex items-center overflow-hidden"
      >
        <!-- Thumbnail -->
        <div v-if="showThumbnail" class="aspect-square object-cover w-12 h-12 me-3">
          <img
            class="rounded"
            src="@/assets/images/image-baklava-thumbnail.jpg"
            alt="product thumbnail"
          />
        </div>

        <div class="flex items-center justify-between w-full">
          <div>
            <!-- cart item title -->
            <h3 class="text-sm font-semibold text-rose-900">{{ item.name }}</h3>
            <!-- cart item info -->
            <div class="flex items-center justify-between">
              <div class="mt-1">
                <div class="flex space-x-2 w-full">
                  <span class="me-4 text-red font-semibold text-small">{{ item.quantity }}x</span>
                  <p class="text-rose-40 text-sm">@ ${{ item.price.toFixed(2) }}</p>
                </div>
              </div>
            </div>
          </div>
          <!-- remove from cart button -->
          <div class="w-[26px] flex justify-end">
            <p class="text-rose-900 font-semibold text-sm">
              ${{ (item.price * item.quantity).toFixed(2) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Total Price -->
  <div class="flex justify-between items-center mt-7">
    <p class="text-rose-900">Order Total</p>
    <span class="text-2xl text-rose-900 font-bold">{{ cartStore.lastOrderTotal }}</span>
  </div>
</template>

<style scoped>
.cart-items-container {
  max-height: 300px;
  overflow-y: auto;
  padding-right: 8px;
  margin-right: -8px;
}

/* Custom scrollbar styling met hardcoded kleuren */
.cart-items-container::-webkit-scrollbar {
  width: 6px;
}

.cart-items-container::-webkit-scrollbar-track {
  background: hsl(20, 50%, 98%); /* rose-50 */
  border-radius: 3px;
}

.cart-items-container::-webkit-scrollbar-thumb {
  background: hsl(13, 31%, 94%); /* rose-100 */
  border-radius: 3px;
}

.cart-items-container::-webkit-scrollbar-thumb:hover {
  background: hsl(14, 25%, 72%); /* rose-300 */
}

/* Firefox */
.cart-items-container {
  scrollbar-width: thin;
  scrollbar-color: hsl(13, 31%, 94%) hsl(20, 50%, 98%); /* rose-100 rose-50 */
}
</style>
