function start_demo() {
    tell_story();
    gaze_control();
}

function addText(txt){
    document.getElementById("demo_steps").innerHTML += `<p>${txt}</p>`;
   }

function tell_story() {
    addText('sayText(txt,3,1,3)')
    let txt = `
    Christian Blast had always loved urban Chicago with its naughty, numerous nooks. It was a place where he felt unstable. 
    He was a cute, smelly, wine drinker with ginger fingers and solid arms. His friends saw him as an eggy, elated elephant. 
    Once, he had even made a cup of tea for a kosher deaf person. That's the sort of man he was.
    Christian walked over to the window and reflected on his creepy surroundings. The sun shone like rampaging elephants.
    Then he saw something in the distance, or rather someone. It was the figure of Suzanne McCallister. 
    Suzanne was a friendly doctor with ugly fingers and handsome arms.
    Christian gulped. He was not prepared for Suzanne.
    As Christian stepped outside and Suzanne came closer, he could see the old smile on her face.
    "Look Christian," growled Suzanne, with a selfish glare that reminded Christian of friendly donkeys. 
    "It's not that I don't love you, but I want love. You owe me 4288 pounds."
    Christian looked back, even more anxious and still fingering the damp torch. "Suzanne, get out of my house," he replied.
    They looked at each other with healthy feelings, like two dry, dirty dogs singing at a very bold bar mitzvah, 
    which had R & B music playing in the background and two rude uncles eating to the beat.
    Suddenly, Suzanne lunged forward and tried to punch Christian in the face. 
    Quickly, Christian grabbed the damp torch and brought it down on Suzanne's skull.
    Suzanne's ugly fingers trembled and her handsome arms wobbled. 
    She looked anxious, her wallet raw like a relieved, rapid record.
    Then she let out an agonising groan and collapsed onto the ground. 
    Moments later Suzanne McCallister was dead.
    Christian Blast went back inside and made himself a nice glass of wine.`
    txt = 'Hello World'
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