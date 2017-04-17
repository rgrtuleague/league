/**
 * Created by Sergey on 17.04.2017.
 */
function Slider(selector, options) {

    var __self = this;
    // DOM Nodes
    var sliderNode = document.querySelector(selector),
        sliderImagesNode = sliderNode.querySelector('.slider__images-wrap'),
        prevSliderNode = sliderNode.querySelector('.slider__pager_previous'),
        nextSliderNode = sliderNode.querySelector('.slider__pager_next'),
        paginationNode = sliderNode.querySelector('.slider__pagination');

    var currentSlideIndex = options.currentSlide || 0,
        imagesCount = sliderImagesNode.children.length,
        slideSize = sliderImagesNode.offsetWidth;

    this.prevSlide = function() {
        if (currentSlideIndex === 0) {
            currentSlideIndex = imagesCount-1;
            return;
        }
        currentSlideIndex--;
    };

    this.nextSlide = function() {
        if (currentSlideIndex === imagesCount-1) {
            currentSlideIndex = 0;
            return;
        }
        currentSlideIndex++;
    };


    this.__render = function() {
        sliderImagesNode.style.marginLeft = -(currentSlideIndex * slideSize) + 'px';
    };

    prevSliderNode.onclick = function() {
        __self.prevSlide();
        __self.__render();
    };

    nextSliderNode.onclick = function() {
        __self.nextSlide();
        __self.__render();
    };

    this.__render();

}