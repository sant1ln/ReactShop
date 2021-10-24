import { useState } from 'react'

const initialState = {
  cart: [],
}

const useInitialState = () => {
  const [state, setState] = useState(initialState)

  const addToCart = (payload) => {
    setState({
      ...state,
      cart:[...state.cart,payload]
    })
  }

  const removeFromCart = (idItemInCart) =>{
    setState({
      ...state,
      cart: state.cart.filter(item => item.idItemInCart !== idItemInCart)
    })
  }

  return{
    state,
    addToCart,
    removeFromCart
  }
}

export default useInitialState;