import { createEvent, fireEvent, } from "@testing-library/dom";
import "@testing-library/jest-dom/extend-expect";

import ".";

describe.each([
  [ "mousedown", "pointerdown" ],
  [ "mouseup", "pointerup" ]
])(
  "When a MouseEvent is triggered on a PointerEvent target.",
  (triggeringType, listenerType) =>
  {
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