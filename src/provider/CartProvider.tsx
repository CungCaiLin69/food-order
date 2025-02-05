import { createContext, PropsWithChildren, useContext, useState } from "react";
import { CartItem, Product } from "../types";

type CartType = {
    items: CartItem[],
    addItem: (product: Product, size: CartItem['size']) => void
}

export const CartContext = createContext<CartType>({
    items: [],
    addItem: () => {}
})

const CartProvider = ({ children }: PropsWithChildren) => {
    const [items, setItems] = useState<CartItem[]>([])

    const addItem = (product: Product, size: CartItem['size']) => {
        //if already in cart, increment quantity

        const newCartItem: CartItem = {
            id: '1', //generated
            product_id: product.id,
            product,
            size,
            quantity: 1
        }

        setItems([newCartItem, ...items])
    }

    //update quantity

    return(
        <CartContext.Provider value={{ items, addItem }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider

export const useCart = () => useContext(CartContext)