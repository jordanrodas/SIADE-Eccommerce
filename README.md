# SIADE E-commerce

Sistema para centralizar productos maestros y operación de canales de venta de FARWEST. La arquitectura acordada para iniciar es un monolito modular: React + TypeScript, Django REST Framework y PostgreSQL. No hay conexiones reales con marketplaces.

## Estado de inicialización

- Backend Django 5.2 LTS y DRF inicializados en `backend/`.
- Usuario del sistema configurado con roles `Administrativo` y `Vendedora`.
- Dependencias Python instaladas en `backend/.venv` y dependencias frontend en `frontend/node_modules`.
- PostgreSQL está preparado en la configuración, pero el servidor de base de datos todavía debe instalarse o conectarse. Para arrancar localmente mientras tanto, el backend usa SQLite.
- El CRUD de productos, permisos por caso de uso, operaciones de pedidos y adaptadores de canales quedan para los siguientes pasos del Sprint 1.

## Arranque local en Windows

Backend (PowerShell):

```powershell
cd backend
.\.venv\Scripts\python.exe manage.py migrate
.\.venv\Scripts\python.exe manage.py runserver
```

Frontend (otra terminal):

```powershell
cd frontend
npm run dev
```

Para activar PostgreSQL cuando esté instalado, copia `backend/.env.example` a `backend/.env`, ajusta sus valores localmente y confirma que el servicio esté disponible. No guardes claves reales en el repositorio.

## Estructura

- `backend/config/`: configuración y rutas raíz de Django.
- `backend/apps/`: módulos de dominio del monolito.
- `backend/integrations/`: contratos y adaptadores aislados por canal.
- `frontend/`: aplicación React + TypeScript.
- `docs/`: requisitos, arquitectura, investigación y planificación.
- `prototipo/`: demostración UI/UX con datos ficticios, sin persistencia ni llamadas externas.

Falabella, Ripley y WooCommerce son los canales previstos. Mercado Libre queda como canal futuro. Las integraciones, sincronizaciones y el CRUD de negocio todavía no están implementados.
