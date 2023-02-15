import { render, screen, cleanup } from "@testing-library/react";
import Content from "./components/Content";

test("should render photos", () => {
  render(<Content />);
  const contentElement = screen.getByTestId("content-1");
  expect(contentElement).toBeInTheDocument();
});

test("default search field should be cars", () => {
  render(<Content />);
  const userInputEl = screen.getByPlaceholderText(/search/i);
  expect(userInputEl.value).toBe("cars");
});
