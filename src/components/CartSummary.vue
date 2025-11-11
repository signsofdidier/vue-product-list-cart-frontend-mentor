<script setup>
import removeFromCartIcon from '@/assets/images/icon-remove-item.svg'

const { showThumbnail } = defineProps({
  showThumbnail: {
    type: Boolean,
    required: true,
  },
})
</script>

<template>
  <!-- cart item -->
  <div
    class="border-b border-b-rose-100 first:pt-0 py-4 last:pb-0 flex items-center overflow-hidden"
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
        <h3 class="text-sm font-semibold text-rose-900">Classic Tiramisu</h3>
        <!-- cart item info -->
        <div class="flex items-center justify-between">
          <div class="mt-1">
            <div class="flex space-x-2 w-full">
              <span class="me-4 text-red font-semibold text-small">1x</span>
              <p class="text-rose-40 text-sm">@ $5.50</p>
              <p class="text-rose-500 font-semibold text-sm">$5.50</p>
            </div>
          </div>
        </div>
      </div>
      <!-- remove from cart button -->
      <div class="w-[26px] flex justify-end">
        <button class="border border-rose-400 rounded-full p-0.5 cursor-pointer">
          <img class="w-3 h-3" :src="removeFromCartIcon" alt="remove from cart icon" />
        </button>
      </div>
    </div>
  </div>

  <!-- cart item -->
  <div class="border-b border-b-rose-100 py-4 flex items-center justify-between">
    <div>
      <!-- cart item title -->
      <h3 class="text-sm font-semibold text-rose-900">Vanilla Bean Crème Brûlée</h3>
      <!-- cart item info -->
      <div class="flex items-center justify-between">
        <div class="mt-1">
          <div class="flex space-x-2 w-full">
            <span class="me-4 text-red font-semibold text-small">4x</span>
            <p class="text-rose-40 text-sm">@ $7.50</p>
            <p class="text-rose-500 font-semibold text-sm">$28.00</p>
          </div>
        </div>
      </div>
    </div>
    <!-- remove from cart button -->
    <div class="w-[26px] flex justify-end">
      <button class="border border-rose-400 rounded-full p-0.5 cursor-pointer">
        <img class="w-3 h-3" :src="removeFromCartIcon" alt="remove from cart icon" />
      </button>
    </div>
  </div>

  <!-- cart item -->
  <div class="border-b border-b-rose-100 py-4 flex items-center justify-between">
    <div>
      <!-- cart item title -->
      <h3 class="text-sm font-semibold text-rose-900">Classic Tiramisu</h3>
      <!-- cart item info -->
      <div class="flex items-center justify-between">
        <div class="mt-1">
          <div class="flex space-x-2 w-full">
            <span class="me-4 text-red font-semibold text-small">1x</span>
            <p class="text-rose-40 text-sm">@ $5.50</p>
            <p class="text-rose-500 font-semibold text-sm">$5.50</p>
          </div>
        </div>
      </div>
    </div>
    <!-- remove from cart button -->
    <div class="w-[26px] flex justify-end">
      <button class="border border-rose-400 rounded-full p-0.5 cursor-pointer">
        <img class="w-3 h-3" :src="removeFromCartIcon" alt="remove from cart icon" />
      </button>
    </div>
  </div>

  <!-- Total Price -->
  <div class="flex justify-between items-center mt-7">
    <p class="text-rose-900">Order Total</p>
    <span class="text-2xl text-rose-900 font-bold">$46.50</span>
  </div>
</template>

<style scoped></style>
