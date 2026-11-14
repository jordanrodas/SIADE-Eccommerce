# SIADE E-commerce

Proyecto de prácticas preprofesionales en FARWEST, área de Marketing y Ecommerce. El Hito 1 es el baseline documental. La arquitectura actualizada sigue siendo una propuesta pendiente de aprobación del tutor y de políticas de FARWEST.

## Arquitectura propuesta

Monolito modular con React + TypeScript, Python + Django REST Framework y PostgreSQL. No hay microservicios ni integraciones de marketplace implementadas. La cola de tareas, secretos e infraestructura siguen pendientes.

Roles modelados: dos administrativos (CRUD de productos maestros e historial de movimientos) y una vendedora (pedidos, cambios de estado permitidos y etiquetas disponibles por canal).

## Estructura

- `backend/`: layout propuesto para el proyecto Django y módulos de dominio/integración.
- `frontend/`: layout propuesto para la aplicación React + TypeScript.
- `docs/`: análisis, requisitos, arquitectura, investigación, gestión e informe parcial.
- `docs/cronogramas/`: cronograma activo.
- `prototipo/`: prototipo UI/UX demostrativo, sin persistencia ni llamadas externas.
- `tests/`: estrategia/ubicación futura de pruebas; no hay suites implementadas.

`prisma/` se retiró porque Prisma pertenecía a la propuesta anterior de persistencia Node.js y no corresponde al stack Django ORM propuesto.

## Documentos principales

- [Diseño y análisis](docs/Documento_Diseno_Analisis_SIADE.md)
- [Propuesta arquitectónica D13](docs/Arquitectura_Preliminar_y_Estructura_SIADE.md)
- [Actualización de stack y usuarios](docs/D13_Actualizacion_Stack_y_Usuarios.md)
- [Arquitectura C4](docs/Arquitectura_C4_SIADE.md)
- [Cronograma y plan](docs/Cronograma_y_Plan_General_SIADE.md)
- [Matriz de investigación de canales](docs/Matriz_Investigacion_Integraciones_Canales.md)
- [Prototipo UI/UX](prototipo/index.html)

## Estado

La reorganización alinea la estructura preparada con el monolito modular propuesto. Backend, frontend y persistencia aún no contienen una aplicación implementada. Falabella, Ripley y WooCommerce no están conectados. Mercado Libre es una integración futura.