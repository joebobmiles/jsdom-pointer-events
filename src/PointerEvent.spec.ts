import { createEvent, fireEvent, } from "@testing-library/dom";
import "@testing-library/jest-dom/extend-expect";

import PointerEvent from "./PointerEvent";

if (!global.PointerEvent) global.PointerEvent = PointerEvent as any;

describe("PointerEvent", () =>
{
  const createPointerEvent = (
    eventName = "pointerDown",
    eventInit: PointerEventInit = {},
    target?: Element
  ): PointerEvent =>
  {
    target = target ?? document.createElement("div");
    return createEvent(eventName, target, eventInit) as PointerEvent;
  };

  describe.each([
    [ "pointerover" ],
    [ "pointerenter" ],
    [ "pointerleave " ],
    [ "pointerdown" ],
    [ "pointerup" ],
    [ "pointermove" ],
    [ "pointercancel" ],
    [ "pointerout" ],
    [ "gotpointercapture" ],
    [ "lostpointercapture" ]
  ])("When event is fired", (eventName) =>
  {
    describe(`When event is ${eventName}`, () =>
    {
      it(`Has type ${eventName}.`, () =>
      {
        expect(createPointerEvent(eventName).type).toBe(eventName);
      });

      it(`Invokes ${eventName} callback.`, () =>
      {
        const target = document.createElement("div");
        const callback = jest.fn();

        target.addEventListener(eventName, callback);
        fireEvent(target, createEvent(eventName, target));

        expect(callback).toBeCalledTimes(1);
      });
    });
  });

  describe("When options.pointerId is given", () =>
  {
    it("Has given pointerId.", () =>
    {
      const target = document.createElement("div");
      const { pointerId, } = createEvent.pointerDown(target, {
        "pointerId": 2,
      }) as PointerEvent;

      expect(pointerId).toBe(2);
    });
  });

  describe("When options.pointerId is not given", () =>
  {
    it("Has default pointerId.", () =>
    {
      const target = document.createElement("div");
      const { pointerId, } = createEvent.pointerDown(target) as PointerEvent;

      expect(pointerId).toBe(0);
    });
  });

  describe("When options.width is given", () =>
  {
    it("Has given width.", () =>
    {
      const { width, } = createEvent.pointerDown(
        document.createElement("div"),
        {
          "width": 10,
        }
      ) as PointerEvent;

      expect(width).toBe(10);
    });
  });

  describe("When options.width is not given", () =>
  {
    it("Has default width.", () =>
    {
      const { width, } =
        createEvent.pointerDown(document.createElement("div")) as PointerEvent;

      expect(width).toBe(1);
    });
  });

  describe("When options.height is given", () =>
  {
    it("Has given height.", () =>
    {
      const { height, } = createEvent.pointerDown(
        document.createElement("div"),
        {
          "height": 10,
        }
      ) as PointerEvent;

      expect(height).toBe(10);
    });
  });

  describe("When options.height is absent", () =>
  {
    it("Has default height.", () =>
    {
      const { height, } =
        createEvent.pointerDown(document.createElement("div")) as PointerEvent;

      expect(height).toBe(1);
    });
  });
});
