# 🌐 Backend - Proyecto NestJS: Zarbel

Este backend ha sido desarrollado con [NestJS](https://nestjs.com/) utilizando [Prisma ORM](https://www.prisma.io/) como capa de acceso a datos y PostgreSQL como base de datos. Contiene funcionalidades como:

- Crear endpoint `/contact-us` para recibir mensajes desde formulario de contacto
- Listar y gestionar productos
- Ejecutar seed automático en entorno de desarrollo

---

## 🚀 Requisitos

Antes de comenzar, asegurarse de tener instalado:

- Node.js v18+
- PostgreSQL
- Git
- Yarn o npm
- Docker (opcional)

---

## 🛠 Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/tu-usuario/zarbel-backend.git
cd zarbel-backend
```

2. Instalar dependencias:

```bash
npm install
# o
yarn install
```

3. Crear el archivo `.env`:

```bash
cp .env.example .env
```

Luego, editar el archivo `.env` y reemplazar con credenciales locales de PostgreSQL y Resend (correo).

---

## 🥪 Variables de entorno necesarias

```env
# Base de datos
DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/zarbelbd"

# API de correo (Resend)
RESEND_API_KEY=your_resend_api_key_here
MAIL_FROM=no-reply@yourdomain.com
MAIL_TO=admin@yourcompany.com
```

---

## 🧱 Configuración de base de datos

1. Crear la base de datos localmente:

```sql
CREATE DATABASE zarbelbd;
```

2. Generar las migraciones e inicializar Prisma:

```bash
npx prisma migrate dev --name init
```

Esto crea las tablas en la base de datos.

---

## 🌱 Ejecutar seed automático

Al levantar el servidor, el sistema insertará automáticamente productos base si la tabla `products` está vacía.

> ✅ Esto es útil para desarrollo, sin duplicar información cada vez que se levanta el proyecto.

---

## ▶️ Levantar el servidor

```bash
npm run start:dev
```

Acceder al backend en:
`http://localhost:3000`

---

## 📬 Probar formulario de contacto

Probar el endpoint en Postman:

```http
POST http://localhost:3000/contact-us
```

### Body JSON:

```json
{
  "name": "Laura",
  "email": "laura@example.com",
  "message": "Estoy interesada en sus planes de automatización."
}
```

✅ Esto envía un correo automáticamente usando Resend.

---

## 📚 Scripts útiles

| Comando                  | Descripción                            |
| ------------------------ | -------------------------------------- |
| `npm run start:dev`      | Iniciar el servidor en modo desarrollo |
| `npx prisma studio`      | Abrir el panel visual de Prisma        |
| `npx prisma migrate dev` | Aplicar migraciones a la base de datos |
| `npx prisma db seed`     | Ejecutar el seed manual (opcional)     |

---

## 🧹 Estructura de módulos

Organizar el proyecto por módulos siguiendo buenas prácticas de arquitectura en NestJS, incluyendo:

- `controller/` → recibir y orquestar peticiones
- `service/` → contener la lógica del negocio
- `dto/` → validar datos de entrada con `class-validator`
- `interfaces/` → definir tipos de estructuras internas
- `prisma/schema.prisma` → definir modelos de datos

---

## 🛡 Estándares aplicados

✔ Mantener los módulos limpios y separados
✔ Separar repositorios sin lógica de negocio
✔ Validar datos con DTOs estrictos
✔ Crear enums descriptivos y en mayúsculas
✔ Ejecutar semillas automáticas solo si es necesario

---
