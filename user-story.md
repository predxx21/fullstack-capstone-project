# Historias de Usuario - FullStack Capstone Project

## Formato de Historia de Usuario
**Como** [tipo de usuario]  
**Quiero** [realizar una acción]  
**Para** [obtener un beneficio]

## Detalles y Suposiciones
- **Detalles:** Información adicional sobre el contexto de la historia
- **Suposiciones:** Condiciones que se asumen como verdaderas para esta historia

## Criterios de Aceptación (Formato Gherkin)
- **Dado** [contexto inicial]
- **Cuando** [acción que realiza el usuario]
- **Entonces** [resultado esperado]

---

## Historias de Usuario

### Historia 1: Visualizar Catálogo
**Como** usuario visitante  
**Quiero** ver todos los regalos disponibles  
**Para** explorar las opciones de regalo

**Detalles y Suposiciones:**
- **Detalles:** El catálogo debe cargarse de manera eficiente mostrando productos destacados
- **Suposiciones:** El usuario tiene conexión a internet estable

**Criterios de Aceptación:**
- **Dado** que soy un usuario visitante en la página principal
- **Cuando** accedo a la sección de catálogo
- **Entonces** veo una cuadrícula con todos los regalos disponibles

- **Dado** que estoy viendo el catálogo de regalos
- **Cuando** se carga la página
- **Entonces** cada regalo muestra su imagen, nombre y precio

- **Dado** que hay más de 12 regalos disponibles
- **Cuando** veo la página principal del catálogo
- **Entonces** solo se muestran 12 regalos y aparece la paginación

### Historia 2: Ver Detalles de Regalo
**Como** usuario interesado  
**Quiero** hacer clic en un regalo para ver sus detalles  
**Para** obtener más información antes de decidir

**Detalles y Suposiciones:**
- **Detalles:** La página de detalles debe cargar toda la información del producto
- **Suposiciones:** El producto seleccionado existe en la base de datos

**Criterios de Aceptación:**
- **Dado** que estoy viendo el catálogo de regalos
- **Cuando** hago clic en la imagen o nombre de un regalo
- **Entonces** soy redirigido a la página de detalles del producto

- **Dado** que estoy en la página de detalles de un regalo
- **Cuando** la página termina de cargar
- **Entonces** veo la descripción completa del producto

- **Dado** que el producto tiene múltiples imágenes
- **Cuando** veo la página de detalles
- **Entonces** puedo ver todas las imágenes disponibles en una galería

### Historia 3: Buscar Regalos
**Como** usuario  
**Quiero** buscar regalos por categoría  
**Para** encontrar rápidamente lo que necesito

**Detalles y Suposiciones:**
- **Detalles:** La búsqueda debe ser intuitiva y rápida
- **Suposiciones:** El usuario conoce la categoría que busca

**Criterios de Aceptación:**
- **Dado** que estoy en cualquier página de la aplicación
- **Cuando** veo la barra de navegación
- **Entonces** encuentro una barra de búsqueda visible

- **Dado** que he seleccionado una categoría o escrito un término de búsqueda
- **Cuando** ejecuto la búsqueda
- **Entonces** los resultados se filtran y actualizan inmediatamente

- **Dado** que no hay resultados que coincidan con mi búsqueda
- **Cuando** veo la página de resultados
- **Entonces** veo un mensaje claro indicando que no se encontraron productos

### Historia 4: Registro de Usuario
**Como** visitante  
**Quiero** crear una cuenta  
**Para** guardar mis regalos favoritos

**Detalles y Suposiciones:**
- **Detalles:** El registro debe ser seguro y validar todos los campos
- **Suposiciones:** El usuario proporciona información válida y real

**Criterios de Aceptación:**
- **Dado** que soy un visitante sin cuenta
- **Cuando** accedo al formulario de registro
- **Entonces** veo campos para nombre, email y contraseña

- **Dado** que estoy completando el formulario de registro
- **Cuando** intento enviar el formulario con campos vacíos
- **Entonces** veo mensajes de error indicando los campos requeridos

- **Dado** que he completado todos los campos correctamente
- **Cuando** envío el formulario de registro
- **Entonces** recibo un email de confirmación y puedo iniciar sesión

### Historia 5: Inicio de Sesión
**Como** usuario registrado  
**Quiero** iniciar sesión en mi cuenta  
**Para** acceder a mis funciones personalizadas

**Detalles y Suposiciones:**
- **Detalles:** El proceso de login debe ser seguro y rápido
- **Suposiciones:** El usuario ya tiene una cuenta creada

**Criterios de Aceptación:**
- **Dado** que soy un usuario registrado
- **Cuando** accedo a la página de login
- **Entonces** veo un formulario con campos para email y contraseña

- **Dado** que ingreso credenciales incorrectas
- **Cuando** intento iniciar sesión
- **Entonces** veo un mensaje de error indicando que las credenciales son inválidas

- **Dado** que ingreso credenciales correctas
- **Cuando** inicio sesión exitosamente
- **Entonces** soy redirigido a mi página de perfil o dashboard

### Historia 6: Perfil de Usuario
**Como** usuario autenticado  
**Quiero** ver y editar mi perfil  
**Para** mantener mi información actualizada

**Detalles y Suposiciones:**
- **Detalles:** El perfil debe mostrar la información actual del usuario
- **Suposiciones:** El usuario ha iniciado sesión previamente

**Criterios de Aceptación:**
- **Dado** que he iniciado sesión en mi cuenta
- **Cuando** accedo a la sección "Mi Perfil"
- **Entonces** veo mi información personal (nombre, email, etc.)

- **Dado** que estoy en mi página de perfil
- **Cuando** hago clic en "Editar Perfil"
- **Entonces** veo un formulario con mis datos actuales para modificar

- **Dado** que he modificado mi información
- **Cuando** guardo los cambios exitosamente
- **Entonces** veo un mensaje de confirmación y mis datos se actualizan

### Historia 7: Búsqueda Avanzada
**Como** usuario  
**Quiero** filtrar regalos por múltiples categorías  
**Para** encontrar opciones más específicas

**Detalles y Suposiciones:**
- **Detalles:** Los filtros deben ser combinables y fáciles de usar
- **Suposiciones:** Existen productos en diferentes categorías y rangos de precio

**Criterios de Aceptación:**
- **Dado** que estoy en la página de búsqueda
- **Cuando** veo las opciones de filtrado
- **Entonces** puedo filtrar por precio, categoría y popularidad

- **Dado** que aplico uno o múltiples filtros
- **Cuando** los filtros se activan
- **Entonces** los resultados se actualizan dinámicamente sin recargar la página

- **Dado** que he aplicado varios filtros
- **Cuando** quiero empezar una nueva búsqueda
- **Entonces** puedo hacer clic en "Limpiar filtros" para reiniciar

### Historia 8: Favoritos
**Como** usuario autenticado  
**Quiero** marcar regalos como favoritos  
**Para** guardarlos para más tarde

**Detalles y Suposiciones:**
- **Detalles:** Los favoritos deben persistir entre sesiones
- **Suposiciones:** El usuario está autenticado en el sistema

**Criterios de Aceptación:**
- **Dado** que estoy viendo cualquier producto
- **Cuando** paso el cursor sobre el producto
- **Entonces** veo un botón de corazón o "Agregar a favoritos"

- **Dado** que tengo productos marcados como favoritos
- **Cuando** accedo a la página "Mis Favoritos"
- **Entonces** veo todos los productos que he guardado

- **Dado** que marco productos como favoritos y cierro sesión
- **Cuando** vuelvo a iniciar sesión más tarde
- **Entonces** mis productos favoritos aún están guardados en mi lista

### Historia 9: Recomendaciones
**Como** usuario  
**Quiero** ver recomendaciones personalizadas  
**Para** descubrir nuevos regalos

**Detalles y Suposiciones:**
- **Detalles:** Las recomendaciones se basan en el comportamiento del usuario
- **Suposiciones:** El usuario ha interactuado con algunos productos

**Criterios de Aceptación:**
- **Dado** que he visto o comprado algunos productos
- **Cuando** vuelvo a la página principal
- **Entonces** veo una sección "Recomendaciones para ti"

- **Dado** que estoy viendo los detalles de un producto
- **Cuando** bajo en la página
- **Entonces** veo una sección "Productos similares"

- **Dado** que interactúo regularmente con la plataforma
- **Cuando** paso el tiempo
- **Entonces** las recomendaciones se actualizan basadas en mis nuevas interacciones

### Historia 10: Catálogo Administrativo (Icebox)
**Como** administrador  
**Quiero** gestionar el catálogo de productos  
**Para** mantener la tienda actualizada

**Detalles y Suposiciones:**
- **Detalles:** Solo usuarios con rol de administrador pueden acceder
- **Suposiciones:** Existe un sistema de roles de usuario implementado

**Criterios de Aceptación:**
- **Dado** que soy un usuario con rol de administrador
- **Cuando** inicio sesión en el sistema
- **Entonces** veo un enlace al "Panel de Administración"

- **Dado** que estoy en el panel de administración
- **Cuando** selecciono la opción de productos
- **Entonces** puedo crear, leer, actualizar y eliminar productos

- **Dado** que estoy creando o editando un producto
- **Cuando** completo el formulario
- **Entonces** puedo subir una o múltiples imágenes del producto

### Historia 11: Deuda Técnica
**Como** desarrollador  
**Quiero** implementar pruebas unitarias  
**Para** asegurar la calidad del código

**Detalles y Suposiciones:**
- **Detalles:** Las pruebas deben cubrir las funcionalidades críticas
- **Suposiciones:** El equipo tiene experiencia con el framework de pruebas

**Criterios de Aceptación:**
- **Dado** que el proyecto tiene componentes de React
- **Cuando** ejecuto el comando de pruebas
- **Entonces** todos los componentes principales tienen pruebas que pasan exitosamente

- **Dado** que el backend tiene rutas API
- **Cuando** ejecuto la suite de pruebas
- **Entonces** todas las rutas API tienen pruebas que verifican su funcionamiento

- **Dado** que ejecuto el reporte de cobertura
- **Cuando** reviso los resultados
- **Entonces** la cobertura mínima del código es al menos 70%

---

## Historial de Versiones
| Versión | Fecha | Autor | Cambios |
|---------|-------|-------|---------|
| 1.0 | 2024-01-15 | Equipo | Versión inicial del documento |
| 1.1 | 2024-01-22 | Equipo | Actualización con feedback: agregados Detalles y Suposiciones, criterios en formato Gherkin |
