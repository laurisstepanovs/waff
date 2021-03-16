# Waff

Advertisment webside, to buy or sell things :)

## Project setup:

### Setup client

Go to client folder:

```
cd client
```

Install all needed dependencies.

```
npm install
```

Run development server.

```
npm run serve
```

By defult it will be runed on the [http//localhost:8080/](http//localhost:8080/)

### Setup server

Go to server folder:

```
cd server
```

Create .env file:

```
cp .env.example .env
```

Run migrations:

```
php artisan migrate
```

Create encryption keys needed to generate secure access tokens:

```
php artisan passport:install
```

Set the ```APP_KEY``` value:

```
php artisan key:generate
```

Install all needed server dependencies.

```
composer install
```

Run development server.

```
php artisan serve
```

By defult it will be runed on the [http://127.0.0.1:8000](http://127.0.0.1:8000)
