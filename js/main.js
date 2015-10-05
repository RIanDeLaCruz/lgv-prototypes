 $(document).ready(function() {
    $('#autoWidth').lightSlider({
    	auto:true,
        item:1,
    	// gallery:true,
    	speed:1500,
    	pause:5000,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });