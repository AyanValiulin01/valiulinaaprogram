
/*
    В этом примере все обработчики событий в App.js используют мутацию. В результате редактирование и удаление todos не работает. Перепишите handleAddTodo, handleChangeTodo и handleDeleteTodo с помощью Immer
*/import { useImmer } from 'use-immer';
import AddTodo from './AddTodo';
import TaskList from './TaskList';

export type Todo = {
    id: number;
    title: string;
    done: boolean;
}

let nextId = 3;
const initialTodos: Todo[] = [
    { id: 0, title: 'Buy milk', done: true },
    { id: 1, title: 'Eat tacos', done: false },
    { id: 2, title: 'Brew tea', done: false },
];

export default function TaskApp() {
    const [todos, setTodos] = useImmer(initialTodos);

    function handleAddTodo(title: string) {
        setTodos(draft => {
            draft.push({ id: nextId++, title, done: false }); // ✅ Используем Immer для добавления нового todo
        });
    }

    function handleChangeTodo(nextTodo: Todo) {
        setTodos(draft => {
            const todo = draft.find(t => t.id === nextTodo.id);
            if (todo) {
                todo.title = nextTodo.title;
                todo.done = nextTodo.done;
            }
        });
    }

    function handleDeleteTodo(todoId: number) {
        setTodos(draft => {
            return draft.filter(todo => todo.id !== todoId); // ✅ Удаляем todo через `filter`
        });
    }

    return (
        <>
            <AddTodo onAddTodo={handleAddTodo} />
            <TaskList
                todos={todos}
                onChangeTodo={handleChangeTodo}
                onDeleteTodo={handleDeleteTodo}
            />
        </>
    );
}
