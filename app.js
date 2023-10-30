import { loadFromStorage } from "./storage.js";
import { list } from "./store.js";
import { renderList} from "./dom.js"
import { events } from "./events.js";


function init(){
    loadFromStorage();
    renderList();
    events();
    console.log(list);
}
console.log(list);
init();
