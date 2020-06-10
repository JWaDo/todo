FROM php:7.2-apache

# Install PDO MySQL driver
# See https://github.com/docker-library/php/issues/62
RUN docker-php-ext-install pdo mysqli pdo_mysql

RUN apt-get update -y && apt-get upgrade -y && apt-get install -y libpng-dev libjpeg-dev libfreetype6-dev libyaml-dev


RUN pecl install yamL

RUN cd /var/www/html

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Workaround for write permission on write to MacOS X volumes
RUN usermod -u 1000 www-data

# Enable Apache mod_rewrite
RUN a2enmod rewrite

# Enable ssl
RUN a2enmod ssl

