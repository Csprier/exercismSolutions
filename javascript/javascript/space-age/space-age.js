'use strict';

/*
var SpaceAge = function(seconds) {
  let planetYears = function(earthYears) {
    let years = seconds / (31557600.0 * earthYears);
    return Math.round(years * 100) / 100;
  };

  return {
    seconds: seconds,

    onEarth:   function() { return planetYears(1.0); },
    onMercury: function() { return planetYears(0.2408467); },
    onVenus:   function() { return planetYears(0.61519726); },
    onMars:    function() { return planetYears(1.8808158); },
    onJupiter: function() { return planetYears(11.862615); },
    onSaturn:  function() { return planetYears(29.447498); },
    onUranus:  function() { return planetYears(84.016846); },
    onNeptune: function() { return planetYears(164.79132) ;}
  };
};
*/

var SpaceAge = function(seconds) {
  // 1 Earth Year in Seconds = 31557600.0
  // 1 Earth Day             = 86400
  // 1 Earth Hour            = 3600
  // 1 Earth Second          = 60

  
};

module.exports = SpaceAge;