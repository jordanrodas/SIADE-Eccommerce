# Cronograma y plan general de SIADE

**Proyecto:** FARWEST · Marketing y Ecommerce  
**Estudiante:** Jordan André Rodas Panaifo · **Código:** 20200285  
**Corte del plan:** semana 12 · 12 de noviembre de 2026; exposición final en semana 16.  
**Horizonte del plan:** semanas 5–16. Inicio reconstruido para la semana 5: 21/09/2026; cierre de semana 16: 12/12/2026 (confirmar el día de exposición con el calendario de EPIS).  
**Cronograma Excel (Hito 1 y propuesta tecnológica D13 v0.3):** `outputs/01a1aea8-f642-7e20-a3ce-6ed27c60cec6/Cronograma_SIADE_Hito1_v3.xlsx`.

## Cómo leer este cronograma

Se organiza la ruta completa desde la semana 5. Por indicación del estudiante, el trabajo de las semanas 5–10 se considera **objetivamente avanzado**. Las estimaciones D01–D12 se conservaron del corte de semana 11; D13 v0.3 se estima en 85% como propuesta escrita, pendiente de aprobación. Los porcentajes describen madurez documental, no aprobación de FARWEST, entrevistas/observaciones confirmadas ni integraciones reales. El libro Excel incluye el detalle por actividad y fecha.

## Cronograma académico de semana 5 a semana 16

| Semana | Etapa / iteración | Trabajo planificado | Producto o evidencia esperada | Avance del artefacto al corte del 12/11/2026 |
|---|---|---|---|---|
| **5** | Inicio y contexto | Definir problema, objetivo, alcance inicial y necesidad de centralizar datos del producto para varios canales. | D01 · Documento de contexto, secciones 1–3. | **85%** · Borrador disponible; validar datos y alcance con FARWEST. |
| **6** | Empatizar / levantamiento | Sintetizar actores y mapear el proceso actual como hipótesis de trabajo; elaborar contexto. | D02/D06 · AS-IS provisional y diagrama de contexto. | **80%** · Diagramas disponibles; pasos reales del proceso pendientes de observación/confirmación. |
| **7** | Análisis de requisitos | Identificar datos, variantes, requisitos funcionales/no funcionales y reglas. | D03 · Requisitos y reglas, secciones 4–6. | **85%** · Borrador disponible; revisión funcional pendiente. |
| **8** | Síntesis de proceso y alcance | Priorizar catálogo/publicación; definir exclusiones, TO-BE e historias de usuario. | D02/D04 · TO-BE y Product Backlog, secciones 7–8. | **85%** · Propuesta disponible; validar con tutor/usuario. |
| **9** | Diseño funcional | Modelar producto/variantes y diseñar ficha, contenido por canal y revisión. | D05/D07 · Modelo conceptual y prototipo navegable. | **80%** · Artefactos disponibles; prueba de usuario y campos por validar. |
| **10** | Viabilidad e ideación arquitectónica | Comparar mecanismos por canal; registrar alternativas, riesgos y límites de arquitectura. | D09/D13 · Matriz de canales y arquitectura lógica preliminar. | **80%** investigación; arquitectura propuesta sin stack, base de datos ni conector aprobados. |
| **11** | Cierre acelerado de diseño | Consolidar requisitos, procesos, modelo, arquitectura lógica, backlog, prototipo, aceptación e informe parcial. | D01–D09/D13 v0.1 · Paquete H1 y guía Sprint 0. | **100%** baseline documental H1; **70%** casos iniciales; **35%** informe parcial. Pruebas no ejecutadas. |
| **12 · puerta técnica** | Propuesta de arquitectura antes del código | D13 v0.3 propone React/TypeScript/Vite, Node.js 24/Express 5, PostgreSQL 17/Prisma 7, desarrollo local y una nube opcional para demo. Tutor debe aprobar el stack; FARWEST define autorización de datos/nube. | D13 v0.3 · propuesta y ADR preparados; decisiones por aprobar. | **85%** del artefacto técnico redactado; aprobación pendiente. |
| **12 · Sprint 1** | Catálogo central | Después de validar la propuesta técnica, implementar listado, búsqueda, alta y edición. Usar prototipo/datos ficticios mientras se confirman permisos. | D10 · Incremento de catálogo y ficha maestra. | **0% · No se declara código iniciado sin evidencia.** |
| **13** | Sprint 2 — variantes y datos por canal | Incorporar variantes y mantener contenido por destino separado del maestro. | D10 · Incremento de variantes y contenido por canal. | **0% · Planificado.** |
| **14** | Sprint 3 — validación y preparación | Aplicar reglas, errores accionables, resumen previo y estados independientes. Integrar solo con permisos/documentación verificados; de lo contrario, simulación explícita. | D10/D11 · Flujo de preparación y validación. | **0% · Planificado; conectores reales no confirmados.** |
| **15** | Pruebas, aceptación y cierre | Ejecutar casos, corregir defectos críticos, cerrar guía/informe y ensayar demo. | D08/D11/D12 · Resultados, documentación y respaldo. | **0% · Planificado.** |
| **16** | Exposición final | Presentar problema, proceso, decisiones, MVP, pruebas, resultados y limitaciones. | D12 · Exposición y demostración reproducible. | **0% · Hito fijo; fecha de presentación por confirmar dentro de la semana.** |

## Hitos y criterios de salida

| Hito | Debe estar listo para | Criterio de salida |
|---|---|---|
| H1 · Baseline documental y arquitectura lógica preliminar | Semana 11 · **100% cerrado** | D01–D09 y D13 v0.1 consolidados como diseño lógico. En semana 12, D13 v0.3 añade una recomendación concreta de stack, todavía pendiente de aprobación antes de implementar persistencia. |
| H2 · MVP de catálogo y preparación multicanal | Cierre de semana 14 · 0%, planificado | Flujo demostrable con datos autorizados o ficticios; distinguir integración real y simulación. |
| H3 · Aceptación y exposición | Semana 15 para preparar; semana 16 para presentar · 0%, planificado | Pruebas con resultados; materiales listos; demo y respaldo ensayados. |

## Alcance del producto para proteger el plazo

**Camino crítico:** catálogo, ficha maestra, variantes, contenido independiente por canal, validación, resumen, estados y una demostración local o salida autorizada. Los datos de la demostración deben ser ficticios o estar autorizados.

**No bloquean la exposición:** pedidos, stock/replenishment inteligente, historial avanzado y conectores externos no autorizados.

**Exclusiones acordadas:** despacho físico, facturación/boleteo y tickets de soporte.

## Método de ejecución

- **Design Thinking:** entrevistar/observar, definir problema, idear, prototipar y validar en semanas 5–10; continuar refinando según comentarios.
- **Scrum:** usar el backlog y objetivos cortos; revisiones frecuentes con tutor/usuario; ajustar el alcance del Sprint a la capacidad real.
- **Ritmo de recuperación:** de semana 11 a semana 16, revisar avance una vez por semana, recortar extras antes de mover hitos del camino crítico y llegar a semana 15 con demo ensayada.

## Registro histórico que debe completarse para el informe

Los porcentajes D01–D12 son estimaciones del corte de semana 11, de acuerdo con la indicación del estudiante de tratar el trabajo previo como objetivamente avanzado. D13 v0.3 corresponde a la propuesta técnica preparada en semana 12 y requiere aprobación. Para el informe, completar fechas/horas y evidencias institucionales que falten; no atribuir entrevistas, aprobaciones o integraciones sin respaldo. El periodo del informe parcial debe confirmarse con el asesor; la plantilla consultada cita semanas 2–7.

| Semana | Actividad realmente ejecutada | Evidencia/archivo | Duración planeada y real | Avance real (%) | Riesgo o incidencia |
|---|---|---|---|---:|---|
| 5 | [Confirmar] | [ ] | [ ] | [ ] | [ ] |
| 6 | [Confirmar] | [ ] | [ ] | [ ] | [ ] |
| 7 | [Confirmar] | [ ] | [ ] | [ ] | [ ] |
| 8 | [Confirmar] | [ ] | [ ] | [ ] | [ ] |
| 9 | [Confirmar] | [ ] | [ ] | [ ] | [ ] |
| 10 | [Confirmar] | [ ] | [ ] | [ ] | [ ] |
| 11 | Borradores de diseño y organización del siguiente paso disponibles; contrastar quién hizo cada actividad y en qué fecha. | Paquete Entregables_SIADE | [ ] | [ ] | Validación con usuario/asesor pendiente. |

## Condiciones para iniciar el Sprint 1

1. Tutor confirma si la evaluación requiere maqueta, MVP ejecutable o ambos.
2. Usuario de Marketing/Ecommerce valida datos mínimos de una ficha y el flujo actual.
3. Se confirma tecnología/entorno permitidos y cómo persistir datos de prueba.
4. El primer Sprint tiene historias pequeñas y criterios de aceptación claros.
5. Las integraciones se mantienen desacopladas hasta confirmar canal, cuenta, permisos y documentación aplicables.
