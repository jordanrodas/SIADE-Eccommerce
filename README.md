# SIADE E-commerce

Proyecto de prácticas preprofesionales en FARWEST, área de Marketing y Ecommerce. Estudiante: Jordan André Rodas Panaifo (20200285).

## Estado del proyecto

El Hito 1 está consolidado como baseline documental. El plan está en semana 12 y la exposición final corresponde a la semana 16. La propuesta de tecnologías D13 v0.3 está pendiente de validación del tutor y de las políticas de FARWEST. El prototipo actual es navegable, con datos ficticios; no contiene persistencia ni integraciones de marketplaces.

## Estructura

- docs/: análisis, requisitos, arquitectura, investigación, gestión e informe parcial.
- docs/cronogramas/: cronograma Excel activo (v3).
- docs/decisiones/: registro de acuerdos y cambios de arquitectura.
- prototipo/: prototipo UI/UX independiente para revisión.
- frontend/ y backend/: espacios preparados para el cliente web y la API interna; stack pendiente de aprobación.
- prisma/ y tests/: espacios preparados para persistencia y pruebas; aún sin implementación.

## Documentos principales

- [Documento de contexto, análisis y diseño](docs/Documento_Diseno_Analisis_SIADE.md)
- [Arquitectura y propuesta tecnológica D13](docs/Arquitectura_Preliminar_y_Estructura_SIADE.md)
- [Cronograma y plan general](docs/Cronograma_y_Plan_General_SIADE.md)
- [Cronograma Excel](docs/cronogramas/Cronograma_SIADE_Hito1_v3.xlsx)
- [Acta de cierre del Hito 1](docs/Acta_Cierre_Hito1_SIADE.md)
- [Guía de validación para Sprint 1](docs/Guia_Validacion_Sprint0_SIADE.md)
- [Matriz de investigación de canales](docs/Matriz_Investigacion_Integraciones_Canales.md)
- [Borrador del informe parcial](docs/Informe_Parcial_SIADE_Borrador.docx)
- [Prototipo UI/UX](prototipo/index.html)

## Tecnologías propuestas

React + TypeScript + Vite; Node.js 24 LTS + Express 5; PostgreSQL 17 + Prisma ORM 7. Desarrollo local primero. El despliegue remoto se plantea portable con Docker; Render es un ejemplo para una demo con datos ficticios y autorización. La infraestructura de producción de FARWEST sigue pendiente de definición.

Consulta D13 antes de iniciar persistencia o despliegue. No subir claves, credenciales ni datos empresariales no autorizados.

