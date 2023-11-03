
import { list ,reset } from "./store.js";
import { firstLoad } from "./storage.js";
import { clearInput, renderList,Todo_input} from "./dom.js"
import { events } from "./events.js";
import { get_todos_list } from "./api/todos.js";

function init(){
    firstLoad();
    get_todos_list().then((list)=>{
    
    reset(list);
    renderList();


   });

    events();
    console.log(list);
}
console.log(list);
init();
