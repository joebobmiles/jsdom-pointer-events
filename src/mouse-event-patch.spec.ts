import { createEvent, fireEvent, } from "@testing-library/dom";
import "@testing-library/jest-dom/extend-expect";

import ".";

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

    it("Has same client position as mouse event.", () =>
    {
      const target = document.createElement("div");
      const callback = jest.fn((event: PointerEvent) =>
        event);

      target.addEventListener("pointermove", callback);
      /*
       * NOTE: I would normally use createEvent with the event type here.
       * However, that creates only generic events, which carries none of the
       * needed information used by the event listener we use to translate
       * mouse events into pointer events.
       *
       * This also means that end users cannot utilize createEvent with event
       * type string. That frustrates me, but it is very likely that best
       * practice is to use fireEvent[eventType] instead.
       *
       * Example of invalid usage:
       *
       *  fireEvent(element, createEvent(eventType, element, eventOptions));
       */
      fireEvent.mouseMove(target, {
        "clientX": 10,
        "clientY": 11,
      });

      const { "mock": { "calls": [ firstCall ], }, } = callback;
      const firstCallParameter = firstCall?.shift();

      expect(firstCallParameter?.clientX).toBe(10);
      expect(firstCallParameter?.clientY).toBe(11);
    });

    it("Has same screen position as mouse event.", () =>
    {
      const target = document.createElement("div");
      const callback = jest.fn((event: PointerEvent) =>
        event);

      target.addEventListener("pointermove", callback);
      fireEvent.mouseMove(target, {
        "screenX": 10,
        "screenY": 11,
      });

      const { "mock": { "calls": [ firstCall ], }, } = callback;
      const firstCallParameter = firstCall?.shift();

      expect(firstCallParameter?.screenX).toBe(10);
      expect(firstCallParameter?.screenY).toBe(11);
    });

    it("Carries over ctrlKey value.", () =>
    {
      const target = document.createElement("div");
      const callback = jest.fn((event: PointerEvent) =>
        event);

      target.addEventListener("pointermove", callback);
      fireEvent.mouseMove(target, {
        "ctrlKey": true,
      });

      const { "mock": { "calls": [ firstCall ], }, } = callback;
      const firstCallParameter = firstCall?.shift();

      expect(firstCallParameter?.ctrlKey).toBe(true);
    });
  }
);