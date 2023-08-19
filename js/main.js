const menuItems = document.querySelectorAll('.menu-item')

const menuBtn = document.querySelector('#menu-btn')

menuBtn.addEventListener('click', function(){
    document.body.classList.toggle('mobile-menu-active')    
    })
    
menuItems.forEach(function (itemn) {
        itemn.addEventListener('click', function (e) {
        const currenItem = document.querySelector('.active')
        currenItem.classList.remove('active')
        e.target.classList.add('active')
    })
})