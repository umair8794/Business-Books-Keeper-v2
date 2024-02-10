import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "./index";

describe("When component Login is rendered", () => {
  const usernameInputSelector = /^username$/i;
  const passwordInputSelector = /^password/i;
  const loginBtnSelector = /login$/i;

  it("renders all fields & buttons & username field has focus", () => {
    render(<Login />);

    const userNameField = screen.getByRole("textbox", {
      name: usernameInputSelector,
    });
    expect(userNameField).toBeInTheDocument();
    expect(userNameField).toHaveFocus();

    const passwordField = screen.getByLabelText(passwordInputSelector);
    expect(passwordField).toBeInTheDocument();

    const loginButton = screen.getByRole("button", { name: loginBtnSelector });
    expect(loginButton).toBeInTheDocument();
  });

  test("login click & see the error messages display as expected", async () => {
    const user = userEvent.setup();

    render(<Login />);

    const loginButton = screen.getByRole("button", { name: loginBtnSelector });

    await user.click(loginButton);

    const usernameLabelSelector = "username-label";
    const passwordLabelSelector = "password-label";
    const errorClass = "Mui-error";
    const usernameErrorMsg = /^username is required$/i;
    const passwordErrorMsg = /^password is required$/i;

    // Expect label has error & error message is present on username field
    expect(
      Array.from(screen.getByTestId(usernameLabelSelector).classList)
    ).toContain(errorClass);

    const usernameError = screen.getByText(usernameErrorMsg);
    expect(usernameError).toBeInTheDocument();

    // Expect label has error & error message is present on password field
    const passwordLabel = screen.getByTestId(passwordLabelSelector);
    expect(Array.from(passwordLabel.classList)).toContain(errorClass);

    const passwordError = screen.getByText(passwordErrorMsg);
    expect(passwordError).toBeInTheDocument();

    // Type something after error is present on username field & expect error is gone
    await user.type(
      screen.getByRole("textbox", { name: usernameInputSelector }),
      "test"
    );
    expect(
      Array.from(screen.getByTestId(usernameLabelSelector).classList)
    ).not.toContain(errorClass);
    expect(usernameError).not.toBeInTheDocument();

    // Type something after error is present on password field & expect error is gone
    await user.type(screen.getByLabelText(passwordInputSelector), "test");
    expect(Array.from(passwordLabel.classList)).not.toContain(errorClass);
    expect(passwordError).not.toBeInTheDocument();
  });
});
