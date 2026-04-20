const myModal = document.getElementById('modalMoreInfo')
const myInput = document.getElementById('more-info')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})
