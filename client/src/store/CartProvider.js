import React, { useReducer } from 'react'
import { CartContext } from './context-store'


// skeleton for default cart
const defaultCart = {
    items: [],
    totalAmount: 0
}


const cartReducer = (state, action) => {

    if (action.type === 'ADD') {
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.quantity
        const existingItemIndex = state.items.findIndex((item) => item.id === action.item.id)
        const existingItem = state.items[existingItemIndex]
        let updatedItems
        if (existingItem) {
            let itemToUpdate = { ...existingItem, quantity: existingItem.quantity + action.item.quantity }
            updatedItems = [...state.items]
            updatedItems[existingItemIndex] = itemToUpdate
        }
        else {
            updatedItems = [...state.items, action.item]
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    if (action.type === 'REMOVE') {
        const updatedItems = state.items.filter((item) => item.id !== action.item.id)
        const updatedTotalAmount = state.totalAmount - action.item.price * action.item.quantity
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

    // return default cart
    return {
        items: [],
        totalAmount: 0
    }
}

const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCart)

    //values for default cart along used in reducer. Will be passed to the reducer function. 
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: (item) => dispatchCartAction({type:'ADD', item:item}),
        removeItem: (item) => dispatchCartAction({type:'REMOVE', item:item})
    }

    return (
        <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
    )
}

export default CartProvider