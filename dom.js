import { toggleStatus,Delete } from "./functionality.js";
import { list } from "./store.js";
const Todo_list=document.querySelector(".list");
export const Todo_input=document.querySelector("#todo-input");


export function renderItem(item){

    const div_item=document.createElement("div");
    div_item.classList.add("item");
    
    const checkbox=document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.checked=item.status;

    const del_btn=document.createElement("button");
    del_btn.setAttribute("type", "button");
    del_btn.textContent="Delete";
    del_btn.classList.add("delete");
    del_btn.addEventListener("click",()=>{
          Delete(item.title); })
    
    const span=document.createElement("span");
    span.textContent=item.title;
    
    div_item.appendChild(checkbox);
    div_item.appendChild(span);
    div_item.appendChild(del_btn);
    Todo_list.appendChild(div_item);
    checkbox.addEventListener("click", ()=> {
    toggleStatus(item.title);
        
    })
  }
  export function clearInput(){
    Todo_input.value=""

}
export function renderList(){
    Todo_list.innerHTML="";
    
    for(let i =0 ; i<list.length ; i++){
        const item=list[i];
        renderItem(item);
    }

}