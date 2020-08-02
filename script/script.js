const app = new Vue({
    el: '#app',
    data() {
        return {
            todos: [],
            text: '',
        };
    },
    methods: {
        inputText(e) {
            this.text = e.target.value;
        },

        addTodo() {
            //textが空なら何もしない
            if (!this.text) {
                return;
            }
            //todoの作成
            const text = this.text;
            const id = Math.ceil(Math.random() * 100);
            const todo = {
                id,
                text,
                isDone: false,
            };
            this.todos.push(todo);
            this.resetText();
        },

        resetText() {
            this.text = '';
        }
    },
    computed: {
        doneTodo() {
            return this.todos.filter(todo => todo.isDone === true);
        },
        incompleteTodo() {
            return this.todos.filter(todo => todo.isDone === false);
        },
    },
});