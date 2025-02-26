interface SawmillRecipeOptions {
    input: string;
    output: string;
    stripped?: string;
    namespace?: string;
}

interface IE {
    sawmillRecipe(event: any, options: SawmillRecipeOptions): void;
}

interface Global {
    STRIPPED_PREFIX: string;
    LOG_SUFFIX: string;
    WOOD_SUFFIX: string;
    PLANKS_SUFFIX: string;
    ie: IE;
}

declare global {
    const global: Global;
}

export {}