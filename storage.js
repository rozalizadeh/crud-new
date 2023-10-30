
import { list ,reset} from "./store.js";


export function syncStorage(){
      
    const string_List= JSON.stringify(list);
    localStorage.setItem("my_list", string_List);
    console.log(list);
}
export function loadFromStorage(){

    const listFromStorage=JSON.parse(localStorage.getItem("my_list")) || [];
   reset(listFromStorage);
   
}