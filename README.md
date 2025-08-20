# INA Cup Frontier - Torneo de Pokémon

Página web oficial del torneo de Pokémon INA Cup Frontier, un emocionante torneo que reúne a 32 participantes en una épica competencia.

## 🎯 Características

- **32 Participantes**: Visualización completa de todos los participantes del torneo
- **Perfiles Detallados**: Páginas individuales para cada participante con información personal
- **Sistema de Coaches**: Algunos participantes cuentan con mentores experimentados
- **Historial de Participaciones**: Seguimiento de resultados en ediciones anteriores
- **Redes Sociales**: Enlaces a perfiles sociales de participantes y coaches
- **Diseño Responsivo**: Optimizado para todos los dispositivos

## 📁 Estructura del Proyecto

```
InaCupFinal/
├── index.html              # Página principal con lista de participantes
├── profile.html             # Página de perfil individual
├── rules.html               # Reglas del torneo e historia
├── styles.css               # Estilos principales
├── profile.css              # Estilos específicos para perfiles
├── script.js                # JavaScript principal
├── profile.js               # JavaScript para perfiles
├── participants.js          # Base de datos de participantes
├── INACUP-FRONTIER-LOGO2.png # Logo del torneo
└── README.md               # Este archivo
```

## 🚀 Funcionalidades Principales

### Página Principal (index.html)
- Lista de los 32 participantes en formato de tarjetas
- Información básica: nombre, foto, Pokémon inicial, coach
- Navegación suave entre secciones
- Diseño atractivo con temática Pokémon

### Página de Perfil (profile.html)
- Información detallada del participante
- Historial de participaciones en ediciones anteriores
- Pokémon inicial y descripción
- Redes sociales del participante
- Información del coach (si aplica)
- Redes sociales del coach

### Página de Reglas (rules.html)
- Reglas completas del torneo
- Formato de combate y restricciones
- Historia del torneo por ediciones
- Timeline visual de la evolución del torneo

## 🎮 Participantes

El torneo cuenta con 32 participantes, incluyendo:

- **Participantes Destacados**: Ash Ketchum, Gary Oak, Misty, Brock, May, Paul
- **Coaches Experimentados**: Algunos participantes cuentan con mentores
- **Diversidad de Estilos**: Diferentes especializaciones y estrategias
- **Pokémon Iniciales Variados**: Representación de todas las generaciones

## 📱 Características Técnicas

### Tecnologías Utilizadas
- **HTML5**: Estructura semántica
- **CSS3**: Diseño moderno con gradientes y animaciones
- **JavaScript**: Interactividad y navegación dinámica
- **Google Fonts**: Tipografías Orbitron y Roboto
- **LocalStorage**: Persistencia de datos entre páginas

### Características de Diseño
- **Responsivo**: Adaptable a todos los tamaños de pantalla
- **Tema Oscuro**: Colores inspirados en la temática gaming
- **Animaciones**: Transiciones suaves y efectos hover
- **Gradientes**: Efectos visuales atractivos
- **Iconografía**: Emojis y símbolos temáticos

## 🛠️ Configuración

1. **Descarga**: Clona o descarga todos los archivos
2. **Servidor Local**: Coloca los archivos en tu servidor web (XAMPP, WAMP, etc.)
3. **Navegación**: Abre `index.html` en tu navegador
4. **Logo**: Asegúrate de que `INACUP-FRONTIER-LOGO2.png` esté en la raíz

## 🎨 Personalización

### Agregar Nuevos Participantes
Edita el archivo `participants.js` y agrega nuevos objetos al array:

```javascript
{
    id: 33,
    name: "Nuevo Participante",
    avatar: "URL_de_la_imagen",
    starterPokemon: "Pokémon_inicial",
    hasCoach: true/false,
    coachName: "Nombre del Coach",
    bio: "Descripción del participante",
    // ... más propiedades
}
```

### Modificar Estilos
- **Colores**: Edita las variables CSS en `:root` en `styles.css`
- **Fuentes**: Cambia las importaciones de Google Fonts
- **Layouts**: Modifica las propiedades grid en las secciones correspondientes

## 🏆 Ediciones del Torneo

- **1ª Edición (2023)**: 16 participantes - Campeón: Gary Oak
- **2ª Edición (2024)**: 24 participantes - Introducción del sistema de coaches
- **3ª Edición (2025)**: 32 participantes - INA Cup Frontier (actual)

## 📄 Licencia

Este proyecto es para fines educativos y de entretenimiento. Pokémon es una marca registrada de Nintendo/Creatures Inc./GAME FREAK inc.

---

¡Que comience la aventura en la INA Cup Frontier! 🔥⚡🌊
