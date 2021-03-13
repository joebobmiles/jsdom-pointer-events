import PointerEvent from "./PointerEvent";

if (!global.PointerEvent)
  global.PointerEvent = PointerEvent as any;

export * from "./PointerEvent";