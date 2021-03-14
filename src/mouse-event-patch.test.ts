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

  it("Receives a mouseup event.", () =>
  {
    const target = document.createElement("div");
    const callback = jest.fn();

    target.addEventListener("pointerup", callback);
    fireEvent(target, createEvent("mouseup", target));

    expect(callback).toBeCalledTimes(1);
  });
});