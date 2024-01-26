//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const isbn = document.querySelector('input').value
  console.log(isbn)
  const url = `https://openlibrary.org/isbn/${isbn}.json`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        console.log(data.title)
        localStorage.setItem('books', data.title)
        document.querySelector('h2').innerText += localStorage.getItem('books')
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

