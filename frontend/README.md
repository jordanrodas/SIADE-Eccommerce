# Frontend — React + TypeScript

Layout propuesto para el panel web de SIADE. No hay dependencias ni aplicación compilable todavía. El frontend consumirá únicamente la API interna; nunca recibirá credenciales de marketplaces.

## Features propuestas

- `features/catalog/`: CRUD de productos maestros y variantes, con control de acceso administrativo.
- `features/movements/`: historial de solo lectura para administrativos.
- `features/channel-accounts/`: estado de conexiones, sin exponer secretos.
- `features/channel-mappings/`: configuración de categoría/atributos por canal.
- `features/publications/`: preparar productos y revisar resultados/errores.
- `features/orders/`: vista de pedidos para la vendedora y cambios permitidos.
- `features/shipping-labels/`: obtener/consultar etiqueta disponible por canal.
- `shared/api/`, `shared/components/`: cliente de API, controles y componentes reutilizables.

La interfaz puede ocultar acciones según rol para claridad, pero el backend debe autorizar toda operación. El prototipo HTML de `../prototipo/` sigue siendo una maqueta sin persistencia.