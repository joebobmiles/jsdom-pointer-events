import PointerEvent from "./PointerEvent";

const {
  "prototype": {
    "addEventListener": _addEventListener,
  },
} = global.EventTarget;

global.EventTarget.prototype.addEventListener =
  function (type, listener, options)
  {
    _addEventListener.apply(this, [ type, listener, options ]);

    if (type.match(/^pointer/) !== null)
    {
      const mouseType = type.replace(/^pointer/, "mouse");

      _addEventListener.apply(
        this,
        [
          mouseType,
          (event) =>
            this.dispatchEvent(new PointerEvent(type, {
              "pointerId": 1,
              "pointerType": "mouse",
              "isPrimary": true,
              "clientX": (event as MouseEvent).clientX,
              "clientY": (event as MouseEvent).clientY,
              "screenX": (event as MouseEvent).screenX,
              "screenY": (event as MouseEvent).screenY,
            })),
          options
        ]
      );
    }
  };