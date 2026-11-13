# Acta de cierre del Hito 1 — Diseño de SIADE

**Proyecto:** SIADE · FARWEST, Marketing y Ecommerce  
**Practicante:** Jordan André Rodas Panaifo · 20200285  
**Corte:** semana académica 11 · 7 de noviembre de 2026  
**Estado:** **cerrado al 100% como baseline documental y funcional v1.0**. No representa aprobación de FARWEST ni confirma pruebas de usuario, observación del proceso o integración externa.

## 1. Resultado del hito

Se consolidó el paquete necesario para iniciar el desarrollo del catálogo maestro en el Sprint 1. El alcance de diseño, procesos propuestos, requisitos, reglas, backlog, modelo conceptual, criterios de aceptación y opciones técnicas están documentados y vinculados. Las preguntas institucionales y de integración quedan en un registro explícito para validar en paralelo.

La salida del hito permite iniciar trabajo interno del catálogo con datos ficticios o autorizados una vez se elija el entorno permitido por el tutor. No autoriza llamadas a canales ni fija arquitectura final.

## 2. Entregables D01–D09 y D13

| ID | Entregable | Artefacto disponible | Estado de salida |
|---|---|---|---|
| D01 | Contexto del proyecto | [Documento de análisis SIADE](Documento_Diseno_Analisis_SIADE.md), secciones 1–2 | Baseline v1.0; datos organizacionales que requieren sustento institucional quedan señalados. |
| D02 | Procesos AS-IS y TO-BE | Documento de análisis, sección 7; flujos en [Cronograma_SIADE_Hito1_v3.xlsx](cronogramas/Cronograma_SIADE_Hito1_v3.xlsx), hoja Diagramas | AS-IS marcado como hipótesis; TO-BE marcado como propuesta. |
| D03 | Requisitos y reglas | Documento de análisis, secciones 4–6 | Priorizados y comprobables; los campos empresariales siguen sujetos a validación. |
| D04 | Product Backlog y plan Scrum | Documento de análisis, sección 8; hoja Cronograma del Excel | Sprints 1–3 alineados a semanas 12–14; puntos relativos, sin velocidad asumida. |
| D05 | Modelo conceptual de datos | Documento de análisis, sección 9 | Entidades y relaciones definidas a nivel lógico; sin esquema físico ni tecnología final. |
| D06 | Diagrama de contexto | Hoja Diagramas del Excel | Incluido; actores, fuente Web y equivalencia Saga/Falabella se mantienen pendientes. |
| D07 | UI/UX | [Prototipo navegable](../prototipo/index.html) | Baja fidelidad, datos ficticios y acciones demostrativas; no hay persistencia ni conexión. |
| D08 | Pruebas y aceptación | Documento de análisis, sección 11, casos CP-01–CP-13 | Criterios preparados; todavía no ejecutados. |
| D09 | Viabilidad de canales | [Matriz de investigación](Matriz_Investigacion_Integraciones_Canales.md) | Fuentes oficiales verificadas; sin acceso/permisos confirmados para FARWEST. |
| D13 | Arquitectura y propuesta tecnológica del programa | [Documento D13](Arquitectura_Preliminar_y_Estructura_SIADE.md) | v0.1 formó parte del Hito 1. v0.2 propone stack, base de datos y despliegue; sigue pendiente de aprobación del tutor/FARWEST. |

## 3. Baseline funcional

- **Camino crítico:** crear, buscar y editar catálogo maestro; continuar con variantes; separar contenido por canal; validar; revisar resumen; mantener estado independiente.
- **Regla de evidencia:** “Publicado” requiere resultado externo verificable. Un flujo simulado se identifica como “Simulado”.
- **Datos de demostración:** ficticios o autorizados. Código interno y nombre son requeridos solo en el baseline de la demo; campos de empresa por confirmar.
- **Fuera de alcance:** despacho físico, facturación/boleteo y tickets de soporte. Pedidos y restock son complementarios y no bloquean el MVP.
- **Sin cierre productivo anticipado:** D13 v0.3 recomienda un stack para el MVP, pero no fija el entorno productivo de FARWEST ni confirma APIs o acceso a canales. No se solicitan ni almacenan API keys reales; la autenticación futura debe usar un gestor de secretos autorizado.

## 4. Decisiones que siguen abiertas

| Prioridad | Confirmación | Responsable sugerido | Evidencia de cierre | Mientras siga pendiente |
|---|---|---|---|---|
| P0 | Tipo de entrega académica: prototipo, MVP ejecutable o ambos | Tutor/asesor | Requisito de evaluación | Mantener Sprint 1 centrado en catálogo y demo reproducible. |
| P0 | Aprobación o ajuste del stack y persistencia propuestos en D13 v0.3 | Jordan + tutor | ADR actualizado con la decisión acordada antes de persistencia | Mantener desarrollo local con datos ficticios hasta confirmar restricciones. |
| P0 | Flujo real, actores y responsable de alta/publicación | FARWEST · Marketing/Ecommerce | Observación/entrevista autorizada | AS-IS sigue hipotético. |
| P0 | Ficha piloto y fuente de verdad de datos | FARWEST · responsable de catálogo/IT | Ficha anonimizada o autorización | Usar solo campos mínimos propuestos y datos ficticios. |
| P0 | Significado de “Saga” y relación con Seller Center de Falabella | Responsable de cuenta/FARWEST | Confirmación de canal/cuenta | Tratar Saga y Falabella como etiquetas no homologadas. |
| P0 | Plataforma de la Web propia | FARWEST · responsable ecommerce/IT | Plataforma y documentación | No seleccionar API/plantilla para Web. |
| P1 | Permisos y condiciones de integración/prueba | Titular de la cuenta/IT | Autorización y procedimiento aprobados | No realizar escrituras externas; usar simulación. |
| P1 | Misión, visión, organigrama, supervisores y fechas del informe | FARWEST + asesor | Brochure/datos oficiales | No completar por invención en el informe. |

## 5. Definition of Ready del Sprint 1

### Objetivo

Entregar un catálogo interno demostrable que permita buscar productos y crear/editar la ficha maestra.

### Historias incluidas

1. **US-01:** buscar por código interno o nombre, abrir coincidencias y mostrar estado vacío.
2. **US-02:** crear/editar producto con código y nombre del baseline de demo; rechazar código duplicado; volver a abrir y comprobar los cambios en el entorno elegido.

### Criterios de entrada

- [x] Alcance, historias y criterios están escritos en el Documento de análisis v1.0.
- [x] Casos CP-01–CP-05 cubren búsqueda, alta, duplicados y edición.
- [x] D13 separa componentes y estructura propuesta de las decisiones técnicas pendientes.
- [x] Se define usar datos ficticios/autorizados y no integrar canales en Sprint 1.
- [ ] Tutor/estudiante confirma el stack y el entorno autorizados.
- [ ] Se acuerda la forma de persistir datos de prueba.
- [ ] Se aclara si la evaluación exige prototipo, MVP o ambos.

Las tres confirmaciones pendientes son puerta operativa antes de codificar; no impiden cerrar el paquete documental del Hito 1.

## 6. Verificación de fuentes técnicas

La documentación oficial consultada el 7 de noviembre de 2026 describe la Seller API de Falabella como producción; la creación de productos es asíncrona y su resultado se consulta mediante feed. Ripley informa que la integración con APIs de Mirakl es opcional, requiere equipo técnico o integrador y dispone de guías de carga por plantilla. Son capacidades públicas de las plataformas, no evidencia de acceso de FARWEST. Los detalles y enlaces están en D09.

## 7. Próxima actividad

**Semana 12 · D13 v0.3:** revisar con el tutor la propuesta React/Vite, Node/Express, PostgreSQL/Prisma y desarrollo local. Aprobarla o sustituirla y actualizar el ADR antes de persistencia. Docker mantiene portable la demo; Render queda como ejemplo remoto, no como producción. La validación de campos, el proceso real y las cuentas de canal continúa en paralelo; solo se incorpora al producto después de obtener evidencia.

