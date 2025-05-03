//priority: 0
/** @type {import("dev.latvian.mods.kubejs.util.ScheduledEvents$ScheduledEvent").$ScheduledEvents$ScheduledEvent} */
let endMinigameTimer;
/** @type {import("dev.latvian.mods.kubejs.util.ScheduledEvents$ScheduledEvent").$ScheduledEvents$ScheduledEvent} */
let minigameTimer;

ServerEvents.loaded(event => {
    const INTERVAL_TICKS = 20 * 300;

    endMinigameTimer = event.server.scheduleRepeatingInTicks(INTERVAL_TICKS - 1, () => {
        global.endMinigame();
    });

    minigameTimer = event.server.scheduleRepeatingInTicks(INTERVAL_TICKS, () => {
        global.pickMinigame(event.server);
    });
});

ServerEvents.unloaded(() => {
    endMinigameTimer.clear();
    minigameTimer.clear();
});