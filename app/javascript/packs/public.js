const image_list = document.querySelector(".image-list")
let image_index = 1
let image_index_blur = 0

slider = () => {
    let image_items = image_list.querySelectorAll(".image-hidden")
    image_items.forEach(image_item => {
        image_item.classList.remove("image-blur-out")
        image_item.classList.remove("image-show")
    })
    image_index_blur = image_index_blur + 1  === image_items.length ? 0 : image_index + 1
    image_index = image_index + 1 === image_items.length ? 0 : image_index + 1
    console.log(image_index_blur)
    image_items[image_index_blur].classList.add("image-blur-out")
    image_items[image_index].classList.add("image-show")

}

setInterval(slider, 2500)