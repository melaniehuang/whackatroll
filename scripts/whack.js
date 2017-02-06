var init = function () {
};

function preload() {
};

function create() {
};

window.onload = function() { 
  var wfconfig = {
    active: function() { 
      console.log("font loaded");
      init();
    },
    
    inactive: function() {
        console.log("fonts could not be loaded!");
        init();
    },

    google: {
      families: ["Press Start 2P"]
    }
  };

  WebFont.load(wfconfig);
};