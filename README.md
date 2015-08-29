# Simple-JS-Slider
Just a simples JS slider

Important: This repo is used to learn javascript, not to use it in production projects. Feel free to uset it whatever you want.

###Usage

instance the object and call the `slideInit()` method

```javascript
var slider = new simpleSlider();
slider.slideInit();
```
it will assume that you are using an html structure like this:

```html
<div id="js-slider">
	<div class="js-slide fadeInUp animated" style="background-image:url('assets/img/slide-1.jpg');"></div>
<div>
```
and a CSS stylesheet like this:

```css
#slider { position:relative; }
#slider .slide { position:absolute }
```

You can add parameters to the constructor:

```javascript
var slider = new simpleSlider({ 
	wrapElement: 'slider', //the id of the wrapper
	slideElement: 'slide', //the class of each slide
	slideDelay: 4000 //delay between each slide
});
```

###To-dos

+ prev and next buttons
+ bullets with the number of slides

###Credits

+ Images from: [http://www.gratisography.com/](http://www.gratisography.com/)
+ Animations from: [animate.css](http://daneden.github.io/animate.css/)
