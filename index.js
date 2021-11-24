function addDog (dog) {
    const liEl = document.createElement('button')
    liEl.setAttribute('class', 'dogs-list__button')
    liEl.textContent = dog.name

    const ulEl = document.querySelector('.dogs-list')
    ulEl.append(liEl)

    liEl.addEventListener('click', function(event){
        event.stopPropagation()

        const dogLiEl = document.createElement('li')
        dogLiEl.setAttribute('class', 'card')

        const titleEl = document.createElement('h2')
        titleEl.textContent = dog.name

        const imgEl = document.createElement('img')
        imgEl.setAttribute('src', dog.image)

        const bioTitleEl = document.createElement('h3')
        bioTitleEl.textContent = "Bio"

        const bio = document.createElement('p')
        bio.textContent = dog.bio

        dogLiEl.append(titleEl, imgEl, bioTitleEl, bio)

        const sectionEl = document.querySelector('.main__dog-section')
        const h2El = document.querySelector('h2')
        h2El.remove()
        sectionEl.innerHTML = ''
        sectionEl.append(dogLiEl)
    })
}

for(const dog of data){
    addDog(dog)
}
