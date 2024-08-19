const field1 = document.getElementById('fd1')
const handler = (event) => {
  console.log(event.target.value)
}

field1.addEventListener('input', handler)
