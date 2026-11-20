# Guía de validación y arranque del Sprint 1 de SIADE

**Propósito:** validar los supuestos externos que quedan abiertos y usar el baseline de diseño del Hito 1 para iniciar el catálogo maestro.  
**Uso sugerido:** semana 11–12, en una sesión de 30–45 minutos con el tutor y una persona que conozca el proceso de catálogo.  
**Estado:** Hito 1 documental cerrado en versión 1.0; esta guía sigue pendiente de ejecución y registro de respuestas.

El cierre documental no afirma que FARWEST haya aprobado los requisitos ni que se hayan realizado entrevistas o pruebas de usuario. Etiquetar cada respuesta como hecho observado, confirmado por responsable, hipótesis o pendiente.

## 1. Resultado que se busca

Al terminar la validación, el equipo debe tener: (a) el proceso actual descrito con hechos observados, (b) los campos mínimos de una ficha de producto, (c) las diferencias confirmadas entre canales, (d) un alcance Must aceptado para el prototipo/MVP y (e) un Sprint 1 acotado. Las respuestas no disponibles se registran como pendientes, no se completan por intuición.

## 2. Preparación previa

- Participantes: estudiante, tutor/supervisor y responsable del proceso de catálogo/ecommerce, si está disponible.
- Solicitar una ficha de producto de ejemplo anonimizada y, si existe, una guía de carga por canal.
- Abrir el prototipo navegable y el documento de análisis.
- Confirmar que se permite tomar notas/capturas y qué información puede incluirse en el informe.
- No solicitar contraseñas, API keys ni tokens reales de vendedores. Si existe acceso, que lo gestione el responsable autorizado fuera de la sesión.

## 3. Guion de entrevista

Registrar cada respuesta con una etiqueta: **Hecho observado**, **Confirmado por responsable**, **Hipótesis**, o **Pendiente**.

### A. Proceso actual (10 minutos)

1. ¿Qué evento inicia el alta o actualización de un producto?
2. ¿Quién proporciona los datos, quién los revisa y quién realiza la carga/publicación?
3. ¿Qué archivos, plataformas o pasos se usan hoy? ¿En qué orden?
4. ¿Qué se vuelve a escribir o adaptar para Web, Saga o Ripley?
5. ¿Cómo se detectan errores y cómo se sabe que el producto quedó publicado?
6. ¿Qué demora, retrabajo o error se repite con más frecuencia? ¿Hay mediciones o ejemplos?

**Registro AS-IS:**

| Paso real | Actor | Herramienta/documento | Entrada y salida | Espera/error observado | Fuente/evidencia |
|---|---|---|---|---|---|
| 1 | [ ] | [ ] | [ ] | [ ] | [ ] |
| 2 | [ ] | [ ] | [ ] | [ ] | [ ] |
| 3 | [ ] | [ ] | [ ] | [ ] | [ ] |
| 4 | [ ] | [ ] | [ ] | [ ] | [ ] |

### B. Producto y datos (10 minutos)

7. ¿Cuál es el identificador único que se usa internamente?
8. ¿Qué atributos son comunes a todos los productos? ¿Cuáles dependen de categoría?
9. ¿Qué productos manejan variantes? ¿Qué atributos identifican una variante (por ejemplo, color/talla/SKU)?
10. ¿Quién es fuente de verdad para precio, stock, marca, imágenes y descripción?
11. ¿Qué campos son obligatorios para que un producto pueda guardarse internamente?
12. ¿Qué datos pueden cambiar después de publicar y cómo debería reflejarse el cambio?

**Matriz inicial por campo:**

| Campo | Obligatorio en SIADE | Fuente responsable | Común/variante/canal | Validación o formato confirmado | Evidencia |
|---|---|---|---|---|---|
| Código interno | [Sí/No] | [ ] | [ ] | [ ] | [ ] |
| Nombre maestro | [Sí/No] | [ ] | [ ] | [ ] | [ ] |
| SKU | [Sí/No] | [ ] | [ ] | [ ] | [ ] |
| Variante (atributos) | [Sí/No] | [ ] | [ ] | [ ] | [ ] |
| Precio | [Sí/No] | [ ] | [ ] | [ ] | [ ] |
| Stock | [Sí/No] | [ ] | [ ] | [ ] | [ ] |
| Descripción | [Sí/No] | [ ] | [ ] | [ ] | [ ] |
| Imágenes | [Sí/No] | [ ] | [ ] | [ ] | [ ] |
| Categoría/atributos | [Sí/No] | [ ] | [ ] | [ ] | [ ] |

### C. Validación del prototipo (10 minutos)

Pedir al participante que complete estas tareas pensando en voz alta. No explicar cada botón antes de observar; anotar dónde duda y qué espera que ocurra.

1. Encontrar el producto de ejemplo o crear uno nuevo.
2. Completar datos maestros y añadir una variante.
3. Adaptar un título o descripción para un canal sin cambiar el maestro.
4. Revisar qué dato falta y cómo corregirlo.
5. Interpretar el estado y explicar qué significa “preparado” frente a “publicado”.

| Tarea | ¿La completó? | Duda/error observado | Etiqueta o control que cambiaría | Cambio acordado |
|---|---|---|---|---|
| Buscar/crear producto | [ ] | [ ] | [ ] | [ ] |
| Añadir variante | [ ] | [ ] | [ ] | [ ] |
| Editar canal | [ ] | [ ] | [ ] | [ ] |
| Corregir validación | [ ] | [ ] | [ ] | [ ] |
| Entender estado | [ ] | [ ] | [ ] | [ ] |

### D. Canales e integración (5–10 minutos)

13. ¿Qué mecanismo autorizado se utiliza o puede investigarse por cada canal?
14. ¿Existe documentación oficial o guía para vendedores? ¿Quién puede proporcionarla?
15. ¿Qué operaciones y tipos de datos se requiere evaluar (alta, modificación, imágenes, precio, stock)?
16. ¿Se cuenta con aprobación, usuario de prueba, entorno de pruebas o responsable técnico?
17. Si no se obtiene acceso o documentación a tiempo, ¿qué salida demostrable se acepta (por ejemplo, preparación local o plantilla autorizada)?

**Matriz de investigación:**

| Canal | Fuente oficial/URL | Evidencia disponible | Operaciones documentadas | Acceso/permisos confirmados | Próximo paso/encargado |
|---|---|---|---|---|---|
| Web | [ ] | [ ] | [ ] | [ ] | [ ] |
| Saga | [ ] | [ ] | [ ] | [ ] | [ ] |
| Ripley | [ ] | [ ] | [ ] | [ ] | [ ] |

No registrar una integración como confirmada a partir de una mención comercial general. Verificar documentación oficial, operación específica y autorización de la cuenta correspondiente.

## 4. Acta de decisiones

| Decisión | Valor acordado | Quién confirma | Evidencia/fecha | Impacto en backlog/diseño |
|---|---|---|---|---|
| Tipo de entrega evaluada (maqueta/MVP/ambos) | [ ] | [ ] | [ ] | [ ] |
| Campos obligatorios comunes | [ ] | [ ] | [ ] | [ ] |
| Gestión de variantes | [ ] | [ ] | [ ] | [ ] |
| Fuente de precio y stock | [ ] | [ ] | [ ] | [ ] |
| Alcance de cada canal en MVP | [ ] | [ ] | [ ] | [ ] |
| Mecanismo de publicación permitido | [ ] | [ ] | [ ] | [ ] |
| Evidencia de aceptación para Sprint 1 | [ ] | [ ] | [ ] | [ ] |

## 5. Refinamiento de Sprint 1

### Objetivo de Sprint 1 propuesto

Entregar un catálogo interno demostrable que permita buscar, crear y editar una ficha maestra con datos ficticios o autorizados. La demo usa código interno y nombre como campos obligatorios propuestos; marca, categoría, descripción y referencias a recursos pueden quedar opcionales hasta validar una ficha real. Variantes se planifican para Sprint 2; no hay conexión externa en Sprint 1.

### Historias candidatas

| Orden | Historia | Criterio de aceptación mínimo | Plan |
|---|---|---|---|
| 1 | US-01: Como operador, quiero buscar/ver productos para localizar una ficha. | Buscar por código o nombre; abrir resultado; mostrar estado vacío sin coincidencias. | Must · Sprint 1. |
| 2 | US-02: Como operador, quiero crear una ficha maestra. | Código y nombre requeridos en demo; duplicado rechazado; registro aparece en catálogo. | Must · Sprint 1. |
| 3 | US-02: Como operador, quiero editar una ficha maestra. | Guardar cambio y volver a abrir la ficha para confirmar que se conservó. | Must · Sprint 1. |
| 4 | US-03: Como operador, quiero asociar variantes. | Cada variante queda ligada al producto; atributos se limitan a los confirmados. | Sprint 2. |
| 5 | US-04/US-05: Como operador, quiero seleccionar canales y adaptar contenido. | El contenido queda separado; la selección no afirma envío ni publicación. | Sprint 2. |

### Definition of Ready propuesta

- La historia resuelve una necesidad confirmada o está marcada como hipótesis de prototipo.
- Tiene criterio de aceptación entendible y un ejemplo de datos sin información sensible.
- Tiene responsable de revisión y dependencias conocidas.
- Tutor/estudiante eligió una tecnología y un entorno permitidos, incluida la decisión de persistencia para datos de prueba.
- Si la ficha real o la fuente de verdad no están disponibles, se usa el baseline mínimo propuesto con datos ficticios y se registra que aún no está aprobado por FARWEST.
- Sprint 1 no depende de credenciales, APIs, Seller Center ni de cerrar la arquitectura de integración.

### Definition of Done propuesta

- Criterios de aceptación demostrados; errores principales manejados.
- Incremento revisado por el tutor/usuario o la revisión queda programada.
- Evidencia y resultado registrados; código/prototipo y documento actualizados.
- No se presenta simulación como integración real.

## 6. Cierre de la sesión y tareas

| Tarea | Responsable | Fecha objetivo | Estado |
|---|---|---|---|
| Confirmar el periodo exigido para informe parcial (la plantilla cita semanas 2–7). | [ ] | [ ] | Pendiente |
| Entregar brochure, misión/visión y datos de ubicación/organigrama autorizados. | [ ] | [ ] | Pendiente |
| Completar registro real de actividades de semanas 6–10. | Estudiante | [ ] | Pendiente |
| Validar campos de producto y variante del caso piloto. | [ ] | [ ] | Pendiente |
| Obtener documentación oficial o respuesta autorizada de canales. | [ ] | [ ] | Pendiente |
| Confirmar entorno, tecnología y definición de demo para desarrollo. | [ ] | [ ] | Pendiente |

## 7. Puerta de inicio de desarrollo

El Hito 1 documental cerró con D13 v0.1, arquitectura lógica y estructura candidata. D13 v0.3 ya propone React/Vite, Node/Express, PostgreSQL/Prisma y desarrollo local, con nube opcional para demo. Presentar la propuesta al tutor y aprobarla o ajustarla antes de implementar la persistencia. También confirmar si la evaluación espera prototipo, MVP ejecutable o ambos. El conjunto mínimo de demo puede ser el baseline propuesto (código y nombre) hasta que FARWEST valide una ficha real. La investigación de canales continúa en paralelo. No iniciar conectores ni almacenar credenciales hasta validar documentación, canal/cuenta, permisos y responsable técnico.

## Refinamiento posterior de roles y catálogo (14 de noviembre de 2026)

### Roles confirmados por el usuario

- **Administrativo (un solo rol compartido por dos personas):** crear, consultar, editar y archivar productos maestros; consultar movimientos.
- **Vendedora:** consultar/atender pedidos, cambiar estados que permita el canal y obtener etiquetas. Sin permisos para crear productos ni sincronizar stock.
- Los permisos deben validarse en backend. La UI solo refleja los permisos.

### Catálogo maestro y normalización inicial

SIADE requiere un gestor de productos como punto de control del maestro. Caso inicial: calzado. Propuesta de atributos estructurados pendiente de validar con responsable de catálogo:

- Categoría/tipo de calzado.
- Plataforma: `sí`, `no`, `no aplica`.
- Taco: `sin taco`, `con taco`, `no aplica`; altura y forma pendientes.
- Variantes por talla/color y SKU.

No fijar obligatorios ni catálogos exhaustivos sin revisar fichas reales autorizadas. Los atributos normalizados deben permitir mapearse a categorías/atributos distintos de cada canal.

### Registro de movimientos

Registrar alta, edición, archivado y operaciones de sincronización: actor administrativo, fecha/hora, producto, tipo de acción y resumen de campos modificados. El historial es de consulta y no se elimina desde la aplicación. No guardar secretos ni datos innecesarios.

### Reconciliación Saga/Falabella → Ripley

Se reporta una diferencia de cobertura: hay más productos en Saga que en Ripley. Incorporar al backlog un flujo de reconciliación que compare los catálogos, identifique coincidencias con un identificador fiable (SKU/EAN por confirmar), liste productos faltantes/diferencias y requiera revisión antes de publicar en Ripley. No asumir equivalencia por descripción ni cambiar stock. La sincronización real no forma parte del cierre del primer sprint: depende de confirmar identificadores, mapeos, permisos y API.

### Sprint 1: objetivo refinado y cierre

**Objetivo:** entregar el gestor interno de productos maestros con CRUD básico, atributos normalizados mínimos de calzado, permisos administrativos compartidos y registro de movimientos. Sin integración real, pedidos ni sincronización de stock.

Criterios mínimos de aceptación:

1. Ambos usuarios administrativos pueden crear, consultar, editar y archivar un producto; un usuario con rol vendedora no puede realizar esas operaciones.
2. Código/SKU y nombre se validan según reglas acordadas; duplicados de identificador se rechazan con mensaje claro.
3. Ficha de calzado almacena plataforma y taco como valores estructurados; no texto libre para esos campos.
4. Alta, edición y archivado dejan movimiento con actor y fecha; historial consultable y no editable.
5. Buscar/filtrar productos y abrir ficha; los cambios persisten al volver a consultar.
6. Demo con datos ficticios, sin conexión a canal; recorridos y criterios se demuestran y registran.

**Fuera del cierre del Sprint 1:** pedidos/etiquetas, sincronización de stock, publicación real y reconciliación ejecutable Saga/Falabella–Ripley. La reconciliación debe refinarse como backlog de siguiente sprint cuando se confirme la llave de equivalencia.

**Pendientes que no deben bloquear este Sprint 1:** valores completos de todos los atributos de calzado, operaciones de cada API, entorno productivo y automatización de sincronización. Sí bloquean declarar Done: persistencia funcional, autorización diferenciada y evidencia de aceptación anterior.
