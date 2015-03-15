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
	simpleSlider.prototype.slideDelay = 1000;
	simpleSlider.prototype.slide = 1;
	simpleSlider.prototype.slideInterval = null;

	simpleSlider.prototype.slideInit = function(){
		clearInterval(this.slideInterval);

		this.slideInterval = window.setInterval(this.slidePlus(this), this.slideDelay);
	}

	simpleSlider.prototype.slideChange = function(newSlide){
		document.getElementsByClassName(this.slideElement)[0].style.display = 'none';
		document.getElementsByClassName('slide-'+newSlide)[0].style.display = 'block';
	}

	simpleSlider.prototype.slidePlus = function(slider){
		slider.slide++;
		console.log(slider.slide);

		if(slider.slide <= slider.totalElements){
			slider.slideChange(slider.slide);
		}else{
			slider.slide = 1;
			slider.slideChange(slider.slide);
		}
	}


// });