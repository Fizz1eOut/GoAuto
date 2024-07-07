# Интернет-магазин шин и дисков GoAuto

Этот проект представляет собой современный интернет-магазин для продажи автомобильных шин и дисков, построенный на Vue.js 3 с использованием компонентного подхода Option API. Он разработан для обеспечения удобства пользователей при выборе и покупке товаров благодаря различным функциональным возможностям.

## Используемые технологии и инструменты

* `Vue.js 3`: Основной фреймворк для создания приложения.
* `vue-router`: Используется для маршрутизации в приложении.
* `Vite`: Используется для сборки и запуска приложения.
* `ESLint`: Используется для обеспечения качества кода с помощью линтинга.
* `Pinia`: - Используется для управления глобальным состоянием, включая данные о корзине покупок.
* `VeeValidate`:  - Используется для валидации вводимых данных пользователем.
* `SplideJS`: - Используется для реализации каруселей и слайдеров на сайте.

## Основной функционал интернет-магазина:

* Отображение продуктов: каждый товар представлен с изображением, ценой и описанием.
* Фильтрация товаров: пользователи могут легко находить продукцию по различным параметрам, таким как ширина, диаметр и бренд дисков.
* Корзина покупок: возможность добавления, изменения количества и удаления товаров из корзины.
* Динамическое отображение хлебных крошек: автоматическое формирование хлебных крошек в зависимости от текущего маршрута.

## Динамическое обновление данных:

Моя веб-страница динамически загружает данные из собственного JSON API, что позволяет моментально обновлять содержимое страницы при добавлении новых продуктов в API-JSON файл. Каждый новый продукт автоматически появляется на странице, обеспечивая актуальность представленной продукции. Кроме того, система фильтрации продуктов автоматически обновляется, позволяя пользователям мгновенно находить необходимые товары.

### Техническая реализация:

Для достижения этой функциональности используется JavaScript, который выполняет запросы к API и обрабатывает полученные данные. Каждый запрос к API инициирует загрузку актуальной информации о продуктах, которая затем динамически отображается на странице в соответствующих разделах. Это также включает автоматическое обновление фильтров, что значительно упрощает пользовательский опыт и повышает удобство использования интернет-магазина.

## Локальное хранение данных

Для сохранения данных о корзине покупок используется локальное хранилище `LocalStorage`. Это позволяет пользователям сохранять свои выбранные товары даже после перезагрузки страницы.

## Установка и запуск

### 1. Для установки зависимостей и запуска приложения выполните следующие команды:
```sh
npm install
npm run dev
```
### 2. Откройте приложение: В браузере перейдите по адресу http://localhost:8080.
