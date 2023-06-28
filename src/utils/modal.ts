// Modal windows
import { overlay } from "../elements";

export function openModal(modal: any) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

export function closeModal(modal: any) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}
