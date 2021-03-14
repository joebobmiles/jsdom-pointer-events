import { createEvent, fireEvent, } from "@testing-library/dom";
import "@testing-library/jest-dom/extend-expect";

import ".";

describe("PointerEvent is sent when", () =>
{
  it("Receives a mousedown event.", () =>
  {
    const target = document.createElement("div");
    const callback = jest.fn();

    target.addEventListener("pointerdown", callback);
    fireEvent(target, createEvent("mousedown", target));

    expect(callback).toBeCalledTimes(1);
  });
});