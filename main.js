
var noDots = ["آ", "ا", "ح", "د", "ر", "س", "ص", "ط", "ع", "ک", "گ", "ل", "م", "و", "ه"];
var oneDots = ["ب", "ج", "خ", "ذ", "ز", "ض", "ظ", "غ", "ف", "ن"];
var twoDots = ["ت", "ق"];
var threeDots = ["پ", "ث", "چ", "ژ", "ش"];

function calculateDots(after){
    if (after === '' || after === null || after === undefined || after === ' '){
        return 0;
    }
    return 2;
}

$("#text").on("input", function(event){
    var result = 0;
    var value = event.target.value;

    if (value === '') {
        $("#dots-count").html(0);
    }

    for (var index in value) {
        var character = value[index];
        var nextIndex = parseInt(index) + 1;

        if (character === "ی") result += calculateDots(value[nextIndex]);
        else if (oneDots.includes(character)) result += 1;         
        else if (twoDots.includes(character)) result += 2;
        else if (threeDots.includes(character)) result += 3;       
    }

    $("#dots-count").html(result);
});