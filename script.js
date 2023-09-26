  
  
  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });
let slide_data = [
    {
      'src':'http://fendorian.github.io/KatanaDigital/source/slider1.jpg',
      'title':'Boost Your Online Visibility',
      'copy':'Harness the power of organic search. Our expert SEO strategies ensure your brand ranks at the top, driving qualified traffic and increased conversions.'
    },
    {
      'src':'http://fendorian.github.io/KatanaDigital/source/slider2.jpg', 
      'title':'Crafting Digital Experiences',
      'copy':'Turn visitors into loyal customers. We blend aesthetics with functionality, creating websites that are not only visually stunning but also user-friendly and optimized for conversions.'
    },
    {
      'src':'http://fendorian.github.io/KatanaDigital/source/slider3.jpg', 
      'title':'Maximize Your Social Impact',
      'copy':'Reach your audience where they engage the most. Our tailored social media ads amplify your brands message, increasing awareness and driving results.'
    },
    {
      'src':'http://fendorian.github.io/KatanaDigital/source/slider4.jpg', 
      'title':'Your One-Stop Digital Agency',
      'copy':'From search engine optimization to captivating design and impactful advertising, we provide holistic solutions that drive your business growth in the digital realm.'
    },
    
  ];
  let slides = [],
    captions = [];
  
  let autoplay = setInterval(function(){
    nextSlide();
  },10000);
  let container = document.getElementById('container');
  let leftSlider = document.getElementById('left-col');
  // console.log(leftSlider);
  let down_button = document.getElementById('down_button');
  // let caption = document.getElementById('slider-caption');
  // let caption_heading = caption.querySelector('caption-heading');
  
  down_button.addEventListener('click',function(e){
    e.preventDefault();
    clearInterval(autoplay);
    nextSlide();
    autoplay;
  });
  
  for (let i = 0; i< slide_data.length; i++){
    let slide = document.createElement('div'),
        caption = document.createElement('div'),
        slide_title = document.createElement('div');
      
    slide.classList.add('slide');
    slide.setAttribute('style','background:url('+slide_data[i].src+')');
    caption.classList.add('caption');
    slide_title.classList.add('caption-heading');
    slide_title.innerHTML = '<h1>'+slide_data[i].title+'</h1>';
    
    switch(i){
      case 0:
          slide.classList.add('current');
          caption.classList.add('current-caption');
          break;
      case 1:
          slide.classList.add('next');
          caption.classList.add('next-caption');
          break;
      case slide_data.length -1:
        slide.classList.add('previous');
        caption.classList.add('previous-caption');
        break;
      default:
         break;       
    }
    caption.appendChild(slide_title);
    caption.insertAdjacentHTML('beforeend','<div class="caption-subhead"><span>dolor sit amet, consectetur adipiscing elit. </span></div>');
    slides.push(slide);
    captions.push(caption);
    leftSlider.appendChild(slide);
    container.appendChild(caption);
  }
  // console.log(slides);
  
  function nextSlide(){
    // caption.classList.add('offscreen');
    
    slides[0].classList.remove('current');
    slides[0].classList.add('previous','change');
    slides[1].classList.remove('next');
    slides[1].classList.add('current');
    slides[2].classList.add('next');
    let last = slides.length -1;
    slides[last].classList.remove('previous');
    
    captions[0].classList.remove('current-caption');
    captions[0].classList.add('previous-caption','change');
    captions[1].classList.remove('next-caption');
    captions[1].classList.add('current-caption');
    captions[2].classList.add('next-caption');
    let last_caption = captions.length -1;
    
    captions[last].classList.remove('previous-caption');
    
    let placeholder = slides.shift();
    let captions_placeholder = captions.shift();
    slides.push(placeholder); 
    captions.push(captions_placeholder);
  }
  
  let heading = document.querySelector('.caption-heading');
  
  
  // https://jonsuh.com/blog/detect-the-end-of-css-animations-and-transitions-with-javascript/
  function whichTransitionEvent(){
    var t,
        el = document.createElement("fakeelement");
  
    var transitions = {
      "transition"      : "transitionend",
      "OTransition"     : "oTransitionEnd",
      "MozTransition"   : "transitionend",
      "WebkitTransition": "webkitTransitionEnd"
    }
  
    for (t in transitions){
      if (el.style[t] !== undefined){
        return transitions[t];
      }
    }
  }
  
  var transitionEvent = whichTransitionEvent()
  caption.addEventListener(transitionEvent, customFunction);
  
  function customFunction(event) {
    caption.removeEventListener(transitionEvent, customFunction);
    console.log('animation ended');
  
    // Do something when the transition ends
  }