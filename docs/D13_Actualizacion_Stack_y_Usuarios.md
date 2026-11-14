# Actualización de propuesta arquitectónica — SIADE

**Fecha:** 14 de noviembre de 2026  
**Estado:** propuesta del proyecto; pendiente de aprobación del tutor y de las políticas de FARWEST. Esta actualización reemplaza las decisiones previas de stack y usuarios para la propuesta vigente; no confirma aprobación empresarial ni integraciones reales.

## Stack

- Frontend: React + TypeScript.
- Backend/API: Python + Django REST Framework.
- Persistencia: PostgreSQL mediante Django ORM.
- Arquitectura: monolito modular, un backend desplegable con apps de dominio y adaptadores de canal independientes.
- Cola de tareas, gestor de secretos, infraestructura y despliegue: pendientes.

## Usuarios y funciones

- Dos administrativos: CRUD de productos maestros y consulta del registro de movimientos.
- Una vendedora: consulta de pedidos, cambios de estado permitidos y obtención de las etiquetas generadas por plataformas seller.

## Alcance

Catálogo maestro y variantes, mapeos por canal, publicaciones y seguimiento, historial de movimientos, consulta de pedidos, cambios permitidos y etiquetas cuando cada integración lo soporte. Canales previstos: Falabella Seller Center, Ripley/Mirakl y WooCommerce; Mercado Libre queda como ampliación futura. Stock avanzado queda posterior.

## Estructura modular propuesta

Backend: identidad/permisos, cuentas de canal, catálogo, mapeos, publicaciones, pedidos, etiquetas, auditoría y contratos/adaptadores. Frontend: features de catálogo, movimientos, conexiones, mapeos, publicaciones, pedidos y etiquetas. SOLID se aplica dentro del monolito; no se crean microservicios.

CRUD íntegro aplica a recursos administrados por SIADE, con autorización backend, validación y auditoría. Para producto, baja lógica conserva historial; no elimina el recurso en un marketplace. Pedidos, movimientos y resultados ejecutados no se borran ni tienen estados editables arbitrariamente. Cada cambio de estado de pedido debe corresponder a una transición soportada por el canal.

## Pendientes de validación

- Aprobación del stack por tutor y compatibilidad con políticas de FARWEST.
- Permisos precisos para los dos administrativos y la vendedora.
- Operaciones de pedidos/etiquetas por canal; especialmente proveedor/plugin de envíos de WooCommerce.
- Ambiente de pruebas, permisos, límites y formatos de las APIs. El simulador local permanece separado y ninguna integración se considera activa.
- Gestión segura de secretos, cola/worker y entorno de despliegue.