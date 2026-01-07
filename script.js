const item = document.querySelectorAll('.scroll-item')

const obs = new IntersectionObserver((entries,observer)=>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
        }
    })
},
{threshold: 0.5})

item.forEach(item => obs.observe(item))