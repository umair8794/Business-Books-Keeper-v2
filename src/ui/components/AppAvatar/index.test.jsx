import React from "react";
import { render } from "@testing-library/react";
import AppAvatar from "./index";

describe("When component AppAvatar is rendered", () => {
  test("it displays app name", () => {
    const { getByRole } = render(<AppAvatar />);

    const appNameHeading = getByRole("heading", { level: 1 });
    expect(appNameHeading).toBeInTheDocument();
    expect(appNameHeading).toHaveTextContent(/^Business Books Keeper$/);
  });
});
