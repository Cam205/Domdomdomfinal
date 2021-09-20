document.addEventListener("DOMContentLoaded", function () {

    idCount = 0;
    let myColors = [
        'red',
        'blue',
        'yellow',
        'orange',
        'brown',
        'black',
        'green',
        'gold',
        'pink'
    ];

    let button = document.createElement('button')
    let btnText = document.createTextNode('Add square')

    button.appendChild(btnText)
    document.body.appendChild(button)

    button.addEventListener('click', function () {
        idCount++

        let divHeader = document.createElement('h1')
        let divText = document.createTextNode(idCount)
        let divSquare = document.createElement('div')
        divSquare.id = idCount
        divSquare.className = 'myDiv'
        console.log("Id:" + idCount)

        document.body.appendChild(divSquare)
        divSquare.appendChild(divHeader)
        divHeader.appendChild(divText)

        divSquare.addEventListener('mouseover', function () {
            showText = divHeader.style.visibility = 'visible';
        })

        divSquare.addEventListener('mouseout', function () {
            hideText = divHeader.style.visibility = 'hidden'
        })


        function getRandomColor() {
            let myRandomColor = myColors[Math.floor(Math.random() * myColors.length)];

            return myRandomColor;
        };

        divSquare.addEventListener('click', function () {
            let myRandomColor = getRandomColor()
            divSquare.style.backgroundColor = myRandomColor;

        })

        divSquare.addEventListener('dblclick', function () {
            let divSquareId = divSquare.id

            if (divSquareId % 2 === 0 && divSquare.nextElementSibling == null) {
                alert('There isnt a square after this one')
            } else if (divSquareId % 2 === 0 && divSquare.nextElementSibling !== null) {
                let nextDivSquare = divSquare.nextElementSibling;
                nextDivSquare.remove(divSquare.id)
                alert('Square is being removed')
            } else if (divSquareId % 2 !== 0 && divSquare.previousSibling === null) {
                alert('There isnt an square before this one')
            } else if (divSquareId % 2 !== 0) {
                let previousDivSquare = divSquare.previousSibling;
                previousDivSquare.remove(divSquareId)
                alert('Square is being removed')
            }
        })

    })

})