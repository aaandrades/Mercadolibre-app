import { render, screen } from "@testing-library/react";
import Items from "../pages/items";

describe("Items Page", () => {
  it("should render the items page without crashing", () => {

    // TODO: move spies to another folder
    jest.mock("next/router", () => ({
      useRouter() {
        return {
          route: "/",
          pathname: "/items",
          query: { search: "Iron maiden" },
          asPath: "",
        };
      },
    }));
    jest.spyOn(require("next/router"), "useRouter");


    render(<Items />);
    expect(
      screen.getByRole("heading", { name: "¡Inicia tu búsqueda!" })
    ).toBeInTheDocument();
  });
});
