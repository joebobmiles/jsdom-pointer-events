/* eslint-env browser */
import { createEvent, fireEvent, } from "@testing-library/dom";
import "@testing-library/jest-dom/extend-expect";

import PointerEvent from "./PointerEvent";

/* global global */
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

  describe("When pointerover event is fired", () =>
  {
    it("Has type pointerover.", () =>
    {
      expect(createPointerEvent("pointerover").type).toBe("pointerover");
    });

    it("Triggers pointerover callback.", () =>
    {
      const target = document.createElement("div");
      const callback = jest.fn();

      target.addEventListener("pointerover", callback);
      fireEvent.pointerOver(target);

      expect(callback).toBeCalledTimes(1);
    });
  });

  describe("When pointerenter event is fired", () =>
  {
    it("Has type pointerenter.", () =>
    {
      expect(createPointerEvent("pointerenter").type).toBe("pointerenter");
    });

    it("Triggers pointerenter callback.", () =>
    {
      const target = document.createElement("div");
      const callback = jest.fn();

      target.addEventListener("pointerenter", callback);
      fireEvent.pointerEnter(target);

      expect(callback).toBeCalledTimes(1);
    });
  });

  describe("When pointerdown event is fired", () =>
  {
    it("Has type pointerdown.", () =>
    {
      expect(createPointerEvent("pointerdown").type).toBe("pointerdown");
    });

    it("Triggers pointerdown callback.", () =>
    {
      const target = document.createElement("div");
      const callback = jest.fn();

      target.addEventListener("pointerdown", callback);
      fireEvent.pointerDown(target);

      expect(callback).toBeCalledTimes(1);
    });
  });

  describe("When pointermove event is fired", () =>
  {
    it("Has type pointermove.", () =>
    {
      expect(createPointerEvent("pointermove").type).toBe("pointermove");
    });

    it("Triggers pointermove callback.", () =>
    {
      const target = document.createElement("div");
      const callback = jest.fn();

      target.addEventListener("pointermove", callback);
      fireEvent.pointerMove(target);

      expect(callback).toBeCalledTimes(1);
    });
  });

  describe("When pointerup event is fired", () =>
  {
    it("Has type pointerup.", () =>
    {
      expect(createPointerEvent("pointerup").type).toBe("pointerup");
    });

    it("Triggers pointerup callback.", () =>
    {
      const target = document.createElement("div");
      const callback = jest.fn();

      target.addEventListener("pointerup", callback);
      fireEvent.pointerUp(target);

      expect(callback).toBeCalledTimes(1);
    });
  });

  describe("When pointercancel event is fired", () =>
  {
    it("Has type pointercancel.", () =>
    {
      expect(createPointerEvent("pointercancel").type).toBe("pointercancel");
    });

    it("Triggers pointercancel callback.", () =>
    {
      const target = document.createElement("div");
      const callback = jest.fn();

      target.addEventListener("pointercancel", callback);
      fireEvent.pointerCancel(target);

      expect(callback).toBeCalledTimes(1);
    });
  });

  describe("When pointerout event is fired", () =>
  {
    it("Has type pointerout.", () =>
    {
      expect(createPointerEvent("pointerout").type).toBe("pointerout");
    });

    it("Triggers pointerout callback.", () =>
    {
      const target = document.createElement("div");
      const callback = jest.fn();

      target.addEventListener("pointerout", callback);
      fireEvent.pointerOut(target);

      expect(callback).toBeCalledTimes(1);
    });
  });

  describe("When pointerleave event is fired", () =>
  {
    it("Has type pointerleave.", () =>
    {
      expect(createPointerEvent("pointerleave").type).toBe("pointerleave");
    });

    it("Triggers pointerleave callback.", () =>
    {
      const target = document.createElement("div");
      const callback = jest.fn();

      target.addEventListener("pointerleave", callback);
      fireEvent.pointerLeave(target);

      expect(callback).toBeCalledTimes(1);
    });
  });

  describe("When gotpointercapture event is fired", () =>
  {
    it("Has type gotpointercapture.", () =>
    {
      expect(createPointerEvent("gotpointercapture").type)
        .toBe("gotpointercapture");
    });

    it("Triggers gotpointercapture callback.", () =>
    {
      const target = document.createElement("div");
      const callback = jest.fn();

      target.addEventListener("gotpointercapture", callback);
      fireEvent.gotPointerCapture(target);

      expect(callback).toBeCalledTimes(1);
    });
  });

  describe("When lostpointercapture event is fired", () =>
  {
    it("Has type lostpointercapture.", () =>
    {
      expect(createPointerEvent("lostpointercapture").type)
        .toBe("lostpointercapture");
    });

    it("Triggers lostpointercapture callback.", () =>
    {
      const target = document.createElement("div");
      const callback = jest.fn();

      target.addEventListener("lostpointercapture", callback);
      fireEvent.lostPointerCapture(target);

      expect(callback).toBeCalledTimes(1);
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

  /* eslint-disable no-unused-vars */
  /* eslint-disable @typescript-eslint/no-unused-vars */

  test("When options.width is absent, defaults to width = 1.", () =>
  {
    const target = document.createElement("div");
    const pointerDownCallback = jest.fn((_: PointerEvent) =>
      null);

    target.addEventListener("pointerdown", pointerDownCallback);
    fireEvent.pointerDown(target);

    const firstCallArgs = pointerDownCallback.mock.calls[0] ?? [];

    expect((firstCallArgs[0] as PointerEvent).width).toBe(1);
  });

  test("When options.height is given, event has given height.", () =>
  {
    const target = document.createElement("div");
    const pointerDownCallback = jest.fn((_: PointerEvent) =>
      null);

    target.addEventListener("pointerdown", pointerDownCallback);
    fireEvent.pointerDown(target, {
      "height": 5,
    });

    const firstCallArgs = pointerDownCallback.mock.calls[0] ?? [];

    expect((firstCallArgs[0] as PointerEvent).height).toBe(5);
  });

  test("When options.height is absent, defaults to height = 1.", () =>
  {
    const target = document.createElement("div");
    const pointerDownCallback = jest.fn((_: PointerEvent) =>
      null);

    target.addEventListener("pointerdown", pointerDownCallback);
    fireEvent.pointerDown(target);

    const firstCallArgs = pointerDownCallback.mock.calls[0] ?? [];

    expect((firstCallArgs[0] as PointerEvent).height).toBe(1);
  });

  /* eslint-enable no-unused-vars */
  /* eslint-enable @typescript-eslint/no-unused-vars */
});
