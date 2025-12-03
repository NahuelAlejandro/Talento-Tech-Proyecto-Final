Perfecto.
Aquí tenés el **README completamente formateado en Markdown**, profesional, con emojis, tablas, endpoints, respuestas y toda la info del proyecto lista para copiar y pegar en GitHub.

---

# 🌐 Talento Tech – Proyecto Final

API REST desarrollada en **Node.js** para la gestión de productos y autenticación de usuarios. Incluye endpoints públicos y protegidos, manejo de errores y estructura modular escalable.

---

## 🚀 Tecnologías utilizadas

* **Node.js**
* **Express.js**
* **JavaScript (ES6+)**
* **npm**
* **Vercel** (para despliegue)

---

## 📁 Estructura del proyecto

```text
/
├── src/
│   ├── routes/          # Definición de endpoints
│   ├── controllers/     # Lógica de cada ruta
│   ├── models/          # Estructura de los datos
│   ├── services/        # Lógica de negocio
│   ├── middleware/      # Utilidades / manejo de errores
│   └── data/            # Datos mock o persistencia simple
│
├── index.js             # Servidor principal
├── config.js            # Configuración general
├── package.json         # Dependencias y scripts npm
├── vercel.json          # Configuración para despliegue
└── README.md
```

---

## 🛠️ Instalación y uso

```bash
# 1. Clonar el repositorio
git clone https://github.com/NahuelAlejandro/Talento-Tech-Proyecto-Final.git

# 2. Ingresar al proyecto
cd Talento-Tech-Proyecto-Final

# 3. Instalar dependencias
npm install

# 4. Ejecutar el servidor
npm start
```

---

# 📚 Tabla resumen de endpoints

| Método | Endpoint                                                             | Descripción                    |
| ------ | -------------------------------------------------------------------- | ------------------------------ |
| GET    | `https://talento-tech-proyecto-final.vercel.app/api/products`        | Lista todos los productos      |
| GET    | `https://talento-tech-proyecto-final.vercel.app/api/products/:id`    | Obtiene un producto específico |
| POST   | `https://talento-tech-proyecto-final.vercel.app/api/products/create` | Crea un producto               |
| DELETE | `https://talento-tech-proyecto-final.vercel.app/api/products/:id`    | Elimina un producto            |
| POST   | `https://talento-tech-proyecto-final.vercel.app/auth/login`          | Genera token JWT               |

---

---

# 📌 Endpoints disponibles

---

# 🛒 **PRODUCTOS**


#### 1. **Obtener todos los productos**

* **Método**: `GET`
* **URL**: `https://talento-tech-proyecto-final.vercel.app/api/products`
* **Descripción**: Devuelve todos los productos almacenados en el sistema.
* **Respuesta de ejemplo**:

### ✔️ Respuesta 200

```json
[
  {
    "id": "04xnz3eHp263unlW4tWS",
    "name": "Samsung Galaxy A56 5G",
    "brand": "Samsung",
    "stock": 20,
    "price": 200,
    "description": "The Samsung Galaxy A56 5G represents the perfect combination...",
    "imageUrl": "https://http2.mlstatic.com/D_NQ_NP_995286-MLA99522535638_122025-O.webp",
    "category": "smartphone"
  },
  {
    "id": "qgwWoh53drcWrzUx5TVK",
    "brand": "Dell",
    "price": 358.28,
    "name": "Laptop Dell Inspiron 15",
    "stock": 20,
    "category": "notebook",
    "imageUrl": "https://http2.mlstatic.com/D_NQ_NP_910907-MLA86736312036_072025-O.webp",
    "description": "The Dell Inspiron 15 3502 Notebook offers reliable performance..."
  }
]
```

---

##### 2. **Obtener producto por ID**

* **Método**: `GET`
* **URL**: `https://talento-tech-proyecto-final.vercel.app/api/products/:id`
* **Descripción**: Devuelve el producto con el ID indicado.
* **Parámetros**:

  * `id`: ID del producto a obtener.
* **Respuesta de ejemplo** (si el ID existe):

### ✔️ Respuesta 200

```json
{
  "brand": "Dell",
  "price": 358.28,
  "name": "Laptop Dell Inspiron 15",
  "stock": 20,
  "category": "notebook",
  "imageUrl": "https://http2.mlstatic.com/D_NQ_NP_910907-MLA86736312036_072025-O.webp",
  "description": "The Dell Inspiron 15 3502 Notebook offers reliable performance..."
}
```

* **Respuesta de ejemplo** (si el ID no existe):

### ❌ Error 404

```json
{
  "status": 404,
  "name": "NotFoundError",
  "message": "The product has not been found"
}
```

---

#### 3. **Crear un nuevo producto**

* **Método**: `POST`
* **URL**: `https://talento-tech-proyecto-final.vercel.app/api/products/create`
* **Descripción**: Recibe la información del nuevo producto en el cuerpo de la solicitud y lo guarda en la base de datos.
* **Cuerpo (Body)**:

```json
{
  "category": "smartphone",
  "brand": "Samsung",
  "description": "The Samsung Galaxy A56 5G represents the perfect combination...",
  "name": "Samsung Galaxy A56 5G",
  "stock": 20,
  "price": 200,
  "imageUrl": "https://http2.mlstatic.com/D_NQ_NP_995286-MLA99522535638_122025-O.webp"
}
```

* **Respuesta de ejemplo** (cuando el producto se crea exitosamente):

### ✔️ Respuesta 201

```json
{
    "id": "04xnz3eHp263unlW4tWS"
}
```

* **Respuesta de ejemplo** (cuando el producto ya existe):

### ❌ Error 409 – producto existente

```json
{
  "status": 409,
  "name": "ProductExistsError",
  "message": "This Product Samsung Galaxy A56 5G already exist"
}
```

---
#### 4. **Eliminar un producto**

* **Método**: `DELETE`
* **URL**: `https://talento-tech-proyecto-final.vercel.app/api/products/:id`
* **Descripción**: Elimina el producto con el ID indicado.
* **Parámetros**:

  * `id`: ID del producto a eliminar.
* **Respuesta de ejemplo** (cuando el producto es eliminado):

### ✔️ Respuesta 200

```json
{
  "message": "The product has been successfully removed"
}
```

---

# 🔐 **Autenticación**


#### 1. **Login de usuario**

* **Método**: `POST`
* **URL**: `https://talento-tech-proyecto-final.vercel.app/auth/login`
* **Descripción**: Recibe las credenciales del usuario en el cuerpo de la solicitud y devuelve un token Bearer si las credenciales son válidas.
* **Cuerpo (Body)**:

```json
{
  "email": "test@gmail.com",
  "password": "123456"
}
```

* **Respuesta de ejemplo** (cuando las credenciales son válidas):
### ✔️ Respuesta 200

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NjQ4MDMwMzQsImV4cCI6MTc2NDgwNjYzNH0.A8jXqjSSfjgDN2cwWU_Lx19b7GY-wN3XXhIEnGWjH-o"
}
```
