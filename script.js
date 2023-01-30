function start_demo() {
    tell_story();
    gaze_control();
}

function addText(txt){
    document.getElementById("demo_steps").innerHTML += `<p>${txt}</p>`;
   }

function hello_world() {
    speak_text('Hello World!')
}

function speak_text(txt) {
    document.getElementById("char_count").innerHTML = `${txt.length} chars`;
    addText('sayText(txt,3,1,3)')
    sayText(txt,3,1,3)
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