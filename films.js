axios.get('Cinemas.json').then(function (response) {
    // Когда запрос завершен успешно, обрабатываем данные JSON
    var cinemaData = response.data.vue_cinemas;

    // Получаем элемент блока "films"
    var filmsBlock = document.getElementById('city');
    var filmDiv = document.createElement('div');
      filmDiv.classList.add('cities');

    // Создаем элементы для каждого фильма в JSON и добавляем их в блок "films"
    cinemaData.forEach(function (film) {
        var cinemaDiv = document.createElement('div');
        cinemaDiv.classList.add('cityBlock');

      var cinemaRadio = document.createElement('input');
      cinemaRadio.classList.add('CityCheck');
      cinemaRadio.type = "checkbox";
      cinemaRadio.id = film.name;
      cinemaRadio.name = "CityCheck";


      var cityName = document.createElement('label');
      cityName.innerText = film.name;
      cityName.classList.add('CityText');



      cinemaDiv.appendChild(cinemaRadio);
      cinemaDiv.appendChild(cityName);
    //   filmDiv.appendChild(filmName);
    filmDiv.appendChild(cinemaDiv);
      filmsBlock.appendChild(filmDiv);
    });
})
.catch(function (error) {
  // Обрабатываем ошибку при запросе файла JSON
  console.error('Ошибка при чтении данных:', error);
});

// ==============

axios.get('films.json').then(function (response) {
    // Когда запрос завершен успешно, обрабатываем данные JSON
    var filmsData = response.data.films;

    // Получаем элемент блока "films"
    var filmsBlock = document.getElementById('films');

    // Создаем элементы для каждого фильма в JSON и добавляем их в блок "films"
    filmsData.forEach(function (film) {
      var filmDiv = document.createElement('div');
      filmDiv.classList.add('films');

      var filmImg = document.createElement('img');
      filmImg.src = 'Images/Bin.png'; // Замените на ссылку на изображение для каждого фильма

      var filmName = document.createElement('span');
      filmDiv.innerText = film.name;

      filmDiv.appendChild(filmImg);
    //   filmDiv.appendChild(filmName);

      filmsBlock.appendChild(filmDiv);
    });
  })
  .catch(function (error) {
    // Обрабатываем ошибку при запросе файла JSON
    console.error('Ошибка при чтении данных:', error);
  });
const cityCheckboxes = document.querySelectorAll('input[name="CityCheck"]');
cityCheckboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', filterFilms);
});