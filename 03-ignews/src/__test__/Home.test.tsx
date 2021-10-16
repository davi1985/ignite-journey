import { render, screen } from "@testing-library/react";

import Home from "../pages/index";

describe("Home Page component", () => {
  it("should be render correctly", () => {
    render(<Home />);

    const img = screen.getByRole("img", { name: /girl coding/i });

    const title = screen.getByRole("heading", {
      name: /news about the react world/i,
    });

    const text = screen.getByText(/get access to all publications for month/i);

    expect(img).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });
});
