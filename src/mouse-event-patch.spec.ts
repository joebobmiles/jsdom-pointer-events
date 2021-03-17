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

describe.each([
  [
    "pointerId",
    1,
    (e?: PointerEvent) =>
      e?.pointerId
  ],
  [
    "pointerType",
    "mouse",
    (e?: PointerEvent) =>
      e?.pointerType
  ],
  [
    "isPrimary",
    true,
    (e?: PointerEvent) =>
      e?.isPrimary
  ]
])(
  "MouseEvents passed to PointerEvent listener have default member values.",
  (member, value, getMember) =>
  {
    it(`Has ${member} with value of ${value}.`, () =>
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
      fireEvent.mouseMove(target);

      const { "mock": { "calls": [ firstCall ], }, } = callback;
      const firstCallParameter = firstCall?.shift();

      expect(getMember(firstCallParameter)).toBe(value);
    });
  }
);

describe.each([
  [
    "clientX",
    10,
    (e?: PointerEvent) =>
      e?.clientX
  ],
  [
    "clientY",
    11,
    (e?: PointerEvent) =>
      e?.clientY
  ],
  [
    "screenX",
    10,
    (e?: PointerEvent) =>
      e?.screenX
  ],
  [
    "screenY",
    11,
    (e?: PointerEvent) =>
      e?.screenY
  ],
  [
    "ctrlKey",
    true,
    (e?: PointerEvent) =>
      e?.ctrlKey
  ]
])(
  "MouseEvents passed to PointerEvents listeners carry event values.",
  (member, value, getMember) =>
  {
    it(`Has ${member} with value of ${value}`, () =>
    {
      const target = document.createElement("div");
      const callback = jest.fn((event: PointerEvent) =>
        event);

      target.addEventListener("pointermove", callback);
      fireEvent.mouseMove(target, {
        [member]: value,
      });

      const { "mock": { "calls": [ firstCall ], }, } = callback;
      const firstCallParameter = firstCall?.shift();

      expect(getMember(firstCallParameter)).toBe(value);
    });
  }
);