export default class PointerEvent extends MouseEvent implements PointerEvent {
  public pointerId: number;

  constructor(type: string, options?: PointerEventInit) {
    super(type, options);

    this.pointerId = options?.pointerId ?? -1;
  }
}
