import { createEvent, fireEvent } from "@testing-library/dom";
import "@testing-library/jest-dom/extend-expect";

import PointerEvent from "./PointerEvent";

if (!global.PointerEvent) global.PointerEvent = PointerEvent as any;

describe("PointerEvent", () => {
  const createPointerEvent = (
    eventName = "pointerDown",
    eventInit: PointerEventInit = {},
    target?: Element
  ) => {
    target = target ?? document.createElement("div");

    const event = createEvent(eventName, target, eventInit);

    return event;
  };

  describe("When pointerover event is fired", () => {
    it("Has type pointerover.", () => {
      expect(createPointerEvent("pointerover").type).toBe("pointerover");
    });

    it("Triggers pointerover callback.", () => {
      const target = document.createElement("div");
      const pointerOverCallback = jest.fn();

      target.addEventListener("pointerover", pointerOverCallback);
      fireEvent.pointerOver(target);

      expect(pointerOverCallback).toBeCalledTimes(1);
    });
  });

  test("When pointerenter event is fired, event has type pointerenter.", () => {
    const target = document.createElement("div");
    const pointerEnterCallback = jest.fn((_: PointerEvent) => null);

    target.addEventListener("pointerenter", pointerEnterCallback);
    fireEvent.pointerEnter(target);

    const firstCallArgs = pointerEnterCallback.mock.calls[0] ?? [];

    expect((firstCallArgs[0] as PointerEvent).type).toBe("pointerenter");
  });

  test("When pointerdown event is fired, event has type pointerdown.", () => {
    const target = document.createElement("div");
    const pointerDownCallback = jest.fn((_: PointerEvent) => null);

    target.addEventListener("pointerdown", pointerDownCallback);
    fireEvent.pointerDown(target);

    const firstCallArgs = pointerDownCallback.mock.calls[0] ?? [];

    expect((firstCallArgs[0] as PointerEvent).type).toBe("pointerdown");
  });

  test("When pointermove event is fired, event has type pointermove.", () => {
    const target = document.createElement("div");
    const pointerMoveCallback = jest.fn((_: PointerEvent) => null);

    target.addEventListener("pointermove", pointerMoveCallback);
    fireEvent.pointerMove(target);

    const firstCallArgs = pointerMoveCallback.mock.calls[0] ?? [];

    expect((firstCallArgs[0] as PointerEvent).type).toBe("pointermove");
  });

  test("When pointerup event is fired, event has type pointerup.", () => {
    const target = document.createElement("div");
    const pointerUpCallback = jest.fn((_: PointerEvent) => null);

    target.addEventListener("pointerup", pointerUpCallback);
    fireEvent.pointerUp(target);

    const firstCallArgs = pointerUpCallback.mock.calls[0] ?? [];

    expect((firstCallArgs[0] as PointerEvent).type).toBe("pointerup");
  });

  test("When pointercancel event is fired, event has type pointercancel.", () => {
    const target = document.createElement("div");
    const pointerCancelCallback = jest.fn((_: PointerEvent) => null);

    target.addEventListener("pointercancel", pointerCancelCallback);
    fireEvent.pointerCancel(target);

    const firstCallArgs = pointerCancelCallback.mock.calls[0] ?? [];

    expect((firstCallArgs[0] as PointerEvent).type).toBe("pointercancel");
  });

  test("When pointerout event is fired, event has type pointerout.", () => {
    const target = document.createElement("div");
    const pointerOutCallback = jest.fn((_: PointerEvent) => null);

    target.addEventListener("pointerout", pointerOutCallback);
    fireEvent.pointerOut(target);

    const firstCallArgs = pointerOutCallback.mock.calls[0] ?? [];

    expect((firstCallArgs[0] as PointerEvent).type).toBe("pointerout");
  });

  test("When pointerleave event is fired, event has type pointerleave.", () => {
    const target = document.createElement("div");
    const pointerLeaveCallback = jest.fn((_: PointerEvent) => null);

    target.addEventListener("pointerleave", pointerLeaveCallback);
    fireEvent.pointerLeave(target);

    const firstCallArgs = pointerLeaveCallback.mock.calls[0] ?? [];

    expect((firstCallArgs[0] as PointerEvent).type).toBe("pointerleave");
  });

  test("When lostpointercapture event is fired, event has type lostpointercapture.", () => {
    const target = document.createElement("div");
    const pointerLeaveCallback = jest.fn((_: PointerEvent) => null);

    target.addEventListener("lostpointercapture", pointerLeaveCallback);
    fireEvent.lostPointerCapture(target);

    const firstCallArgs = pointerLeaveCallback.mock.calls[0] ?? [];

    expect((firstCallArgs[0] as PointerEvent).type).toBe("lostpointercapture");
  });

  test("When options.pointerId is given, event has given pointerId.", () => {
    const target = document.createElement("div");
    const pointerDownCallback = jest.fn((_: PointerEvent) => null);

    target.addEventListener("pointerdown", pointerDownCallback);
    fireEvent.pointerDown(target, { pointerId: 5 });

    const firstCallArgs = pointerDownCallback.mock.calls[0] ?? [];

    expect((firstCallArgs[0] as PointerEvent).pointerId).toBe(5);
  });

  test("When options.pointerId is absent, defaults to pointerId = 0.", () => {
    const target = document.createElement("div");
    const pointerDownCallback = jest.fn((_: PointerEvent) => null);

    target.addEventListener("pointerdown", pointerDownCallback);
    fireEvent.pointerDown(target);

    const firstCallArgs = pointerDownCallback.mock.calls[0] ?? [];

    expect((firstCallArgs[0] as PointerEvent).pointerId).toBe(0);
  });

  test("When options.width is given, event has given width.", () => {
    const target = document.createElement("div");
    const pointerDownCallback = jest.fn((_: PointerEvent) => null);

    target.addEventListener("pointerdown", pointerDownCallback);
    fireEvent.pointerDown(target, { width: 5 });

    const firstCallArgs = pointerDownCallback.mock.calls[0] ?? [];

    expect((firstCallArgs[0] as PointerEvent).width).toBe(5);
  });

  test("When options.width is absent, defaults to width = 1.", () => {
    const target = document.createElement("div");
    const pointerDownCallback = jest.fn((_: PointerEvent) => null);

    target.addEventListener("pointerdown", pointerDownCallback);
    fireEvent.pointerDown(target);

    const firstCallArgs = pointerDownCallback.mock.calls[0] ?? [];

    expect((firstCallArgs[0] as PointerEvent).width).toBe(1);
  });

  test("When options.height is given, event has given height.", () => {
    const target = document.createElement("div");
    const pointerDownCallback = jest.fn((_: PointerEvent) => null);

    target.addEventListener("pointerdown", pointerDownCallback);
    fireEvent.pointerDown(target, { height: 5 });

    const firstCallArgs = pointerDownCallback.mock.calls[0] ?? [];

    expect((firstCallArgs[0] as PointerEvent).height).toBe(5);
  });

  test("When options.height is absent, defaults to height = 1.", () => {
    const target = document.createElement("div");
    const pointerDownCallback = jest.fn((_: PointerEvent) => null);

    target.addEventListener("pointerdown", pointerDownCallback);
    fireEvent.pointerDown(target);

    const firstCallArgs = pointerDownCallback.mock.calls[0] ?? [];

    expect((firstCallArgs[0] as PointerEvent).height).toBe(1);
  });
});
