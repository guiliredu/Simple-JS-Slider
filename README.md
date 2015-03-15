# Simple-JS-Slider
Just a simples JS slider

Important: This repo is used to learn javascript, not to use in production. Feel free to uset it whatever you want.

###Usage

instance the object and call the `slideInit()` method

```javascript
var slider = new simpleSlider();
slider.slideInit();
```
it will assume that you are using an estruture like this:

```html
<div id="slider">
	<div class="slide fadeInUp animated" style="background-image:url('assets/img/slide-1.jpg');"></div>
<div>
```

You can add parameters to the constructor:

```javascript
var slider = new simpleSlider({ 
	wrapElement: 'slider', //the id of the wrapper
	slideElement: 'slide', //the class of each slide
	slideDelay: 4000 //delay between each slide
});
```

###Todos

+ prev and next buttons
+ bullets with the number of slides

###Credits

+ Images from: [http://www.gratisography.com/](http://www.gratisography.com/)
+ Animations from: [animate.css](http://daneden.github.io/animate.css/)
