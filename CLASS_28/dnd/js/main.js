//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        // make h2-name the name of the spell
        document.querySelector('h2').innerText = data.name;
        data.subclasses.forEach(subclass => {
            let li = document.createElement('li')
            li.textContent = subclass.name
            document.querySelector('ul').appendChild(li)
        });
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

