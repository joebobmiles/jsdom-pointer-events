import PointerEvent from "./PointerEvent";

const {
  "prototype": {
    "addEventListener": _addEventListener,
  },
} = global.EventTarget;

global.EventTarget.prototype.addEventListener =
  function (type: string, listener: (_: Event) => void, options)
  {
    _addEventListener.apply(this, [ type, listener, options ]);

    if (type.match(/^pointer.*/) !== null)
    {
      const mouseType = type.replace(/^pointer/, "mouse");

      _addEventListener.apply(
        this,
        [
          mouseType,
          () =>
            this.dispatchEvent(new PointerEvent(type, {})),
          options
        ]
      );
    }
  };