import React from "react";
import { render, screen } from "@testing-library/react";
import UserPanel from "./index";

test("renders a message", () => {
  render(<UserPanel />);
  const messageElement = screen.getByText(/User Panel/i);
  expect(messageElement).toBeInTheDocument();
});
