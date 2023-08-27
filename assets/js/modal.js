class Modal {
  constructor() {
    this.recentProjects = document.querySelectorAll('.recent-projects__project')
    this.modal = document.querySelectorAll('.modal')
    this.closeButtons = document.querySelectorAll('.modal__close')

    this.openModal()
    this.closeModalButton()
    this.closeModalOutside()
  }

  openModal = () => {
    this.recentProjects.forEach(project => {
      project.addEventListener('click', () => {
        this.modal.forEach(modal => {
          if (modal.dataset.modalId === project.dataset.modalId) {
            modal.showModal()
            modal.scrollTop = 0
          }
        })
      })
    })
  }

  closeModalButton() {
    this.closeButtons.forEach(button => {
      button.addEventListener('click', () => button.closest('.modal').close())
    })
  }

  closeModalOutside() {
    this.modal.forEach(modal => {
      modal.addEventListener("click", e => {
        const modalDimensions = modal.getBoundingClientRect()
        if (
          e.clientX < modalDimensions.left ||
          e.clientX > modalDimensions.right ||
          e.clientY < modalDimensions.top ||
          e.clientY > modalDimensions.bottom
        ) {
          modal.close()
        }
      })
    })
  }

}

export default Modal