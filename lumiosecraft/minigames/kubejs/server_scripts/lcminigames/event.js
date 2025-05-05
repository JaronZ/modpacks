PlayerEvents.chat(event => {
    // const PlayerExtensionKt = Java.tryLoadClass("fr.harmex.cobbledollars.common.utils.extensions.PlayerExtensionKt");
    // console.log(PlayerExtensionKt.getCobbleDollars(event.player));
    if (!global.lcminigames.shouldExecute("chat")) return;
    global.lcminigames.execute(
        { server: event.server, player: event.player, message: event.message }, () => event.cancel());
});