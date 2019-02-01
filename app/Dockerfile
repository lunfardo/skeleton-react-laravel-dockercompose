FROM php:7.3.1-apache

RUN apt-get update && \
    apt-get install -y libzip-dev && \
    apt-get install -y wget && \
    apt-get install nano && \
    docker-php-ext-install zip 

# Install Postgre PDO
RUN apt-get install -y libpq-dev \
    && docker-php-ext-configure pgsql -with-pgsql=/usr/local/pgsql \
    && docker-php-ext-install pdo pdo_pgsql pgsql    

#Install Composer
WORKDIR /usr/bin/
RUN curl -sS https://getcomposer.org/installer | php

#Install PHPunit
WORKDIR /usr/local/bin/
RUN wget https://phar.phpunit.de/phpunit-6.5.phar && \
    chmod +x phpunit-6.5.phar && \
    mv phpunit-6.5.phar /usr/local/bin/phpunit

#Create user from host to container and home directory
COPY config/create_a_home.sh /usr/bin

#change Document Root and allow it to Override
ENV APACHE_DOCUMENT_ROOT /var/www/html/public
RUN a2enmod rewrite
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf
RUN sed -i '/<Directory ${APACHE_DOCUMENT_ROOT}>/,/<\/Directory>/ s/AllowOverride None/AllowOverride All/' /etc/apache2/apache2.conf

# Resolve: Could not reliably determine the server's fully qualified domain name"
RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf

COPY config/000-default.conf /etc/apache2/sites-available
#RUN a2enmod proxy_http

WORKDIR /var/www/html/public
#CMD /usr/bin/create_a_home.sh #this should work but for some reason make the container to terminate