/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

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

// 
document.querySelectorAll('.promo__adv img').forEach(img => img.remove());

// 
document.querySelector('.promo__genre').textContent = 'драма';

// 
document.querySelector('.promo__bg').style.backgroundImage = 'url("img/bg.jpg")';

// + 2, 5) обрезаем название фильма
const listFilm = document.querySelector('.promo__interactive-list');

const renderFilm = () => {
    let listFilms = '';

    movieDB.movies.sort();
    movieDB.movies.forEach((film, i) => movieDB.movies[i] = film.toLowerCase());

    movieDB.movies.forEach((film, i) => {
        if (film.length > 21) film = `${film.slice(0, 21)}...`;

        listFilms += `
            <li class="promo__interactive-item">${i + 1}) ${film}
                <div class="delete"></div>
            </li>
        `;
    });

    listFilm.innerHTML = listFilms;
};

renderFilm();

// 1, 4) добовление фильма
const form = document.querySelector('form.add');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const input = form.querySelector('.adding__input');

    if (input.value.trim()) {
        if (form.querySelector('[type="checkbox"]').checked) console.log('Добавляем любимый фильм');

        movieDB.movies.push(input.value);
        renderFilm();
        form.reset();
    }
});

// 3) удаление фильма
listFilm.addEventListener('click', (e) => {
    const t = e.target;

    if (t && t.classList.contains('delete')) {
        const list = listFilm.querySelectorAll('.promo__interactive-item');

        for (let i = 0; i < list.length; i++) {
            if (list[i] == t.closest('.promo__interactive-item')) {
                movieDB.movies.splice(i, 1);
                renderFilm();
            }
        }
    }
});