import { render, screen } from "@testing-library/react";
import Index from "../pages/index";

describe("Index Page", () => {
  it("should render the index page without crashing", () => {
    render(<Index />);
    expect(
      screen.getByRole("img", { name: "dribble-logo" })
    ).toBeInTheDocument();
  });
});
