import app from "../src/app/config/app";
import middlewares from "../src/app/config/middlewares";

describe("Testing Config", () => {
  it("should load the app configuration)", () => {
    expect(app).toBeTruthy();
  });
});
