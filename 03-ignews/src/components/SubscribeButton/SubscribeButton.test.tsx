import { render, screen } from "@testing-library/react";
import { SubscribeButton } from ".";

describe("SubscribeButton Component", () => {
  it("should be render correctly", () => {
    render(<SubscribeButton />);

    const button = screen.getByRole("button", { name: /subscribe now/i });

    expect(button).toBeInTheDocument();
  });
});
