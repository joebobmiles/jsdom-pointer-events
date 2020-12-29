/**
 * The PointerEvent interface as described by W3C:
 * https://www.w3.org/TR/pointerevents/#pointerevent-interface
 */
interface IPointerEvent {
  pointerId: number;

  width: number;
}

  public pointerId: number;

  constructor(type: string, options?: PointerEventInit) {
    super(type, options);

    this.pointerId = options?.pointerId ?? -1;
  }
}
