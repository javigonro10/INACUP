// Base de datos de participantes del torneo
const participants = [
    {
        id: 1,
        number: 1,
        name: "Nuk3sito",
        avatar: "imagenes/nuk3sito.jpg",
        starterPokemon: "Horsea",
        pokemonImage: "imagenes/horsea.png",
        hasCoach: true,
        coachName: "Jano Pkm",
        bio: "Streamer profesional en hacerse pasar por colombiano, creador de la mítica Inacup. No baila salsa, pero te baila cualquier combate de Pokémon.",
        previousParticipations: [
            { edition: "1ª Edición", result: "Primera Ronda" },
            { edition: "2ª Edición", result: "Ronda Preliminar" }
        ],
        socialMedia: {
            twitter: "@NK3sito",
            instagram: "@NK3sito",
            twitch: "nuk3sito"
        },
        coachInfo: {
            bio: "Intenta tirar del carro a Nuk3 pero no pasa de primera ronda.",
            avatar: "imagenes/jano.jpg",
            socialMedia: {
                twitter: "@JanoPkm",
                // instagram: "@JanoPkm"
            }
        }
    },
    {
        id: 2,
        number: 2,
        name: "Nadex",
        avatar: "imagenes/nadex.png",
        starterPokemon: "Chikorita",
        pokemonImage: "imagenes/chikorita.png",
        hasCoach: true,
        coachName: "Kalise",
        bio: "Un entrenador apasionado de Pueblo Paleta con el sueño de convertirse en Maestro Pokémon.",
        previousParticipations: [
            { edition: "1ª Edición", result: "No participo" },
            { edition: "2ª Edición", result: "No participo" }
        ],
        socialMedia: {
            twitter: "@Nadex06",
            youtube: "Nadex__06"
        },
        coachInfo: {
            bio: "Reconocido investigador Pokémon y mentor de nuevos entrenadores.",
            avatar: "imagenes/kalise1.jpg",
            socialMedia: {
                twitter: "@kalise148",
                twitch: "kalise"
            }
        }
    },
    {
        id: 3,
        number: 3,
        name: "Jiven",
        avatar: "imagenes/jiven.jpg",
        starterPokemon: "Charmander",
        pokemonImage: "imagenes/charmander.png",
        hasCoach: false,
        coachName: "Flannery",
        bio: "Ex-líder de gimnasio de Ciudad Plateada, ahora dedicado a la cría Pokémon.",
        previousParticipations: [
            { edition: "1ª Edición", result: "No participo" },
            { edition: "2ª Edición", result: "Cuartos de final" }
        ],
        socialMedia: {
            twitter: "@JivenMN",
            twitch: "jivenmn",
            youtube : "@ElJiven"

        },
        coachInfo: {
            bio: "Líder de gimnasio de tipo Fuego con gran experiencia en combates.",
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
            socialMedia: {
                twitter: "@FlanneryFire",
                instagram: "@lavaridge_gym"
            }
        }
    },
    {
        id: 4,
        number: 4,
        name: "EzConde",
        avatar: "imagenes/conde.jpg",
        starterPokemon: "Aron",
        pokemonImage: "imagenes/aron.png",
        hasCoach: false,
        bio: "Investigador Pokémon y rival de la infancia de Ash, nieto del Profesor Oak.",
        previousParticipations: [
            { edition: "1ª Edición", result: "Ronda Preliminar" },
            { edition: "2ª Edición", result: "Primera Ronda" }
        ],
        socialMedia: {
            twitter: "@ezconde_",
            instagram: "@ezconde._/",
            kick: "ezconde",
        }
    },
    {
        id: 5,
        number: 5,
        name: "18Dmon",
        avatar: "imagenes/18dmon.jpg",
        starterPokemon: "Sin Datos",
        hasCoach: false,
        coachName: "Coordinador Drew",
        bio: "Coordinadora Pokémon de Hoenn con un estilo de combate elegante y estratégico.",
        previousParticipations: [
            { edition: "1ª Edición", result: "No participó" },
            { edition: "2ª Edición", result: "No participó" }
        ],
        socialMedia: {
            twitch: "18dmon",
            twitter: "@18DMON"
        },
        coachInfo: {
            bio: "Coordinador experto especializado en combates elegantes y estratégicos.",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
            socialMedia: {
                twitch: "18dmon",
                twitter: "@18DMON"
            }
        }
    },
    {
        id: 6,
        number: 6,
        name: "Truji",
        avatar: "imagenes/truji.jpg",
        starterPokemon: "Porygon",
        pokemonImage: "imagenes/porygon.png",
        hasCoach: true,
        coachName: "Pablitinho",
        bio: "El Kebab Verdiblanco 🌯💚⚪Fanático del Real Betis Balompié y devorador profesional de kebabs, este participante juega cada combate como si fuera un derbi en el Villamarín: con garra, fe y, por supuesto, salsa picante. 🔥Dicen que su equipo Pokémon se alimenta igual que él: a base de durum mixto con extra de patatas. Cuando sus rivales piensan que lo tienen contra las cuerdas, siempre aparece ese grito de guerra: “¡Manquepierda!” y da la vuelta al combate como buen bético de corazón.Si ves que tarda en hacer su turno, tranquilo… no está calculando daño, está pensando si pide con o sin queso. 🥙⚡",
        previousParticipations: [
            { edition: "1ª Edición", result: "Primera Ronda (Coach)" },
            { edition: "2ª Edición", result: "Primera Ronda" }
        ],
        socialMedia: {
            twitter: "@pixatrujillo",
            youtube: "@P1xatrujillo"
        },
        coachInfo: {
            bio: "Gallego, fanatico de los digimon , yugioh y fan del arsenal desde la cuna. El tambien devora pero no Kebabs",
            avatar:"imagenes/pablitinho.jpg",
            socialMedia: {
                twitter: "@Pablitinho17",
                youtube: "@Pablitinho",
                twitch: "pablitinho17"
            }
        }
    },
        {
        id: 7,
        number: 7,
        name: "Gota",
        avatar: "imagenes/gota.jpg",
        starterPokemon: "Blaziken",
        hasCoach: false,
        coachName: "Coordinador Drew",
        bio: "Coordinadora Pokémon de Hoenn con un estilo de combate elegante y estratégico.",
        previousParticipations: [
            { edition: "1ª Edición", result: "Primera Ronda" },
            { edition: "2ª Edición", result: "Ronda Preliminar" }
        ],
        socialMedia: {
            twitter: "@LaGotaaa",
            twitch: "gota_stc",
            youtube: "@gota_stc",

        },
        coachInfo: {
            bio: "Coordinador experto especializado en combates elegantes y estratégicos.",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
            socialMedia: {
                twitter: "@DrewCoordinator",
                instagram: "@drew_contests"
            }
        }
    },
    {
        id: 8,
        number: 8,
        name: "DaniSan/SolEleven",
        avatar: "imagenes/gota.jpg",
        starterPokemon: "Blaziken",
        hasCoach: true,
        coachName: "PanaGK",
        bio: "Coordinadora Pokémon de Hoenn con un estilo de combate elegante y estratégico.",
        previousParticipations: [
            { edition: "1ª Edición", result: "No participó" },
            { edition: "2ª Edición", result: "Primera Ronda" }
        ],
        socialMedia: {
            twitter: "@SolEleven10",
        },
        coachInfo: {
            bio: "Coordinador experto especializado en combates elegantes y estratégicos.",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
            socialMedia: {
                twitter: "@PanaGRK",
            }
        }
    },
    {
        id: 9,
        number: 9,
        name: "ToniGamer",
        avatar: "imagenes/toni.jpg",
        starterPokemon: "Blaziken",
        hasCoach: false,
        coachName: "PanaGK",
        bio: "Coordinadora Pokémon de Hoenn con un estilo de combate elegante y estratégico.",
        previousParticipations: [
            { edition: "1ª Edición", result: "No participó" },
            { edition: "2ª Edición", result: "No participó" }
        ],
        socialMedia: {
            twitter: "@MayCoordinator",
            instagram: "@hoenn_coordinator_may"
        },
        coachInfo: {
            bio: "Coordinador experto especializado en combates elegantes y estratégicos.",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
            socialMedia: {
                twitter: "@DrewCoordinator",
                instagram: "@drew_contests"
            }
        }
    },
    {
        id: 10,
        number: 10,
        name: "AxelRider44",
        avatar: "imagenes/axel_ryder.png",
        starterPokemon: "Blaziken",
        hasCoach: false,
        coachName: "PanaGK",
        bio: "Coordinadora Pokémon de Hoenn con un estilo de combate elegante y estratégico.",
        previousParticipations: [
            { edition: "1ª Edición", result: "No participó" },
            { edition: "2ª Edición", result: "Octavos de Final" }
        ],
        socialMedia: {
            twitter: "@MayCoordinator",
            instagram: "@hoenn_coordinator_may"
        },
        coachInfo: {
            bio: "Coordinador experto especializado en combates elegantes y estratégicos.",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
            socialMedia: {
                twitter: "@DrewCoordinator",
                instagram: "@drew_contests"
            }
        }
    },
    {
        id: 11,
        number: 11,
        name: "ShinbuxD",
        avatar: "imagenes/shinbu.jpg",
        starterPokemon: "Blaziken",
        hasCoach: false,
        coachName: "PanaGK",
        bio: "Coordinadora Pokémon de Hoenn con un estilo de combate elegante y estratégico.",
        previousParticipations: [
            { edition: "1ª Edición", result: "No participó" },
            { edition: "2ª Edición", result: "No participó" }
        ],
        socialMedia: {
            twitter: "@MayCoordinator",
            instagram: "@hoenn_coordinator_may"
        },
        coachInfo: {
            bio: "Coordinador experto especializado en combates elegantes y estratégicos.",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
            socialMedia: {
                twitter: "@DrewCoordinator",
                instagram: "@drew_contests"
            }
        }
    },
    {
        id: 12,
        number: 12,
        name: "Gandares",
        avatar: "imagenes/gandares.jpeg",
        starterPokemon: "Poliwag",
        hasCoach: true,
        coachName: "Yurkeh1",
        bio: "Coordinadora Pokémon de Hoenn con un estilo de combate elegante y estratégico.",
        previousParticipations: [
            { edition: "1ª Edición", result: "Primera Ronda" },
            { edition: "2ª Edición", result: "Semifinales" }
        ],
        socialMedia: {
            twitter: "@MayCoordinator",
            instagram: "@hoenn_coordinator_may"
        },
        coachInfo: {
            bio: "Coordinador experto especializado en combates elegantes y estratégicos.",
            avatar: "imagenes/yurkeh.jpg",
            socialMedia: {
                twitter: "@yurkeh1",
            }
        }
    },
    {
        id: 13,
        number: 13,
        name: "DokkanPedro",
        avatar: "imagenes/dokkan.jpg",
        starterPokemon: "Blaziken",
        hasCoach: true,
        coachName: "Jaime Pedregal",
        bio: "Coordinadora Pokémon de Hoenn con un estilo de combate elegante y estratégico.",
        previousParticipations: [
            { edition: "1ª Edición", result: "No participó" },
            { edition: "2ª Edición", result: "No participó" }
        ],
        socialMedia: {
            twitter: "@MayCoordinator",
            instagram: "@hoenn_coordinator_may"
        },
        coachInfo: {
            bio: "Coordinador experto especializado en combates elegantes y estratégicos.",
            avatar: "imagenes/jaime.jpg",
            socialMedia: {
                twitter: "@DrewCoordinator",
                instagram: "@drew_contests"
            }
        }
    },
    {
        id: 14,
        number: 14,
        name: "Andresmxrtinez",
        avatar: "imagenes/Andresmxrtinez.jpg",
        starterPokemon: "No Sabemos",
        hasCoach: false,
        coachName: "Jaime Pedregal",
        bio: "Coordinadora Pokémon de Hoenn con un estilo de combate elegante y estratégico.",
        previousParticipations: [
            { edition: "1ª Edición", result: "No participó" },
            { edition: "2ª Edición", result: "No participó" }
        ],
        socialMedia: {
            twitter: "@MayCoordinator",
            instagram: "@hoenn_coordinator_may"
        },
        coachInfo: {
            bio: "Coordinador experto especializado en combates elegantes y estratégicos.",
            avatar: "imagenes/jaime.jpg",
            socialMedia: {
                twitter: "@DrewCoordinator",
                instagram: "@drew_contests"
            }
        }
    },
    {
        id: 15,
        number: 15,
        name: "Gonrured",
        avatar: "imagenes/axel_Sevilla.jpg",
        starterPokemon: "Starly",
        pokemonImage: "starly.png",
        hasCoach: true,
        coachName: "RaulcanXd",
        bio: "Coordinadora Pokémon de Hoenn con un estilo de combate elegante y estratégico.",
        previousParticipations: [
            { edition: "1ª Edición", result: "Finalista" },
            { edition: "2ª Edición", result: "Octavos de final" }
        ],
        socialMedia: {
            twitter: "@gonrured03",
            twitch: "Gonrured",
            youtube:"@Thegonrured",
        },
        coachInfo: {
            bio: "Coordinador experto especializado en combates elegantes y estratégicos.",
            avatar: "imagenes/infernape.PNG",
            socialMedia: {
                twitter: "@DrewCoordinator",
                instagram: "@drew_contests"
            }
        }
    },
    {
        id: 16,
        number: 16,
        name: "RocketPunto",
        avatar: "imagenes/rocket.jpg",
        starterPokemon: "No Sabemos",
        hasCoach: true,
        coachName: "FlyingPizza",
        bio: "Coordinadora Pokémon de Hoenn con un estilo de combate elegante y estratégico.",
        previousParticipations: [
            { edition: "1ª Edición", result: "Cuartos de Final" },
            { edition: "2ª Edición", result: "Cuartos de Final" }
        ],
        socialMedia: {
            twitter: "@MayCoordinator",
            instagram: "@hoenn_coordinator_may"
        },
        coachInfo: {
            bio: "Coordinador experto especializado en combates elegantes y estratégicos.",
            avatar: "imagenes/pizza.jpeg",
            socialMedia: {
                twitter: "@DrewCoordinator",
                instagram: "@drew_contests"
            }
        }
    },
    {
        id: 17,
        number: 17,
        name: "Ferrio21",
        avatar: "imagenes/ferrio.jpg",
        starterPokemon: "No Sabemos",
        hasCoach: true,
        coachName: "Hunt",
        bio: "Coordinadora Pokémon de Hoenn con un estilo de combate elegante y estratégico.",
        previousParticipations: [
            { edition: "1ª Edición", result: "Cuartos de Final" },
            { edition: "2ª Edición", result: "Cuartos de Final" }
        ],
        socialMedia: {
            twitter: "@MayCoordinator",
            instagram: "@hoenn_coordinator_may"
        },
        coachInfo: {
            bio: "Coordinador experto especializado en combates elegantes y estratégicos.",
            avatar: "imagenes/hunt.jpeg",
            socialMedia: {
                twitter: "@DrewCoordinator",
                instagram: "@drew_contests"
            }
        }
    },
    {
        id: 18,
        number: 18,
        name: "NeoGod",
        avatar: "imagenes/neogod.jpg",
        starterPokemon: "No Sabemos",
        hasCoach: true,
        coachName: "AddoVk",
        bio: "Coordinadora Pokémon de Hoenn con un estilo de combate elegante y estratégico.",
        previousParticipations: [
            { edition: "1ª Edición", result: "Ronda Preliminar" },
            { edition: "2ª Edición", result: "Primera Ronda" }
        ],
        socialMedia: {
            twitter: "@MayCoordinator",
            instagram: "@hoenn_coordinator_may"
        },
        coachInfo: {
            bio: "Coordinador experto especializado en combates elegantes y estratégicos.",
            avatar: "imagenes/addo.jpg",
            socialMedia: {
                twitter: "@DrewCoordinator",
                instagram: "@drew_contests"
            }
        }
    },
    {
        id: 19,
        number: 19,
        name: "Deysh",
        avatar: "imagenes/deysh.jpg",
        starterPokemon: "No Sabemos",
        hasCoach: true,
        coachName: "Darren13",
        bio: "Coordinadora Pokémon de Hoenn con un estilo de combate elegante y estratégico.",
        previousParticipations: [
            { edition: "1ª Edición", result: "Ronda Preliminar" },
            { edition: "2ª Edición", result: "Primera Ronda" }
        ],
        socialMedia: {
            twitter: "@MayCoordinator",
            instagram: "@hoenn_coordinator_may"
        },
        coachInfo: {
            bio: "Coordinador experto especializado en combates elegantes y estratégicos.",
            avatar: "imagenes/darren.jpg",
            socialMedia: {
                twitter: "@DrewCoordinator",
                instagram: "@drew_contests"
            }
        }
    },
    {
        id: 20,
        number: 20,
        name: "Shheyla",
        avatar: "imagenes/sheyla.jpg",
        starterPokemon: "No Sabemos",
        hasCoach: true,
        coachName: "SebasTorrado",
        bio: "Coordinadora Pokémon de Hoenn con un estilo de combate elegante y estratégico.",
        previousParticipations: [
            { edition: "1ª Edición", result: "No participo" },
            { edition: "2ª Edición", result: "No participo" }
        ],
        socialMedia: {
            twitter: "@MayCoordinator",
            instagram: "@hoenn_coordinator_may"
        },
        coachInfo: {
            bio: "Coordinador experto especializado en combates elegantes y estratégicos.",
            avatar: "imagenes/sebas.jpg",
            socialMedia: {
                twitter: "@DrewCoordinator",
                instagram: "@drew_contests"
            }
        }
    },
    {
        id: 21,
        number: 21,
        name: "Yuu",
        avatar: "imagenes/yuu.jpg",
        starterPokemon: "No Sabemos",
        hasCoach: false,
        coachName: "SebasTorrado",
        bio: "Coordinadora Pokémon de Hoenn con un estilo de combate elegante y estratégico.",
        previousParticipations: [
            { edition: "1ª Edición", result: "No participo" },
            { edition: "2ª Edición", result: "Primera Ronda" }
        ],
        socialMedia: {
            twitter: "@MayCoordinator",
            instagram: "@hoenn_coordinator_may"
        },
        coachInfo: {
            bio: "Coordinador experto especializado en combates elegantes y estratégicos.",
            avatar: "imagenes/sebas.jpg",
            socialMedia: {
                twitter: "@DrewCoordinator",
                instagram: "@drew_contests"
            }
        }
    },
    {
        id: 22,
        number: 22,
        name: "Mancha",
        avatar: "imagenes/mancha.jpg",
        starterPokemon: "No Sabemos",
        hasCoach: true,
        coachName: "Diyeru",
        bio: "Coordinadora Pokémon de Hoenn con un estilo de combate elegante y estratégico.",
        previousParticipations: [
            { edition: "1ª Edición", result: "Ronda Preliminar" },
            { edition: "2ª Edición", result: "Primera Ronda" }
        ],
        socialMedia: {
            twitter: "@MayCoordinator",
            instagram: "@hoenn_coordinator_may"
        },
        coachInfo: {
            bio: "Coordinador experto especializado en combates elegantes y estratégicos.",
            avatar: "imagenes/Diyeridú.jpeg",
            socialMedia: {
                twitter: "@DrewCoordinator",
                instagram: "@drew_contests"
            }
        }
    },
    {
        id: 23,
        number: 23,
        name: "Urko",
        avatar: "imagenes/urko.png",
        starterPokemon: "No Sabemos",
        hasCoach: true,
        coachName: "Javiaarelas",
        bio: "Coordinadora Pokémon de Hoenn con un estilo de combate elegante y estratégico.",
        previousParticipations: [
            { edition: "1ª Edición", result: "No participo" },
            { edition: "2ª Edición", result: "No participo" }
        ],
        socialMedia: {
            twitter: "@MayCoordinator",
            instagram: "@hoenn_coordinator_may"
        },
        coachInfo: {
            bio: "Coordinador experto especializado en combates elegantes y estratégicos.",
            avatar: "imagenes/javiaarela.jpg",
            socialMedia: {
                twitter: "@DrewCoordinator",
                instagram: "@drew_contests"
            }
        }
    },
    {
        id: 24,
        number: 24,
        name: "CharlyAsekas",
        avatar: "imagenes/charly.jpg",
        starterPokemon: "No Sabemos",
        hasCoach: false,
        coachName: "Javiaarelas",
        bio: "Coordinadora Pokémon de Hoenn con un estilo de combate elegante y estratégico.",
        previousParticipations: [
            { edition: "1ª Edición", result: "No participo" },
            { edition: "2ª Edición", result: "Ronda Preliminar" }
        ],
        socialMedia: {
            twitter: "@MayCoordinator",
            instagram: "@hoenn_coordinator_may"
        },
        coachInfo: {
            bio: "Coordinador experto especializado en combates elegantes y estratégicos.",
            avatar: "imagenes/javiaarela.jpg",
            socialMedia: {
                twitter: "@DrewCoordinator",
                instagram: "@drew_contests"
            }
        }
    },
    {
        id: 25,
        number: 25,
        name: "AsceroBlack",
        avatar: "imagenes/ascero.jpg",
        starterPokemon: "No Sabemos",
        hasCoach: false,
        coachName: "Javiaarelas",
        bio: "Coordinadora Pokémon de Hoenn con un estilo de combate elegante y estratégico.",
        previousParticipations: [
            { edition: "1ª Edición", result: "No participo" },
            { edition: "2ª Edición", result: "No participo" }
        ],
        socialMedia: {
            twitter: "@MayCoordinator",
            instagram: "@hoenn_coordinator_may"
        },
        coachInfo: {
            bio: "Coordinador experto especializado en combates elegantes y estratégicos.",
            avatar: "imagenes/javiaarela.jpg",
            socialMedia: {
                twitter: "@DrewCoordinator",
                instagram: "@drew_contests"
            }
        }
    },
    {
        id: 26,
        number: 26,
        name: "77Daxx",
        avatar: "imagenes/dax.jpg",
        starterPokemon: "No Sabemos",
        hasCoach: false,
        coachName: "Javiaarelas",
        bio: "Coordinadora Pokémon de Hoenn con un estilo de combate elegante y estratégico.",
        previousParticipations: [
            { edition: "1ª Edición", result: "No participo" },
            { edition: "2ª Edición", result: "No participo" }
        ],
        socialMedia: {
            twitter: "@MayCoordinator",
            instagram: "@hoenn_coordinator_may"
        },
        coachInfo: {
            bio: "Coordinador experto especializado en combates elegantes y estratégicos.",
            avatar: "imagenes/javiaarela.jpg",
            socialMedia: {
                twitter: "@DrewCoordinator",
                instagram: "@drew_contests"
            }
        }
    },
    {
        id: 27,
        number: 27,
        name: "Bopeh",
        avatar: "imagenes/bopeh.png",
        starterPokemon: "No Sabemos",
        hasCoach: true,
        coachName: "Andrejandromagno",
        bio: "Coordinadora Pokémon de Hoenn con un estilo de combate elegante y estratégico.",
        previousParticipations: [
            { edition: "1ª Edición", result: "No se paso el juego" },
            { edition: "2ª Edición", result: "Cuartos de Final" }
        ],
        socialMedia: {
            twitter: "@MayCoordinator",
            instagram: "@hoenn_coordinator_may"
        },
        coachInfo: {
            bio: "Coordinador experto especializado en combates elegantes y estratégicos.",
            avatar: "imagenes/andrejandro.avif",
            socialMedia: {
                twitter: "@DrewCoordinator",
                instagram: "@drew_contests"
            }
        }
    },
     {
        id: 28,
        number: 28,
        name: "Erninsky22",
        avatar: "imagenes/Erninsky22.jpg",
        starterPokemon: "No Sabemos",
        hasCoach: false,
        coachName: "Andrejandromagno",
        bio: "Coordinadora Pokémon de Hoenn con un estilo de combate elegante y estratégico.",
        previousParticipations: [
            { edition: "1ª Edición", result: "Ronda Previa" },
            { edition: "2ª Edición", result: "Primera Ronda" }
        ],
        socialMedia: {
            twitter: "@MayCoordinator",
            instagram: "@hoenn_coordinator_may"
        },
        coachInfo: {
            bio: "Coordinador experto especializado en combates elegantes y estratégicos.",
            avatar: "imagenes/andrejandro.avif",
            socialMedia: {
                twitter: "@DrewCoordinator",
                instagram: "@drew_contests"
            }
        }
    },
    {
        id: 29,
        number: 29,
        name: "RaiDamant",
        avatar: "imagenes/rai.jpg",
        starterPokemon: "No Sabemos",
        hasCoach: true,
        coachName: "Feygar",
        bio: "Coordinadora Pokémon de Hoenn con un estilo de combate elegante y estratégico.",
        previousParticipations: [
            { edition: "1ª Edición", result: "Ronda Previa" },
            { edition: "2ª Edición", result: "Primera Ronda" }
        ],
        socialMedia: {
            twitter: "@MayCoordinator",
            instagram: "@hoenn_coordinator_may"
        },
        coachInfo: {
            bio: "Coordinador experto especializado en combates elegantes y estratégicos.",
            avatar: "imagenes/fey.jpg",
            socialMedia: {
                twitter: "@DrewCoordinator",
                instagram: "@drew_contests"
            }
        }
    },
    {
        id: 30,
        number: 30,
        name: "Nazan",
        avatar: "imagenes/nazan.jpg",
        starterPokemon: "No Sabemos",
        hasCoach: false,
        coachName: "Feygar",
        bio: "Coordinadora Pokémon de Hoenn con un estilo de combate elegante y estratégico.",
        previousParticipations: [
            { edition: "1ª Edición", result: "Ganador" },
            { edition: "2ª Edición", result: "Finalista" }
        ],
        socialMedia: {
            twitter: "@MayCoordinator",
            instagram: "@hoenn_coordinator_may"
        },
        coachInfo: {
            bio: "Coordinador experto especializado en combates elegantes y estratégicos.",
            avatar: "imagenes/fey.jpg",
            socialMedia: {
                twitter: "@DrewCoordinator",
                instagram: "@drew_contests"
            }
        }
    },
    {
        id: 31,
        number: 31,
        name: "NotMary_05",
        avatar: "imagenes/mary.jpg",
        starterPokemon: "No Sabemos",
        hasCoach: true,
        coachName: "SoyNakah",
        bio: "Coordinadora Pokémon de Hoenn con un estilo de combate elegante y estratégico.",
        previousParticipations: [
            { edition: "1ª Edición", result: "No participó" },
            { edition: "2ª Edición", result: "Primera Ronda" }
        ],
        socialMedia: {
            twitter: "@NotMary_05",
            instagram: "@hoenn_coordinator_may"
        },
        coachInfo: {
            bio: "Coordinador experto especializado en combates elegantes y estratégicos.",
            avatar: "imagenes/naka.jpg",
            socialMedia: {
                twitter: "@SoyNakah",
                // instagram: "@drew_contests"
            }
        }
    },
    {
        id: 32,
        number: 32,
        name: "Neicho",
        avatar: "imagenes/neicho.jpg",
        starterPokemon: "No Sabemos",
        hasCoach: false,
        coachName: "SoyNakah",
        bio: "Coordinadora Pokémon de Hoenn con un estilo de combate elegante y estratégico.",
        previousParticipations: [
            { edition: "1ª Edición", result: "Octavos de final" },
            { edition: "2ª Edición", result: "Primera Ronda" }
        ],
        socialMedia: {
            twitter: "@NotMary_05",
            instagram: "@hoenn_coordinator_may"
        },
        coachInfo: {
            bio: "Coordinador experto especializado en combates elegantes y estratégicos.",
            avatar: "imagenes/naka.jpg",
            socialMedia: {
                twitter: "@SoyNakah",
                // instagram: "@drew_contests"
            }
        }
    },
    
];

// Generar participantes adicionales para completar 32
// function generateAdditionalParticipants() {
//     const additionalNames = [
//         "Dawn Berlitz", "Iris Dragon", "Cilan Verde", "Serena Yvonne", "Clemont Citron",
//         "Bonnie Eureka", "Lillie Aether", "Gladion", "Hau Malasada", "Goh Sakuragi",
//         "Chloe Cerise", "Leon Champion", "Raihan Dragon", "Bea Fighter", "Allister Ghost",
//         "Marnie Dark", "Hop Wooloo", "Sonia Research", "Nessa Water", "Kabu Fire",
//         "Opal Fairy", "Gordie Rock", "Melony Ice", "Piers Dark", "Rose Chairman", "Oleana Secretary"
//     ];

//     const starters = [
//         "Charizard", "Venusaur", "Blastoise", "Meganium", "Typhlosion", "Feraligatr",
//         "Sceptile", "Blaziken", "Swampert", "Torterra", "Infernape", "Empoleon",
//         "Serperior", "Emboar", "Samurott", "Chesnaught", "Delphox", "Greninja",
//         "Decidueye", "Incineroar", "Primarina", "Rillaboom", "Cinderace", "Inteleon"
//     ];

//     const avatarUrls = [
//         "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
//         "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
//         "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=150&h=150&fit=crop&crop=face",
//         "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=150&h=150&fit=crop&crop=face",
//         "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face"
//     ];

//     const coachAvatarUrls = [
//         "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
//         "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
//         "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face",
//         "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
//         "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
//         "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face",
//         "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face",
//         "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face"
//     ];

//     for (let i = 0; i < 26; i++) {
//         const hasCoach = Math.random() > 0.6; // 40% probabilidad de tener coach
//         participants.push({
//             id: 7 + i,
//             number: 7 + i,
//             name: additionalNames[i] || `Entrenador ${7 + i}`,
//             avatar: avatarUrls[i % avatarUrls.length],
//             starterPokemon: starters[i % starters.length],
//             hasCoach: hasCoach,
//             coachName: hasCoach ? `Coach ${String.fromCharCode(65 + i)}` : null,
//             bio: `Entrenador dedicado con pasión por los Pokémon y los combates estratégicos.`,
//             previousParticipations: [
//                 { edition: "1ª Edición", result: Math.random() > 0.5 ? "Primera ronda" : "No participó" },
//                 { edition: "2ª Edición", result: Math.random() > 0.3 ? "Octavos de final" : "Primera ronda" }
//             ],
//             socialMedia: {
//                 twitter: `@trainer${7 + i}`,
//                 instagram: `@pokemon_trainer_${7 + i}`
//             },
//             coachInfo: hasCoach ? {
//                 bio: `Entrenador experimentado especializado en estrategias avanzadas.`,
//                 avatar: coachAvatarUrls[i % coachAvatarUrls.length],
//                 socialMedia: {
//                     twitter: `@coach${String.fromCharCode(65 + i)}`,
//                     instagram: `@coach_${String.fromCharCode(65 + i).toLowerCase()}`
//                 }
//             } : null
//         });
//     }
// }

// Generar participantes adicionales
generateAdditionalParticipants();
