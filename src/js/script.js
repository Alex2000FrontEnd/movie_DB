/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// 1) удаление рекламных блоков
document.querySelectorAll('.promo__adv img').forEach(img => img.remove());

// 2) изменение жанра
document.querySelector('.promo__genre').textContent = 'драма';

// 3) изменение постера
document.querySelector('.promo__bg').style.backgroundImage = 'url("img/bg.jpg")';

// 4, 5) формирование списка фильмов
let listFilms = '';

movieDB.movies.sort();
movieDB.movies.forEach((film, i) => {
    listFilms += `
        <li class="promo__interactive-item">${i + 1}) ${film}
            <div class="delete"></div>
        </li>
    `;
});

document.querySelector('.promo__interactive-list').innerHTML = listFilms;