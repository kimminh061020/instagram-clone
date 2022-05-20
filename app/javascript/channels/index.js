// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.

const channels = require.context('.', true, /_channel\.js$/)
channels.keys().forEach(channels)



/* $('input').focus(function(){
    $(this).parents('.field').addClass('focused');
  });

  $('input').blur(function(){
    var inputValue = $(this).val();
    if ( inputValue == "" ) {
      $(this).removeClass('filled');
      $(this).parents('.field').removeClass('focused');
    } else {
      $(this).addClass('filled');
    }
  })

  */

  window.addEventListener('turbolinks:load', (event) => {

  const insta_form_inputs = document.querySelectorAll("input")

  insta_form_inputs.forEach(input => {
input.addEventListener('focus', (e) => {
    const current_input = e.target
    const input_container = current_input.closest(".field")
    input_container.classList.add("focused")
})

input.addEventListener('blur', (e) => {
  const current_input = e.target
  const input_container = current_input.closest(".field")
  if(current_input.value.length === 0) {
    input_container.classList.remove("focused")
    current_input.classList.remove("filled")
  } else {
      current_input.classList.add("filled")
  }
})
})

})




  slider = () => {
    let image_index = 1
    let image_index_blur = 0
      let image_items = document.querySelectorAll(".image-hidden")
      image_items.forEach(image_item => {
          image_item.classList.remove("image-blur-out")
          image_item.classList.remove("image-show")
      })
      image_index = image_index + 1 === image_items.length ? 0 : image_index + 1
      image_index_blur = image_index_blur + 1 === image_items.length ? 0 : image_index_blur + 1
      image_items[image_index_blur].classList.add("image-blur-out")
      image_items[image_index].classList.add("image-show")

  }

  startInterval = () => {
    myInterval = setInterval(slider, 3000)
  }

  stopInterval = () => {
    clearInterval(myInterval)
  }

  window.addEventListener('DOMContentLoaded', (event) => {
    startInterval()
  })

window.addEventListener('turbolinks:load', (event) => {

  if(document.querySelectorAll(".image-hidden").length > 0) {
    startInterval()
  }
  if (document.querySelectorAll(".image-hidden").length == 0 && typeof myInterval !== "undefined" ) {
    stopInterval()
  }
})

  window.addEventListener('turbolinks:load', (event) => {
    if(document.querySelectorAll("#uploader-image").length) {

  const upload_image = document.querySelector("#uploader-image")

upload_image.addEventListener("click", (e) => {
  document.getElementById("uploader").click()
})
    }

  })
