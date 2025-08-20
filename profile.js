// JavaScript para la página de perfil del participante
document.addEventListener('DOMContentLoaded', function() {
    console.log('Profile.js: DOM cargado');
    loadParticipantProfile();
    setupSmoothScrolling();
});

// Cargar el perfil del participante seleccionado
function loadParticipantProfile() {
    console.log('Profile.js: Cargando perfil del participante...');
    
    // Método 1: Intentar obtener de localStorage
    let participantId = localStorage.getItem('selectedParticipant');
    console.log('Profile.js: ID desde localStorage:', participantId);
    
    // Método 2: Si no hay en localStorage, intentar desde URL params
    if (!participantId || participantId === 'null' || participantId === 'undefined') {
        const urlParams = new URLSearchParams(window.location.search);
        participantId = urlParams.get('id');
        console.log('Profile.js: ID desde URL params:', participantId);
    }
    
    if (!participantId || participantId === 'null' || participantId === 'undefined') {
        console.log('Profile.js: No hay participante seleccionado válido, redirigiendo...');
        alert('No se ha seleccionado ningún participante. Redirigiendo a la página principal.');
        window.location.href = 'index.html';
        return;
    }
    
    // Verificar si participants está disponible
    if (typeof participants === 'undefined') {
        console.error('Profile.js: Array participants no está disponible');
        alert('Error: No se pueden cargar los datos de los participantes');
        return;
    }
    
    console.log('Profile.js: Total de participantes disponibles:', participants.length);
    console.log('Profile.js: Buscando participante con ID:', participantId);
    
    // Convertir a número para la búsqueda
    const idNumber = parseInt(participantId, 10);
    console.log('Profile.js: ID convertido a número:', idNumber);
    
    // Buscar con ambos tipos (string y number) para mayor compatibilidad
    const participant = participants.find(p => p.id == participantId || p.id == idNumber);
    
    if (!participant) {
        console.error('Profile.js: Participante no encontrado');
        console.log('Profile.js: IDs disponibles:', participants.map(p => p.id));
        alert('Participante no encontrado. Redirigiendo a la página principal.');
        window.location.href = 'index.html';
        return;
    }
    
    console.log('Profile.js: Participante encontrado:', participant.name);
    
    try {
        renderProfileHeader(participant);
        renderProfileMainInfo(participant);
        renderProfileSidebar(participant);
        renderParticipationHistory(participant);
        
        if (participant.hasCoach) {
            renderCoachInfo(participant);
        }
        
        // Actualizar el título de la página
        document.title = `${participant.name} - INACUP FRONTI3R`;
        
        console.log('Profile.js: Perfil cargado exitosamente');
        
    } catch (error) {
        console.error('Profile.js: Error al renderizar el perfil:', error);
        alert('Error al cargar el perfil del participante');
    }
}

// Renderizar el encabezado del perfil
function renderProfileHeader(participant) {
    const profileHeader = document.getElementById('profileHeader');
    
    profileHeader.innerHTML = `
        <img src="${participant.avatar}" alt="${participant.name}" class="profile-avatar">
        <div class="profile-basic-info">
            <div class="participant-number-badge">#${participant.number}</div>
            <h1>${participant.name}</h1>
            <div class="starter-info"><img src="pokeball.png" alt="Pokeball" class="pokeball-icon"> Pokémon Inicial: ${participant.starterPokemon}</div>
            <div class="coach-status">
                ${participant.hasCoach ? `👨‍🏫 Entrenado por: ${participant.coachName}` : '🏆 Entrenador Independiente'}
            </div>
        </div>
    `;
}

// Renderizar la información principal del perfil
function renderProfileMainInfo(participant) {
    const profileMainInfo = document.getElementById('profileMainInfo');
    
    profileMainInfo.innerHTML = `
        <h2>Sobre ${participant.name}</h2>
        <div class="profile-bio">
            ${participant.bio}
        </div>
    `;
}

// Renderizar la barra lateral del perfil
function renderProfileSidebar(participant) {
    const profileSidebar = document.getElementById('profileSidebar');
    
    const socialMediaHtml = generateSocialMediaLinks(participant.socialMedia);
    
    profileSidebar.innerHTML = `
        <div class="sidebar-card">
            <h3><img src="pokeball.png" alt="Pokeball" class="pokeball-icon"> Pokémon Inicial</h3>
            <div class="starter-showcase">
                <div class="starter-pokemon-image">
                    <img src="${participant.pokemonImage ? (participant.pokemonImage.includes('/') ? participant.pokemonImage : 'imagenes/pokemon/' + participant.pokemonImage) : 'imagenes/pokemon/default.svg'}" 
                         alt="${participant.starterPokemon}" 
                         class="pokemon-starter-img"
                         onerror="this.src='imagenes/pokemon/default.svg'">
                </div>
                <div class="starter-name">${participant.starterPokemon}</div>
                <div class="starter-description">Pokemon Inicial de ${participant.name}</div>
            </div>
        </div>
        
        <div class="sidebar-card">
            <h3>📱 Redes Sociales</h3>
            <div class="social-links">
                ${socialMediaHtml}
            </div>
        </div>
    `;
}

// Generar enlaces de redes sociales
function generateSocialMediaLinks(socialMedia) {
    let html = '';
    
    if (socialMedia.twitter) {
        html += `
            <a href="https://x.com/${socialMedia.twitter.replace('@', '')}" target="_blank" class="social-link">
                <div class="social-icon twitter">X</div>
                <span>${socialMedia.twitter}</span>
            </a>
        `;
    }
    
    if (socialMedia.instagram) {
        html += `
            <a href="https://instagram.com/${socialMedia.instagram.replace('@', '')}" target="_blank" class="social-link">
                <div class="social-icon instagram">I</div>
                <span>${socialMedia.instagram}</span>
            </a>
        `;
    }
    
    if (socialMedia.youtube) {
        html += `
            <a href="https://youtube.com/${socialMedia.youtube}" target="_blank" class="social-link">
                <div class="social-icon youtube">Y</div>
                <span>${socialMedia.youtube}</span>
            </a>
        `;
    }
    
    if (socialMedia.twitch) {
        html += `
            <a href="https://twitch.tv/${socialMedia.twitch}" target="_blank" class="social-link">
                <div class="social-icon twitch">T</div>
                <span>${socialMedia.twitch}</span>
            </a>
        `;
    }

    if (socialMedia.kick) {
        html += `
            <a href="https://kick.com/${socialMedia.kick}" target="_blank" class="social-link">
                <div class="social-icon kick">K</div>
                <span>${socialMedia.kick}</span>
            </a>
        `;
    }
    
    return html || '<p>No hay redes sociales disponibles</p>';
}

// Renderizar el historial de participaciones
function renderParticipationHistory(participant) {
    const historyGrid = document.getElementById('historyGrid');
    
    let historyHtml = '';
    
    participant.previousParticipations.forEach(participation => {
        const resultClass = getResultClass(participation.result);
        
        historyHtml += `
            <div class="history-card">
                <h3>${participation.edition}</h3>
                <div class="history-result ${resultClass}">
                    ${participation.result}
                </div>
            </div>
        `;
    });
    
    historyGrid.innerHTML = historyHtml;
}

// Obtener la clase CSS según el resultado
function getResultClass(result) {
    if (result.toLowerCase().includes('campeón')) return 'result-champion';
    if (result.toLowerCase().includes('finalista')) return 'result-finalist';
    if (result.toLowerCase().includes('semifinalista')) return 'result-semifinalist';
    if (result.toLowerCase().includes('no participó')) return 'result-no-participation';
    return 'result-other';
}

// Renderizar información del coach
function renderCoachInfo(participant) {
    if (!participant.hasCoach || !participant.coachInfo) {
        return;
    }
    
    const coachSection = document.querySelector('.coach-section');
    const coachInfo = document.getElementById('coachInfo');
    
    const coachSocialMediaHtml = generateSocialMediaLinks(participant.coachInfo.socialMedia);
    
    // Obtener la foto del coach, o usar una por defecto si no tiene
    const coachAvatar = participant.coachInfo.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face';
    
    coachInfo.innerHTML = `
        <div class="coach-details">
            <div class="coach-header">
                <img src="${coachAvatar}" alt="${participant.coachName}" class="coach-avatar">
                <div class="coach-info-text">
                    <h3>👨‍🏫 ${participant.coachName}</h3>
                    <div class="coach-bio">
                        ${participant.coachInfo.bio}
                    </div>
                </div>
            </div>
            <h4>📱 Redes Sociales del Coach</h4>
            <div class="social-links">
                ${coachSocialMediaHtml}
            </div>
        </div>
    `;
    
    coachSection.style.display = 'block';
}

// Configurar scroll suave
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

// Agregar estilos adicionales dinámicamente
function addDynamicStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .starter-showcase {
            text-align: center;
            padding: 20px;
        }
        
        .starter-name {
            font-size: 1.5rem;
            font-weight: bold;
            color: var(--accent-color);
            margin-bottom: 10px;
        }
        
        .starter-description {
            color: rgba(255, 255, 255, 0.8);
            font-style: italic;
        }
        
        .coach-header {
            display: flex;
            align-items: center;
            gap: 20px;
            margin-bottom: 20px;
        }
        
        .coach-avatar {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            border: 3px solid var(--accent-color);
            object-fit: cover;
        }
        
        .coach-info-text {
            flex: 1;
        }
        
        .coach-achievement {
            background: rgba(247, 226, 122, 0.1);
            padding: 20px;
            border-radius: 15px;
            border: 1px solid var(--accent-color);
        }
        
        .coach-achievement h4 {
            color: var(--accent-color);
            margin-bottom: 10px;
        }
    `;
    document.head.appendChild(style);
}

// Ejecutar estilos adicionales
addDynamicStyles();
