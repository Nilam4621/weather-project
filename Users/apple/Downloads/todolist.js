let tasks = [];

const addTask=()=>{
    const taskInput=document.getElementById('taskInput');
    const text=taskInput.ariaValueMax.trim();

    if(text){
        tasks.push({text:text,completed:false});
        taskInput.value="";
        updateTasksList();
    }
      const updateTasksList=()=>{
        const taskList=document.getElementById('task-List');
        taskList.innerHTML="";

        tasks.forEach (task =>{
            const listitem = document.createElement('li');
        listitem.addEventListener('change',()=>
        

            
        });
      }
};

document.getElementById('newTask').addEventListener('click',function(e){
    e.preventDefault()
    addTask();
});