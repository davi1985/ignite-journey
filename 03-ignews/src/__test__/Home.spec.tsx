import { render, screen } from "@testing-library/react";

import Home from "../pages/index";

describe("Home Page component", () => {
  it("should be render correctly", () => {
    render(<Home />);

    const title = screen.getByRole("heading", { name: /hello world/i });

    expect(title).toBeInTheDocument();
  });
});
