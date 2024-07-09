// Modal windows
import { openModalButton } from "./elements";
import { closeModalButton } from "./elements";
import { overlay } from "./elements";

openModalButton.addEventListener("click", () => {
  const modal = document.querySelector(openModalButton.dataset.modalTarget);
  openModal(modal);
});

closeModalButton.addEventListener("click", () => {
  const modal = closeModalButton.closest(".btn-modal-mobile");
  closeModal(modal);
});

function openModal(modal: any) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal: any) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}
