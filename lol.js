var sign = '#MMAdsense#';

function decode(text) {
    var temp = "";
    text.split("z").map(function(bin) {
        temp += String.fromCharCode(parseInt(bin, 2));
    });
    return temp.substring(0, temp.length - 1);
}

function is_url(str) {
    if(str.indexOf(window.location.href) != -1) {
        return true;
    }else{
        return false;
    }
}

function findElements(tag) {
    var elements = document.getElementsByTagName(tag);
    for (var i = 0; i < elements.length; i++) {
        if (tag == 'meta') {
            var found = elements[i].content;
        } else {
            var found = elements[i].innerHTML;
        }
        var found_temp = found;
        
        if(is_url(found)!=true){
            found = found.match(/#MMAdsense#(.*z)/gm);
            if (found != null) {
                found = found[0];
            } else {
                found = found_temp;
            }
        }

        var id = elements[i].id;
        if (found.startsWith(sign) != false) {
            found = found.replace(sign, '');
            if (tag == 'meta') {
                elements[i].content = decode(found);
            } else {
                elements[i].innerHTML = decode(found);
            }
            var input = document.createElement("input");
            input.id = "z" + id;
            input.style.display = "none";
            input.value = "";
            elements[i].append(input);
        }
    }
}
var changeElements = ['a', 'div', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'title', 'body', 'meta'];
for (var i = 0; i < changeElements.length; i++) {
    findElements(changeElements[i]);
}
