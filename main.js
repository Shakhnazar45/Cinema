axios.get('films.json')
          .then(function (response) {
            // Когда запрос завершен успешно, обрабатываем данные JSON
            var filmsData = response.data.films;

            // Получаем элемент блока "films"
            var filmsBlock = document.getElementById('TopFilm');

            // Создаем элементы для каждого фильма в JSON и добавляем их в блок "films"
              for(var i = 0; i<=4; i++){
                var FilmName = filmsData[i].name;
                var filmDiv = document.createElement('div');
                filmDiv.classList.add('films');

                var filmImg = document.createElement('img');
                filmImg.src = 'Images/Bin.png'; // Замените на ссылку на изображение для каждого фильма
                filmDiv.innerText = FilmName;

                filmDiv.appendChild(filmImg);
            //     filmDiv.appendChild(filmName);

                filmsBlock.appendChild(filmDiv);
              }
          })
          .catch(function (error) {
            // Обрабатываем ошибку при запросе файла JSON
            console.error('Ошибка при чтении данных:', error);
          });
    // =======
        
    // var timesToDuplicate = 4;
    // var originalBlock = document.querySelector(".films");
    // var container = document.querySelector(".films-block");

    // for (var i = 0; i < timesToDuplicate; i++) {

    //   var clonedBlock = originalBlock.cloneNode(true);
    
    //   container.appendChild(clonedBlock);
    // }

// =========================
        axios.get('films.json')
          .then(function (response) {
            // Когда запрос завершен успешно, обрабатываем данные JSON
            var filmsData = response.data.films;

            // Получаем элемент блока "films"
            var filmsBlock = document.getElementById('films');

            // Создаем элементы для каждого фильма в JSON и добавляем их в блок "films"
              for(var i = 0; i<=10; i++){
                var FilmName = filmsData[i].name;
                var filmDiv = document.createElement('div');
                filmDiv.classList.add('films');

                var filmImg = document.createElement('img');
                filmImg.src = 'Images/Bin.png'; // Замените на ссылку на изображение для каждого фильма
                filmDiv.innerText = FilmName;

                filmDiv.appendChild(filmImg);
            //     filmDiv.appendChild(filmName);

                filmsBlock.appendChild(filmDiv);
              }
          })
          .catch(function (error) {
            // Обрабатываем ошибку при запросе файла JSON
            console.error('Ошибка при чтении данных:', error);
          });

//========================
        axios.get('Cinemas.json')
          .then(function (response) {
            // Когда запрос завершен успешно, обрабатываем данные JSON
            var filmsData = response.data.vue_cinemas;

            // Получаем элемент блока "films"
            var filmsBlock = document.getElementById('cinema');

            // Создаем элементы для каждого фильма в JSON и добавляем их в блок "films"
              for(var i = 0; i<=4; i++){
                var FilmName = filmsData[i].name;
                var filmDiv = document.createElement('div');
                filmDiv.classList.add('films');

                var filmImg = document.createElement('img');
                filmImg.src = 'Images/Bin.png'; // Замените на ссылку на изображение для каждого фильма
                filmDiv.innerText = FilmName;

                filmDiv.appendChild(filmImg);
            //     filmDiv.appendChild(filmName);

                filmsBlock.appendChild(filmDiv);
              }
          })
          .catch(function (error) {
            // Обрабатываем ошибку при запросе файла JSON
            console.error('Ошибка при чтении данных:', error);
        });

