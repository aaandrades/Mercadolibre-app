import { render, screen } from "@testing-library/react";
import { IndividualResultComponent } from "../../components/Results/IndividualResult/IndividualResultComponent";

describe("Individual Results Page", () => {
  it("should render the individual results page without crashing", () => {
    const mockItem = [
      {
        id: "MLA633757921",
        title: "Metallica And Justice For All Vinilo 2 Lp Import Nuevo 2018",
        price: {
          currency: "ARS",
          amount: 5200,
          decimals: 0,
        },
        picture:
          "https://http2.mlstatic.com/D_876237-MLA26038956795_092017-O.jpg",
        condition: "new",
        free_shipping: true,
        sold_quantity: 5,
        description:
          "Metallica - And Justice for All\nFormato: Vinilo Doble\nCantidad de Discos: 2 LP\nImportado\nNuevo - Cerrado\n\nTrack List:\n1 Blackened\n2 ... And Justice for All\n3 Eye of the Beholder\n4 One\n5 The Shortest Straw\n6 Harvester of Sorrow\n7 The Frayed Ends of Sanity\n8 To Live Is to Die\n9 Dyers Eve\n------------------------------------------------------------\nRETIRO O ENVÍOS\nPodes retirar tu compra por nuestro local en Villa Urquiza, Cerca de la estacion Los Incas del Subte B\nNuestro horario de atención es de L a V de 11 a 14 y 15 a 19hs / Sábados de 11 a 17hs\n\nEnvíos por mensajería (Consultar costos)\nAceptamos Mercado Pago y Mercado Envíos",
      },
    ];

    render(<IndividualResultComponent items={mockItem} />);
    expect(
      screen.getByRole("img", { name: "MLA633757921" })
    ).toBeInTheDocument();
  });
});
