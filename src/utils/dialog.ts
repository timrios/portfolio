/**
 * Closes a modal dialog when the visitor taps or clicks its dimmed backdrop.
 *
 * Judged by where the pointer is, not by `event.target === dialog`: the dialog's own padding also targets the dialog,
 * so a near-miss on a link would close it, and a press inside that is released on the backdrop (selecting text, say)
 * fires its click on the dialog. Press and release must both be outside. `closedby="any"` would do this natively, but
 * Safari lacks it, so this stays (dev-setup `knowledge/web/platform/Dialogs, popovers and UI components.md`).
 */
export function closeOnBackdrop(dialog: HTMLDialogElement) {
  const outside = (event: PointerEvent) => {
    const box = dialog.getBoundingClientRect();
    return (
      event.clientY < box.top ||
      event.clientY > box.bottom ||
      event.clientX < box.left ||
      event.clientX > box.right
    );
  };
  let pressedOutside = false;
  dialog.addEventListener("pointerdown", (event) => (pressedOutside = outside(event)));
  dialog.addEventListener("pointerup", (event) => {
    if (pressedOutside && outside(event)) dialog.close();
  });
}
