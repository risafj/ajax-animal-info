let pageCounter = 1;
const btn = document.getElementById('btn');
const animalContainer = document.getElementById('animal-info');

btn.addEventListener('click', function() {
  const ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', `https://learnwebcode.github.io/json-example/animals-${pageCounter}.json`)
  
  ourRequest.onload = function() {
    const ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
  };
  
  ourRequest.send();
  pageCounter++;

  if(pageCounter > 3) {
    // hide-me is a css class implemented separately which hides the element
    btn.classList.add('hide-me')
  }
})

function renderHTML(data) {
  let htmlString = '';

  for (i = 0; i < data.length; i++) {
    htmlString += `<p>${data[i].name} is a ${data[i].species} that likes to eat `

    for (ii = 0; ii < data[i].foods.likes.length; ii++) {
      if (ii == 0) {
        htmlString += data[i].foods.likes[ii];
      } else {
        htmlString += ` and ${data[i].foods.likes[ii]}`;
      }

    }
    htmlString += '.</p>'
  }
  animalContainer.insertAdjacentHTML('beforeend', htmlString);
}