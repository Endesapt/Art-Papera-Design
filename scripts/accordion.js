"use strict"
//==========================================


const titles = document.querySelectorAll('.accordion__title');
const allContents = document.querySelectorAll('.accordion__content');
    titles.forEach(item => item.addEventListener('click', () => {
  
        const contents = item.parentElement.parentElement.querySelectorAll('.accordion__content');
        const titlesNew=item.parentElement.parentElement.querySelectorAll('.accordion__title');
        const activeContent = document.querySelector('#' + item.dataset.tab);

        if (activeContent.classList.contains('active')) {
            activeContent.classList.remove('active');
            item.classList.remove('active');
            activeContent.style.maxHeight = 0;
        } else {
            contents.forEach(element => {
                element.classList.remove('active');
                element.style.maxHeight = 0;
            });

            titlesNew.forEach(element => element.classList.remove('active'));

            item.classList.add('active');
            activeContent.classList.add('active');
            activeContent.style.maxHeight = 1000  + 'px';
        }
    }))


document.getElementById("catalog").onclick=(e)=>{
    console.log(e);
    if ( !e.target.classList.contains("overlay") ) {
        return;
    }   
    document.getElementById("catalog").style.opacity=0;
    document.getElementById("accordion").style.maxWidth=0+"px";
    setTimeout(()=>{document.getElementById("catalog").style.visibility="hidden";},2);
}
function openWindow(){
    document.getElementById("catalog").style.visibility="visible";
    document.getElementById("catalog").style.opacity=1;
    document.getElementById("accordion").style.maxWidth=1000+"px";

}