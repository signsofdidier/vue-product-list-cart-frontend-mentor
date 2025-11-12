import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useCartModalStore } from './CartModalStore'

export const useCartStore = defineStore('cartStore', () => {
  const cart = ref([])

  const addToCart = (product) => {
    const existing = cart.value.find((item) => item.id === product.id)
    if (existing) {
      existing.quantity++
    } else {
      cart.value.push({ ...product, quantity: 1 })
    }
  }

  const totalItemPrice = (item) => {
    if (item.quantity > 1) return `$${(item.price * item.quantity).toFixed(2)}`
    return ''
  }

  const totalPrice = computed(() => {
    return `$${cart.value.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}`
  })

  const deleteFromCart = (productId) => {
    cart.value = cart.value.filter((item) => item.id !== productId)
  }

  const cartItemsCount = computed(() => {
    return cart.value.reduce((total, item) => total + item.quantity, 0)
  })

  const itemInCart = (itemId) => {
    return cart.value.some((item) => item.id === itemId)
  }

  const cartItemQuantity = (itemId) => {
    const item = cart.value.find((item) => item.id === itemId)
    return item ? item.quantity : 0
  }

  const decrementCartItem = (productId) => {
    const item = cart.value.find((item) => item.id === productId)
    if (!item) return

    if (item.quantity > 1) {
      return item.quantity--
    } else {
      deleteFromCart(productId)
    }
  }

  const incrementCartItem = (productId) => {
    const item = cart.value.find((item) => item.id === productId)
    if (item) {
      return item.quantity++
    }
  }

  const orders = ref([])

  const confirmOrder = () => {
    if (cart.value.length > 0) {
      orders.value.push({
        id: Date.now(),
        items: [...cart.value], //kopie van cart
        total: totalPrice.value,
        date: new Date().toISOString(),
      })

      cart.value = []
    }
  }

  const lastOrder = computed(() => {
    return orders.value.length > 0 ? orders.value[orders.value.length - 1] : null
  })

  const lastOrderTotal = computed(() => {
    return lastOrder.value ? lastOrder.value.total : '$0.00'
  })

  return {
    cart,
    addToCart,
    deleteFromCart,
    totalItemPrice,
    totalPrice,
    cartItemsCount,
    itemInCart,
    incrementCartItem,
    decrementCartItem,
    cartItemQuantity,
    orders,
    confirmOrder,
    lastOrder,
    lastOrderTotal,
  }
})
