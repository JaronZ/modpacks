//priority: 0
ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event;

    event.register(Commands.literal("minigame")
        .requires(s => s.hasPermission(2))
        .then(Commands.literal("end")
            .executes(() => minigameEnd())
        )
        .then(Commands.literal("start")
            .executes(c => minigameStart(c.source.server))
        )
    );

    function minigameEnd() {
        global.endMinigame();
        return 1;
    }

    function minigameStart(server) {
        global.pickMinigame(server);
        return 1;
    }
});