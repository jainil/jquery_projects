function Slider( container, controller) {
	this.container = container;
	this.controller = controller;

	this.container.css('overflow', 'hidden')
	this.controller.css('display', 'block');

	this.imgs = this.container.find('img');
	this.imgWidth = this.imgs.outerWidth();
	this.imgsNum = this.imgs.length;
	
	this.current = 0;
}

Slider.prototype.transition = function(coords) {
  this.container.animate({'margin-left': coords || -(this.current * this.imgWidth)});	
}

Slider.prototype.setCurrent = function(dir) {
  var pos = this.current
  pos += ~~(dir === 'next') || -1;
  this.current = pos<0 ? this.imgsNum-1 : pos%this.imgsNum;
}