import { render, screen } from "@testing-library/react";
import { Header } from ".";

describe("Header Component", () => {
  it("should be render correctly", () => {
    render(<Header />);

    const logo = screen.getByRole("img", {
      name: /ig\.news/i,
    });

    const links = [
      screen.getByRole("link", {
        name: /home/i,
      }),

      screen.getByRole("link", {
        name: /home/i,
      }),
    ];

    expect(logo).toBeInTheDocument();
    expect(links.length).toBe(2);
  });
});
