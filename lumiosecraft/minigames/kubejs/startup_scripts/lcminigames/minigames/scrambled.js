//priority: 1
//requires: cobblemon
global.minigames.scrambled = {
    name: "scrambled",
    currentWord: null,
    getRewards() {
        return [
            Item.of("cobblemon:poke_ball", 3),
            Item.of("cobblemon:great_ball")
        ];
    },
    /**
     * @param {import("net.minecraft.server.MinecraftServer").$MinecraftServer} server 
     */
    execute(server) {
        this.currentWord = global.Pokemon.getRandom().getName().toLowerCase();
        const scrambled = global.scramble(this.currentWord);
        server.tell(global.createChatFrame(
            "Server Minigame",
            [`${global.centeredMessage("Unscramble the following pokémon")}\n`,
            Text.aqua(global.centeredMessage(scrambled))]
        ));
    },
    /**
     * @param {import("dev.latvian.mods.kubejs.player.PlayerChatReceivedKubeEvent").$PlayerChatReceivedKubeEvent} event
     */
    chat(event) {
        if (event.message.toLowerCase() == this.currentWord) {
            global.endMinigame(event.player);
            event.server.tell("Unscrambled!");
            event.cancel();
        }
    }
};