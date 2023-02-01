var EFFECT = "Default";
var VOICE = new Array(3, 1, 3);
function set_voice(voiceOption){
    addText(`set_voice(${voiceOption})`)
    if (voiceOption == 1){
        VOICE[2] = 3;
    }
    else {
        VOICE[2] = 2;
    }
}

function set_effect(effect){
    addText(`set_voice("${effect}")`)
    EFFECT = effect;
}

function addText(txt){
    document.getElementById("demo_steps").innerHTML += `<p>${txt}</p>`;
}

function hello_world() {
    speak_text('Hello World!')
}

function speak_text(txt) {
    document.getElementById("char_count").innerHTML = `${txt.length} chars`;

    switch(EFFECT) {
        case "Default":
            addText(`sayText(txt,3,1,${VOICE[2]})`)
            sayText(txt,3,1,VOICE[2])
            break;
        case "Robotic":
            addText(`sayText(txt,3,1,${VOICE[2]},\'R\',3)`)
            sayText(txt,3,1,VOICE[2],'R',3)
            break;
        case "Reverb":
            addText(`sayText(txt,3,1,${VOICE[2]},\'T\',2)`)
            sayText(txt,3,1,VOICE[2],'T',2)
            break;
        case "Echo":
            addText(`sayText(txt,3,1,${VOICE[2]},\'T\',1)`)
            sayText(txt,3,1,VOICE[2],'T',1)
            break;
        case "Phase":
            addText(`sayText(txt,3,1,${VOICE[2]},\'T\',4)`)
            sayText(txt,3,1,VOICE[2],'T',4)
            break;
        case "Whisper":
            addText(`sayText(txt,3,1,${VOICE[2]},\'W\',3)`)
            sayText(txt,3,1,VOICE[2],'W',3)
            break;
    }
}

function change_bg() {
    url = "url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Northwestern_Arch.jpg/800px-Northwestern_Arch.jpg?20050214042121)"
    document.getElementById("sitepal_window").style.backgroundImage = url
}

function clearDiv() {
    var div = document.getElementById("demo_steps");
    while(div.firstChild) {
        div.removeChild(div.firstChild);
    }
}

function look_left() {
    addText('setGaze(270,  3, 100)')
    setGaze(270,  3, 100)
}

function look_right() {
    addText('setGaze(90,  3, 100)')
    setGaze(90,  3, 100)
}

function look_center() {
    addText('recenter()')
    recenter()
}

function follow_cursor(mode) {
    addText(`followCursor(${mode})`)
    followCursor(mode)
}

function emote(emotion) {
    addText(`setFacialExpression(${emotion}, 0.7, 3)`)
    setFacialExpression(emotion,0.7,3)
}