# Create Task Frontend - Test Coally Front

![Logo coally](/src/assets/images/unnamed.png)

## Presentación

Antes que nada muchas gracias por permitirme la oportunidad de presentar la prueba para Coally
realmente me apaciono mucho presentar esta prueba y fue bastante enriquecedora, espero que sea de sus gusto dejo un poco sobre lo que se uso del lado del Frontend.

## Tecnologias usadas

- **React.JS:** Biblioteca JavaScript para construir interfaces de usuario.
- **TypeScript:** Superconjunto tipado de JavaScript.
- **Vite.js:** Herramienta de compilación rápida para proyectos web modernos.
- **@jmfetchify/fetchtify:** Libreria de consultas HTTPS creada por mi. [VER DETALLES](https://www.npmjs.com/package/@jmfetchify/fetchify) 
- **Tailwind CSS:** Framework de estilos utilitarios.
- **DaisyUI:** Colección de componentes para Tailwind CSS.
- **React Hook Form:** Utiliza Hooks para crear formularios no controlados, reduciendo el número de re-renders y optimizando la renderización de componentes.
- **Zustand:** Biblioteca de gestión de estado para React que ofrece una forma sencilla y concisa de manejar el estado de la aplicación utilizando Hooks.
- **SASS (SCSS):** Preprocesador de CSS que permite escribir estilos de una manera más eficiente
- **VERCEL:** Herramienta para el alojamiento: [LINK](https://coally-front.vercel.app/)


## Pasos para Ejecutar el Proyecto

1. Clonar el repositorio:

```bash
   git clone https://github.com/coally-test/coally-front.git
```
or SSH
```bash
   git git@<your-hostname>:coally-test/coally-front.git
```

2. Entrar al Proyecto

```bash
   cd  coally-front
```

3. Instalar dependenias

```bash
   npm install
```
Nota: Verifique la versión de Node.js (v20) o utilice NVM para gestionar versiones.
Nota: Agregar archivo .env con la variable de entorno:

```bash
VITE_BASE_URL=http://localhost:3000/api/v1
```

o

```bash
VITE_BASE_URL=https://coally-api-2.onrender.com/api/v1
```


4. Corra el Proyecto

```bash
    npm run dev
```
