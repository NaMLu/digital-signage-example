# Digital Signage Example - Vue Project

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

## Run NodeJS Server

```sh
cd server
npm install
npm run nodemon
```

### Node JS Server With Mongodb ( Optional )

Edit server/src/services/index.ts:

```typescript
// import PlayListItemMongodbService from "./mongodb/PlayListItemMongodbService";
import PlayListItemLocalVariableService from "./localVariable/PlayListItemLocalVariableService";
import { IPlayListItemService } from "../interfaces/play_list_item_service.interface";

const service: IPlayListItemService = new PlayListItemLocalVariableService();

export default service;
```

to:

```typescript
import PlayListItemMongodbService from "./mongodb/PlayListItemMongodbService";
// import PlayListItemLocalVariableService from "./localVariable/PlayListItemLocalVariableService";
import { IPlayListItemService } from "../interfaces/play_list_item_service.interface";

const service: IPlayListItemService = new PlayListItemMongodbService();

export default service;
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
php artisan migrate --seed
php artisan serve --port=1955
```