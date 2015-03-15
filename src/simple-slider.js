//
// Simple JS Slider
// 

// (function(){

	function simpleSlider(config){
		// Override properties
		if(config.wrapElement){ this.wrapElement = config.wrapElement; }
		if(config.slideElement){ this.slideElement = config.slideElement; }
		if(config.slideDelay){ this.slideDelay = config.slideDelay; }
		this.totalElements = document.getElementsByClassName(this.slideElement).length;

		// Add classes to the slides
		var slides = document.getElementsByClassName(this.slideElement);

		for (var i = 0; i < slides.length; i++) {
		    slides[i].className = slides[i].className+' slide-'+(i+1);
		    if(i > 0){
		    	slides[i].style.display = 'none';
		    }
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
		var self = this

		this.slideInterval = window.setInterval(function(){
			
			self.slide++;

			if(self.slide <= self.totalElements){
				self.slideChange(self.slide);
			}else{
				self.slide = 1;
				self.slideChange(self.slide);
			}
			// console.log('SLIDE: '+self.slide+' - TOTAL: '+self.totalElements);

		}, this.slideDelay);
	}

	simpleSlider.prototype.slideChange = function(newSlide){
		var slides = document.getElementsByClassName(this.slideElement);

		for (var i = 0; i < slides.length; i++) {
		    slides[i].style.display = 'none';
		}

		document.getElementsByClassName('slide-'+newSlide)[0].style.display = 'block';
	}


// });