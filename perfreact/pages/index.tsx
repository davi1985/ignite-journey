import { FormEvent, useCallback, useState } from "react";
import { Product, ProductFormatted, Results } from "../@types";
import { formatter } from "../utils/utils";
import { SearchResults } from "./components/SearchResults";

export default function Home() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<Results>({
    totalPrice: 0,
    data: [],
  });

  async function handleSearch(event: FormEvent) {
    event.preventDefault();

    if (!search.trim()) {
      return;
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`);
    const data: Product[] = await response.json();

    const products: ProductFormatted[] = data.map(({ id, title, price }) => {
      return {
        id,
        title,
        price,
        priceFormatted: formatter.format(price),
      };
    });

    const totalPrice = results.data.reduce(
      (total, { price }) => (total += price),
      0
    );

    setResults({ totalPrice, data: products });
  }

  const addToWishList = useCallback(async (id: number) => console.log(id), []);

  return (
    <div>
      <h1>Search</h1>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button type="submit">Get</button>
      </form>

      <SearchResults
        results={results.data}
        totalPrice={results.totalPrice}
        onAddToWishlist={addToWishList}
      />
    </div>
  );
}
