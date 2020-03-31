  //Slideshow object that contains all the code
  //NextPhoto() that cycles through photolist index, then shows 'end of slideshow' after cycling through entire index
  //PrevPhoto() opposite of above
  //CurrentPhoto() shows the current photo index
  //use the "this" element
  //*********'var' = possible global element, use 'let' instead*****
  let slideshow = {
       photoList: ['photo1', 'photo2', 'photo3'],
       currentPhotoIndex: 0,
       
       nextPhoto: function() {
       	if (this.currentPhotoIndex < this.photoList.length) {
       		return this.currentPhotoIndex[this.currentPhotoIndex]
       		this.currentPhotoIndex++; //cycles through index
       	} else {				//after last index, prints 'end slideshow'
       		console.log('end slideshow');
     }
   },
     


      prevPhoto: function() {
       	if (this.currentPhotoIndex > 0) {
       		return this.currentPhotoIndex[this.currentPhotoIndex]
       		this.currentPhotoIndex--;//cycles index in reverse
       	} else {  //print 'end slide' after last index
       		console.log('end slideshow');
     }
   },
  	  CurrentPhoto: function(){
  	  	return photoList[this.currentPhotoIndex] //prints the current index
   },
 }