#!/bin/bash

cd /var/www

php -v

ls -la

# /var/www/vendor/laravel/sail/bin/sail up -d
# chmod 777 composer.lock /var/www/vendor/laravel/sail/bin/sail
# rm -f composer.lock /var/www/vendor/laravel/sail/bin/sail
php /usr/local/bin/composer update --no-scripts --no-autoloader
composer dump-autoload
chmod 777 -R .
php artisan migrate --path=/database/migrations/2022_02_04_033813_create_cursos_table.php
php artisan db:seed CursoSeeder

php-fpm