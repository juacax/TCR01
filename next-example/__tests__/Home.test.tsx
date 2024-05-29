import { expect, test } from "vitest";
import { render, screen, within } from "@testing-library/react";
import Home from "../pages/home";

test("Pages Router", () => {
  render(<Home />);

  // objeto del tipo HTMLElement (o sea lo del dom)
  const mainElement = screen.getByRole("main")
  // objeto del tipo screen, o sea puedo ejecutar funciones del screen
  const main = within(screen.getByRole("main"));

  expect(
    main.getByRole("heading", { level: 1, name: /welcome to next\.js!/i }),
  ).toBeDefined();

  const footer = within(screen.getByRole("contentinfo"));
  const link = within(footer.getByRole("link"));
  expect(link.getByRole("img", { name: /vercel logo/i })).toBeDefined();
});
