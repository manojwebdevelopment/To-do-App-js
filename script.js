const inputBox = document.getElementById('inputbox');
const addBtn = document.getElementById('addlistbutton');
const list = document.getElementById('list');

addBtn.addEventListener('click',()=>{
    if(inputBox.value === ""){
        alert("write somthings");
    }
    else
    {
        var li = document.createElement("li");
            li.innerHTML = inputBox.value;
            list.appendChild(li);
        let span = document.createElement("span");
            span.innerHTML = "X";
            span.classList.add("close");
            li.appendChild(span);
            // console.log(span);
    }
    inputBox.value = "";
    savedata();
})

list.addEventListener('click',(e)=>{
    if(e.target.tagName =="LI"){
       e.target.classList.toggle("checked")
       savedata();
    }
    else if(e.target.className === "close") {
        e.target.parentElement.remove();
        savedata();

    }
},false)
 function savedata(){
    localStorage.setItem("data",list.innerHTML);

 }

 function showlist(){
    list.innerHTML = localStorage.getItem("data");
 }
 showlist();
