//
// Simple JS Slider
// 
// Author: Guilherme Redü
// Github: https://github.com/guiliredu/Simple-JS-Slider
// 

// (function(){

	function simpleSlider(config){
		// Override properties
		if(config.wrapElement){ this.wrapElement = config.wrapElement; }
		if(config.slideElement){ this.slideElement = config.slideElement; }
		if(config.slideDelay){ this.slideDelay = config.slideDelay; }
		if(config.navPrevElement){ this.navPrevElement = config.navPrevElement; }
		if(config.navNextElement){ this.navNextElement = config.navNextElement; }
		this.totalElements = document.getElementsByClassName(this.slideElement).length;

		// Add classes to the slides
		var slides = document.getElementsByClassName(this.slideElement);

		for (var i = 0; i < slides.length; i++) {
		    slides[i].className = slides[i].className+' '+this.slideElement+'-'+(i+1);
		    if(i > 0){
		    	slides[i].style.display = 'none';
		    }
		}

	}

	simpleSlider.prototype.wrapElement = 'js-slider';
	simpleSlider.prototype.slideElement = 'js-slide';
	simpleSlider.prototype.navPrevElement = 'js-slide-nav-prev';
	simpleSlider.prototype.navNextElement = 'js-slide-nav-next';
	simpleSlider.prototype.totalElements = 0;
	simpleSlider.prototype.slideDelay = 1000;
	simpleSlider.prototype.slide = 1;
	simpleSlider.prototype.slideInterval = null;

	simpleSlider.prototype.slideInit = function(){
		// if the interval is set, clear
		clearInterval(this.slideInterval);
		var self = this

		// create new interval
		this.slideInterval = window.setInterval(function(){
			self.slideNavNext(self);
		}, this.slideDelay);

		// create click events in the nav buttons
		if(document.getElementsByClassName(this.navNextElement).length > 0){
			var navNext = document.getElementsByClassName(this.navNextElement)[0];
			navNext.addEventListener("click", function(){
				self.slideNavNext(self)
			});
		}
		if(document.getElementsByClassName(this.navPrevElement).length > 0){
			var navPrev = document.getElementsByClassName(this.navPrevElement)[0];
			navPrev.addEventListener("click", function(){
				self.slideNavPrev(self)
			});
		}
	}

	simpleSlider.prototype.slideNavNext = function(self){
		self.slide++;

		if(self.slide <= self.totalElements){
			self.slideChange(self.slide);
		}else{
			self.slide = 1;
			self.slideChange(self.slide);
		}
	}

	simpleSlider.prototype.slideNavPrev = function(self){
		self.slide--;

		if(self.slide > 0){
			self.slideChange(self.slide);
		}else{
			self.slide = self.totalElements;
			self.slideChange(self.slide);
		}
	}

	simpleSlider.prototype.slideChange = function(newSlide){
		var slides = document.getElementsByClassName(this.slideElement);

		for (var i = 0; i < slides.length; i++) {
		    slides[i].style.display = 'none';
		}

		document.getElementsByClassName(this.slideElement+'-'+newSlide)[0].style.display = 'block';
	}


// });