import { createContext, useContext, useState } from "react";

const CartContext = createContext<any>(null);

export const CartProvider = ({ children }: any) => {
    const [cart, setCart] = useState<any[]>(
        JSON.parse(localStorage.getItem("cart") || "[]")
    );

    const save = (data: any[]) => {
        setCart(data);
        localStorage.setItem("cart", JSON.stringify(data));
    };

    const addToCart = (product: any) => {
        const exist = cart.find((p) => p.id === product.id);

        if (exist) {
            const newCart = cart.map((p) =>
                p.id === product.id ? { ...p, qty: p.qty + 1 } : p
            );
            save(newCart);
        } else {
            save([...cart, { ...product, qty: 1 }]);
        }
    };

    const remove = (id: number) => {
        save(cart.filter((p) => p.id !== id));
    };

    const updateQty = (id: number, qty: number) => {
        const newCart = cart.map((p) =>
            p.id === id ? { ...p, qty } : p
        );
        save(newCart);
    };

    const clear = () => {
        save([]);
    };

    return (
        <CartContext.Provider
            value={{ cart, addToCart, remove, updateQty, clear }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);