
let text = document.getElementById("notepad");
let header = document.getElementById("header");
let save = document.getElementById("save").addEventListener("click", getText);
let clear = document.getElementById("clear").addEventListener("click",clearNote);
let del = document.getElementById("delete").addEventListener("click",deleteNote);
let storage = document.getElementById("storage");



let listArray = [];
let noteArray = new Map();
let counter = 0;




function deleteNote()
{

  
  let top = header.value;

  noteArray.delete(top);
  console.log(noteArray);
  
  let a = document.getElementById("list").getElementsByTagName('li');

  for(i=0;i<a.length;i++)
  {
    if(a[i].innerHTML==top){
      a[i].remove();
      counter--;
    }
  }

  header.value = "";
  text.value = "";

  

  if(counter == 0){

    storage.style.animation= "popin 1s ease-in-out 1 forwards"
  }
}


function clearNote()
{
  header.value = "";
  text.value = "";
}


function getText()
{

  let note = text.value;
  let topic= header.value;
  
  if(note == '' || topic == '')
  {
    alert("Missing Statement")
    return
  }

  if(noteArray.has(topic)){

    alert("Already Defined")
    return;
  }

  noteArray.set(topic,note);
  console.log(noteArray);
  
  text.value = '';
  header.value = '';

  
  if(counter == 0){
    storage.style.animation= "popup 1s ease-in-out 1 forwards";
    setTimeout(addListElement,1000);
  }
  if(counter>0){
    addListElement();
  }

  function addListElement()
  {

    let list = document.getElementById("list");
    let output = topic

    
    
    

    list.innerHTML += "<li class= liste  id=liste>" + output +"</li>";
    counter++;
    let a = document.getElementById("list").getElementsByTagName('li');
    for(let i=0;i<a.length;i++)
    {
      a[i].addEventListener("click",function(){load(this.innerHTML)})

    }
       
  }
  
}



function load(d)
{
  console.log(counter);
  let head = d;
  let entry = noteArray.get(d);

  header.value = head;
  text.value = entry;

  console.log(listArray)
}

