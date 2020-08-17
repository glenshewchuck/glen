jQuery(function(){

  // Now show the image the way we want
  jQuery(".twentytwenty-container").twentytwenty({
    default_offset_pct: 0.1, // How much of the before image is visible when the page loads
    orientation: 'horizontal', // Orientation of the before and after images ('horizontal' or 'vertical')
    before_label: 'Before Post', // Set a custom before label
    after_label: 'After Post', // Set a custom after label
    no_overlay: true, //Do not show the overlay with before and after
    move_slider_on_hover: false, // Move slider on mouse hover?
    move_with_handle_only: true, // Allow a user to swipe anywhere on the image to control slider movement.
    click_to_move: false // Allow a user to click (or tap) anywhere on the image to move the slider to that location.
  });

  // Now we must move the photo information because it gets hidden under the
  // photo that is now absolutely positioned with no overflow.
  var bootstrapPanel = jQuery('.twentytwenty-container #bootstrap-panel').detach();
  bootstrapPanel.appendTo(jQuery('#container-image-before-after'));

  $(".card").flip({
    trigger: 'click'
  });

});



