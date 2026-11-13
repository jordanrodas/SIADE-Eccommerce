# AGENTS.md

## 1. Contexto del proyecto

Este repositorio corresponde a SIADE, proyecto de prácticas preprofesionales de Jordan André Rodas Panaifo (20200285) en FARWEST, área de Marketing y Ecommerce. El nombre desarrollado en los documentos es Sistema de Integración y Automatización de Datos para E-commerce.

El proyecto debe demostrar el ciclo de vida del software y producir un MVP académico demostrable. Consulta README.md y los documentos de docs/ antes de cambiar alcance o decisiones.

## 2. Estado y fuentes de verdad

- El Hito 1 está consolidado como baseline documental; consulta docs/Acta_Cierre_Hito1_SIADE.md y docs/Documento_Diseno_Analisis_SIADE.md.
- La propuesta de arquitectura y tecnologías está en docs/Arquitectura_Preliminar_y_Estructura_SIADE.md (D13). Sigue pendiente de aprobación del tutor y de las políticas de FARWEST. No la describas como una decisión empresarial confirmada.
- Consulta docs/Cronograma_y_Plan_General_SIADE.md y docs/cronogramas/Cronograma_SIADE_Hito1_v3.xlsx para semanas, entregables y prioridades vigentes. No fijes fechas o porcentajes nuevos sin evidencia.
- El informe parcial es un borrador editable. No lo presentes como aprobado o final.
- Distingue en documentos y respuestas los hechos confirmados, propuestas, hipótesis y pendientes de validación.
- Los diagramas AS-IS describen hipótesis mientras no exista observación confirmada; TO-BE es una propuesta de diseño.

## 3. Alcance funcional

Prioriza el MVP en:

1. Catálogo maestro de productos.
2. Variantes cuando el caso las requiera.
3. Preparación de contenido por canal sin alterar los datos maestros.
4. Validación visible y resultados por canal claramente identificados como simulados mientras no exista integración autorizada.

Pedidos y reposición de stock son complementarios y se priorizan después del catálogo. Quedan fuera del alcance del MVP la logística y despacho físico, facturación o boleteo y tickets de soporte.

No declares que Web, Saga, Ripley u otro marketplace están conectados. La correspondencia entre canales, cuentas disponibles, reglas de publicación y APIs autorizadas debe validarse con evidencia y responsables de FARWEST.

## 4. Arquitectura y tecnologías

D13 recomienda, sujeto a aprobación, una aplicación web como monolito modular con responsabilidades separadas:

- Frontend propuesto: React, TypeScript y Vite.
- Backend propuesto: Node.js 24 LTS, TypeScript y Express 5.
- Persistencia propuesta: PostgreSQL 17 y Prisma ORM 7.
- Desarrollo propuesto: ejecución local y PostgreSQL mediante Docker Compose; usar datos ficticios para la demo.
- Pruebas propuestas: Vitest y Supertest; Playwright queda opcional.
- Despliegue portable opcional: imagen Docker y PostgreSQL administrado en una plataforma aprobada. Render puede ser un ejemplo académico; la infraestructura de FARWEST sigue pendiente.
- Control de versiones: Git. El uso de repositorios remotos, acciones de CI y despliegues automáticos depende de autorización.

Estas tecnologías son una propuesta, no una instrucción para instalar dependencias de inmediato. Antes de crear dependencias, migraciones, configuración de nube o contratos técnicos, revisa la aprobación más reciente del tutor y las instrucciones explícitas del usuario. Si el stack cambia, actualiza D13 y los documentos afectados.

No conviertas el proyecto en microservicios sin una necesidad validada y una decisión registrada. Las carpetas frontend/, backend/, prisma/ y tests/ están preparadas, pero no presumas que ya contienen una aplicación implementada.

## 5. APIs e integraciones

- Jordan informó que los sellers se conectan mediante API keys. Trátalo como requisito reportado, no como confirmación del mecanismo de cada marketplace.
- No inventes endpoints, formatos de cabecera, alcances de claves, contratos ni integraciones. Nunca solicites ni imprimas una API key real.
- El diseño contempla una API interna entre la interfaz y el backend; solo documenta rutas que existan realmente en el código.
- No hay que asumir que existe una especificación OpenAPI. Si posteriormente se incorpora OpenAPI, mantenla sincronizada con rutas, métodos, esquemas y respuestas implementados.
- Mantén un simulador local separado de cualquier adaptador externo. Una respuesta simulada nunca debe mostrarse como publicación real.
- Antes de implementar un conector, confirma el canal y la cuenta, documentación vigente, permisos, ambiente de prueba y responsable técnico. Registra la decisión en D13 y los documentos relacionados.

## 6. Datos y seguridad

- Usa datos ficticios o datos expresamente autorizados y, cuando sea posible, anonimizados.
- No incluyas API keys, tokens, credenciales, datos de clientes, precios internos ni información empresarial restringida en el código, ejemplos, capturas, logs, semillas o documentación. Usa el simulador y claves ficticias en el MVP.
- Una integración futura recuperará claves desde un gestor de secretos del entorno; no guardará su valor en PostgreSQL ni lo expondrá al frontend.
- No subas archivos .env ni secretos al repositorio. Mantén .env.example sin valores sensibles y respeta el .gitignore.
- Valida los datos recibidos por la aplicación. No confíes en permisos, roles o identificadores declarados por el cliente.
- No declares obligatorios los atributos de catálogo o canal hasta contar con una fuente validada.

## 7. Reglas de trabajo con el repositorio

1. Antes de cambiar código, revisa la estructura existente, README.md, este archivo y cualquier AGENTS.md más específico en el componente afectado.
2. Sigue los límites del monolito modular y reutiliza componentes o reglas existentes cuando corresponda.
3. Mantén separado el dato maestro del contenido y estado de cada canal.
4. Haz cambios pequeños relacionados con la tarea. Evita refactorizaciones generales y dependencias innecesarias.
5. No inventes nombres de tablas, campos, módulos o contratos sin revisar los documentos y el código.
6. Conserva el prototipo actual como artefacto UI/UX demostrativo; no lo describas como una aplicación con persistencia.
7. Mantén la documentación del proyecto en español, salvo que una convención técnica existente requiera otro idioma.
8. No modifiques ni publiques infraestructura de FARWEST. No hagas commit, push, publicación o despliegue salvo que el usuario lo solicite expresamente.

## 8. Verificación y comunicación

- Comprueba los cambios relevantes según lo que solicite el usuario y el estado real del proyecto.
- No afirmes que una prueba, compilación, integración o despliegue se ejecutó si no se ejecutó.
- Al finalizar, resume los archivos modificados, las verificaciones realizadas y las decisiones que continúan pendientes.
- No agregues pruebas ni ejecutes suites de pruebas salvo que el usuario lo pida o las instrucciones de la tarea lo requieran.
- Si una decisión técnica bloquea el trabajo, explica qué dato falta y continúa con tareas independientes que no dependan de esa decisión.

## 9. Instrucciones por componente

Cada componente puede contener su propio AGENTS.md con reglas más específicas. Revísalo antes de modificar ese componente. Las instrucciones específicas complementan este archivo; si una regla técnica contradice el alcance o el estado de aprobación descrito aquí, conserva la distinción y registra la decisión antes de cambiar arquitectura.
