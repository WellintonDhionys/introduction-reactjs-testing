import { CartProvider } from './cart'

export function AppProvider({ children }: any) {
  return (
    <CartProvider>{children}</CartProvider>
  );
}