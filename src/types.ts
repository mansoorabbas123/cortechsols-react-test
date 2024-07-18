
export interface CartItem {
    id: number;
    title: string;
    quantity: number;
    price: number;
  }
  
export interface CartContextType {
    items: CartItem[];
    addItem: (item: CartItem) => void;
    removeItem: (id: number) => void;
    clearCart: () => void;
  }
  