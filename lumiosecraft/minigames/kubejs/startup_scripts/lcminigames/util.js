//priority: 4
(function() {
    const { DefaultFontInfo } = lcminigames;
    const CENTER_PX = 154;

    /**
     * @param {any[]} list
     */
    global.lcminigames.pickRandom = function(list) {
        return list[Math.floor(Math.random() * list.length)];
    }

    /**
     * @param {string} word
     * @returns {string}
     */
    global.lcminigames.scramble = function(word) {
        return word.split("")
            .sort(() => 0.5 - Math.random())
            .sort(() => 0.5 - Math.random())
            .sort(() => 0.5 - Math.random())
            .sort(() => 0.5 - Math.random())
            .sort(() => 0.5 - Math.random())
            .join("");
    }

    global.lcminigames.shuffle = function(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    global.lcminigames.centeredMessage = function(msg){
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

    global.lcminigames.createChatFrame = function(title, content) {
        return Text.join(
            Text.yellow(global.lcminigames.centeredMessage(`§m${" ".repeat(81)}`)),
            "\n",
            Text.green(global.lcminigames.centeredMessage(`§l${title}`)),
            "\n\n",
            content,
            "\n\n",
            Text.yellow(global.lcminigames.centeredMessage(`§m${" ".repeat(81)}`))
        );
    }

    /**
     * @param {NonNullable<unknown>} obj
     * @param {string} prop
     * @param {*} defaultValue
     */
    global.lcminigames.findVal = function(obj, prop, defaultValue) {
        prop = prop.toLowerCase();
        const p = Object.keys(obj).find(k => obj.hasOwnProperty(k) && prop == k.toLowerCase());
        return p ? obj[p] : defaultValue;
    }

    /**
     * @param {any[]} array
     * @param {number} [depth]
     * @returns {any[]}
     */
    global.lcminigames.flatArray = function(array, depth) {
        if (!Array.isArray(array)) return array;
        if (!depth) depth = 1;
        for (let i = 0; i < depth; i++) {
            if (!array.find(e => Array.isArray(e))) break;
            array = [].concat.apply([], array);
        }
        return array;
    }

    global.lcminigames.SECOND_TICKS = 20;
    global.lcminigames.MINUTE_TICKS = global.lcminigames.SECOND_TICKS * 60;
    global.lcminigames.HOUR_TICKS = global.lcminigames.MINUTE_TICKS * 60;
})();
