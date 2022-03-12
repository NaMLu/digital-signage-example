# Digital Signage Example - Vue Project

## Run NodeJS Server

```sh
cd server
npm install
npm run nodemon
```

### Node JS Server With Mongodb ( Optional )

Edit server/.env:

```sh
ISMONGO=true
```

## Run Laravel Server with MySQL ( Optional )

```sh
cd laravel-server
composer install
cp .env.example .env
php artisan key:generate
```

Edit .env for mysql:

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel_server
DB_USERNAME=root
DB_PASSWORD=
```

After:

```sh
php artisan db:create
php artisan migrate --seed
php artisan serve --port=1955
```

## Run Vue Project

```sh
cd vue
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```