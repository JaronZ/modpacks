//priority: 4

/**
 * @param {any[]} list
 */
function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
}

/**
 * @param {string} word
 * @returns {string}
 */
function scramble(word) {
    return word.split("")
        .sort(() => 0.5 - Math.random())
        .sort(() => 0.5 - Math.random())
        .sort(() => 0.5 - Math.random())
        .sort(() => 0.5 - Math.random())
        .sort(() => 0.5 - Math.random())
        .join("");
}

const CENTER_PX = 154;

function centeredMessage(msg){
    if (msg === null || msg === "") return "";

    let messagePxSize = 0;
    let previousCode = false;
    let isBold = false;

    msg.split("").forEach(c => {
        if(c === "§"){
            previousCode = true;
        } else if(previousCode == true){
            previousCode = false;
            isBold = c == "l" || c == "L";
        } else {
            const dFI = DefaultFontInfo.getDefaultFontInfo(c);
            messagePxSize += isBold ? dFI.getBoldLength() : dFI.getLength();
            messagePxSize++;
        }
    });

    const halvedMessageSize = messagePxSize / 2;
    const toCompensate = CENTER_PX - halvedMessageSize;
    const spaceLength = DefaultFontInfo.SPACE.getLength() + 1;
    let compensated = 0;
    let sb = "";
    while(compensated < toCompensate){
        sb += " ";
        compensated += spaceLength;
    }
    return sb + msg;
}

function createChatFrame(title, content) {
    return Text.join(
        Text.yellow(global.centeredMessage(`§m${" ".repeat(81)}`)),
        "\n",
        Text.green(global.centeredMessage(`§l${title}`)),
        "\n\n",
        content,
        "\n\n",
        Text.yellow(global.centeredMessage(`§m${" ".repeat(81)}`))
    );
}

global.pickRandom = pickRandom;
global.scramble = scramble;
global.centeredMessage = centeredMessage;
global.createChatFrame = createChatFrame;