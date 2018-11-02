var arraytasks=[]; 
console.log(localStorage.tasks);
$("#addbutton").click(function addNewtask(e)
{
    var newTask = $("#add-task").val();
    arraytasks.push(newTask);
   if( newTask!=="")
   {
    var deletebtn = document.createElement('button');
    deletebtn.classList.add('delete');
    deletebtn.innerHTML ='Delete';
    deletebtn.addEventListener('click', deleteToDoItem);
    var dlinetime = document.createElement('button');
    dlinetime.classList.add('dlinetime');
    dlinetime.innerHTML = 'Time';
    //editbtn.addEventListener('click', editToDoItem);
    var checkbox = document.createElement('input');
    checkbox.type='checkbox';
    checkbox.classList.add('checkbox');
    
    checkbox.addEventListener('click', checkToDoItem);
    var li= document.createElement('li');

    //append ...................................
   $(li).append(checkbox);
    $(li).append("<label>" + newTask + "</label>");
    $(li).append(deletebtn);
    $(li).append(dlinetime);
    $("#incomplete-tasks").append(li);
   // arraytasks.push(arraytasks[i]); 
    $("#add-task").val("");
    store();
    getValues();
   }else{
      e.preventDefault();
   }
}
);
 function onload()
 {
    
    var dotask=localStorage.tasks;
    console.log(" tasks  " + dotask) ;
    var storagetasks= dotask.split(",");
    arraytasks=storagetasks;
    console.log("result of split"+storagetasks[0]);
     for(i=0;i<storagetasks.length;i++)
     {

        var deletebtn = document.createElement('button');
     deletebtn.classList.add('delete');
     deletebtn.innerHTML ='Delete';
     deletebtn.addEventListener('click', deleteToDoItem);
     var dlinetime = document.createElement('button');
     dlinetime.classList.add('dlinetime');
     dlinetime.innerHTML = 'Time';
    //editbtn.addEventListener('click', editToDoItem);
     var checkbox = document.createElement('input');
     checkbox.type='checkbox';
     checkbox.classList.add('checkbox');
    checkbox.addEventListener('click', checkToDoItem);
    var li= document.createElement('li');

    //append ...................................
   $(li).append(checkbox);
    $(li).append("<label>" + storagetasks[i] + "</label>");
    $(li).append(deletebtn);
    $(li).append(dlinetime);

    // if ( $(checkbox).is(":checked") ) {
       $("#incomplete-tasks").append(li);
    // }
    // else
    //       {
    //          $("#complete-tasks").append(li);
             
    //       }
       }
 }
 onload();

var data;

function  deleteToDoItem(){
 $(".delete").click(function(){

     $(this).parent("li").remove();
     console.log($(this).parent("li"));
     for(i=0;i< arraytasks.length;i++)
     {
        localStorage.removeItem(arraytasks[i]);
     }
     //console.log(arraytasks[this]);
     //localStorage.removeItem(arraytasks[]);
 });
}
function checkToDoItem(){
    $(this ).parent('li').prependTo( "#completed-tasks" );
    $(this ).$("label").css("text-decoration","line-through");
}
 function store() {
    window.localStorage.setItem("tasks",arraytasks);
    console.log("  in store  "+ arraytasks);
 }

     function getValues() {
      data = window.localStorage.getItem("tasks");
     console.log(" data " +data);
     }

    



//console.log(localStorage);
/////console.log(localStorage.tasks);

    


 
 


