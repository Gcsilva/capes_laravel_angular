#!/bin/bash

cd /var/www

# /var/www/vendor/laravel/sail/bin/sail up -d
# chmod 777 composer.lock /var/www/vendor/laravel/sail/bin/sail
# rm -f composer.lock /var/www/vendor/laravel/sail/bin/sail
# php /usr/local/bin/composer update --no-scripts --no-autoloader
php /var/www/artisan migrate --path=/database/migrations/2022_02_04_033813_create_cursos_table.php
php /var/www/artisan db:seed CursoSeeder
# php artisan serve --port 9000

php-fpm