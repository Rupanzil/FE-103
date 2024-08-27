// POST using fetch()
// async function run() {
//   const url = 'https://www.google.com'
//   const data = await fetch(url, {
//     method: 'POST',
//     data: JSON.stringify({
//       // JSON.stringify() converts the json into a string
//       name: 'Prince',
//       age: 30,
//     }),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((res) => res.json())
//     .catch((err) => console.log(err))
// }
/* const URL = 'https://jsonplaceholder.typicode.com/posts'

async function addObjectData(dataObject) {
  const data = await fetch(URL, {
    method: 'POST',
    body: JSON.stringify(dataObject),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const response = await data.json()
  console.log(data)
  console.log(response)
}

const dataObject = {
  title: 'New Title',
  body: 'Some body over here',
  userId: 1,
}

addObjectData(dataObject) */

const formElement = document.getElementById('booking-form')

function handleFormSubmission(e) {
  e.preventDefault()
  console.log('form submitted')
  //   console.log("This is the event", e)

  const fullName = document.getElementById('fullName').value
  const email = e.target.elements['email'].value
  const doctor = formElement.elements['doctor'].value
  const location = formElement.elements['location'].value
  const date = new Date(formElement.elements['date'].value)

  const data = {
    fullName,
    email,
    doctor,
    location,
    date,
  }

  console.log(data)
  makePostRequest(data)
}

const URL = 'https://jsonplaceholder.typicode.com/posts'

async function makePostRequest(data) {
  const response = await fetch(URL, {
    method: 'POST',
    body: JSON.stringify(data),
  })

  const responseJson = await response.json()
  console.log(responseJson)
}

formElement.addEventListener('submit', handleFormSubmission)
