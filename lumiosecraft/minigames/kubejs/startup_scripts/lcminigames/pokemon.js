//priority: 3

/**
 * @param {string} name
 * @param {number} gen
 */
function Pokemon(name, gen) {
    Pokemon.instances.push(this);
    this.name = name;
    this.gen = gen;
}

/** @type {Pokemon[]} */
Pokemon.instances = [];
Pokemon.Bulbasaur = new Pokemon("Bulbasaur", 1);
Pokemon.Ivysaur = new Pokemon("Ivysaur", 1);
Pokemon.Venusaur = new Pokemon("Venusaur", 1);
Pokemon.Charmander = new Pokemon("Charmander", 1);
Pokemon.Charmeleon = new Pokemon("Charmeleon", 1);
Pokemon.Charizard = new Pokemon("Charizard", 1);
Pokemon.Squirtle = new Pokemon("Squirtle", 1);
Pokemon.Wartortle = new Pokemon("Wartortle", 1);
Pokemon.Blastoise = new Pokemon("Blastoise", 1);
Pokemon.Caterpie = new Pokemon("Caterpie", 1);
Pokemon.Metapod = new Pokemon("Metapod", 1);
Pokemon.Butterfree = new Pokemon("Butterfree", 1);
Pokemon.Weedle = new Pokemon("Weedle", 1);
Pokemon.Kakuna = new Pokemon("Kakuna", 1);
Pokemon.Beedrill = new Pokemon("Beedrill", 1);
Pokemon.Pidgey = new Pokemon("Pidgey", 1);
Pokemon.Pidgeotto = new Pokemon("Pidgeotto", 1);
Pokemon.Pidgeot = new Pokemon("Pidgeot", 1);
Pokemon.Rattata = new Pokemon("Rattata", 1);
Pokemon.Raticate = new Pokemon("Raticate", 1);
Pokemon.Spearow = new Pokemon("Spearow", 1);
Pokemon.Fearow = new Pokemon("Fearow", 1);
Pokemon.Ekans = new Pokemon("Ekans", 1);
Pokemon.Arbok = new Pokemon("Arbok", 1);
Pokemon.Pikachu = new Pokemon("Pikachu", 1);
Pokemon.Raichu = new Pokemon("Raichu", 1);
Pokemon.Sandshrew = new Pokemon("Sandshrew", 1);
Pokemon.Sandslash = new Pokemon("Sandslash", 1);
Pokemon.NidoranF = new Pokemon("Nidoran♀", 1);
Pokemon.Nidorina = new Pokemon("Nidorina", 1);
Pokemon.Nidoqueen = new Pokemon("Nidoqueen", 1);
Pokemon.NidoranM = new Pokemon("Nidoran♂", 1);
Pokemon.Nidorino = new Pokemon("Nidorino", 1);
Pokemon.Nidoking = new Pokemon("Nidoking", 1);
Pokemon.Clefairy = new Pokemon("Clefairy", 1);
Pokemon.Clefable = new Pokemon("Clefable", 1);
Pokemon.Vulpix = new Pokemon("Vulpix", 1);
Pokemon.Ninetales = new Pokemon("Ninetales", 1);
Pokemon.Jigglypuff = new Pokemon("Jigglypuff", 1);
Pokemon.Wigglytuff = new Pokemon("Wigglytuff", 1);
Pokemon.Zubat = new Pokemon("Zubat", 1);
Pokemon.Golbat = new Pokemon("Golbat", 1);
Pokemon.Oddish = new Pokemon("Oddish", 1);
Pokemon.Gloom = new Pokemon("Gloom", 1);
Pokemon.Vileplume = new Pokemon("Vileplume", 1);
Pokemon.Paras = new Pokemon("Paras", 1);
Pokemon.Parasect = new Pokemon("Parasect", 1);
Pokemon.Venonat = new Pokemon("Venonat", 1);
Pokemon.Venomoth = new Pokemon("Venomoth", 1);
Pokemon.Diglett = new Pokemon("Diglett", 1);
Pokemon.Dugtrio = new Pokemon("Dugtrio", 1);
Pokemon.Meowth = new Pokemon("Meowth", 1);
Pokemon.Persian = new Pokemon("Persian", 1);
Pokemon.Psyduck = new Pokemon("Psyduck", 1);
Pokemon.Golduck = new Pokemon("Golduck", 1);
Pokemon.Mankey = new Pokemon("Mankey", 1);
Pokemon.Primeape = new Pokemon("Primeape", 1);
Pokemon.Growlithe = new Pokemon("Growlithe", 1);
Pokemon.Arcanine = new Pokemon("Arcanine", 1);
Pokemon.Poliwag = new Pokemon("Poliwag", 1);
Pokemon.Poliwhirl = new Pokemon("Poliwhirl", 1);
Pokemon.Poliwrath = new Pokemon("Poliwrath", 1);
Pokemon.Abra = new Pokemon("Abra", 1);
Pokemon.Kadabra = new Pokemon("Kadabra", 1);
Pokemon.Alakazam = new Pokemon("Alakazam", 1);
Pokemon.Machop = new Pokemon("Machop", 1);
Pokemon.Machoke = new Pokemon("Machoke", 1);
Pokemon.Machamp = new Pokemon("Machamp", 1);
Pokemon.Bellsprout = new Pokemon("Bellsprout", 1);
Pokemon.Weepinbell = new Pokemon("Weepinbell", 1);
Pokemon.Victreebel = new Pokemon("Victreebel", 1);
Pokemon.Tentacool = new Pokemon("Tentacool", 1);
Pokemon.Tentacruel = new Pokemon("Tentacruel", 1);
Pokemon.Geodude = new Pokemon("Geodude", 1);
Pokemon.Graveler = new Pokemon("Graveler", 1);
Pokemon.Golem = new Pokemon("Golem", 1);
Pokemon.Ponyta = new Pokemon("Ponyta", 1);
Pokemon.Rapidash = new Pokemon("Rapidash", 1);
Pokemon.Slowpoke = new Pokemon("Slowpoke", 1);
Pokemon.Slowbro = new Pokemon("Slowbro", 1);
Pokemon.Magnemite = new Pokemon("Magnemite", 1);
Pokemon.Magneton = new Pokemon("Magneton", 1);
Pokemon.Farfetchd = new Pokemon("Farfetch’d", 1);
Pokemon.Doduo = new Pokemon("Doduo", 1);
Pokemon.Dodrio = new Pokemon("Dodrio", 1);
Pokemon.Seel = new Pokemon("Seel", 1);
Pokemon.Dewgong = new Pokemon("Dewgong", 1);
Pokemon.Grimer = new Pokemon("Grimer", 1);
Pokemon.Muk = new Pokemon("Muk", 1);
Pokemon.Shellder = new Pokemon("Shellder", 1);
Pokemon.Cloyster = new Pokemon("Cloyster", 1);
Pokemon.Gastly = new Pokemon("Gastly", 1);
Pokemon.Haunter = new Pokemon("Haunter", 1);
Pokemon.Gengar = new Pokemon("Gengar", 1);
Pokemon.Onix = new Pokemon("Onix", 1);
Pokemon.Drowzee = new Pokemon("Drowzee", 1);
Pokemon.Hypno = new Pokemon("Hypno", 1);
Pokemon.Krabby = new Pokemon("Krabby", 1);
Pokemon.Kingler = new Pokemon("Kingler", 1);
Pokemon.Voltorb = new Pokemon("Voltorb", 1);
Pokemon.Electrode = new Pokemon("Electrode", 1);
Pokemon.Exeggcute = new Pokemon("Exeggcute", 1);
Pokemon.Exeggutor = new Pokemon("Exeggutor", 1);
Pokemon.Cubone = new Pokemon("Cubone", 1);
Pokemon.Marowak = new Pokemon("Marowak", 1);
Pokemon.Hitmonlee = new Pokemon("Hitmonlee", 1);
Pokemon.Hitmonchan = new Pokemon("Hitmonchan", 1);
Pokemon.Lickitung = new Pokemon("Lickitung", 1);
Pokemon.Koffing = new Pokemon("Koffing", 1);
Pokemon.Weezing = new Pokemon("Weezing", 1);
Pokemon.Rhyhorn = new Pokemon("Rhyhorn", 1);
Pokemon.Rhydon = new Pokemon("Rhydon", 1);
Pokemon.Chansey = new Pokemon("Chansey", 1);
Pokemon.Tangela = new Pokemon("Tangela", 1);
Pokemon.Kangaskhan = new Pokemon("Kangaskhan", 1);
Pokemon.Horsea = new Pokemon("Horsea", 1);
Pokemon.Seadra = new Pokemon("Seadra", 1);
Pokemon.Goldeen = new Pokemon("Goldeen", 1);
Pokemon.Seaking = new Pokemon("Seaking", 1);
Pokemon.Staryu = new Pokemon("Staryu", 1);
Pokemon.Starmie = new Pokemon("Starmie", 1);
Pokemon.MrMime = new Pokemon("Mr. Mime", 1);
Pokemon.Scyther = new Pokemon("Scyther", 1);
Pokemon.Jynx = new Pokemon("Jynx", 1);
Pokemon.Electabuzz = new Pokemon("Electabuzz", 1);
Pokemon.Magmar = new Pokemon("Magmar", 1);
Pokemon.Pinsir = new Pokemon("Pinsir", 1);
Pokemon.Tauros = new Pokemon("Tauros", 1);
Pokemon.Magikarp = new Pokemon("Magikarp", 1);
Pokemon.Gyarados = new Pokemon("Gyarados", 1);
Pokemon.Lapras = new Pokemon("Lapras", 1);
Pokemon.Ditto = new Pokemon("Ditto", 1);
Pokemon.Eevee = new Pokemon("Eevee", 1);
Pokemon.Vaporeon = new Pokemon("Vaporeon", 1);
Pokemon.Jolteon = new Pokemon("Jolteon", 1);
Pokemon.Flareon = new Pokemon("Flareon", 1);
Pokemon.Porygon = new Pokemon("Porygon", 1);
Pokemon.Omanyte = new Pokemon("Omanyte", 1);
Pokemon.Omastar = new Pokemon("Omastar", 1);
Pokemon.Kabuto = new Pokemon("Kabuto", 1);
Pokemon.Kabutops = new Pokemon("Kabutops", 1);
Pokemon.Aerodactyl = new Pokemon("Aerodactyl", 1);
Pokemon.Snorlax = new Pokemon("Snorlax", 1);
Pokemon.Articuno = new Pokemon("Articuno", 1);
Pokemon.Zapdos = new Pokemon("Zapdos", 1);
Pokemon.Moltres = new Pokemon("Moltres", 1);
Pokemon.Dratini = new Pokemon("Dratini", 1);
Pokemon.Dragonair = new Pokemon("Dragonair", 1);
Pokemon.Dragonite = new Pokemon("Dragonite", 1);
Pokemon.Mewtwo = new Pokemon("Mewtwo", 1);
Pokemon.Mew = new Pokemon("Mew", 1);

/**
 * @returns {Pokemon}
 */
Pokemon.getRandom = function() {
    return global.pickRandom(Pokemon.instances);
}

Pokemon.prototype.getName = function() {
    return this.name;
}

global.Pokemon = Pokemon;