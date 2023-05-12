"use strict"

$(document).ready(function () {
	particlesJS("particles-js", {
		"particles": {
			"number": {
				"value": 160,
				"density": {
					"enable": true,
					"value_area": 800
				}
			},
			"color": {
				"value": "#ffffff"
			},
			"shape": {
				"type": "circle",
				"stroke": {
					"width": 0,
					"color": "#000000"
				},
				"polygon": {
					"nb_sides": 5
				},
				"image": {
					"src": "img/github.svg",
					"width": 100,
					"height": 100
				}
			},
			"opacity": {
				"value": 1,
				"random": true,
				"anim": {
					"enable": true,
					"speed": 4,
					"opacity_min": 0,
					"sync": false
				}
			},
			"size": {
				"value": 3,
				"random": true,
				"anim": {
					"enable": false,
					"speed": 4,
					"size_min": 0.3,
					"sync": false
				}
			},
			"line_linked": {
				"enable": false,
				"distance": 150,
				"color": "#ffffff",
				"opacity": 0.4,
				"width": 1
			},
			"move": {
				"enable": true,
				"speed": 1,
				"direction": "none",
				"random": true,
				"straight": false,
				"out_mode": "out",
				"bounce": false,
				"attract": {
					"enable": false,
					"rotateX": 600,
					"rotateY": 600
				}
			}
		},
		"interactivity": {
			"detect_on": "canvas",
			"events": {
				"onhover": {
					"enable": false,
					"mode": "repulse"
				},
				"onclick": {
					"enable": false,
					"mode": "push"
				},
				"resize": true
			},
			"modes": {
				"grab": {
					"distance": 800,
					"line_linked": {
						"opacity": 1
					}
				},
				"bubble": {
					"distance": 800,
					"size": 80,
					"duration": 2,
					"opacity": 0.8,
					"speed": 3
				},
				"repulse": {
					"distance": 400,
					"duration": 0.4
				},
				"push": {
					"particles_nb": 4
				},
				"remove": {
					"particles_nb": 2
				}
			}
		},
		"retina_detect": true
	});
});

var ham = document.getElementById("hamLink");
var sidebar = document.getElementById("sidebar");
var arrow = document.getElementById("arrowLink");

var about_page = document.getElementById("front_page_text");
var portf_page = document.getElementById("portfolio_text");
var blog_page = document.getElementById("blog_page_text");

function slideMenuOut() {
	ham.style.display = "none";
	sidebar.style.display = "block";
	arrow.style.display = "inline";
	sidebar.classList.remove('animate__fadeOutLeft');
	sidebar.classList.add('animate__fadeInLeft');
}

function slideMenuIn() {
	arrow.style.display = "none";
	sidebar.classList.remove('animate__fadeInLeft');
	sidebar.classList.add('animate__fadeOutLeft');
	ham.style.display = "block";
}

function about() {
	if(arrow.style.display == "inline"){slideMenuIn();}

	portf_page.onanimationend = () => {
		portf_page.style.display = "none";
		about_page.style.display = "block";
	}

	blog_page.onanimationend = () => {
		blog_page.style.display = "none";
		about_page.style.display = "block";
	}

	about_page.onanimationend = () => {}

	about_page.classList.remove('animate__fadeOut');
	about_page.classList.add('animate__fadeIn');

	portf_page.classList.remove("animate__fadeIn");
	portf_page.classList.add("animate__fadeOut");

	blog_page.classList.remove("animate__fadeIn");
	blog_page.classList.add("animate__fadeOut");
}

function portfolio() {
	if(arrow.style.display == "inline"){slideMenuIn();}

	about_page.onanimationend = () => {
		about_page.style.display = "none";
		portf_page.style.display = "block";
	}

	blog_page.onanimationend = () => {
		blog_page.style.display = "none";
		portf_page.style.display = "block";
	}

	portf_page.onanimationend = () => {};
	
	portf_page.classList.remove("animate__fadeOut");
	portf_page.classList.add("animate__fadeIn");
	
	about_page.classList.remove('animate__fadeIn');
	about_page.classList.add('animate__fadeOut');

	blog_page.classList.remove("animate__fadeIn");
	blog_page.classList.add("animate__fadeOut");
}

function blog() {
	if(arrow.style.display == "inline"){slideMenuIn();}

	portf_page.onanimationend = () => {
		portf_page.style.display = "none";
		blog_page.style.display = "block";
	}

	about_page.onanimationend = () => {
		about_page.style.display = "none";
		blog_page.style.display = "block";
	}

	blog_page.onanimationend = () => {};

	blog_page.classList.remove("animate__fadeOut");
	blog_page.classList.add("animate__fadeIn");

	about_page.classList.remove('animate__fadeIn');
	about_page.classList.add('animate__fadeOut');

	portf_page.classList.remove("animate__fadeIn");
	portf_page.classList.add("animate__fadeOut");
}

onresize = (event) => {
	if(window.innerWidth <= 767)
	{
		ham.style.display = "block";
		arrow.style.display = "none";
		sidebar.style.display = "none";
	}
	else
	{
		ham.style.display = "none";
		sidebar.style.display = "block";
		sidebar.classList.remove('animate__fadeOutLeft');
		sidebar.classList.add('animate__fadeInLeft');
	}
};