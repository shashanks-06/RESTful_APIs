import { render, screen, fireEvent } from "@testing-library/vue";
/*
render    -> Render our component
screen    -> Give access to the stimulated screen that exists 
fireEvent -> fire a click event on component on screen
*/

import { describe, it, expect } from "vitest";
import ButtonCounter from "../ButtonCounter.vue";

describe("ButtonCounter", () => {
  const text = "Hello world!";

  render(ButtonCounter, { slots: { default: text } });

  it("renders correctly", async () => {
    const view = await screen.findByText(text);
    expect(view.innerHTML).toBe(text);
  });

  it("counts a click", async () => {
    const button = screen.getByRole("button", {
      name: "You Clicked me 0 times.",
    });
    await fireEvent.click(button);

    expect(button.innerHTML).toBe("You Clicked me 1 times.");
  });
});
