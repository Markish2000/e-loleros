# `Rutas de productos.` /api/v1/products

## 1. `Get.`

### 1.1 `Obtener todos los productos.`

Para traer todos los productos se debe hacer un **_GET_** a la siguiente ruta:

```
/api/v1/products
```

#

## 2. `Post.` /api/v1/products

Para crear un producto se debe hacer un **_POST_** a la siguiente ruta:

```
/api/v1/products
```

### 2.1 `Parámetros`

Para poder crear un producto es necesario:

- Título: **title**.
- Precio: **price**.
- Categoría: **category**.
- Detalle del producto: **detail**.
- Imagen principal: **mainImage**.
- Imágenes secundarias.: **images**.
- Cantidad de productos: **stock**.
- Disponibilidad: **availability**.

### 2.2 `Requisitos de los parámetros`

Cada parámetro tiene requisitos diferentes que son:

- **title** || Máximo 50 caracteres.
- **price** || Sin requisitos.
- **category** || Sólo acepta: 'Cuentas', 'Skins', 'Elo Boost', 'Duo Boost' o 'Coaching técnico profesional'.
- **detail** || Sin requisitos.
- **mainImage** || Sin requisitos.
- **images** || Sin requisitos.
- **stock** || Sólo acepta números.
- **availability** || Sólo acepta true o false.

### `Ejemplo de como realizar el post.`

![Esta es una imagen de ejemplo de como crear un producto](./assets/Ejemplo%20de%20post.jpg)

### `Ejemplo de como sería la respuesta esperada.`

![Esta es una imagen de ejemplo de como sería la respuesta esperada.](./assets/Respuesta%20esperada.jpg)

#

# 4. `Delete.` /api/v1/products/:id

Para borrar un producto se debe hacer un **_DELETE_** a la siguiente ruta:

```
/api/v1/products/:id
```

### 4.1 `Borrar un producto.`

Se debe enviar por params el id del producto a borrar ejemplo:

```
/api/v1/products/1
```
