function $(selector) {
	const self = {};

	self.selector = selector;
	self.element = document.querySelector(self.selector);
	self.kowlider = function (entries = '') {
		options = {
			element: self.element,
			sliderShadow: entries.sliderShadow ? entries.sliderShadow : false,
			customize: {
				width: false,
				height: false,
			},
			layout: entries.layout ? entries.layout : 'box',
			skin: entries.skin ? entries.skin : 'universal',
			control: entries.control === false ? entries.control : true,
			controlStyle: entries.controlStyle
				? {
						bgColor: entries.controlStyle.bgColor && entries.controlStyle.bgColor !== '' ? `${entries.controlStyle.bgColor}` : '',
						arrowColor: entries.controlStyle.arrowColor && entries.controlStyle.arrowcolor !== '' ? `${entries.controlStyle.arrowColor}` : '',
						borderWidth: entries.controlStyle.borderWidth && entries.controlStyle.borderWidth !== '' ? `${entries.controlStyle.borderWidth}` : '',
						borderColor: entries.controlStyle.borderColor && entries.controlStyle.borderColor !== '' ? `${entries.controlStyle.borderColor}` : '',
						borderRadius: entries.controlStyle.borderRadius && entries.controlStyle.borderRadius !== '' ? `${entries.controlStyle.borderRadius}` : '',
				  }
				: '',
			navigation: entries.navigation === false ? entries.navigation : true,
			navigationStyle: entries.navigationStyle
				? {
						bgColor: entries.navigationStyle.bgColor && entries.navigationStyle.bgColor !== '' ? `${entries.navigationStyle.bgColor}` : '',
						currentColor: entries.navigationStyle.currentColor && entries.navigationStyle.currentcolor !== '' ? `${entries.navigationStyle.currentColor}` : '',
						borderWidth: entries.navigationStyle.borderWidth && entries.navigationStyle.borderWidth !== '' ? `${entries.navigationStyle.borderWidth}` : '',
						borderColor: entries.navigationStyle.borderColor && entries.navigationStyle.borderColor !== '' ? `${entries.navigationStyle.borderColor}` : '',
						borderRadius: entries.navigationStyle.borderRadius && entries.navigationStyle.borderRadius !== '' ? `${entries.navigationStyle.borderRadius}` : '',
				  }
				: '',

			caption: entries.caption ? entries.caption : false,
			captionText: {
				textOne: entries.captionText && entries.captionText.textOne === false ? entries.captionText.textOne : true,
				textTwo: entries.captionText && entries.captionText.textTwo === false ? entries.captionText.textTwo : true,
				textThree: entries.captionText && entries.captionText.textThree === false ? entries.captionText.textThree : true,
			},
			captionStyle: {
				textOne:
					entries.captionStyle && entries.captionStyle.textOne
						? {
								fontSize: entries.captionStyle.textOne && entries.captionStyle.textOne.fontSize !== '' ? `${entries.captionStyle.textOne.fontSize}` : '',
								bgColor: entries.captionStyle.textOne && entries.captionStyle.textOne.bgcolor !== '' ? `${entries.captionStyle.textOne.bgColor}` : '',
								txtColor: entries.captionStyle.textOne && entries.captionStyle.textOne.txtcolor !== '' ? `${entries.captionStyle.textOne.txtColor}` : '',
								topPosition: entries.captionStyle.textOne && entries.captionStyle.textOne.topPosition !== '' ? `${entries.captionStyle.textOne.topPosition}` : '',
								leftPosition: entries.captionStyle.textOne && entries.captionStyle.textOne.leftPosition !== '' ? `${entries.captionStyle.textOne.leftPosition}` : '',
						  }
						: '',
				textTwo:
					entries.captionStyle && entries.captionStyle.textTwo
						? {
								fontSize: entries.captionStyle.textTwo && entries.captionStyle.textTwo.fontSize !== '' ? `${entries.captionStyle.textTwo.fontSize}` : '',
								bgColor: entries.captionStyle.textTwo && entries.captionStyle.textTwo.bgcolor !== '' ? `${entries.captionStyle.textTwo.bgColor}` : '',
								txtColor: entries.captionStyle.textTwo && entries.captionStyle.textTwo.txtcolor !== '' ? `${entries.captionStyle.textTwo.txtColor}` : '',
								topPosition: entries.captionStyle.textTwo && entries.captionStyle.textTwo.topPosition !== '' ? `${entries.captionStyle.textTwo.topPosition}` : '',
								leftPosition: entries.captionStyle.textTwo && entries.captionStyle.textTwo.leftPosition !== '' ? `${entries.captionStyle.textTwo.leftPosition}` : '',
						  }
						: '',
				textThree:
					entries.captionStyle && entries.captionStyle.textThree
						? {
								fontSize: entries.captionStyle.textThree && entries.captionStyle.textThree.fontSize !== '' ? `${entries.captionStyle.textThree.fontSize}` : '',
								bgColor: entries.captionStyle.textThree && entries.captionStyle.textThree.bgcolor !== '' ? `${entries.captionStyle.textThree.bgColor}` : '',
								txtColor: entries.captionStyle.textThree && entries.captionStyle.textThree.txtcolor !== '' ? `${entries.captionStyle.textThree.txtColor}` : '',
								topPosition: entries.captionStyle.textThree && entries.captionStyle.textThree.topPosition !== '' ? `${entries.captionStyle.textThree.topPosition}` : '',
								leftPosition: entries.captionStyle.textThree && entries.captionStyle.textThree.leftPosition !== '' ? `${entries.captionStyle.textThree.leftPosition}` : '',
						  }
						: '',
			},
			autoplay: entries.autoplay ? entries.autoplay : false,
			autospeed: entries.autospeed ? parseInt(entries.autospeed) : 5000,
			effect: entries.effect ? entries.effect : false,
		};
		init(options);
	};

	return self;
}

let unique = new Date().getTime();
let sliderName = `kowlider`;
// Default Properties and Values
const source = {
	layout: ['box', 'fullscreen'],
	skin: ['classic', 'universal', 'amazing'],
	elements: {
		slides: {
			ele: 'div',
			cls: `${sliderName}-slides`,
		},
		slide: {
			ele: 'div',
			cls: `${sliderName}-slide`,
		},
		slideImage: {
			ele: 'img',
			cls: `${sliderName}-slide-image`,
		},
		slideCaption: {
			ele: 'div',
			cls: `${sliderName}-slide-caption`,
		},
		slideTextOne: {
			ele: 'p',
			cls: `${sliderName}-slide-text-one`,
		},
		slideTextTwo: {
			ele: 'p',
			cls: `${sliderName}-slide-text-two`,
		},
		slideTextThree: {
			ele: 'p',
			cls: `${sliderName}-slide-text-three`,
		},
		slideNavigation: {
			ele: 'div',
			cls: `${sliderName}-slide-navigation`,
		},
		slideNav: {
			ele: 'button',
			cls: `${sliderName}-slide-nav`,
		},
		slideControl: {
			ele: 'div',
			cls: `${sliderName}-slide-control`,
		},
		slideControlNav: {
			ele: 'button',
			cls: [`${sliderName}-slide-control-nav slide-left`, `${sliderName}-slide-control-nav slide-right`],
			arrow: ['&lsaquo;', '&rsaquo;'],
		},
	},
};
// Decliared Variables
function variable() {
	const slidesEle = source.elements.slides.ele;
	const slidesCls = source.elements.slides.cls;
	const slideEle = source.elements.slide.ele;
	const slideCls = source.elements.slide.cls;
	const slideImageEle = source.elements.slideImage.ele;
	const slideImageCls = source.elements.slideImage.cls;
	const slideCaptionEle = source.elements.slideCaption.ele;
	const slideCaptionCls = source.elements.slideCaption.cls;
	const slideTextOneEle = source.elements.slideTextOne.ele;
	const slideTextOneCls = source.elements.slideTextOne.cls;
	const slideTextTwoEle = source.elements.slideTextTwo.ele;
	const slideTextTwoCls = source.elements.slideTextTwo.cls;
	const slideTextThreeEle = source.elements.slideTextThree.ele;
	const slideTextThreeCls = source.elements.slideTextThree.cls;
	const slideControlEle = source.elements.slideControl.ele;
	const slideControlCls = source.elements.slideControl.cls;
	const slideControlNavEle = source.elements.slideControlNav.ele;
	const slideControlNavArrowLeft = source.elements.slideControlNav.arrow[0];
	const slideControlNavArrowRight = source.elements.slideControlNav.arrow[1];
	const slideLeftControl = source.elements.slideControlNav.cls[0];
	const slideRightControl = source.elements.slideControlNav.cls[1];
	const slideNavigationEle = source.elements.slideNavigation.ele;
	const slideNavigationCls = source.elements.slideNavigation.cls;
	const slideNavEle = source.elements.slideNav.ele;
	const slideNavCls = source.elements.slideNav.cls;

	return {
		slidesEle,
		slidesCls,
		slideEle,
		slideCls,
		slideImageEle,
		slideImageCls,
		slideCaptionEle,
		slideCaptionCls,
		slideTextOneEle,
		slideTextOneCls,
		slideTextTwoEle,
		slideTextTwoCls,
		slideTextThreeEle,
		slideTextThreeCls,
		slideControlEle,
		slideControlCls,
		slideControlNavEle,
		slideControlNavArrowLeft,
		slideControlNavArrowRight,
		slideLeftControl,
		slideRightControl,
		slideNavigationEle,
		slideNavigationCls,
		slideNavEle,
		slideNavCls,
	};
}
// Initilize Main Process
function init(options) {
	createStructure(options);
	displaySlide(options);
	autoplaySlide(options);
	slideEvents(options);
}
// Slide Events
function slideEvents(options) {
	const slider = options.element;
	const { slideCls, slideNavCls } = variable();
	const next = slider.querySelector(`.${slider.classList[0]}.slide-right`);
	const prev = slider.querySelector(`.${slider.classList[0]}.slide-left`);
	const nav = slider.querySelectorAll(`.${slider.classList[0]}.${slideNavCls}`);

	if(options.control === true){
		next.addEventListener('click', () => {
			preventButtonPress();
			nextSlide(options);
		});
		prev.addEventListener('click', () => {
			preventButtonPress();
			prevSlide(options);
		});
	}
	if(options.navigation === true){
		nav.forEach((item, i) => {
			item.addEventListener('click', (e) => {
				preventButtonPress();
				nav.forEach((item) => item.classList.remove('current'));
				e.target.classList.add('current');
				currentSlide(options, i);
			});
		});
	}
	window.addEventListener('resize', function () {
		displaySlide(options);
	});
}
// Preventing Button Pressing
function preventButtonPress() {
	const slider = options.element;
	const { slideCls } = variable();
	const strip = slider.querySelector(`.${slider.classList[0]}.${slideCls}-display`).children;
	const buttons = slider.querySelectorAll(`.${slider.classList[0]}.${sliderName} button`);
	buttons.forEach((button) => {
		button.setAttribute('disabled', true);
		setTimeout(() => {
			button.removeAttribute('disabled');
		}, `${strip.length + 5}00`);
	});
}
// Autoplay Slide
let autoplayInterval;
function autoplaySlide(options) {
	if (!options.autoplay) return;
	autoplayInterval = setInterval(() => {
		preventButtonPress();
		nextSlide(options);
	}, options.autospeed);
}
function autoplayClear(options) {
	clearInterval(autoplayInterval);
	setTimeout(() => {
		autoplaySlide(options);
	});
}
// Current Navigation
function currentNav(index, options) {
	if(options.navigation === true){
		const slider = options.element;
		const { slideNavCls } = variable();
		let allNav = slider.querySelectorAll(`.${slider.classList[0]}.${slideNavCls}`);
		let currentNav = allNav[index];
		allNav.forEach((nav) => nav.classList.remove('current'));
		currentNav.classList.add('current');
	}
}
// Current Navigation Slide
function currentSlide(options, index) {
	const slider = options.element;
	autoplayClear(options);
	const { slideCls } = variable();
	let slides = slider.querySelectorAll(`.${slider.classList[0]}.${slideCls}`);
	slides.forEach((slide) => slide.classList.remove('current'));
	slides[index].classList.add('current');
	stripAnimation(slides[index], options);
}
// Slide Next
function nextSlide(options) {
	const slider = options.element;
	autoplayClear(options);
	const { slideCls } = variable();
	let allSlides = slider.querySelectorAll(`.${slider.classList[0]}.${slideCls}`);
	let firstSlide = allSlides[0];
	let lastSlide = allSlides[allSlides.length - 1];
	let currentSlide = slider.querySelector(`.${slider.classList[0]}.${slideCls}.current`);
	let nextSlide = currentSlide.nextElementSibling;
	if (nextSlide) {
		currentSlide.classList.remove('current');
		nextSlide.classList.add('current');
		currentNav(nextSlide.getAttribute('data-index'), options);
		stripAnimation(nextSlide, options);
	} else {
		lastSlide.classList.remove('current');
		firstSlide.className = `${slider.classList[0]} ${slideCls} current`;
		currentNav(firstSlide.getAttribute('data-index'), options);
		stripAnimation(firstSlide, options);
	}
}
// Slide Previous
function prevSlide(options) {
	const slider = options.element;
	autoplayClear(options);
	const { slideCls } = variable();
	let allSlides = slider.querySelectorAll(`.${slider.classList[0]}.${slideCls}`);
	let firstSlide = allSlides[0];
	let lastSlide = allSlides[allSlides.length - 1];
	let currentSlide = slider.querySelector(`.${slider.classList[0]}.${slideCls}.current`);
	let prevSlide = currentSlide.previousElementSibling;
	if (prevSlide) {
		currentSlide.classList.remove('current');
		prevSlide.classList.add('current');
		currentNav(prevSlide.getAttribute('data-index'), options);
		stripAnimation(prevSlide, options);
	} else {
		firstSlide.classList.remove('current');
		lastSlide.className = `${slider.classList[0]} ${slideCls} current`;
		currentNav(lastSlide.getAttribute('data-index'), options);
		stripAnimation(lastSlide, options);
	}
}
// Display Slide
function displaySlide(options) {
	const slider = options.element;
	const { slideCls } = variable();
	let currentSlide = slider.querySelector(`.${slider.classList[0]}.${slideCls}.current`);
	let currentImage = currentSlide.querySelector(`.${slider.classList[0]} img`).src;
	let slideDisplay = slider.querySelector(`.${slider.classList[0]}.${slideCls}-display`);
	slideDisplay.style.cssText = `
	width: ${slider.clientWidth}px;
	height: ${slider.clientHeight}px;
	background-image : url("${currentImage}");
	background-size: ${slider.clientWidth}px ${slider.clientHeight}px;
	`;
	if (options.effect === 'twix') {
		slideDisplay.classList.add('twix');
	}
	let strips = createStrips(currentSlide, options);
	slideDisplay.appendChild(strips);
}
// Navigation Preview
function slideNavThumbnail(options) {
	const slider = options.element;
	const { slideCls, slideNavCls } = variable();
	let slides = slider.querySelectorAll(`.${slider.classList[0]}.${slideCls}`);
	let slideNav = slider.querySelectorAll(`.${slider.classList[0]}.${slideNavCls}`);
	for (let i = 0; i < slides.length; i++) {
		let slide = slides[i];
		let slideImg = slide.lastElementChild.src;
		slideNav[i].style = `--bg:url("${slideImg}")`;
	}
}
// Strip Animation
function stripAnimation(current, options) {
	const slider = options.element;
	const { slideCls } = variable();
	let currentImage = current.querySelector(`.${slider.classList[0]} img`).src;
	let slideDisplay = slider.querySelector(`.${slider.classList[0]}.${slideCls}-display`);

	function resetStrip() {
		for (let i = 0; i < slideDisplay.children.length; i++) {
			const strip = slideDisplay.children[i];
			strip.style.opacity = '0';
			strip.style.transition = `none`;
			if (options.effect === 'sliceRightTopToDown' || options.effect === 'sliceLeftTopToDown') {
				strip.style.transform = 'translateY(-100%)';
			}
			if (options.effect === 'sliceRightBottomToUp' || options.effect === 'sliceLeftBottomToUp') {
				strip.style.transform = 'translateY(100%)';
			}
			if (options.effect === 'sliceMixUpDown' || options.effect === 'sliceUpDown') {
				if (i % 2 === 0) {
					strip.style.transform = 'translateY(-100%)';
				} else {
					strip.style.transform = 'translateY(100%)';
				}
			}
			if (options.effect === 'sliceRotateX') {
				strip.style.transform = 'rotateX(360deg)';
			}
		}
	}
	function resetTwix(time) {
		setTimeout(() => {
			for (let i = 0; i < slideDisplay.children.length; i++) {
				const strip = slideDisplay.children[i];
				strip.style.animation = `none`;
			}
		}, `${time}00`);
	}
	function resetSlide(time) {
		setTimeout(() => {
			for (let i = 0; i < slideDisplay.children.length; i++) {
				const strip = slideDisplay.children[i];
				strip.style.opacity = '1';
				strip.style.Zindex = '-1';
				strip.style.transform = `unset`;
				strip.style.transition = `none`;
			}
		}, `${time}00`);
	}
	if (options.effect === 'twix') {
		for (let i = 0; i < slideDisplay.children.length; i++) {
			const strip = slideDisplay.children[i];
			strip.style.backgroundImage = `url("${currentImage}")`;
			strip.style.animation = 'twixAnimation 0.3s linear forwards';
		}
		resetTwix(slideDisplay.children.length);
	}
	if (options.effect === 'slideLeft' || options.effect === 'slideRight' || options.effect === 'slideTop' || options.effect === 'slideBottom') {
		for (let i = 0; i < slideDisplay.children.length; i++) {
			const strip = slideDisplay.children[i];
			strip.style.transition = `0.5s linear`;
			if (options.effect === 'slideLeft') {
				strip.style.transform = `translateX(${slideDisplay.clientWidth}px)`;
			}
			if (options.effect === 'slideRight') {
				strip.style.transform = `translateX(-${slideDisplay.clientWidth}px)`;
			}
			if (options.effect === 'slideTop') {
				strip.style.transform = `translateY(-${slideDisplay.clientHeight}px)`;
			}
			if (options.effect === 'slideBottom') {
				strip.style.transform = `translateY(${slideDisplay.clientHeight}px)`;
			}
			displayImageDelaySlide(strip);
		}
		resetSlide(slideDisplay.children.length);
		slideDisplay.style.backgroundImage = `url("${currentImage}")`;
	} else if (options.effect === 'blocksRandom') {
		let blocksArray = [];
		for (let i = 0; i < slideDisplay.children.length; i++) {
			blocksArray.push(slideDisplay.children[i]);
		}
		function shuffling(array) {
			let shuffleArray = [];
			let shuffleIndex = [];
			for (let i = 0; i < array.length; i++) {
				let randomNumber = Math.floor(Math.random() * array.length);
				if (!shuffleIndex.includes(randomNumber)) {
					shuffleArray.push(array[randomNumber]);
					shuffleIndex.push(randomNumber);
				}
				if (!shuffleIndex.includes(i)) {
					shuffleArray.push(array[i]);
				}
			}
			return shuffleArray;
		}
		let blocks = shuffling(blocksArray);
		for (let i = 0; i < blocks.length; i++) {
			let block = blocks[i];
			block.style.backgroundImage = `url("${currentImage}")`;
			block.style.opacity = '1';
			block.style.transition = `0.5s linear ${i}00ms`;
		}
	} else if (options.effect === 'sliceUpDown' || options.effect === 'sliceRotateX' || options.effect === 'sliceMixUpDown' || options.effect === 'sliceLeftBottomToUp' || options.effect === 'sliceLeftTopToDown' || options.effect === 'sliceLeftToRight' || options.effect === 'sliceTopToBottom') {
		for (let i = 0; i < slideDisplay.children.length; i++) {
			const strip = slideDisplay.children[i];
			strip.style.opacity = '1';
			strip.style.backgroundImage = `url("${currentImage}")`;
			strip.style.transition = `0.5s linear ${i}00ms`;
			if (options.effect === 'sliceUpDown' || options.effect === 'sliceMixUpDown' || options.effect === 'sliceLeftTopToDown' || options.effect === 'sliceLeftBottomToUp') {
				strip.style.transform = 'translateY(0)';
			}
			if (options.effect === 'sliceRotateX') {
				strip.style.transform = 'rotateX(0)';
			}
		}
		displayImageDelaySlice(slideDisplay);
	} else if (options.effect === 'sliceRightBottomToUp' || options.effect === 'sliceRightTopToDown' || options.effect === 'sliceLeftTopToDown' || options.effect === 'sliceRightToLeft' || options.effect === 'sliceBottomToTop') {
		for (let i = slideDisplay.children.length - 1; i > -1; i--) {
			const strip = slideDisplay.children[i];
			strip.style.opacity = '1';
			strip.style.backgroundImage = `url("${currentImage}")`;
			strip.style.transition = `0.5s linear ${slideDisplay.children.length - 1 - i}00ms`;
			if (options.effect === 'sliceRightBottomToUp' || options.effect === 'sliceRightTopToDown') {
				strip.style.transform = 'translateY(0)';
			}
		}
		displayImageDelaySlice(slideDisplay);
	} else {
		slideDisplay.style.backgroundImage = `url("${currentImage}")`;
		slideDisplay.style.opacity = 1;
		slideDisplay.style.transition = '0.5s linear';
	}

	function displayImageDelaySlice(item) {
		setTimeout(() => {
			item.style.backgroundImage = `url("${currentImage}")`;
			resetStrip();
		}, `${slideDisplay.children.length + 5}00`);
	}
	function displayImageDelaySlide(item) {
		setTimeout(() => {
			item.style.backgroundImage = `url("${currentImage}")`;
			resetStrip();
		}, `${slideDisplay.children.length}00`);
	}
}
// strip styling
function stripStyling(properties) {
	let { strip, totalWidth, totalHeight, stripSize, stripQty, i, options } = properties;

	if (options.effect === 'twix') {
		strip.style.width = `${totalWidth}px`;
		strip.style.height = `${totalHeight}px`;
		strip.style.top = '50%';
		strip.style.left = '50%';
		strip.style.transform = 'translate(-50%, -50%) scale(0.9)';
	}
	if (options.effect === 'slideTop' || options.effect === 'slideBottom') {
		strip.style.width = `${totalWidth}px`;
		strip.style.height = `${stripSize}px`;
		strip.style.top = `${stripSize * i}px`;
		strip.style.left = 0;
		strip.style.backgroundPositionY = `-${stripSize * i}px`;
	}
	if (options.effect === 'slideLeft' || options.effect === 'slideRight') {
		strip.style.width = `${stripSize}px`;
		strip.style.height = `${totalHeight}px`;
		strip.style.backgroundPositionX = `-${stripSize * i}px`;
		strip.style.left = `${stripSize * i}px`;
		strip.style.top = 0;
	}
	if (options.effect === 'sliceUpDown' || options.effect === 'sliceRotateX' || options.effect === 'sliceMixUpDown' || options.effect === 'sliceRightBottomToUp' || options.effect === 'sliceRightTopToDown' || options.effect === 'sliceLeftBottomToUp' || options.effect === 'sliceLeftTopToDown' || options.effect === 'sliceRightToLeft' || options.effect === 'sliceLeftToRight') {
		strip.style.width = `${stripSize}px`;
		strip.style.height = `${totalHeight}px`;
		strip.style.backgroundPositionX = `-${stripSize * i}px`;
		strip.style.left = `${stripSize * i}px`;
		strip.style.top = 0;
		if (options.effect === 'sliceLeftTopToDown' || options.effect === 'sliceRightTopToDown') {
			strip.style.transform = 'translateY(-100%)';
		}
		if (options.effect === 'sliceLeftBottomToUp' || options.effect === 'sliceRightBottomToUp') {
			strip.style.transform = 'translateY(100%)';
		}
		if (options.effect === 'sliceUpDown' || options.effect === 'sliceMixUpDown') {
			if (i % 2 === 0) {
				strip.style.transform = 'translateY(-100%)';
			} else {
				strip.style.transform = 'translateY(100%)';
			}
		}
		if (options.effect === 'sliceRotateX') {
			strip.style.perspective = '400px';
			strip.style.transformStyle = 'preserve-3d';
			strip.style.transform = 'rotateX(360deg)';
			strip.style.transformOrigin = 'center';
		}
	}
	if (options.effect === 'sliceBottomToTop' || options.effect === 'sliceTopToBottom') {
		strip.style.width = `${totalWidth}px`;
		strip.style.height = `${stripSize}px`;
		strip.style.left = 0;
		strip.style.top = `${stripSize * i}px`;
		strip.style.backgroundPositionY = `-${stripSize * i}px`;
	}
}
// create Strips
function createStrips(current, options) {
	const slider = options.element;
	let totalWidth = current.clientWidth;
	let totalHeight = current.clientHeight;
	let bgImage = current.querySelector('img').src;

	let strips = new DocumentFragment();
	let stripQty;
	let stripSize;

	if (options.effect === 'sliceRotateX' || options.effect === 'sliceMixUpDown' || options.effect === 'sliceRightBottomToUp' || options.effect === 'sliceRightTopToDown' || options.effect === 'sliceLeftBottomToUp' || options.effect === 'sliceLeftTopToDown' || options.effect === 'sliceLeftToRight' || options.effect === 'sliceRightToLeft' || options.effect === 'slideLeft' || options.effect === 'slideRight') {
		stripQty = 20;
		stripSize = totalWidth / stripQty;
	} else if (options.effect === 'sliceTopToBottom' || options.effect === 'sliceBottomToTop' || options.effect === 'slideTop' || options.effect === 'slideBottom') {
		stripQty = 10;
		stripSize = totalHeight / stripQty;
	} else if (options.effect === 'sliceUpDown') {
		stripQty = 2;
		stripSize = totalWidth / stripQty;
	} else if (options.effect === 'twix') {
		stripQty = 1;
	} else {
		stripQty = 0;
		stripSize = totalWidth;
	}

	if (options.effect === 'blocksRandom') {
		let blockWidth = totalWidth / 8;
		let blockHeight = totalHeight / 4;

		for (let i = 0; i < 8; i++) {
			for (let a = 0; a < 4; a++) {
				let block = document.createElement('span');
				block.className = `${slider.classList[0]} block`;
				block.style.width = `${blockWidth}px`;
				block.style.height = `${blockHeight}px`;
				block.style.backgroundImage = `url("${bgImage}")`;
				block.style.backgroundSize = `${totalWidth}px ${totalHeight}px`;
				block.style.left = `${blockWidth * i}px`;
				block.style.top = `${blockHeight * a}px`;
				block.style.backgroundPosition = `-${blockWidth * i}px -${blockHeight * a}px`;
				block.style.position = 'absolute';
				block.style.zIndex = '5';

				strips.appendChild(block);
			}
		}
		return strips;
	} else {
		for (let i = 0; i < stripQty; i++) {
			let strip = document.createElement('span');
			strip.className = `${slider.classList[0]} strip`;
			strip.style.backgroundImage = `url("${bgImage}")`;
			strip.style.backgroundSize = `${totalWidth}px ${totalHeight}px`;
			strip.style.position = 'absolute';
			strip.style.zIndex = '5';

			let properties = { strip, totalWidth, totalHeight, stripSize, stripQty, i, options };

			stripStyling(properties);
			strips.appendChild(strip);
		}
		return strips;
	}
}
// Create Structure
function createStructure(options) {
	const { slidesEle, slidesCls, slideCls } = variable();

	const slider = options.element;
	slider.classList.add(sliderName);
	slider.style = `--dp:${options.sliderShadow ? 'block' : 'none'}`;

	const slides = document.createElement(slidesEle);
	slides.className = `${slider.classList[0]} ${slidesCls}`;

	const slideDisplay = document.createElement('div');
	slideDisplay.className = `${slider.classList[0]} ${slideCls}-display`;

	let { allSlide, slideNavigation } = getSlideData(options);
	let slideControl = createControl(options);

	if (!options.navigation) slideNavigation = '';
	if (!options.control) slideControl = '';
	if (source.layout.includes(options.layout)) {
		slider.setAttribute('data-layout', options.layout);
	}
	if (source.skin.includes(options.skin)) {
		slider.setAttribute('data-skin', options.skin);
	}

	slider.innerHTML = '';
	slides.appendChild(allSlide);

	slider.append(slides, slideDisplay, slideNavigation, slideControl);

	if (options.skin === 'classic') {
		slideNavThumbnail(options);
	}
}
// create control
function createControl(options) {
	const slider = options.element;
	const { slideControlEle, slideControlCls, slideControlNavEle, slideControlNavArrowLeft, slideControlNavArrowRight, slideLeftControl, slideRightControl } = variable();
	let styles = `${options.controlStyle.arrowColor ? `color: ${options.controlStyle.arrowColor}` : ''};${options.controlStyle.bgColor ? `background-color: ${options.controlStyle.bgColor}` : ''};${options.controlStyle.borderWidth ? `border-width: ${parseInt(options.controlStyle.borderWidth)}px` : ''};${options.controlStyle.borderColor ? `border-color: ${options.controlStyle.borderColor}` : ''};${options.controlStyle.borderRadius ? `border-radius: ${parseInt(options.controlStyle.borderRadius)}px` : ''}`;

	let ct = document.createElement(slideControlEle);
	ct.className = `${slider.classList[0]} ${slideControlCls}`;

	ct.innerHTML = `<${slideControlNavEle} class="${slider.classList[0]} ${slideLeftControl}" style="${styles}">${slideControlNavArrowLeft}</${slideControlNavEle}>
					<${slideControlNavEle} class="${slider.classList[0]} ${slideRightControl}" style="${styles}">${slideControlNavArrowRight}</${slideControlNavEle}>`;

	return ct;
}
// create navigation
function createNavigation(slds, options) {
	const { slideNavigationEle, slideNavigationCls, slideNavEle, slideNavCls } = variable();
	const slider = options.element;

	let ng = document.createElement(slideNavigationEle);
	ng.className = `${slider.classList[0]} ${slideNavigationCls}`;

	for (let i = 0; i < slds; i++) {
		let nv = document.createElement(slideNavEle);
		nv.className = `${slider.classList[0]} ${slideNavCls}`;
		nv.style.cssText = `
		${options.navigationStyle.currentColor ? `--currentColor: ${options.navigationStyle.currentColor}` : ''};
		${options.navigationStyle.bgColor ? `background-color: ${options.navigationStyle.bgColor}` : ''};
		${options.navigationStyle.borderWidth ? `border-width: ${parseInt(options.navigationStyle.borderWidth)}px` : ''};
		${options.navigationStyle.borderColor ? `border-color: ${options.navigationStyle.borderColor}` : ''};
		${options.navigationStyle.borderRadius ? `--bRadius: ${parseInt(options.navigationStyle.borderRadius)}px` : ''};
		`;

		ng.appendChild(nv);
	}
	ng.children[0].classList.add('current');
	return ng;
}
// create caption
function createCaption(txt, options) {
	const slider = options.element;
	const { slideCaptionEle, slideCaptionCls, slideTextOneEle, slideTextOneCls, slideTextTwoEle, slideTextTwoCls, slideTextThreeEle, slideTextThreeCls } = variable();
	let slideText = new DocumentFragment();

	let cp = document.createElement(slideCaptionEle);
	cp.className = `${slider.classList[0]} ${slideCaptionCls}`;

	function textStyling(text) {
		let styling = `
		${text.txtColor ? `font-size: ${text.fontSize}px` : ''};
		${text.txtColor ? `color: ${text.txtColor}` : ''};
		${text.bgColor ? `background-color: ${text.bgColor}` : ''};
		${text.topPosition ? `top: ${parseInt(text.topPosition)}px` : ''};
		${text.leftPosition ? `left: ${parseInt(text.leftPosition)}px` : ''};
		`;
		return styling;
	}

	if (txt.getAttribute('data-text') === 'one') {
		let t1 = document.createElement(slideTextOneEle);
		t1.className = `${slider.classList[0]} ${slideTextOneCls}`;
		t1.textContent = txt.textContent;
		if (options.captionStyle.textOne) {
			t1.style.cssText = textStyling(options.captionStyle.textOne);
		}
		slideText.appendChild(t1);
	}
	if (txt.getAttribute('data-text') === 'two') {
		let t2 = document.createElement(slideTextTwoEle);
		t2.className = `${slider.classList[0]} ${slideTextTwoCls}`;
		t2.textContent = txt.textContent;
		if (options.captionStyle.textTwo) {
			t2.style.cssText = textStyling(options.captionStyle.textTwo);
		}
		slideText.appendChild(t2);
	}
	if (txt.getAttribute('data-text') === 'three') {
		let t3 = document.createElement(slideTextThreeEle);
		t3.className = `${slider.classList[0]} ${slideTextThreeCls}`;
		t3.textContent = txt.textContent;
		if (options.captionStyle.textThree) {
			t3.style.cssText = textStyling(options.captionStyle.textThree);
		}
		slideText.appendChild(t3);
	}
	cp.appendChild(slideText);
	return cp;
}
// Get slides Data
function getSlideData(options) {
	const { slideEle, slideCls, slideImageCls } = variable();
	const slider = options.element;
	const imgs = slider.querySelectorAll('img');
	const dts = slider.querySelectorAll('[data-text]');

	let allSlide = new DocumentFragment();
	imgs.forEach((image, i) => {
		if (!image.hasAttribute('src') || image.getAttribute('src') === '') return;
		image.className = `${slider.classList[0]} ${slideImageCls}`;
		image.style.width = `${slider.clientWidth}px`;
		image.style.height = `${slider.clientHeight}px`;
		// create slide
		const slide = document.createElement(slideEle);
		slide.className = `${slider.classList[0]} ${slideCls}`;
		slide.setAttribute('data-index', i);
		if (options.caption) {
			for (let a = 0; a < dts.length; a++) {
				const txt = dts[a];
				if (image.getAttribute('data-ref') === txt.getAttribute('data-ref')) {
					let one = options.captionText.textOne ? 'one' : false;
					let two = options.captionText.textTwo ? 'two' : false;
					let three = options.captionText.textThree ? 'three' : false;
					if (txt.textContent === '') return;
					if ([`${one}`, `${two}`, `${three}`].includes(txt.getAttribute('data-text'))) {
						slide.appendChild(createCaption(txt, options));
					}
				}
			}
		}
		slide.appendChild(image);
		allSlide.append(slide);
	});
	let slideNavigation;
	if (options.navigation) {
		slideNavigation = createNavigation(allSlide.children.length, options);
	}
	allSlide.children[0].classList.add('current');
	return { allSlide, slideNavigation };
}
