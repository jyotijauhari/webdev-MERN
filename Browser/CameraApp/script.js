let video = document.querySelector("video");
let captureBtnCont = document.querySelector(".capture-btn-cont");
let captureBtn = document.querySelector(".capture-btn");
let transparentColor = "transparent";
let recordBtnCont = document.querySelector(".record-btn-cont");
let recordBtn = document.querySelector(".record-btn");

let recorder;
let chunks = [];
let constraints = {
    video: true,
    audio:true
}

let shouldRecord = false;

navigator.mediaDevices.getUserMedia(constraints)
.then((stream) => {
    video.srcObject = stream;

    recorder = new MediaRecorder(stream);
    recorder.addEventListener("start", (e) => {
        //memory
        chunks = [];
        console.log("recording-started");
    })

    recorder.addEventListener("dataavailable", (e) => {
        chunks.push(e.data);
        console.log("recording pushed in chunks");
    });

    recorder.addEventListener("stop", () => {
        //convert video 
        let blob = new Blob(chunks, { type: 'video/mp4' });
        console.log("recording stopped");

        // download video on desktop
        let videoURL = URL.createObjectURL(blob);
        console.log(videoURL);

        let a = document.createElement('a');
        a.href = videoURL;
        a.download = "myvideo.mp4";
        a.click();
        //store in database
    })


});

//click photo
captureBtnCont.addEventListener("click", () => {
    captureBtn.classList.add("scale-capture");
    let canvas = document.createElement("canvas");
    let tool = canvas.getContext("2d");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    tool.drawImage(video, 0, 0, canvas.width, canvas.height);

    //applying filters on photo
    tool.fillStyle = transparentColor;
    tool.fillRect(0, 0, canvas.width, canvas.height);

    let imageURL = canvas.toDataURL();
    // let img = document.createElement("img");
    // img.src = imageURL;
    // document.body.append(img);
    setTimeout(()=>{
        captureBtn.classList.remove("scale-capture");
    },510);

});

recordBtnCont.addEventListener("click", () => {
    
    shouldRecord = !shouldRecord;
    if (shouldRecord) {
        recordBtn.classList.add("scale-record");
        //recording start
        recorder.start();
        //start timer
        startTimer();
        
        
    }

    else {
        //stop the recording
        recordBtn.classList.remove("scale-record");
        recorder.stop();
        // stop the timer
        stopTimer();
        
    }

});

let timer = document.querySelector(".timer");

let counter = 0;
let timerID;

function startTimer(){
    timer.style.display = 'block';
    function displayTimer(){
        let totalSeconds = counter;

        let hours = Number.parseInt(totalSeconds / 3600);
        totalSeconds = totalSeconds % 3600;

        let minutes = Number.parseInt(totalSeconds / 60);
        totalSeconds = totalSeconds % 60;

        let seconds = totalSeconds;

        hours = (hours < 10) ? `0 ${hours}` : hours;
        minutes = minutes < 10 ? `0 ${minutes}` : minutes;
        seconds = seconds < 10 ? `0 ${seconds}` : seconds;
        timer.innerText = `${hours}:${minutes}:${seconds}`;

        counter++;

    }

    //after every 1sec run displaytimer
    timerID = setInterval(displayTimer, 1000);
    counter = 0;
}

function stopTimer() {
    clearInterval(timerID);
    timer.innerText = "00:00:00";
    timer.style.display = 'none';
}

//filters add
// let filterLayer = document.querySelector(".filter-layer");
// let allfilters = document.querySelector(".filter");

// allfilters.forEach()

// let filter1 = document.querySelector(".orange");
// let filter2 = document.querySelector(".brown");
// let filter3 = document.querySelector(".pink");
// let filter4 = document.querySelector(".transparent");


// filter1.addEventListener("click", () => {
//     video.fillStyle()
// })