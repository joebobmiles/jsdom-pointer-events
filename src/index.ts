import PointerEvent from "./PointerEvent";
import "./mouse-event-patch";

if (!global.PointerEvent)
  global.PointerEvent = PointerEvent as any;

export * from "./PointerEvent";