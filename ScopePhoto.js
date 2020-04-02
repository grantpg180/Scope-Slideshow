  //Slideshow object that contains all the code
  //NextPhoto() that cycles through photolist index, then shows 'end of slideshow' after cycling through entire index
  //PrevPhoto() opposite of above
  //CurrentPhoto() shows the current photo index
  //use the "this" element
  //*********'var' = possible global element, use 'let' instead*****
var slideshow = {
	show: ["p1", "p2", "p3", "p4", "p5"],
	slideIndex: [0],
	cycleThru: function() 
	{
		if (this.slideIndex < this.show.length) {
       		return this.slideIndex[this.slideIndex]
       		this.slideIndex++; //cycles through index
       	} else {				//after last index, prints 'end slideshow'
       		console.log('end slideshow');
	  }
	 
	},

	play: function()
	{
		if (this.slideIndex < this.show.length) {
       		return this.slideIndex[this.slideIndex]
       		this.slideIndex++; //cycles through index
       	} else {				//after last index, prints 'end slideshow'
       		console.log('end slideshow');
	  }
	 
	},
	autoPlay: function()
	{	
		setInterval(autoPlay, 2000);
		if (this.slideIndex < this.show.length) {
       		return this.slideIndex[this.slideIndex]
       		this.slideIndex++; //cycles through index
       	} else {				//after last index, prints 'end slideshow'
       		console.log('end slideshow');
	  }
	},
	previousSlide: function()
	{
		if (this.slideIndex > this.show.length) {
       		return this.slideIndex[this.slideIndex]
       		this.slideIndex--; //cycles through index
       	} else {				//after last index, prints 'end slideshow'
       		console.log('end slideshow');
	  }
	 
	},
	pauseSlide: function()
	{	
		clearInterval(this.slideIndex);
 		console.log('PAUSE');
 		console.log(this.slideIndex);
	}

}
//console.log(slideshow);
console.log(slideshow.play);
console.log(slideshow.cycleThru);
console.log(slideshow.autoPlay);
console.log(slideshow.pauseSlide);
console.log(slideshow.previousSlide);
slideshow.play();
slideshow.autoPlay();
slideshow.previousSlide();