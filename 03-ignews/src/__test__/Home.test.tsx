import { render, screen } from "@testing-library/react";

import Home, { getServerSideProps } from "../pages/index";

const productMock = {
  priceId: "adfdferghshs",
  amount: 9.9,
};

describe("Home Page component", () => {
  it("should be render correctly", () => {
    render(<Home product={productMock} />);

    const img = screen.getByRole("img", { name: /girl coding/i });

    const title = screen.getByRole("heading", {
      name: /news about the react world/i,
    });

    const text = screen.getByText(/get access to all publications for month/i);

    expect(img).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });

  it("should be render the product price", async () => {
    render(<Home product={productMock} />);

    const price = screen.getByText(/\$9\.90/i);

    expect(price).toBeInTheDocument();
  });
});
