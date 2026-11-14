# AGENTS.md

## Contexto y fuente de verdad

SIADE es el proyecto de prácticas preprofesionales en FARWEST, Marketing y Ecommerce. El Hito 1 es el baseline documental. La arquitectura vigente propuesta se describe en `docs/Arquitectura_C4_SIADE.md` y `docs/D13_Actualizacion_Stack_y_Usuarios.md`; ambas siguen sujetas a aprobación del tutor y políticas de FARWEST. El D13 histórico conserva decisiones previas y debe leerse junto con su actualización.

Distingue hechos informados, propuestas e hipótesis. No declares aprobaciones empresariales ni integraciones reales sin evidencia. Antes de cambiar el alcance, revisa `docs/Documento_Diseno_Analisis_SIADE.md`, `docs/Acta_Cierre_Hito1_SIADE.md` y los documentos de arquitectura actualizados.

## Arquitectura vigente propuesta

- Monolito modular, sin microservicios.
- Frontend: React + TypeScript.
- Backend/API: Python + Django REST Framework.
- Persistencia: PostgreSQL.
- Adaptadores aislados para Falabella Seller Center, Ripley/Mirakl y WooCommerce; Mercado Libre es futuro.
- La cola de tareas, el gestor de secretos, infraestructura y despliegue siguen pendientes.
- El simulador local debe mantenerse separado de los adaptadores externos. No implementar conexiones reales sin canal/cuenta, autorización, ambiente y permisos validados.

## Usuarios y alcance actualizado

- Dos usuarios administrativos: CRUD de productos maestros y consulta del historial de movimientos.
- Una vendedora: consulta pedidos, cambia estados permitidos por el canal y obtiene etiquetas que las plataformas seller generen.
- MVP: catálogo maestro/variantes, mapeos, publicaciones y seguimiento; además, pedidos/estados/etiquetas requeridos por la vendedora según capacidades verificadas.
- Sincronización avanzada de stock queda posterior. No incluir despacho físico, facturación/boleteo ni tickets de soporte sin cambio de alcance aprobado.

## Organización del monolito

El backend se organiza por aplicaciones de dominio: identidad/permisos, cuentas de canal, catálogo, mapeos, publicaciones, pedidos, etiquetas, auditoría e integraciones. Los adaptadores cumplen contratos internos pequeños. Los casos de uso dependen de interfaces, no de implementaciones de marketplace.

Aplicar SOLID sin sobrearquitectura: responsabilidad única; extensión por adaptadores; contratos sustituibles; interfaces segregadas por capacidad; inversión de dependencias. Los estados remotos son resultado de comandos validados, no CRUD arbitrario.

## Datos y seguridad

- Usar datos ficticios o expresamente autorizados y anonimizados.
- Nunca solicitar, imprimir o almacenar API keys/tokens en código, repositorio, docs, capturas o logs.
- Credenciales externas: referencia protegida, obtenida desde gestor de secretos una vez que el entorno aprobado esté definido; no guardar secretos en PostgreSQL ni enviarlos al navegador.
- Autorización validada en backend por rol; ocultar controles de UI no sustituye autorización.
- Archivar un producto local no elimina automáticamente el producto remoto. Preservar pedidos, movimientos e historial de publicaciones.
- No inventar endpoints, formatos o límites. Citar documentación primaria y etiquetar lo pendiente.

## Trabajo en el repositorio

- Mantener la documentación en español y los límites del monolito modular.
- No agregar dependencias, migraciones, configuración de nube, integraciones o código de producto hasta que el usuario/tutor autorice iniciar implementación y se validen requisitos.
- No modificar infraestructura de FARWEST. No hacer commit, push, publicar o desplegar salvo solicitud explícita.
- Conservar el prototipo UI/UX como demostración: sus datos y acciones son ficticios; no tiene persistencia ni conexión real.
- No ejecutar ni agregar pruebas salvo que se solicite o las instrucciones de la tarea lo requieran.
- Al reportar, listar archivos tocados, verificaciones realmente realizadas y pendientes.