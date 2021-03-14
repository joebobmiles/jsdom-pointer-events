import { createEvent, fireEvent, } from "@testing-library/dom";
import "@testing-library/jest-dom/extend-expect";

import ".";
import PointerEvent from "./PointerEvent";

describe.each([
  [ "down" ],
  [ "up" ],
  [ "enter" ],
  [ "leave" ],
  [ "move" ],
  [ "over" ],
  [ "out" ]
])(
  "When a MouseEvent is triggered on a PointerEvent target.",
  (verb) =>
  {
    const triggeringType = `mouse${verb}`;
    const listenerType = `pointer${verb}`;

    it(`Receives ${listenerType} when ${triggeringType} is sent.`, () =>
    {
      const target = document.createElement("div");
      const callback = jest.fn();

      target.addEventListener(listenerType, callback);
      fireEvent(target, createEvent(triggeringType, target));

      expect(callback).toBeCalledTimes(1);
    });
  }
);

describe(
  "When PointerEvents are spawned by MouseEvents, they receive the same options.",
  () =>
  {
    it("Has pointerId of 1.", () =>
    {
      const target = document.createElement("div");
      const callback = jest.fn((event: PointerEvent) =>
        event);

      target.addEventListener("pointermove", callback);
      fireEvent(target, createEvent("mousemove", target));

      const { "mock": { "calls": [ firstCall ], }, } = callback;

      expect(firstCall?.shift()?.pointerId).toBe(1);
    });

    it("Has pointerType of mouse.", () =>
    {
      const target = document.createElement("div");
      const callback = jest.fn((event: PointerEvent) =>
        event);

      target.addEventListener("pointermove", callback);
      fireEvent(target, createEvent("mousemove", target));

      const { "mock": { "calls": [ firstCall ], }, } = callback;

      expect(firstCall?.shift()?.pointerType).toBe("mouse");
    });

    it("Is primary pointer.", () =>
    {
      const target = document.createElement("div");
      const callback = jest.fn((event: PointerEvent) =>
        event);

      target.addEventListener("pointermove", callback);
      fireEvent(target, createEvent("mousemove", target));

      const { "mock": { "calls": [ firstCall ], }, } = callback;

      expect(firstCall?.shift()?.isPrimary).toBe(true);
    });
  }
);