FROM php:8.1-fpm

LABEL name="Serviço PHP para prover o Laravel" \
        version="1.0"

COPY ../backend/ /var/www/
COPY ../backend/init.sh /var/

WORKDIR /var/www

# Install dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    libpng-dev \
    libzip-dev \
    libjpeg62-turbo-dev \
    libfreetype6-dev \
    locales \
    zip \
    jpegoptim optipng pngquant gifsicle \
    vim \
    unzip \
    git \
    curl \
    dos2unix \
    && apt-get clean

# Clear cache
RUN rm -rf /var/lib/apt/lists/*

RUN dos2unix /var/init.sh && apt-get --purge remove -y dos2unix


# Install extensions
RUN docker-php-ext-install pdo_mysql
# RUN docker-php-ext-install mbstring
# RUN docker-php-ext-install zip 
# RUN docker-php-ext-install exif
# RUN docker-php-ext-install pcntl
# RUN docker-php-ext-install gd
# RUN docker-php-ext-configure gd --with-gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/ --with-png-dir=/usr/include/

# Install composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

EXPOSE 9000

ENTRYPOINT ["/var/init.sh"]
CMD ["php-fpm"]
