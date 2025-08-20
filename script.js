// Funciones principales para la página del torneo
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM cargado, verificando participantes...');
    
    // Limpiar localStorage previo para evitar conflictos
    localStorage.removeItem('selectedParticipant');
    console.log('localStorage limpiado');
    
    // Verificar si participants está disponible
    if (typeof participants !== 'undefined') {
        console.log('Array participants encontrado, total:', participants.length);
        loadParticipants();
    } else {
        console.error('Array participants no está disponible');
        // Intentar cargar después de un pequeño delay
        setTimeout(function() {
            if (typeof participants !== 'undefined') {
                console.log('Array participants encontrado en segundo intento');
                loadParticipants();
            } else {
                console.error('Array participants aún no disponible');
            }
        }, 100);
    }
    setupSmoothScrolling();
});

// Cargar y mostrar participantes
function loadParticipants() {
    console.log('Iniciando carga de participantes...');
    const participantsGrid = document.getElementById('participantsGrid');
    
    if (!participantsGrid) {
        console.error('No se encontró el elemento participantsGrid');
        return;
    }
    
    console.log('Elemento participantsGrid encontrado');
    
    participants.forEach((participant, index) => {
        console.log(`Creando tarjeta para participante ${index + 1}:`, participant.name);
        const participantCard = createParticipantCard(participant);
        participantsGrid.appendChild(participantCard);
    });
    
    console.log('Todos los participantes cargados');
    
    // Función de prueba - añadir botón temporal para testing
    addTestButton();
}

// Función de prueba temporal
// function addTestButton() {
//     const testButton = document.createElement('button');
//     testButton.textContent = 'Probar Perfil de Ash';
//     testButton.style.position = 'fixed';
//     testButton.style.top = '10px';
//     testButton.style.right = '10px';
//     testButton.style.zIndex = '9999';
//     testButton.style.padding = '10px';
//     testButton.style.backgroundColor = '#e74c3c';
//     testButton.style.color = 'white';
//     testButton.style.border = 'none';
//     testButton.style.borderRadius = '5px';
//     testButton.style.cursor = 'pointer';
    
//     testButton.onclick = function() {
//         console.log('=== BOTÓN DE PRUEBA CLICKEADO ===');
//         localStorage.setItem('selectedParticipant', '1');
//         console.log('ID guardado desde botón de prueba:', localStorage.getItem('selectedParticipant'));
//         window.location.href = 'profile.html';
//     };
    
//     document.body.appendChild(testButton);
// }

// Crear tarjeta de participante
function createParticipantCard(participant) {
    const card = document.createElement('div');
    card.className = 'participant-card';
    
    // Usar innerHTML es más simple y directo
    card.innerHTML = `
        <div class="participant-number">#${participant.number}</div>
        <img src="${participant.avatar}" alt="${participant.name}" class="participant-avatar">
        <h3 class="participant-name">${participant.name}</h3>
        <div class="participant-info">
            <div class="starter-pokemon"><img src="pokeball.png" alt="Pokeball" class="pokeball-icon"> ${participant.starterPokemon}</div>
            <div class="${participant.hasCoach ? 'has-coach' : 'no-coach'}">
                ${participant.hasCoach ? `👨‍🏫 Coach: ${participant.coachName}` : '🏆 Sin Coach'}
            </div>
        </div>
    `;
    
    // Añadir propiedades de estilo
    card.style.cursor = 'pointer';
    card.style.userSelect = 'none';
    
    // Función de click más simple y directa
    card.onclick = function(event) {
        event.preventDefault();
        event.stopPropagation();
        
        console.log('=== CLICK DETECTADO ===');
        console.log('Participante:', participant.name);
        console.log('ID:', participant.id);
        console.log('Tipo de ID:', typeof participant.id);
        
        try {
            // Método 1: localStorage
            localStorage.removeItem('selectedParticipant');
            const idString = String(participant.id);
            localStorage.setItem('selectedParticipant', idString);
            
            // Verificar localStorage
            const saved = localStorage.getItem('selectedParticipant');
            console.log('Guardado en localStorage:', saved);
            
            // Método 2: URL params como respaldo
            const profileUrl = `profile.html?id=${participant.id}&name=${encodeURIComponent(participant.name)}`;
            console.log('URL con parámetros:', profileUrl);
            
            // Navegar usando URL con parámetros
            console.log('Navegando a profile.html con parámetros...');
            window.location.href = profileUrl;
            
        } catch (error) {
            console.error('Error en el click:', error);
            alert('Error al procesar el click: ' + error.message);
        }
    };
    
    return card;
}

// Abrir perfil del participante
function openParticipantProfile(participantId) {
    console.log('Intentando abrir perfil del participante:', participantId);
    
    try {
        // Verificar que el participante existe
        const participant = participants.find(p => p.id === participantId);
        if (!participant) {
            console.error('Participante no encontrado con ID:', participantId);
            alert('Error: Participante no encontrado');
            return;
        }
        
        console.log('Participante encontrado:', participant.name);
        
        // Guardar el ID en localStorage para la página de perfil
        localStorage.setItem('selectedParticipant', participantId.toString());
        
        // Verificar que se guardó correctamente
        const savedId = localStorage.getItem('selectedParticipant');
        console.log('ID guardado en localStorage:', savedId);
        
        // Redirigir a la página de perfil
        console.log('Redirigiendo a profile.html...');
        window.location.href = 'profile.html';
        
    } catch (error) {
        console.error('Error al abrir perfil:', error);
        alert('Error al abrir el perfil del participante');
    }
}

// Configurar scroll suave para la navegación
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// Función para buscar participantes (funcionalidad adicional)
function searchParticipants(searchTerm) {
    const participantsGrid = document.getElementById('participantsGrid');
    const filteredParticipants = participants.filter(participant => 
        participant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        participant.starterPokemon.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (participant.coachName && participant.coachName.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    
    participantsGrid.innerHTML = '';
    
    filteredParticipants.forEach(participant => {
        const participantCard = createParticipantCard(participant);
        participantsGrid.appendChild(participantCard);
    });
}
