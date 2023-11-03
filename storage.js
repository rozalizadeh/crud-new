
import { Todo_input } from "./dom.js";
import { list ,reset} from "./store.js";

export const storage_key_todos="draft";
export function syncStorage(){
      
    const string_List= JSON.stringify(list);
    localStorage.setItem("my_list", string_List);
    console.log(list);
}
export function loadFromStorage(){

    const listFromStorage=JSON.parse(localStorage.getItem("my_list")) || [];
   reset(listFromStorage);
   
}
export function updateDraft(char){
    console.log(char);
    const old_string=localStorage.getItem(storage_key_todos) || "";
    const new_string=old_string+char;
    localStorage.setItem(storage_key_todos,new_string);
    Todo_input.value=new_string;

    

}
export function deleteStorage(){
localStorage.setItem(storage_key_todos,"");
    Todo_input.value="";


}
export function  firstLoad(){
    const temp=localStorage.getItem(storage_key_todos) || "";
    Todo_input.value=temp;


}

    
    
