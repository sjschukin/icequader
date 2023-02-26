/**
 * @file
 * Global utilities.
 *
 */
(function (Drupal) {

  'use strict';

  Drupal.behaviors.barrio_icequader = {
    attach: function (context, settings) {
      //particlesJS
      particlesJS("page-front", {
        "particles": {
          "number": {
            "value": 275,
            "density": {
              "enable": true,
              "value_area": 2000
            }
          },
          "color": {
            "value": "#fff"
          },
          "shape": {
            "type": ["circle", "triangle", "circle"],
            "stroke": {
              "width": 5,
              "color": "#fff"
            },
            "polygon": {
              "nb_sides": 5
            }
          },
          "opacity": {
            "value": 2,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": true
            }
          },
          "size": {
            "value": 12,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 45,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 200,
            "color": "#ffffff",
            "opacity": 0.7,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 1.2,
            "direction": "top-bottom-right",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 1200,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "grab"
            },
            "onclick": {
              "enable": false,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 140,
              "line_linked": {
                "opacity": 0.8
              }
            },
            "bubble": {
              "distance": 400,
              "size": 1,
              "duration": 2,
              "opacity": 0.8,
              "speed": 3
            },
            "repulse": {
              "distance": 100,
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
    }
  };

})(Drupal);
