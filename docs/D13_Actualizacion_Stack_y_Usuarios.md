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

- Un rol administrativo compartido por los dos administrativos: mismo permiso para CRUD de productos maestros y consulta del registro de movimientos.
- Vendedora: consulta y atención de pedidos, cambios de estado permitidos y obtención de etiquetas de las plataformas seller. No puede crear/editar productos maestros ni sincronizar stock.

## Alcance

Gestor de productos como catálogo maestro, variantes y atributos normalizados; mapeos por canal, publicaciones y seguimiento, historial de movimientos; consulta/atención de pedidos, cambios permitidos y etiquetas cuando la integración lo soporte. Incluye analizar y planificar la reconciliación de productos presentes en Saga/Falabella y ausentes en Ripley. Canales previstos: Falabella Seller Center, Ripley/Mirakl y WooCommerce; Mercado Libre queda como ampliación futura. Stock avanzado queda posterior.

## Estructura modular propuesta

Backend: identidad/permisos, cuentas de canal, catálogo, mapeos, publicaciones, pedidos, etiquetas, auditoría y contratos/adaptadores. Frontend: features de catálogo, movimientos, conexiones, mapeos, publicaciones, pedidos y etiquetas. SOLID se aplica dentro del monolito; no se crean microservicios.

CRUD íntegro aplica a recursos administrados por SIADE, con autorización backend, validación y auditoría. Para producto, baja lógica conserva historial; no elimina el recurso en un marketplace. Pedidos, movimientos y resultados ejecutados no se borran ni tienen estados editables arbitrariamente. Cada cambio de estado de pedido debe corresponder a una transición soportada por el canal.

## Datos normalizados y control de productos

El gestor de productos será el punto de control del catálogo maestro. Para calzado, iniciar con atributos estructurados y no texto libre: categoría/tipo de calzado; indicador de plataforma (sí/no/no aplica); presencia/tipo de taco (sin taco/con taco/no aplica). Altura y forma del taco quedan pendientes de validación con el responsable del catálogo. Variantes de talla/color se modelan por SKU. No se fija aún obligatoriedad ni catálogo completo de valores.

Registrar movimientos de alta, edición, archivado y operaciones de sincronización con actor, fecha/hora, producto, acción y resumen de campos modificados. El historial es de consulta; no se edita ni elimina desde la aplicación.

La necesidad de sincronizar productos existentes de Saga/Falabella a Ripley se plantea como reconciliación dirigida: identificar productos fuente, emparejar con el catálogo Ripley, detectar ausentes y diferencias, revisar y aprobar antes de publicar. No asumir que mismo nombre equivale a mismo producto ni sincronizar stock en este flujo. Ejecución real depende de mapeos, permisos y APIs validados.

## Pendientes de validación

- Aprobación del stack por tutor y compatibilidad con políticas de FARWEST.
- Confirmar perfil normalizado de producto y valores permitidos para calzado (plataforma y tipo/presencia de taco).
- Regla de identificación para igualar productos Saga/Falabella–Ripley (SKU, EAN u otro identificador) y política de conflictos.
- Operaciones de pedidos/etiquetas por canal; especialmente proveedor/plugin de envíos de WooCommerce.
- Ambiente de pruebas, permisos, límites y formatos de las APIs. El simulador local permanece separado y ninguna integración se considera activa.
- Gestión segura de secretos, cola/worker y entorno de despliegue.
