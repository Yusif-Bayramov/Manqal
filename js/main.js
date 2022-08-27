let preveiwContainer = document.querySelector('.products-preview')
let previewBox = preveiwContainer.querySelectorAll('.preview')

document.querySelectorAll('.menu-item').forEach((product) => {
    product.onclick = () => {
        preveiwContainer.style.display = 'flex'
        let name = product.getAttribute('data-name')
        previewBox.forEach((preview) => {
            let target = preview.getAttribute('data-target')
            if (name == target) {
                preview.classList.add('active')
            }
        })
    }
})

previewBox.forEach((close) => {
    close.querySelector('.fa-times').onclick = () => {
        close.classList.remove('active')
        preveiwContainer.style.display = 'none'
    }
})
window.onclick = function(event) {
    let preveiwContainer = document.querySelector('.products-preview')
    if (event.target == preveiwContainer) {
        previewBox.forEach((close) => {
            close.classList.remove('active')
            preveiwContainer.style.display = 'none'
        })
    }
    if (event.target == video) {
        manqalVideo.pause()
        video.classList.remove('active')
        manqalVideo.classList.remove('active')
    }
}

const vidoePlayBtn = document.querySelector('.img2')
const video = document.querySelector('.vidoe-container')
const closevideo = document.querySelector('.closevideo')
const manqalVideo = document.querySelector('.manqal-video')

vidoePlayBtn.addEventListener('click', () => {
    manqalVideo.classList.add('active')
    video.classList.add('active')
})

closevideo.addEventListener('click', () => {
    manqalVideo.pause()
    video.classList.remove('active')
    manqalVideo.classList.remove('active')
})