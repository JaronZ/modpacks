//priority: 3

lcminigames.minigames = new lcminigames.Collection();

(function() {
    let currentMinigame = null;
    let minigameTimer = null;

    function transformRewards(rewards) {
        return global.lcminigames.shuffle(
            global.lcminigames.flatArray(rewards.map(r => Array.from({ length: r.chance }).fill(r.item))));
    }

    /**
     * @param {import("net.minecraft.world.entity.player.Player").$Player} winner 
     */
    function giveReward(winner) {
        const rewards = transformRewards(currentMinigame.getRewards());

        if (!rewards || rewards.length == 0) {
            console.warn(`${currentMinigame.name} has no reward`);
            return;
        }

        const reward = global.lcminigames.pickRandom(rewards);
        winner.addItem(reward);
    }

    /**
     * @param {import("net.minecraft.server.MinecraftServer").$MinecraftServer} server 
     */
    function timeLimit(server) {
        if (!currentMinigame) return;
        if (minigameTimer) minigameTimer.clear();
        minigameTimer = server.scheduleInTicks(currentMinigame.timeLimit, () => {
            global.lcminigames.endMinigame({ server: server });
        });
    }

    /**
     * @param {string} eventName
     * @returns {boolean}
     */
    global.lcminigames.shouldExecute = function(eventName) {
        return currentMinigame && currentMinigame.events && currentMinigame.events.includes(eventName);
    }

    global.lcminigames.execute = function(data, onEnd) {
        if (currentMinigame.shouldEnd(data)) {
            global.lcminigames.endMinigame({
                server: data.server,
                winner: data.player
            });
            if (onEnd) onEnd();
        }
    }

    global.lcminigames.endMinigame = function(data) {
        if (!currentMinigame) {
            console.warn("There is currently no minigame");
            return;
        }
        currentMinigame.end(data);
        if (data.winner) giveReward(data.winner);
        minigameTimer.clear();
        minigameTimer = null;
        currentMinigame = null;
    }

    global.lcminigames.startMinigame = function(data) {
        const keys = Array.from(lcminigames.minigames.keys());
        const pickedKey = global.lcminigames.pickRandom(keys);
        currentMinigame = lcminigames.minigames.get(pickedKey);

        timeLimit(data.server);

        currentMinigame.execute(data);
    }
})();
