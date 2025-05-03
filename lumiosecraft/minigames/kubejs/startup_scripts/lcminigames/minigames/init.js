//priority: 2
global.minigames = {};
global.currentMinigame = null;

/**
 * @param {import("net.minecraft.world.entity.player.Player").$Player} winner 
 */
function giveReward(winner) {
    const rewards = global.currentMinigame.getRewards();

    if (!rewards || rewards.length == 0) {
        console.warn(`${global.currentMinigame.name} has no reward`);
        return;
    }

    const reward = global.pickRandom(rewards);
    winner.addItem(reward);
}

/**
 * @param {import("net.minecraft.world.entity.player.Player").$Player} [winner] 
 */
global.endMinigame = function(winner) {
    if (!global.currentMinigame) {
        console.warn("There is currently no minigame");
        return;
    }
    if (winner) giveReward(winner);
    global.currentMinigame = null;
}

/**
 * @param {import("net.minecraft.server.MinecraftServer").$MinecraftServer} server 
 */
global.pickMinigame = function(server) {
    const keys = Object.keys(global.minigames);
    const pickedKey = global.pickRandom(keys);
    const pickedGame = global.minigames[pickedKey];

    global.currentMinigame = pickedGame;

    pickedGame.execute(server);
}