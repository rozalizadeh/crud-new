import { list } from "./store.js";
import { syncStorage,loadFromStorage } from "./storage.js";
import { reset ,select_btn } from "./store.js";
import { renderList } from "./dom.js";
const inp_search=document.querySelector("#inp-search");


export function toggleStatus(title){
    for(let i=0 ; i<list.length ; i++){

        if (list[i].title===title){
            list[i].status=!list[i].status;
            

                     }
    }
    syncStorage();
}
export function selectFilter(){
    switch(select_btn.value){
        case "todo":
            loadFromStorage();
            const select_todo= list.filter((item) =>{
                return !item.status;
              })
              reset(select_todo)
              renderList();
            break;
        case "done":
            loadFromStorage();
            const select_done= list.filter((item) =>{
                return item.status;
              })
              reset(select_done)
              renderList();
            break;
        case "all":
            loadFromStorage();
            renderList();
            break;
    
    }
    
    }
    
    export function Delete(title){
        
        for(let i=0;i<list.length;i++){
            if(list[i].title===title){
             list.splice(i,1);
            }
           
         }
         syncStorage();
         renderList();
          
         console.log(list);
        }
     export function onRemove(){
     const newlist= list.filter((item) =>{
       return !item.status;
     })
     reset(newlist)
     
     syncStorage();
     renderList();
    
     }
    // search
        export function search(){
            
            loadFromStorage();
            const templist=[];
            list.forEach((title,i)=>{
                let temp=list[i].title;
                if(temp.includes(inp_search.value)){
                    templist.push(list[i]);
                          }
                    });
           if(templist.length===0){
            alert("the string you are looking for is not founded!!!")
            renderList();
            inp_search.value="";
           } 
           else{
           reset(templist)
        console.log("list:",list);
        renderList();
        inp_search.value="";
    
        }}
    
    //work with storage
    
    export function addItem(item){
    
        const next_item={
            title: item.title,
            status: item.status,
        };
        list.push(next_item);
        syncStorage();
               
    
    }