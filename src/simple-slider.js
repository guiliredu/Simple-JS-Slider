//
// Simple JS Slider
// 

// (function(){

	function simpleSlider(config){
		// Override properties
		if(config.wrapElement){ this.wrapElement = config.wrapElement; }
		if(config.slideElement){ this.slideElement = config.slideElement; }
		this.totalElements = document.getElementsByClassName(this.slideElement).length;

		// Add classes to the slides
		var slides = document.getElementsByClassName(this.slideElement);

		for (var i = 0; i < slides.length; i++) {
		    slides[i].className = slides[i].className+' slide-'+(i+1);
		}

	}

	simpleSlider.prototype.wrapElement = 'slider';
	simpleSlider.prototype.slideElement = 'slide';
	simpleSlider.prototype.totalElements = 0;

// });