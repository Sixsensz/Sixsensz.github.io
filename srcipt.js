const imagesliders = document.querySelectorAll('.imageslider');
imagesliders.forEach((imageslider)=>{
    imageslider.addEventListener('click',()=>{
         removeActive()
        imageslider.classList.add('active');
    })
});

function removeActive(){
    imagesliders.forEach((imageslider)=>{
        imageslider.classList.remove('active')
    })
}

// Sricpt Certification

const imagesliders1 = document.querySelectorAll('.imageslider1');
imagesliders1.forEach((imageslider1)=>{
    imageslider1.addEventListener('click',()=>{
         removeActive()
        imageslider1.classList.add('active');
    })
});

function removeActive(){
    imagesliders1.forEach((imageslider1)=>{
        imageslider1.classList.remove('active')
    })
}
