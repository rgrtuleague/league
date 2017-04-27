/**
 * Created by Sergey on 27.04.2017.
 */

$(function() {
    var ToDo = function() {

        this.model = [
            {text: 'купить молоко'},
            {text: 'Надеть трусы'},
            {text: 'Сходить на работу'}
        ];

        this.inputField = $(".task-form__text");
        this.form = $(".task-form");
        this.todoList = $('.table__body');

        this.init();
    };

    ToDo.prototype.getLength = function () { // получить размер нашей модели, количество элементов на текущий момент
      return this.model.length;
    };

    ToDo.prototype.getItemHtml = function(position, item) { // сгенерировать html строку для вставки с список
        var tmpl = '<tr><th>:position</th><td>:text</td><td><button type="button" class="btn btn-info">&#8593;</button></td><td><button type="button" data-index=":index" class="btn btn-danger">X</button></td></tr>';
        return tmpl.replace(/:position/gi, position).replace(/:text/gi, item).replace(/:index/gi, position-1);
    };

    ToDo.prototype.addItem = function(todoText) { // добавить новый элемент в список
        var newTodo = { text: todoText};
        this.model.push( newTodo );
        this.appendRenderItem(this.getLength(), newTodo);
    };

    ToDo.prototype.appendRenderItem = function(index, item) { // добавить новый элемент в DOM в конец списка
        this.todoList.append(this.getItemHtml(index, item.text));
    };

   ToDo.prototype.renderList = function() { // отрендерить весь список полностью
       var list = '',
       __self = this;

       $.each(this.model, function (index, item) {
           list += __self.getItemHtml(index + 1, item.text);
       });
       this.todoList.html(list);
   };

    ToDo.prototype.onFormSubmit = function(e) { // действия при нажатии кнопки Add
        e.preventDefault();
        this.addItem(this.inputField.val());
        this.form.trigger('reset');  // чистим инпут строки ввода задачи
    };

    ToDo.prototype.removeItem = function(index) { // удаление элемента
      this.model.splice(index, 1);
      this.renderList();
    };



    ToDo.prototype.init = function() { // инициализация
      var __self = this;

        this.renderList();

        this.todoList.on('click', '.btn-danger', function(e) {
            var index = $(e.target).data('index');
            __self.removeItem(index);
            console.log(index);
        });

      this.form.submit(function(e) {
          __self.onFormSubmit(e);
      });

    };


    window.todo = new ToDo();
});






































