# Backend — Django REST Framework

Proyecto Django 5.2 LTS con Django REST Framework, PostgreSQL mediante Psycopg 3 y configuración por variables de entorno. Los módulos de dominio se organizan como aplicaciones Django dentro de `apps/`; adaptadores de canales permanecen bajo `integrations/`.

## Preparar el entorno

Desde `backend/`, en Windows PowerShell:

```powershell
py -3.13 -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
Copy-Item .env.example .env
```

Instala/inicia PostgreSQL y crea la base y usuario indicados en `.env`. Para arrancar sin PostgreSQL durante el primer trabajo local, quita `DB_ENGINE=postgres` de `.env` o déjalo como `sqlite`; Django usará SQLite local.

```powershell
.\.venv\Scripts\python.exe manage.py migrate
.\.venv\Scripts\python.exe manage.py runserver
```

## Módulos previstos

- `apps/identity/`: usuarios, roles y permisos.
- `apps/channel_accounts/`: cuentas de canales y referencias a credenciales protegidas.
- `apps/catalog/`: productos maestros y variantes.
- `apps/channel_mappings/`: mapeos de categorías, marcas y atributos.
- `apps/publications/`: publicaciones y estados de importación.
- `apps/orders/`: pedidos y cambios de estado permitidos.
- `apps/shipping_labels/`: etiquetas disponibles por canal.
- `apps/audit/`: historial de movimientos y acciones.
- `integrations/contracts/` y `integrations/adapters/`: contratos y adaptadores aislados.

La inicialización no conecta marketplaces ni implementa CRUD funcional. Los directorios modulares existentes describen límites previstos; se implementarán según el alcance del Sprint 1.
