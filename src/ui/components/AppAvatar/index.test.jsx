import React from "react";
import { render, screen } from "@testing-library/react";
import AppAvatar from "./index";

describe("When component AppAvatar is rendered", () => {
  test("it displays app name", () => {
    render(<AppAvatar />);

    const appNameHeading = screen.getByRole("heading", { level: 1 });
    expect(appNameHeading).toBeInTheDocument();
    expect(appNameHeading).toHaveTextContent(/^Business Books Keeper$/);
  });
});
