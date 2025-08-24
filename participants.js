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
        bio: "Este tío tiene a 1000 personas cada día en directo y no sabe que el tipo volador es débil frente al hielo, me dice que si sale votado mata a su starter en el primer gym",
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
        avatar: "imagenes/18Dmon.jpg",
        starterPokemon: "Lotoad",
        pokemonImage: "imagenes/lotoad.png",
        hasCoach: false,
        coachName: "Coordinador Drew",
        bio: "El verdadero egoísta en todo esto, a esta inacup viene solo y con una aura inmensa, pregúntale a Neicho que paso en el retiro cuando se enfrento a Torcor",
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
        starterPokemon: "Dratini",
        pokemonImage: "imagenes/dratini.png",
        hasCoach: false,
        coachName: "Coordinador Drew",
        bio: "Este tío te firma whipear en el primer gym y encima se gasta las potas pa hacerse un RomCola, dice el joven thano que el pesao es bueno para de decirle noseguicosa... JEMS...",
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
        name: "PanaGRK/SolEleven",
        avatar: "imagenes/pana.jpg",
        starterPokemon: "Bulbasur",
        pokemonImage: "imagenes/bulbasur.png",
        hasCoach: true,
        coachName: "Dani-San",
        bio: "Petronio, Patrimonio y el Swinger de Dani-san dos personas jugando la aventura y aun así en la anterior perdieron en primera es ilegal frontear así en españa?",
        previousParticipations: [
            { edition: "1ª Edición", result: "No participó" },
            { edition: "2ª Edición", result: "Primera Ronda" }
        ],
        socialMedia: {
            twitter: "@SolEleven10",
        },
        coachInfo: {
            bio: "Son dos personas las que les tienen que hacer caso , y solo da show, la tercera rueda de esta pareja tan especial",
            avatar: "imagenes/dan.jpg",
            socialMedia: {
                twitter: "@InazumaXFifa",
            }
        }
    },
    {
        id: 9,
        number: 9,
        name: "ToniGamer",
        avatar: "imagenes/toni.jpg",
        starterPokemon: "Mudkip",
        pokemonImage: "imagenes/mudkip.png",
        hasCoach: true,
        coachName: "Froxstor",
        bio: "ToniGamer, Medussier, Goalkeeper, pero sobretodo un jugon de manual, si alguno lo necesitais, pedirle un mcflurry de kitkat que eso se le da especialmente bien",
        previousParticipations: [
            { edition: "1ª Edición", result: "No participó" },
            { edition: "2ª Edición", result: "No participó" }
        ],
        socialMedia: {
            twitter: "@ToniGamer2004",
            youtube: "@tonig4mer_243",
            twitch: "tonigamer_24"
        },
        coachInfo: {
            bio: "El Nazarí de los Pokémon ⚪🔴 Fan del Granada CF, entrena con la misma pasión que siente por el Nuevo Los Cármenes. Sus estrategias son tan impredecibles como los resultados del Granada.",
            avatar: "imagenes/froxstor.jpg",
            socialMedia: {
                twitter: "@Frosto_Lock",
            }
        }
    },
    {
        id: 10,
        number: 10,
        name: "AxelRider44",
        avatar: "imagenes/axel_ryder.png",
        starterPokemon: "Ralts",
        pokemonImage: "imagenes/ralts.png",
        hasCoach: false,
        coachName: "PanaGK",
        bio: "Los expertos le llaman 'Yostin La Marrassh', los sabios conocen su huella digital y los listos prefieren no toprase con él, cuidado con este tío lo digo enserio... MIRU",
        previousParticipations: [
            { edition: "1ª Edición", result: "No participó" },
            { edition: "2ª Edición", result: "Octavos de Final" }
        ],
        socialMedia: {
            twitter: "@AxelRider44",
            twitch: "axelrider44"
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
        starterPokemon: "Elekid",
        pokemonImage: "imagenes/elekid.png",
        hasCoach: false,
        coachName: "PanaGK",
        bio: "Tiene muchas series y lockes, pero por lo que de verdad es conocido es por su gran carisma, es decir , su gran bigote",
        previousParticipations: [
            { edition: "1ª Edición", result: "No participó" },
            { edition: "2ª Edición", result: "No participó" }
        ],
        socialMedia: {
            twitter: "@shinbuxD",
            youtube: "@shinbuIE",
            twitch: "shinbutv",
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
        pokemonImage: "imagenes/poliwag.png",
        hasCoach: true,
        coachName: "Yurkeh1",
        bio: "Fan de Gandares Incondicional, conocido como 'EL NENE', es Zenteller de corazón , en la Inacup dio la sorpresa y en esta busca repetirlo",
        previousParticipations: [
            { edition: "1ª Edición", result: "Primera Ronda" },
            { edition: "2ª Edición", result: "Semifinales" }
        ],
        socialMedia: {
            twitter: "@GaannFA",
            twitch:"gandaress"
        },
        coachInfo: {
            bio: "Busca su 4 semifinal consecutiva, es tan bueno que llevo a toñitous a unas semifinales, con gandares ya van dos años en el top 4 , lograra llegar a la final de una vez por todas.",
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
        starterPokemon: "Beldum",
        pokemonImage: "imagenes/beldum.png",
        hasCoach: true,
        coachName: "Jaime Pedregal",
        bio: "Uno de la nueva de inazuma que la esta rompiendo durísimo, eso sí, he preguntado a realizacion y la gente sigue sin saber QUIEN COÑO ES PEDROGANI!",
        previousParticipations: [
            { edition: "1ª Edición", result: "No participó" },
            { edition: "2ª Edición", result: "No participó" }
        ],
        socialMedia: {
            twitter: "@DokkanPedro",
            youtube: "@PedroKann"
        },
        coachInfo: {
            bio: "Si la gente no sabe quién es su compañero, como van a saber quién es él. ",
            avatar: "imagenes/jaime.jpg",
            socialMedia: {
                twitter: "@JaimePedregal",
                youtube: "@JaimePedregal"
            }
        }
    },
    {
        id: 14,
        number: 14,
        name: "Andresmxrtinez",
        avatar: "imagenes/Andresmxrtinez.jpg",
        starterPokemon: "No conocido",
        hasCoach: false,
        coachName: "Jaime Pedregal",
        bio: "Andres ya ha dejado claro en varios eventos que sabe mucho de pokemon, lo que nosotros tambien sabemos mucho es que el cabron es guapo a rabiar.",
        previousParticipations: [
            { edition: "1ª Edición", result: "No participó" },
            { edition: "2ª Edición", result: "No participó" }
        ],
        socialMedia: {
            twitter: "@andresmxrtinez",
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
        pokemonImage: "imagenes/starly.png",
        hasCoach: true,
        coachName: "RaulcanXd",
        bio: "Administrador y creador de la nueva Zentella. Llego a la final en la primera Inacup , pero en la segunda le quitaron el coach. Volviendo con su coach y compañero RaulcanXd lograra volver a repetir la hazaña de llegar a la final, pero esta vez ganarla",
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
            bio: "Es tan bueno que en la InaCup2 lo banearon. Una vez llego al top en el showdown.",
            avatar: "imagenes/infernape.PNG",
            socialMedia: {
                twitter: "@Raulcanxd",
            }
        }
    },
    {
        id: 16,
        number: 16,
        name: "RocketPunto",
        avatar: "imagenes/rocket.jpg",
        starterPokemon: "Gible",
        pokemonImage: "imagenes/gible.png",
        hasCoach: true,
        coachName: "FlyingPizza",
        bio: "Creador de la prestigiosa liga Cohete busca pasar por primera vez unos cuartos de final.",
        previousParticipations: [
            { edition: "1ª Edición", result: "Cuartos de Final" },
            { edition: "2ª Edición", result: "Cuartos de Final" }
        ],
        socialMedia: {
            twitter: "@MayCoordinator",
            instagram: "@hoenn_coordinator_may"
        },
        coachInfo: {
            bio: "Tiene de perfil una puta pizza voladora es la cabra sin mas.",
            avatar: "imagenes/pizza.jpeg",
            socialMedia: {
                // twitter: "@DrewCoordinator",
                // instagram: "@drew_contests"
            }
        }
    },
    {
        id: 17,
        number: 17,
        name: "Ferrio21",
        avatar: "imagenes/ferrio.jpg",
        starterPokemon: "Chimchar",
        pokemonImage: "imagenes/chimchar.png",
        hasCoach: true,
        coachName: "Hunt",
        bio: "Creador de Inazuma Eleven Manager, en la primera edicion fue el pueblo , en la anterior un mason , ya tengo ganas de ver que le depara en esta .",
        previousParticipations: [
            { edition: "1ª Edición", result: "Cuartos de Final" },
            { edition: "2ª Edición", result: "Cuartos de Final" }
        ],
        socialMedia: {
            twitter: "@ferrio21",
            twitch: "Ferrio21"
        },
        coachInfo: {
            bio: "Creador de momentos y memes que quedan para la historia de este torneo, sera capaz de llevar a ferrio a la victoria esta vez o se quedara con las risas solo.",
            avatar: "imagenes/hunt.jpeg",
            socialMedia: {
                // twitter: "@DrewCoordinator",
                // instagram: "@drew_contests"
            }
        }
    },
    {
        id: 18,
        number: 18,
        name: "NeoGod",
        avatar: "imagenes/neogod.jpg",
        starterPokemon: "Charmander",
        pokemonImage: "imagenes/charmander.png",
        hasCoach: true,
        coachName: "AddoVk",
        bio: "No entreis a su cuenta de X a partir de las 00:00 sus tierlist todavian me visitan. En toda la comunidad es considerado un dios , lograra salir con la victoria",
        previousParticipations: [
            { edition: "1ª Edición", result: "Ronda Preliminar" },
            { edition: "2ª Edición", result: "Primera Ronda" }
        ],
        socialMedia: {
            twitter: "@Neitoelbonito",
            twitch: "@neogodd"
        },
        coachInfo: {
            bio: "Este tio no necesita presentacion, quien no lo conozca tiene un gran problema.",
            avatar: "imagenes/addo.jpg",
            socialMedia: {
                twitter: "@addo_vk",
                twitch: "addovk"
            }
        }
    },
    {
        id: 19,
        number: 19,
        name: "Deysh",
        avatar: "imagenes/deysh.jpg",
        starterPokemon: "Bulbasur",
        pokemonImage: "imagenes/bulbasur.png",
        hasCoach: true,
        coachName: "Darren13",
        bio: "El crush de media comunidad y no estoy de broma, dice que si gana saca el mod definitivo del mario kart, así que ya sabéis a quien animar...",
        previousParticipations: [
            { edition: "1ª Edición", result: "Ronda Preliminar" },
            { edition: "2ª Edición", result: "Primera Ronda" }
        ],
        socialMedia: {
            twitter: "@Deysh_",
            twitch: "Deysh_",
            youtube: "@Deysh_"
        },
        coachInfo: {
            bio: "Betico y fan de Darren , como se nota que le gusta los segundones",
            avatar: "imagenes/darren.jpg",
            socialMedia: {
                twitter: "@darren__13yt",
                instagram: "@lachancedarren__13",
                twitch: "darren__13",
                youtube: "@darren__13"
            }
        }
    },
    {
        id: 20,
        number: 20,
        name: "Shheyla",
        avatar: "imagenes/sheyla.jpg",
        pokemonImage: "imagenes/porygon.png",
        starterPokemon: "Porygon",
        hasCoach: true,
        coachName: "SebasTorrado",
        bio: "Esta dupla en la AseKitasCup le metia miedo a Belcebu Junior, veamos si ahora Shheyla le hace mas caso a sebas, y pasan de la 5ta medalla, animo sebas...",
        previousParticipations: [
            { edition: "1ª Edición", result: "No participo" },
            { edition: "2ª Edición", result: "No participo" }
        ],
        socialMedia: {
            twitter: "@shheeyla__",
            twitch: "shheyla"
        },
        coachInfo: {
            bio: "Tiene que aguantar a Sheyla, es ganador",
            avatar: "imagenes/sebas.jpg",
            socialMedia: {
                twitter: "@SebasTorrad0_",
                youtube: "@Sebas_Torrad0"
            }
        }
    },
    {
        id: 21,
        number: 21,
        name: "Yuu",
        avatar: "imagenes/yuu.jpg",
        starterPokemon: "No conocido",
        hasCoach: false,
        coachName: "SebasTorrado",
        bio: "Se llevo el mejor clip de la edicion pasada, el marill shiny con teletransporte le jodio, la unica referencia a The Walking Dead en la seria va a ser su estado en la 3a medalla",
        previousParticipations: [
            { edition: "1ª Edición", result: "No participo" },
            { edition: "2ª Edición", result: "Primera Ronda" }
        ],
        socialMedia: {
            twitter: "@faelafelito",
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
        starterPokemon: "Swinub",
        pokemonImage: "imagenes/swinub.png",
        hasCoach: true,
        coachName: "Diyeru",
        bio: "En esta INACUP va a jugar comunicándose por código morse, después de la hostia que le metió al micro eso ya no funciona... esto si es overol JOMS",
        previousParticipations: [
            { edition: "1ª Edición", result: "Ronda Preliminar" },
            { edition: "2ª Edición", result: "Primera Ronda" }
        ],
        socialMedia: {
            twitter: "@manchabeti33",
            instagram: "@mancha_08"
        },
        coachInfo: {
            bio: "Tiene al Emperador Palpatine con la camiseta de españa, se puede tener mas carisma.",
            avatar: "imagenes/Diyeridú.jpeg",
            socialMedia: {
                // twitter: "@DrewCoordinator",
                // instagram: "@drew_contests"
            }
        }
    },
    {
        id: 23,
        number: 23,
        name: "Urko",
        avatar: "imagenes/urko.png",
        starterPokemon: "Treecko",
        pokemonImage: "imagenes/treecko.png",
        hasCoach: true,
        coachName: "Javiaarelas",
        bio: "Se le ha visto por la ruta 33 gritando algo de Remate torres gemelas o algo así, no os vayáis a acercar mucho no vaya a ser que lo que pone en su título sea verdad...",
        previousParticipations: [
            { edition: "1ª Edición", result: "No participo" },
            { edition: "2ª Edición", result: "No participo" }
        ],
        socialMedia: {
            twitter: "@urko_25",
            twitch: "urko_25",
            youtube: "@urko_25"
        },
        coachInfo: {
            bio: "Duo Explosivo se llevan mejor que un derbi del Pais Vasco.",
            avatar: "imagenes/javiaarela.jpg",
            socialMedia: {
                twitter: "@javivarela56",
                twitch: "javivaarela"
            }
        }
    },
    {
        id: 24,
        number: 24,
        name: "CharlyAsekas",
        avatar: "imagenes/charly.jpg",
        starterPokemon: "Swinub",
        pokemonImage: "imagenes/swinub.png",
        hasCoach: false,
        coachName: "Javiaarelas",
        bio: "Como este evento no es suyo, no ha encontrado ningún coach para que le ayude ahora reacciona a anime y hace eventos ",
        previousParticipations: [
            { edition: "1ª Edición", result: "No participo" },
            { edition: "2ª Edición", result: "Ronda Preliminar" }
        ],
        socialMedia: {
            twitter: "@CharlyAsekas_",
            twitch: "charlyasekas",
            youtube: "@CharlyAsekas_"   
            // instagram: "@hoenn_coordinator_may"
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
        starterPokemon: "Squirtle",
        pokemonImage: "imagenes/squirtle.png",
        hasCoach: false,
        coachName: "Javiaarelas",
        bio: "Conocido como Flota Ixar, y creador de los Inazuma Squid Games viene a demostrar el sabor de la pizza de Iker",
        previousParticipations: [
            { edition: "1ª Edición", result: "No participo" },
            { edition: "2ª Edición", result: "No participo" }
        ],
        socialMedia: {
            twitter: "@asceroblack_",
            instagram: "@asceroblack",
            twitch: "asceroblack_",
            youtube: "@AsceroBlackk"
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
        starterPokemon: "Chimchar",
        pokemonImage: "imagenes/chimchar.png",
        hasCoach: false,
        coachName: "Javiaarelas",
        bio: "El que según para muchos es el mejor portero de las quedadas, promete muchísimo y eso que con una ceja menos disminuye su visión.",
        previousParticipations: [
            { edition: "1ª Edición", result: "No participo" },
            { edition: "2ª Edición", result: "No participo" }
        ],
        socialMedia: {
            twitter: "@77Daxx",
            twitch: "daxx77_"
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
        starterPokemon: "Lotad",
        pokemonImage: "imagenes/lotad.png",
        hasCoach: true,
        coachName: "Andrejandromagno",
        bio: "Esencial de las INACUPS, en la 1 dio pena, en la 2 fue decente y en la 3 volverá a dar pena lo presiento... Fan de NosePass!!",
        previousParticipations: [
            { edition: "1ª Edición", result: "No se paso el juego" },
            { edition: "2ª Edición", result: "Cuartos de Final" }
        ],
        socialMedia: {
            twitter: "@Bopeh_",
            twitch: "Bopeh_",
        },
        coachInfo: {
            bio: "Acompañara a Bopeh con el objetivo de ganar, despues de la carrileada del año pasado.",
            avatar: "imagenes/andrejandro.avif",
            socialMedia: {
                // twitter: "@DrewCoordinator",
                // instagram: "@drew_contests"
            }
        }
    },
     {
        id: 28,
        number: 28,
        name: "Erninsky22",
        avatar: "imagenes/Erninsky22.jpg",
        starterPokemon: "Squirtle",
        pokemonImage: "imagenes/squirtle.png",
        hasCoach: false,
        coachName: "Andrejandromagno",
        bio: "Si hay INACUP tiene que estar este tío, es el rey de esto, un pov super recomendado de ver, y encima zenteller!!",
        previousParticipations: [
            { edition: "1ª Edición", result: "Ronda Previa" },
            { edition: "2ª Edición", result: "Primera Ronda" }
        ],
        socialMedia: {
            twitter: "@Erninsky22",
            twitch: "erninsky"
        },
        coachInfo: {
            bio: "Coordinador experto especializado en combates elegantes y estratégicos.",
            avatar: "imagenes/andrejandro.avif",
            socialMedia: {
                // twitter: "@Erninsky22",
                // twitch: "erninsky"
            }
        }
    },
    {
        id: 29,
        number: 29,
        name: "RaiDamant",
        avatar: "imagenes/rai.jpg",
        starterPokemon: "No conocido",
        hasCoach: true,
        coachName: "Feygar",
        bio: "En cuarta generación no hay smolivs, pero esta tía los varea igual con su pincel, dibujitos, mala conexión y sobretodo... Ilia",
        previousParticipations: [
            { edition: "1ª Edición", result: "Ronda Previa" },
            { edition: "2ª Edición", result: "Primera Ronda" }
        ],
        socialMedia: {
            twitter: "@RaiDamant",
            twitch: "raidamant",
            youtube: "@RaiDamant"
        },
        coachInfo: {
            bio: "Intentara hacer mixi max con Rai y que llege lejos , pero lo lograra",
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
        starterPokemon: "Marill",
        pokemonImage: "imagenes/marill.png",
        hasCoach: false,
        coachName: "Feygar",
        bio: "El campeón de la primera edición pero, nos da igual me ha comentado que para el torneo tiene a Ikea de coach pero se lo comento en el ave",
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
        starterPokemon: "Dratini",
        pokemonImage: "imagenes/dratini.png",
        hasCoach: true,
        coachName: "SoyNakah",
        bio: "Ha pasado de usar twitter a usar el videochat de pokemon, a ver si se le da igual de bien farmear bonguris como farmea likes...",
        previousParticipations: [
            { edition: "1ª Edición", result: "No participó" },
            { edition: "2ª Edición", result: "Primera Ronda" }
        ],
        socialMedia: {
            twitter: "@NotMary_05",
            // instagram: "@hoenn_coordinator_may"
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
        starterPokemon: "Pidgey",
        pokemonImage: "imagenes/pidgey.png",
        hasCoach: true,
        coachName: "ELPolloL0k0",
        bio: "Ella no decepciona como el ibis, El bicho me lesiona me va a hacer un esguince No me podia creer Lo que me hacia esa tía ella lo saltaba como yo con Skypiera",
        previousParticipations: [
            { edition: "1ª Edición", result: "Octavos de final" },
            { edition: "2ª Edición", result: "Primera Ronda" }
        ],
        socialMedia: {
            twitter: "@Neicho_",
            twitch: "neicholives"
        },
        coachInfo: {
            bio: "Lograra dar cabeza al niño o se sumiran en el abismo juntos.",
            avatar: "imagenes/polloloko.jpg",
            socialMedia: {
                twitter: "@ELPolloL0k0",
                youtube: "@elpolloloko2587",
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

