

  const inpItem = document.getElementById('inputitems');
  const todobox = document.getElementById('to-do-box');
  inpItem.addEventListener("keyup",function(event){
      if(event.key=="Enter"&&this.value!=""){
      
       addtodo(this.value);
       this.value = "";
      }
    });
    
    const addtodo = (inpItem) =>{
      
      
      const listItem = document.createElement("li");
      listItem.innerHTML=`${inpItem}<i class="fa-solid fa-xmark" style="color: #ffffff;"></i>`;
     listItem.addEventListener("click",function(){
       this.classList.toggle("done");
     });
     listItem.addEventListener("dblclick",function(){
       listItem.remove();
       console.log("remove was clicked"); 
     });
     
    // listItem.querySelector("i").addEventListener{
    //   "click",function(){
    //     listItem.remove();
    //   }
    // }
     todobox.appendChild(listItem); 
    }
   
