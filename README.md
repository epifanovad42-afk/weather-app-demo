\# Weather App Demo



Демо-проект для практики: сайт погоды с использованием Doc-As-Code.



\## Структура проекта



\- `src/` — исходный код сайта (HTML, CSS, JS)

\- `docs/requirements/` — требования к функционалу

\- `Dockerfile` — инструкция для сборки Docker-контейнера



\## Запуск



```bash

docker build -t weather-app .

docker run -d -p 8080:80 weather-app

