# Investigación preliminar de mecanismos de publicación por canal

**Proyecto:** SIADE · FARWEST, Marketing y Ecommerce  
**Consulta de fuentes:** 7 de noviembre de 2026  
**Estado:** investigación documental pública verificada en fuentes oficiales; no reemplaza confirmación de cuentas, permisos ni requisitos del vendedor.

## 1. Objetivo y conclusión ejecutiva

Identificar qué evidencia pública existe sobre preparación/publicación de productos en Falabella/Saga, Ripley y la tienda Web, y qué falta verificar antes de decidir una integración.

La documentación oficial consultada muestra que **Falabella Seller Center** publica operaciones de catálogo y gestión de feeds. La creación de producto es asíncrona y exige revisar el resultado del feed; la guía indica que el entorno disponible es producción y recomienda precauciones para pruebas. También describe atributos obligatorios que dependen de la categoría. **Ripley Perú** describe el acceso a documentación de APIs de Mirakl y señala que la integración no es obligatoria, además de ofrecer carga por plantillas para productos/variantes. Esta evidencia confirma mecanismos documentados en ambos ecosistemas, pero **no confirma acceso de FARWEST, autorización de la cuenta, credenciales, ambiente de pruebas ni viabilidad de una conexión propia de SIADE**.

La equivalencia entre el canal nombrado por el usuario como **“Saga”** y el Seller Center/API de Falabella debe confirmarse con FARWEST o el tutor. No se encontró evidencia suficiente para asignar automáticamente el canal Web a una plataforma concreta.

## 2. Matriz de evidencia

| Canal / posibilidad | Evidencia oficial consultada | Lo que permite concluir | Lo que sigue pendiente |
|---|---|---|---|
| Falabella Seller Center (posible correspondencia con “Saga”; por confirmar) | La guía oficial documenta ProductCreate y otras operaciones de catálogo; ProductCreate genera un feed asíncrono y pide consultar su resultado. La guía de inicio indica entorno de producción, sin describir sandbox en esa página. Los atributos requeridos varían por categoría. | Existe documentación pública de Seller API para catálogo, feeds y atributos. La documentación no equivale a acceso de FARWEST ni a permiso para ejecutar operaciones reales. | Confirmar con FARWEST si “Saga” corresponde a esa cuenta/canal; validar UserID/autorización, categoría, atributos, límites y proceso aplicable. No probar escrituras desde SIADE en producción como parte del MVP. |
| Ripley Perú | Ayuda oficial (actualizada el 11/08/2026) explica que Ripley puede orientar el acceso a la documentación de APIs de Mirakl, recomienda contar con equipo técnico o integrador y aclara que la integración es opcional. La guía de productos/variantes por plantilla fue actualizada el 23/10/2026. | Existen una alternativa documentada de integración y un flujo de carga por plantilla. | Confirmar seller activo, mecanismo permitido, documentación técnica disponible para la cuenta, permisos y formato/campos de la plantilla por categoría. No guardar ni solicitar la API Key de la cuenta. |
| Web propia | No se aportó URL, plataforma de comercio ni documentación de la tienda. | No se puede seleccionar integración, archivo ni esquema. | Identificar dominio, plataforma (si existe), responsable técnico, mecanismo soportado y fuente de verdad de catálogo/precio/stock. |
| Partners integradores | Falabella publica un listado de partners certificados por país; Ripley Perú enumera integradores y aconseja contar con un equipo técnico/integrador. | Existe una alternativa comercial de integración vía tercero en ambos ecosistemas. | Determinar si FARWEST ya utiliza un integrador y si SIADE debe integrarse con él; no contratar ni escoger partner sin análisis organizacional/costos. |

## 3. Decisión de diseño recomendada para el MVP

1. Mantener una ficha maestra de producto independiente de las particularidades de cada canal.
2. Modelar el contenido y los estados por canal sin implementar aún credenciales ni llamadas reales.
3. Validar el flujo funcional en modo local/demostrativo. La guía de Falabella consultada describe un entorno de producción; por ello, rotular toda publicación simulada y no realizar llamadas de escritura sin autorización expresa y plan de prueba aprobado.
4. Para cada canal, mantener una matriz versionada de campos requeridos y origen de la evidencia.
5. Después de validar la cuenta y permisos, escoger con el tutor una primera vía: API autorizada, integrador existente o plantilla oficial obtenida desde el portal del seller.
6. Implementar una sola vía prioritaria para la demostración, y describir las demás como alternativas. No abrir pedidos, logística ni boleteo como alcance de SIADE aunque la plataforma destino los documente.

Esto permite iniciar catálogo, variantes, contenido específico y validaciones sin fijar arquitectura final ni condicionar todo el desarrollo a una autorización externa.

## 4. Información que debe confirmar FARWEST

| Pregunta | Responsable sugerido | Evidencia que cierra la pregunta |
|---|---|---|
| ¿Qué significa exactamente el canal “Saga” en este proyecto y cuál es su Seller Center/cuenta? | Supervisor de Marketing/Ecommerce | Confirmación escrita y nombre del portal/canal de seller (sin compartir claves). |
| ¿FARWEST es seller activo en Falabella/Saga y Ripley? | Supervisor comercial | Confirmación de estado de cuenta y canales habilitados. |
| ¿Hay una plataforma Web propia? ¿Cuál administra el catálogo? | Responsable ecommerce/IT | Nombre de plataforma y documentación de integración autorizada. |
| ¿Qué mecanismo usa hoy la empresa: portal, plantilla, API, partner? | Operador del proceso | Observación guiada o procedimiento vigente. |
| ¿Quién autoriza investigación/uso de APIs y cómo se gestionan las claves? | IT/seguridad o dueño de cuenta | Procedimiento aprobado; no incluir secretos en el informe. |
| ¿Qué campos y categorías corresponden al producto piloto? | Operador catálogo | Producto de ejemplo anonimizado y guías vigentes. |
| ¿Qué puede entrar en pruebas académicas? | Tutor + supervisor | Alcance acordado: mock, plantilla, sandbox o cuenta real de prueba. |

## 5. Riesgos y controles

- **Producción sin sandbox documentado en la guía consultada:** la introducción de Falabella Seller API indica un entorno de producción y recomienda usar productos de prueba de bajo valor con precaución. Para la práctica, empezar con simulación y no ejecutar escrituras reales hasta autorización explícita y plan aprobado.
- **Credenciales:** no guardar API keys ni contraseñas en el prototipo, repositorio, capturas o informe. El titular de la cuenta debe gestionar credenciales por el procedimiento de la empresa.
- **Campos dinámicos:** los atributos dependen de la categoría y pueden cambiar; obtenerlos de las guías/endpoints dinámicos autorizados cuando llegue el momento de integración.
- **Homologación de canal:** no usar “Saga” y “Falabella” como sinónimos técnicos hasta confirmar que la cuenta y canal requeridos son los mismos en la operación de FARWEST.
- **Alcance:** que una API también maneje órdenes, etiquetas, boletas o despacho no implica incluir esas funciones en SIADE; permanecen fuera del MVP según el alcance acordado.

## 6. Próximas tareas de investigación

| Prioridad | Tarea | Resultado |
|---|---|---|
| P0 | Aclarar “Saga” vs. Seller Center Falabella en el contexto de FARWEST. | Canal y cuenta de referencia definidos. |
| P0 | Identificar plataforma y responsable de la tienda Web. | Tercer canal caracterizado o removido/renombrado del alcance. |
| P0 | Obtener ficha anonimizada y categoría del piloto; revisar campos con las guías oficiales del seller. | Modelo funcional concreto, con campos y reglas citables. |
| P1 | Pedir al titular de la cuenta la documentación y condiciones vigentes de acceso/pruebas, sin compartir secretos. | Requisitos de autorización registrados. |
| P1 | Comparar desarrollo propio, integrador existente y plantilla según costo, control, esfuerzo y permisos. | Decisión tecnológica sustentada. |

## 7. Fuentes consultadas

### Documentación oficial de Falabella

- Falabella Seller Center Developers. (s. f.). *Developers Portal*. https://developers.falabella.com/
- Falabella Seller Center Developers. (s. f.). *Introducción a la API de Falabella Seller Center*. https://developers.falabella.com/docs/getting-started
- Falabella Seller Center Developers. (s. f.). *Creación de productos*. https://developers.falabella.com/docs/products/productcreate
- Falabella Seller Center Developers. (s. f.). *Flujo de productos*. https://developers.falabella.com/docs/products-flow
- Falabella Seller Center Developers. (s. f.). *Feeds*. https://developers.falabella.com/docs/feeds
- Falabella Seller Center Developers. (s. f.). *Actualizar productos*. https://developers.falabella.com/docs/products/productupdate
- Falabella Perú. (s. f.). *Integraciones*. https://www.falabella.com.pe/falabella-pe/page/integraciones/
- Falabella Perú. (s. f.). *Falabella Seller Center*. https://www.falabella.com.pe/falabella-pe/page/falabella-seller-center
- Falabella Seller Center Developers. (s. f.). *Conexión a través de partners integradores*. https://developers.falabella.com/partners-integradores

### Documentación oficial de Ripley Perú

- Ripley Perú, Centro de ayuda R Sellers. (2026, 11 de agosto). *Intégrate y gestiona tu tienda*. https://ripleyperu.zendesk.com/hc/es/articles/32669080905101-Int%C3%A9grate-y-gestiona-tu-tienda
- Ripley Perú, Centro de ayuda R Sellers. (2026, 23 de octubre). *Creación de productos/variantes por plantilla*. https://ripleyperu.zendesk.com/hc/es/articles/42697687235469--Creaci%C3%B3n-de-productos-variantes-por-plantilla
- Ripley Perú, Centro de ayuda R Sellers. (2026, 29 de abril). *Actualización de productos por plantilla*. https://ripleyperu.zendesk.com/hc/es/articles/44563754265613--Actualizaci%C3%B3n-de-productos-por-plantilla

**Nota de uso de fuentes:** estas páginas sirven para documentar capacidades y procedimientos publicados por los marketplaces. No son evidencia de que FARWEST haya recibido acceso, de que los mecanismos sigan habilitados para su cuenta o de que SIADE ya esté conectado. Revalidar antes de implementar y citar la fecha de consulta.
