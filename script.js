const app = document.getElementById('root');


const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);
var request = new XMLHttpRequest();
request.open('GET', 'http://localhost:8080/api/notes', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = movie.id;
      
      const h2 = document.createElement('h2');
      h2.textContent=movie.title;

      const p1 = document.createElement('h3');
      p1.textContent=movie.content;

      const p2 = document.createElement('p');
      p2.textContent=movie.createdAt;

      const p = document.createElement('p');
      p.textContent=movie.updatedAt;
      

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
      card.appendChild(p1);
      card.appendChild(p2);
      card.appendChild(h2)  ;
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();