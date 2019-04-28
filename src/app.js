window.onload = function () {
    const inp = document.getElementById('inp')
    const nameList = document.getElementById('name-list')
    const display = document.getElementById('display')
    const giveATry = document.getElementById('give-a-try')
    const firstPosition = document.getElementById('first-position')
    const secondPosition = document.getElementById('second-position')
    const thirdPosition = document.getElementById('third-position')

    const participantNames = []

    inp.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            let newNames = event.target.value.split(', ')
            if (newNames[0] !== '') {
                newNames.forEach(name => {
                    participantNames.push(name)
                    let item = createListItem(name)
                    nameList.appendChild(item)
                    event.target.value = ''
                })
            }
        }
    })

    giveATry.addEventListener('click', function () {
        if (participantNames.length === 0) {
            alert('There is No Entry')
        } else {
            let shuffledNames = shuffle(participantNames)
            for (let i = 1; i < shuffledNames.length; i++) {
                (function (i, count) {

                    setTimeout(() => {

                        let rand = Math.floor(Math.random() * (shuffledNames.length))
                        display.innerHTML = shuffledNames[rand]

                        if (count === shuffledNames.length - 1) {
                            if (!firstPosition.innerHTML) {
                                firstPosition.innerHTML = shuffledNames[rand]
                                let ind = participantNames.indexOf(shuffledNames[rand])
                                participantNames.splice(ind, 1)
                            } else  if (!secondPosition.innerHTML) {
                                secondPosition.innerHTML = shuffledNames[rand]
                                let ind = participantNames.indexOf(shuffledNames[rand])
                                participantNames.splice(ind, 1)
                            } else if (!thirdPosition.innerHTML) {
                                thirdPosition.innerHTML = shuffledNames[rand]
                                let ind = participantNames.indexOf(shuffledNames[rand])
                                participantNames.splice(ind, 1)
                            } else {
                                alert('Raffle Draw Alreay Completed')
                            }
                        }
                    }, i)

                })(i*100, i)
            }
        }
    })

    // TODO: Extract Text From Text Area and Store it to an Array
    // TODO: Render The Names Extracted From Text Area
    // TODO: Shuffle The Names Array for Better Result
    // TODO: Pick A Random Winner, Remove Him/Her from The Names Array
    // TODO: Display Winners Name
}


function createListItem(name) {
    let li = document.createElement('li')
    li.className = 'list-group-item'
    li.innerHTML = name
    return li
}

function shuffle(arr) {
    let shuffledArr = [...arr]

    for (let i = shuffledArr.length - 1; i > 0; i--) {
        let rand = Math.floor(Math.random() * (i + 1))
        let temp = shuffledArr[rand]
        shuffledArr[rand] = shuffledArr[i]
        shuffledArr[i] = temp
    }

    return shuffledArr
}

