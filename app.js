var API_BASE_URL = 'http://localhost:1234';
var app = new Vue({
    el: '#app',    
    data: {
        taskList: []
    },
    created: function() {
        this.loadTasks();
    },
    methods: {
        loadTasks: function() {
            $.get(API_BASE_URL + "/tasklist", function(data, status){
                console.log(data);
                app.taskList = data;
              });
        }
    }
});
