
## Actualización de propuesta arquitectónica — 14 de noviembre de 2026

Esta actualización reemplaza para la propuesta vigente las decisiones de stack y el alcance/roles descritos en versiones anteriores de D13. Sigue siendo una propuesta del proyecto pendiente de aprobación del tutor y de las políticas de FARWEST; no afirma aprobación empresarial ni conexión real a canales.

### Stack propuesto actualizado

- Frontend: React + TypeScript.
- Backend/API: Python + Django REST Framework.
- Persistencia: PostgreSQL.
- Arquitectura: monolito modular; un backend desplegable, módulos con responsabilidades y contratos claros, adaptadores por canal. No se proponen microservicios.
- Integraciones reales: no se habilitan sin validar permisos, ambiente de pruebas, documentación y responsable. Mientras tanto, mantener simulador separado.
- Procesamiento asíncrono/cola, gestor de secretos e infraestructura de despliegue: pendientes de decisión; usar credenciales ficticias en demostración.

### Usuarios y alcance actualizado

- Dos administrativos: CRUD de productos maestros y consulta del registro de movimientos.
- Una vendedora: consulta de pedidos, cambio de estados permitidos por canal y obtención de etiquetas generadas por las plataformas seller.
- Canales previstos: Falabella Seller Center, Ripley/Mirakl y WooCommerce; Mercado Libre queda como futura ampliación mediante otro adaptador.
- Prioridad funcional: catálogo maestro con variantes, mapeos y publicación/seguimiento; añadir la vista de pedidos y las acciones de estado/etiquetas requeridas por la vendedora, supeditadas a las capacidades verificadas de cada API. La sincronización de stock queda posterior.
- Los movimientos de producto conservan actor, fecha y cambio. Pedidos y movimientos no se borran desde SIADE. Archivar un producto local no lo elimina del marketplace.

### Modularidad, SOLID y CRUD

Módulos lógicos: identidad/permisos; catálogo y variantes; cuentas seller/canales; mapeos de canal; publicaciones y seguimiento; pedidos/estados; etiquetas; auditoría/movimientos; adaptadores Falabella, Ripley, WooCommerce y futuro Mercado Libre.

Aplicar SOLID dentro del monolito: responsabilidad única por módulo; extensibilidad mediante adaptadores; contratos sustituidos coherentemente; interfaces por capacidades; y casos de uso dependientes de contratos, no de integraciones concretas. CRUD íntegro en productos, variantes, cuentas y mapeos; bajas lógicas con auditoría. Los estados de pedidos se cambian solo mediante transiciones soportadas por el canal, no como edición arbitraria.

### Validaciones por canal

- Falabella: la colección compartida contiene productos, imágenes, feeds, pedidos/ítems, documentos y cambios de estado. Debe verificarse qué operación entrega la etiqueta de envío.
- Ripley/Mirakl: Postman muestra importación CSV multipart y consultas de estado/errores; la colección también presenta una sección de órdenes. Deben verificarse autenticación, entorno, columnas y las operaciones que entregan etiquetas.
- WooCommerce: validar permisos/API de pedidos y cambios de estado. La etiqueta depende del plugin o servicio de envío de la tienda; no se asume que WooCommerce core la genere.
- Mercado Libre: pendiente de documentación, permisos, operaciones y alcance.

El backend autoriza acciones por rol. React no sustituye el control de permisos del servidor. Rutas HTTP detalladas se documentarán al implementarlas, sin presentarlas como endpoints existentes.
