console.log("Loading Immersive Engineering sawmill recipes");

ServerEvents.recipes(event => {
    function registerLogSawmillRecipe(log, options) {
        global.ie.sawmillRecipe(event, Object.assign(
            {
                input: `${log}${global.LOG_SUFFIX}`,
                stripped: `${global.STRIPPED_PREFIX}${log}${global.LOG_SUFFIX}`,
                output: `${log}${global.PLANKS_SUFFIX}`
            },
            options
        ));
    }

    function registerStrippedLogSawmillRecipe(log, options) {
        global.ie.sawmillRecipe(event, Object.assign(
            {
                input: `${global.STRIPPED_PREFIX}${log}${global.LOG_SUFFIX}`,
                output: `${log}${global.PLANKS_SUFFIX}`
            },
            options
        ));
    }

    function registerWoodSawmillRecipe(log, options) {
        global.ie.sawmillRecipe(event, Object.assign(
            {
                input: `${log}${global.WOOD_SUFFIX}`,
                stripped: `${global.STRIPPED_PREFIX}${log}${global.WOOD_SUFFIX}`,
                output: `${log}${global.PLANKS_SUFFIX}`
            },
            options
        ));
    }

    function registerStrippedWoodSawmillRecipe(log, options) {
        global.ie.sawmillRecipe(event, Object.assign(
                {
                    input: `${global.STRIPPED_PREFIX}${log}${global.WOOD_SUFFIX}`,
                    output: `${log}${global.PLANKS_SUFFIX}`
                },
                options
            ));
    }

    function registerSawmillRecipes(logList, options) {
        if (!options) options = {};

        logList.forEach(log => {
            registerLogSawmillRecipe(log, options);
            registerStrippedLogSawmillRecipe(log, options);
            registerWoodSawmillRecipe(log, options);
            registerStrippedWoodSawmillRecipe(log, options);
        });
    }

    registerSawmillRecipes(
        ["fir", "magic", "pine", "maple", "redwood", "mahogany", "jacaranda", "palm", "willow", "dead", "umbran", "hellbark", "empyreal"],
        {
            namespace: "biomesoplenty"
        }
    );
    registerSawmillRecipes(
        ["blue_archwood", "red_archwood", "green_archwood", "purple_archwood"],
        {
            namespace: "ars_nouveau",
            output: "archwood_planks"
        }
    );
    registerSawmillRecipes(
        ["fruit", "cinnamon"],
        {
            namespace: "extradelight"
        }
    );

    //Cinnamon Wood
    registerWoodSawmillRecipe("cinnamon", {
        namespace: "extradelight",
        stripped: "strippedcinnamon_wood"
    });
    registerStrippedWoodSawmillRecipe("cinnamon", {
        namespace: "extradelight",
        input: "strippedcinnamon_wood"
    });

    // Yellow Archwood Log
    global.ie.sawmillRecipe(event, {
        input: "ars_elemental:yellow_archwood_log",
        stripped: "ars_elemental:stripped_yellow_archwood_log",
        output: "ars_nouveau:archwood_planks"
    });
    global.ie.sawmillRecipe(event, {
        input: "ars_elemental:stripped_yellow_archwood_log",
        output: "ars_nouveau:archwood_planks"
    });

    // Yellow Archwood
    global.ie.sawmillRecipe(event, {
        input: "ars_elemental:yellow_archwood",
        stripped: "ars_elemental:stripped_yellow_archwood",
        output: "ars_nouveau:archwood_planks"
    });
    global.ie.sawmillRecipe(event, {
        input: "ars_elemental:stripped_yellow_archwood",
        output: "ars_nouveau:archwood_planks"
    });
});

console.log("Finished loading Immersive Engineering sawmill recipes");