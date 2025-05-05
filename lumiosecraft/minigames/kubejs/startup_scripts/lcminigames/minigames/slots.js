//priority: 1

lcminigames.minigames.set("slots", {
    name: "slots",
    type: "command",
    /**
     * @param {typeof import("net.minecraft.commands.Commands").$Commands} Commands
     * @param {typeof import("dev.latvian.mods.kubejs.command.ArgumentTypeWrappers").$ArgumentTypeWrappers} Arguments 
     */
    registerCommand(Commands, Arguments) {
        return Commands.literal(this.name)
            .executes(c => this.execute(c.source.playerOrException))
    },
    /**
     * @param {import("net.minecraft.server.level.ServerPlayer").$ServerPlayer} player 
     * @returns {number}
     */
    execute(player) {
        const slotsMenu = new global.lcminigames.MenuType("Slots");
        slotsMenu.show(player);
        return 1;
    }
});