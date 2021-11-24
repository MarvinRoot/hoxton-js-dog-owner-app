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

        const goodBoyBadBoy = document.createElement('section')
        goodBoyBadBoy.setAttribute('class', 'goodBoyBadBoy')

        const isGoodBoy = document.createElement('li')
        isGoodBoy.setAttribute('class', 'goodBoyText')

        const isNaughtyQuestion = document.createElement('span')
        isNaughtyQuestion.textContent = "Is Naughty? "
        const isNaughtyAnswer = document.createElement('span')
        isNaughtyAnswer.setAttribute('class', 'isNaughtyAnswer')
        if(dog.isGoodDog) isNaughtyAnswer.textContent = "Yes"
        else isNaughtyAnswer.textContent = "No"

        const goodBoyButton = document.createElement('button')
        if(dog.isGoodDog) goodBoyButton.textContent = "Good Boy"
        else goodBoyButton.textContent = "Bad Boy"

        isGoodBoy.append(isNaughtyQuestion, isNaughtyAnswer)
        goodBoyBadBoy.append(isGoodBoy, goodBoyButton)

        dogLiEl.append(titleEl, imgEl, bioTitleEl, bio, goodBoyBadBoy)

        const sectionEl = document.querySelector('.main__dog-section')
        const h2El = document.querySelector('h2')
        h2El.remove()
        sectionEl.innerHTML = ''
        sectionEl.append(dogLiEl)

        goodBoyButton.addEventListener('click', function(event){
            event.stopPropagation()

            if(goodBoyButton.textContent = "Bad Boy") {
                goodBoyButton.textContent = "Good Boy"
                isNaughtyAnswer.textContent = "Yes"
            }
            
        })

        goodBoyButton.addEventListener('click', function(event){
            event.stopPropagation()

            if(goodBoyButton.textContent = "Good Boy") {
                goodBoyButton.textContent = "Bad Boy"
                isNaughtyAnswer.textContent = "No"
            }
        })
    })
    

}

for(const dog of data){
    addDog(dog)
}
