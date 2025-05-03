//priority: 0
PlayerEvents.chat(event => {
    if (!global.currentMinigame || !("chat" in global.currentMinigame)) return;
    global.currentMinigame.chat(event);
});