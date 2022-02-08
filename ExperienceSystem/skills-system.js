
var EXP = (function () {
    var DEFAULTS = {
        level: 1,
        xp: 0,
        cap: 30,
        deltaNext: 50
    };
    // set level with given EXP
    var set = function (EXP, deltaNext) {
        return (1 + Math.sqrt(1 + 8 * EXP / deltaNext)) / 2;
    };
    // get exp to the given level with given current_level and EXP
    var getEXPtoLevel = function (level, deltaNext) {
        return ((Math.pow(level, 2) - level) * deltaNext) / 2;
    };
    var parseByEXP = function (EXP, cap, deltaNext) {
        EXP = EXP === undefined ? DEFAULTS.EXP : EXP;
        cap = cap === undefined ? DEFAULTS.cap : cap;
        deltaNext = deltaNext === undefined ? DEFAULTS.deltaNext : deltaNext;
        var l = set(EXP, deltaNext);
        l = l > cap ? cap : l;
        var level = Math.floor(l),
        forNext = getEXPtoLevel(level + 1, deltaNext);
        forNext = l === cap ? Infinity : forNext;
        var toNext = l === cap ? Infinity : forNext - EXP;
        var forLast = getEXPtoLevel(level, deltaNext);
        return {
            level: level,
            levelFrac: l,
            EXP: EXP,
            per: (EXP - forLast) / (forNext - forLast),
            forNext: forNext,
            toNext: toNext,
            forLast: forLast
        };
    };
    return {
        parseByLevel: function (l, cap, deltaNext) {
            l = l === undefined ? DEFAULTS.level : l;
            deltaNext = deltaNext === undefined ? DEFAULTS.deltaNext : deltaNext;
            var EXP = getEXPtoLevel(l, deltaNext);
            console.log(EXP);
            return parseByEXP(EXP, cap, deltaNext);
        },
        parseByEXP: parseByEXP
    };
}
    ());