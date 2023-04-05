# Задача
 Нужно реализовать функцию, которая для переданного объекта возвращает массив его свойств со значениями, отсортированный по свойствам ( с заданным порядком сортировки свойств).

Дан объект, например:
```javascript
 const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40}
```
Дан порядок сортировки свойств:
```javascript
// На выходе отсортированный и обработанный массив данных
["name", "level"] // первые два св-ва.
// Далее, оставшиеся св-ва сортирруем по алфавиту
[
  {key: "name", value: "мечник"}, // первые два св-ва.
  {key: "level", value: 2},// первые два св-ва.
  {key: "attack", value: 80}, // порядок по алфавиту 
  {key: "defence", value: 40}, // порядок по алфавиту
  {key: "health", value: 10} // порядок по алфавиту
]
```

## Для выполнения

Созданны конфигурационные файлы:
- .babelrc
- .browserslistrc
- .editorconfig
- .eslintignore
- .eslintrc.json
- .gitignore
- appveyor.yml
- webpack.config.js
- package-lock.json
- webpack.config.js