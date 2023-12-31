import { Todo_input,renderItem,clearInput} from "./dom.js";
import { addItem,onRemove,selectFilter,search } from "./functionality.js";
import { deleteStorage, updateDraft } from "./storage.js";
import { select_btn } from "./store.js";
const Add_btn=document.querySelector("#add-btn");
const remove_btn=document.querySelector("#remove");
const search_btn=document.querySelector("#search");


function validationCheck(){
    const val=Todo_input.value;

    if(val === ""){
        alert("you can not add empty string!");
        return;
    }else{ 
        const item={
        title: val,
        status: false,
        };
       addItem(item);
       renderItem(item);
       clearInput();

    }
}
export function events(){
    Add_btn.addEventListener("click", validationCheck);     
    Add_btn.addEventListener("click", deleteStorage);     

    
    remove_btn.addEventListener("click",()=>{
     onRemove(); })
    
         select_btn.addEventListener("change", () => {
            selectFilter();
          
         })
         select_btn.addEventListener("click", () => {
            selectFilter();
          
         })

    search_btn.addEventListener("click" ,()=>{
        search();

    })   
    Todo_input.addEventListener("keyup",(e)=>{
        console.log(e)
        const char=e.key;
        if(char === "Backspace"){
             
            
            deleteStorage()
        }
        else if(char==="Delete"){
            deleteStorage()

        }
        else{
            updateDraft(char);

        }



    })  
        }