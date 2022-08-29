export interface AddingProductToWishlistProps {
  onAddToWishlist: () => void;
  onRequestClose: () => void;
}

export function AddingProductToWishlist({
  onAddToWishlist,
  onRequestClose,
}: AddingProductToWishlistProps) {
  return (
    <span>
      Deseja adiciona aos favoritos ?
      <button onClick={onAddToWishlist}>Sim</button>
      <button onClick={onRequestClose}>Não</button>
    </span>
  );
}
