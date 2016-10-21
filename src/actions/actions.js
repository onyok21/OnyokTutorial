export const ADD_TODO='ADD_TODO'

let nextTodoid=0;

export function addTodo(text){
	return{
	type: ADD_TODO,
	id: nextTodoId++,
	text
	};
}