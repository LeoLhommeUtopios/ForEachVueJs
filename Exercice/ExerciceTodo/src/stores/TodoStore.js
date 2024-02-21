import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useTodoStore = defineStore('todoStore',()=>{
    const todos = ref([]);

    function addTodo (newTodo){
        todos.value.push(newTodo);
    }
    
    function getTodo (id){
        return todos.value.find((todo)=> todo.id === id);
    }
    
    function updateStatus (id){
        let todoFind = getTodo(id);
            if(todoFind !== null){
                let index = todos.value.indexOf(todoFind);
                todoFind.isFinish = !todoFind.isFinish
                todos.value.splice(index,1,todoFind)
            }
    }
    
    function removeTodo (id){
        let todoFind = getTodo(id);
            if(todoFind !== null){
                let index = todos.value.indexOf(todoFind);
                todos.value.splice(index,1)
            }
    }

    return{todos,addTodo,getTodo,updateStatus,removeTodo}
})
