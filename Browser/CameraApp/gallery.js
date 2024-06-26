setTimeout(()=>{
    if(db){
        let imageDBTransaction = db.transaction("image",'readonly');
        let imageStore = imageDBTransaction.objectStore("image");

        let imageRequest = imageStore.getAll();
        //request.result is key for new object

        imageRequest.onsuccess = () => {
            let imageResult = imageRequest.result;
            let galleryCont = document.querySelector(".gallery-cont");
            //imageresult contains array of all images object
            imageResult.forEach((imageObj)=>{
                let imageElem = document.createElement("div");
                imageElem.setAttribute("class", "media-cont");
                imageElem.setAttribute("id", imageObj.id);
                let url = imageObj.url;

                imageElem.innerHTML = `
                <div>
                <img src = "${url}"/>
                </div>
                <div class = "delete">DELETE<div>
                <div class = "download">DOWNLOAD<div>
                `;

                galleryCont.appendChild(imageElem);

                let deleteBtn = document.querySelector(".delete");
                deleteBtn.addEventListener("click", deleteListener);

                let downloadBtn = document.querySelector(".download");
                downloadBtn.addEventListener("click", downloadListener);
            });
        };
            

        let videoDBTRansaction = db.transaction("video", "readonly");
        let videoStore = videoDBTRansaction.objectStore("video");
        let videoRequest = videoStore.getAll();
        videoRequest.onsuccess = () => {
            let videoResult = videoRequest.result;
            let galleryCont = document.querySelector(".gallery-cont");

            // for (let i = 0; i < videoResult.length; i++) {
            //     let videoObj = videoResult[i];
            // }

            videoResult.forEach((videoObj) => {
                let videoElem = document.createElement("div");
                videoElem.setAttribute("class", "media-cont");
                videoElem.setAttribute("id", videoObj.id);
                let url = videoObj.url;

                videoElem.innerHTML = `
            <div>
            <video autoplay loop src="${url}"></video>
            </div>
            <div class="delete">DELETE</div>
            <div class="download">DOWNLOAD</div>
        `;

                galleryCont.appendChild(videoElem);

                let deleteBtn = document.querySelector(".delete");
                deleteBtn.addEventListener("click", deleteListener);

                let downloadBtn = document.querySelector(".download");
                downloadBtn.addEventListener("click", downloadListener);
            });
        };
    }
}, 100);

function deleteListener(e){

    // let type = url.split(":")[1];//image or video
    let id = e.target

    }
        
function downloadListener() {

}