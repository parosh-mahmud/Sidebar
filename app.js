let sidebarToggle = document.querySelector('.sidebar-toggle')
let sidebar = document.querySelector('.sidebar')
let closeBtn = document.querySelector('.close-btn')
sidebarToggle.addEventListener('click', function (e) {
    sidebar.classList.toggle('show-sidebar')
})

closeBtn.addEventListener('click', function (e) {
    sidebar.classList.remove('show-sidebar')
})