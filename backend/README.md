# Backend — Django REST Framework

Layout propuesto para el backend Python/Django REST Framework. No se han creado proyecto Django, dependencias ni migraciones. Esperar aprobación del tutor y validar entorno antes de iniciar implementación.

## Aplicaciones modulares propuestas

- `config/`: settings, urls raíz y configuración del proyecto Django.
- `apps/identity/`: usuarios, roles y permisos.
- `apps/channel_accounts/`: cuentas seller/canal y referencias a credenciales protegidas.
- `apps/catalog/`: productos maestros, variantes y validaciones.
- `apps/channel_mappings/`: mapeos de categorías, marcas y atributos.
- `apps/publications/`: solicitudes, estados, feed/import status e intentos.
- `apps/orders/`: consulta de pedidos y transiciones permitidas.
- `apps/shipping_labels/`: obtención/consulta de etiquetas cuando el canal lo soporte.
- `apps/audit/`: movimientos de productos y auditoría de acciones/resultados.
- `integrations/contracts/`: interfaces y DTOs de capacidades comunes.
- `integrations/adapters/{falabella,ripley,woocommerce}/`: futuros adaptadores aislados. `mercadolibre/` se agrega cuando se priorice ese canal.

Los módulos viven en un solo backend desplegable. No se asumen Celery, Redis, worker ni gestor de secretos hasta decidirlos. No implementar llamadas reales antes de validar canal, cuenta, permisos, ambiente y documentación.