//priority: 1
//requires: cobblemon

lcminigames.minigames.set("super_effective", {
    name: "super_effective",
    type: "chat",
    defending: null,
    events: ["chat"],
    timeLimit: global.lcminigames.MINUTE_TICKS * 0.75,
    getRewards() {
        return [
            { item: Item.of("cobblemon:poke_ball", 3), chance: 5 },
            { item: Item.of("cobblemon:citrine_ball", 3), chance: 3 },
            { item: Item.of("cobblemon:verdant_ball", 3), chance: 3 },
            { item: Item.of("cobblemon:azure_ball", 3), chance: 3 },
            { item: Item.of("cobblemon:roseate_ball", 3), chance: 3 },
            { item: Item.of("cobblemon:slate_ball", 3), chance: 3 },
            { item: Item.of("cobblemon:premier_ball"), chance: 2 },
            { item: Item.of("cobblemon:great_ball"), chance: 1 },
            { item: Item.of("cobblemon:exp_candy_xs", 2), chance: 2 },
            { item: Item.of("cobblemon:potion"), chance: 5 },
        ];
    },
    /**
     * @param {import("dev.latvian.mods.kubejs.player.PlayerChatReceivedKubeEvent").$PlayerChatReceivedKubeEvent} event
     * @returns {boolean}
     */
    shouldEnd({ message }) {
        return lcminigames.Pokemon.Type.isEffective(message.toLowerCase(), this.defending);
    },
    /**
     * @param {import("dev.latvian.mods.kubejs.server.ServerKubeEvent").$ServerKubeEvent} event
     */
    execute({ server }) {
        this.defending = lcminigames.Pokemon.Type.getRandom();
        const defendingString = this.defending.join(" / ");
        server.tell(global.lcminigames.createChatFrame(
            "Server Minigame",
            [`${global.lcminigames.centeredMessage("What type is super effective against the following pokémon")}\n`,
            Text.aqua(global.lcminigames.centeredMessage(defendingString))]
        ));
    },
    end({ server, winner }) {
        const message = winner ? `§2${winner.displayName.string}§r Bested the pokémon!` : 
            "No one managed to beat the pokémon";
        server.tell(global.lcminigames.createChatFrame(
            "Server Minigame",
            `${global.lcminigames.centeredMessage(message)}`,
        ));
    }

});