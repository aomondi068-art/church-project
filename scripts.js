const module=document.getElementById("prayer modal")
const form=document.getElementById("prayer form")
function openmodal(){
     if (!modal)return
   Module.style.display="flex"
document.body.classList.add(module-open)
const firstField=document.getElementById("name")
if (firstField){
    setTimeout (() =>firstField.focus(50){
    }, Timeout);
}
}
function closeModal(){
if(!modal)return
modal.style.display="none"
document.body.classList.remove(modal,open)
}
if(modal){
    window.onclick=(event){
        if(event.target === modal ){
            closeModal();
        }
    }
    
}