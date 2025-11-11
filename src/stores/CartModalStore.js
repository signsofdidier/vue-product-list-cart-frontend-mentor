import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCartModalStore = defineStore('cartModalStore', () => {
  const showModal = ref(false)

  const toggleModal = () => {
    showModal.value = !showModal.value
  }

  const closeModal = () => {
    showModal.value = false
  }

  return { showModal, toggleModal, closeModal }
})
