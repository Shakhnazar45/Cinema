$(document).ready(function() {
  var filmsData;
  var cinemasData;

  // Загрузка данных из файлов Films.json и cinemas.json
  axios.get('Films.json')
      .then(function(response) {
          filmsData = response.data;
      })
      .catch(function(error) {
          console.error('Ошибка при загрузке данных из Films.json:', error);
      });

  axios.get('cinemas.json')
      .then(function(response) {
          cinemasData = response.data.vue_cinemas;
      })
      .catch(function(error) {
          console.error('Ошибка при загрузке данных из cinemas.json:', error);
      });

  // Обработчик изменения состояния checkbox'ов
  $('input[type="checkbox"]').on('change', function() {
      var allCheckbox = $('#AllCheckbox');
      var allCheckboxChecked = allCheckbox.prop('checked');

      if ($(this).attr('id') === 'AllCheckbox') {
          $('input[type="checkbox"]').prop('checked', allCheckboxChecked);
      } else {
          var filmsChecked = $('#FilmsCheckbox').prop('checked');
          var cinemasChecked = $('#CinemasCheckbox').prop('checked');

          if (filmsChecked && cinemasChecked) {
              allCheckbox.prop('checked', true);
          } else {
              allCheckbox.prop('checked', false);
          }
      }

      // Очищаем содержимое searchBlock
      $('#searchBlock').empty();

      if ($('#FilmsCheckbox').prop('checked') || $('#CinemasCheckbox').prop('checked') || $('#AllCheckbox').prop('checked')) {
          displayContent($('#FilmsCheckbox').prop('checked'), $('#CinemasCheckbox').prop('checked'));
      } else {
          var blockHtml = `
              <div class="NotCheck">
                  <img src="Images/NotCheckImg.png" alt="Error">
              </div>
          `;
          $('#searchBlock').append(blockHtml);
          $('#searchBlock').css('justify-content', 'center')
      }
  });

  // Загрузка данных при загрузке страницы и включение "All" по умолчанию
  $('#AllCheckbox').prop('checked', true);
  displayContent(true, true);

  function displayContent(showFilms, showCinemas) {
      if (showFilms && filmsData) {
          displayFilms();
      }

      if (showCinemas && cinemasData) {
          displayCinemas();
      }
  }

  function displayFilms() {
      $.each(filmsData.films, function(index, film) {
          var blockHtml = `
              <div class="block">
                  <img src="Images/Bin.png" alt="${film.name}">
                  ${film.name}
              </div>
          `;
          $('#searchBlock').append(blockHtml);
      });
  }

  function displayCinemas() {
      $.each(cinemasData, function(index, cinema) {
          var blockHtml = `
              <div class="block">
                  <img src="Images/Bin.png" alt="${cinema.name}">
                  ${cinema.name}
              </div>
          `;
          $('#searchBlock').append(blockHtml);
      });
  }

    $('.searchBar_text').on('input', function() {
        var searchTerm = $(this).val().toLowerCase();
        filterResults(searchTerm);
    });
    
    function filterResults(searchTerm) {
        // Очищаем результаты на каждом вводе
        console.clear();
        $('#searchBlock').empty();
    
        var filmsNoneChecked = $('#FilmsCheckbox').prop('checked');
        var cinemasNoneChecked = $('#CinemasCheckbox').prop('checked');
    
        if ((filmsNoneChecked && filmsData) || (cinemasNoneChecked && cinemasData)) {
            if (searchTerm.trim() === '') {
                // Если поле поиска пустое, отобразите все результаты
                displayContent(filmsNoneChecked, cinemasNoneChecked);
            } else {
                // Фильтруем результаты на основе введенного текста
                if (filmsNoneChecked) {
                    displayFilteredFilms(searchTerm);
                }
                if (cinemasNoneChecked) {
                    displayFilteredCinemas(searchTerm);
                }
            }
        } else {
            $('#searchBlock').text('Please select at least one option.');
        }
    }
    
    function displayFilteredFilms(searchTerm) {
        $.each(filmsData.films, function(index, film) {
            if (film.name.toLowerCase().includes(searchTerm)) {
                console.log('Фильм:', film.name);
                var blockHtml = `
                  <div class="block">
                      <img src="Images/Bin.png" alt="${film.name}">
                      ${film.name}
                  </div>
              `;
              $('#searchBlock').append(blockHtml);
            }
        });
    }
    
    function displayFilteredCinemas(searchTerm) {
        $.each(cinemasData, function(index, cinema) {
            if (cinema.name.toLowerCase().includes(searchTerm)) {
                console.log('Кинотеатр:', cinema.name);
                var blockHtml = `
                  <div class="block">
                      <img src="Images/Bin.png" alt="${cinema.name}">
                      ${cinema.name}
                  </div>
              `;
              $('#searchBlock').append(blockHtml);
            }
        });
    }

});




