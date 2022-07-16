
let text = document.getElementById("notepad");
let header = document.getElementById("header");
let save = document.getElementById("save").addEventListener("click", getText);
let clear = document.getElementById("clear").addEventListener("click",clearNote);
let del = document.getElementById("delete").addEventListener("click",deleteNote);



let listArray = [];
let noteArray = new Map();
let counter = 0;


function deleteNote()
{

  debugger
  let top = header.value;

  noteArray.delete(top);
  console.log(noteArray);
  
  let a = document.getElementById("list").getElementsByTagName('li');

  for(i=0;i<a.length;i++)
  {
    if(a[i].innerHTML==top){
      a[i].remove();
    }
  }

  header.value = "";
  text.value = "";

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

  addListElement();

  function addListElement()
  {

    let list = document.getElementById("list");
    let output = topic



    list.innerHTML += "<li class= liste  id=liste>" + output +"</li>";
    
    let a = document.getElementById("list").getElementsByTagName('li');
    for(let i=0;i<a.length;i++)
    {
      a[i].addEventListener("click",function(){load(this.innerHTML)})
    }
       
  }
  counter++;
}



function load(d)
{
  console.log(d);
  let head = d;
  let entry = noteArray.get(d);

  header.value = head;
  text.value = entry;

  console.log(listArray)
}

