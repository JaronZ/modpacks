console.log("Loading Immersive Engineering startup script");

const IE_PREFIX = "immersiveengineering";
const IE_SAWDUST = `${IE_PREFIX}:dust_wood`;

/**
 * @param options {SawmillRecipeOptions}
 * @returns {Omit<SawmillRecipeOptions, "namespace">}
 */
function transformSawmillOptions(options) {
    if (options.namespace) {
        options = Object.assign(
            options,
            {
                input: `${options.namespace}:${options.input}`,
                output: `${options.namespace}:${options.output}`,
                stripped: options.stripped ? `${options.namespace}:${options.stripped}` : undefined
            }
        );
    }

    return options;
}

/**
 * @param event
 * @param {SawmillRecipeOptions} options
 */
function sawmillRecipe(event, options) {
    const finalOptions = transformSawmillOptions(options);

    const recipe = {
        type: `${IE_PREFIX}:sawmill`,
        energy: 1600,
        input: {
            item: finalOptions.input
        },
        result: {
            basePredicate: {
                item: finalOptions.output
            },
            count: 6
        },
        secondaryOutputs: [{
            item: IE_SAWDUST
        }]
    };

    if (finalOptions.stripped) {
        recipe.stripped = {
            item: finalOptions.stripped
        };
        recipe.strippingSecondaries = [{
            item: IE_SAWDUST
        }];
    }

    event.custom(recipe);
}

global.ie = {
    sawmillRecipe: sawmillRecipe
};

console.log("Finished loading Immersive Engineering startup script");