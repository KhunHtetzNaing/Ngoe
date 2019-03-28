var sign = '#MMAdsense#';

function encode(text) {
    var result = "";
    text.split("").map(function(bin) {
        result += bin.charCodeAt(0).toString(2) + 'z';;
    });
    return sign+result;
}
