# `Rutas de productos.` /api/v1/products

## 1. `Get.`

### 1.1 `Obtener todos los productos.`

Para traer todos los productos se debe usar la siguiente ruta:

```
/api/v1/products
```

#

## 2. `Post.`

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
