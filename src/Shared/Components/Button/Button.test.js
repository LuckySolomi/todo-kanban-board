import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

test("renders the button with correct text", () => {
  render(<Button>Click me</Button>);
  const button = screen.getByRole("button", { name: /click me/i });
  expect(button).toBeInTheDocument();
});

test("applies the primary class", () => {
  render(<Button type="primary">Click me</Button>);
  const button = screen.getByRole("button", { name: /click me/i });
  expect(button).toHaveClass("btn primary");
});

test("applies the secondary class by default", () => {
  render(<Button>Click me</Button>);
  const button = screen.getByRole("button", { name: /click me/i });
  expect(button).toHaveClass("btn secondary");
});

test("renders as disabled when the disabled prop is true", () => {
  render(<Button disabled>Click me</Button>);
  const button = screen.getByRole("button", { name: /click me/i });
  expect(button).toBeDisabled();
});

test("does not call onClick when button is disabled", () => {
  const handleClick = jest.fn();
  render(
    <Button onClick={handleClick} disabled>
      Click me
    </Button>
  );
  const button = screen.getByRole("button", { name: /click me/i });

  fireEvent.click(button);
  expect(handleClick).not.toHaveBeenCalled();
});

test("calls onClick handler when clicked", () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click me</Button>);
  const button = screen.getByRole("button", { name: /click me/i });

  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test("renders an icon when the icon props is provided", () => {
  const MockIcon = () => <svg data-testid="icon" />;
  render(<Button icon={MockIcon}>Click me</Button>);
  const icon = screen.getByTestId("icon");
  expect(icon).toBeInTheDocument();
});
