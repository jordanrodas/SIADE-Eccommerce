# Integraciones externas

Contratos y adaptadores de marketplace viven dentro del backend. Mantenerlos aislados de reglas de catálogo; separar autenticación, transporte, serialización y mapeo por canal. El simulador no debe llamar a internet. No guardar secretos en base de datos, frontend, código o logs.