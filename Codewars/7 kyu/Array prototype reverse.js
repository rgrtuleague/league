/**
 * Created by Sergey on 24.03.2017.
 */

// Напишем свой метод reverse(), который не используя другие массивы в качестве переменных, реализует
// стандартный метод

Array.prototype.reverse = function(){
    for (var i=2;i<this.length+1;i++) {
    var removed = this.splice(this.length-i, 1);
    this.push(removed[0]);
    }
    return this;
};
console.log([1,2,3,4].reverse());

















