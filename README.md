Primero crear un archivo .env con esto:

```bash
DATABASE_URL="file:./dev.db"
```

Despues correr estos comandos:

```bash
npm install
```

```bash
npx prisma generate 
```

con esto, ya se corrio la seed, luego:

```bash
npm run dev
```

y tomar nota de la ip de la maquina en la que esta corriendo el server.

