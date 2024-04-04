const inputBox=document.getElementById("input-box")
const listConatiner=document.getElementById("list-container")
const addBtn=document.getElementById("add-btn");
addBtn.addEventListener("click",()=>{
    if(inputBox.value===''){
        alert("You must write task")
    }else{
        console.log(inputBox.value)
        const li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listConatiner.appendChild(li)
        const span=document.createElement("span");
        span.innerHTML="\u00d7"
        li.appendChild(span)
        
        
    }
    inputBox.value='';
    saveData()
})

listConatiner.addEventListener("click",(selected)=>{
    const tagName=selected.target.tagName
    console.log(tagName)
    if(tagName==="LI"){
        selected.target.classList.toggle("check");
    }else if (tagName==="SPAN"){
            selected.target.parentElement.remove();
    }
    saveData()
})
saveData=()=>{
    localStorage.setItem("Data",listConatiner.innerHTML)
}
showlist=()=>{
    listConatiner.innerHTML= localStorage.getItem("Data")
}
showlist();