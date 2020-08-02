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
        },
        //DELETEボタンが押されたら該当するtodoを削除
        deleteTodo(id) {
            const index = this.getIndexBy(id);
            this.todos.splice(index, 1);
        },
        //DONEとRETURNボタンが押されたら該当するtodoのisDone値を反転する
        toggleIsDone(id) {
            const index = this.getIndexBy(id);
            this.todos[index].isDone = !this.todos[index].isDone;
        },
        //イベントハンドリングでクリックされたtodoのidを元にtodosのindexを調べて返す
        getIndexBy(id) {
            const filteredTodo = this.todos.filter(todo => todo.id === id)[0];
            const index = this.todos.indexOf(filteredTodo);
            return index;
        },
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