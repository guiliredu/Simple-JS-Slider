//
// Simple JS Slider
// 

// (function(){

	function simpleSlider(config){
		if(config.wrapElement){ this.wrapElement = config.wrapElement; }
		if(config.slideElement){ this.slideElement = config.slideElement; }
	}

	simpleSlider.prototype.wrapElement = '#slider';
	simpleSlider.prototype.slideElement = '.slide';

// });