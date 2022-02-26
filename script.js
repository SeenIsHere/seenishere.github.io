var particleType = 0

/*                                                      
,------.                        ,--.  ,--.                       
|  .---',--.,--.,--,--,  ,---.,-'  '-.`--' ,---. ,--,--,  ,---.  
|  `--, |  ||  ||      \| .--''-.  .-',--.| .-. ||      \(  .-'  
|  |`   '  ''  '|  ||  |\ `--.  |  |  |  |' '-' '|  ||  |.-'  `) 
`--'     `----' `--''--' `---'  `--'  `--' `---' `--''--'`----'  
*/
//Checks for device type
const deviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) return "tablet";
    else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) return "mobile";
    return "desktop";
};

//Generates random Number
const random = (min, max) => { return Math.round((Math.random() * (max - min) + min)) }

//random item from array, a second array can be supplied of items not to use
function randArrayItem() {
    if (arguments.length === 0) return new Error('No Array')
    let x = arguments[0][random(0, arguments[0].length - 1)]
    if (arguments.length == 2)
        while (arguments[1].includes(x)) { x = arguments[0][random(0, arguments[0].length - 1)] }
    return x
}

/*                        
,------.                          ,--.          
|  .---',--.  ,--.,---. ,--,--, ,-'  '-. ,---.  
|  `--,  \  `'  /| .-. :|      \'-.  .-'(  .-'  
|  `---.  \    / \   --.|  ||  |  |  |  .-'  `) 
`------'   `--'   `----'`--''--'  `--'  `----'  
*/

function onLoad() {
    //Gets central text div
    var centralText = document.getElementById('central-text')

    //First timeout which removes the first animation class and adds the 2nd animation class for a fade affect after 3 seconds
    var timeout = setTimeout(function() {
            centralText.classList.remove('animation-pt1')
            centralText.classList.add('animation-pt2')

            //Second timeout which half throw the fade affect where no text is showing, it replaces it with different text
            var timeout2 = setTimeout(function() {
                    centralText.innerText = 'Welcome to ' + document.title

                    //Third timeout which removes the 2nd animation and adds the 3rd so that it goes off the screen
                    var timeout3 = setTimeout(function() {
                            centralText.classList.remove('animation-pt2')
                            centralText.classList.add('animation-pt3')

                            //Final timeout which changes the final text while its offscreen
                            var timeout4 = setTimeout(function() {
                                    centralText.innerHTML = "Hoolarious :)"

                                }, 3000) //End of 4th

                        }, 3000) //End of 3rd

                }, 1000) //End of 2nd

        }, 3000) //End of 1st

}

//loads the first tsParticles background
tsParticles.load("tsparticles", window.tsOptions[0]);

function flipParticleOpacity() {
    var icon = document.getElementsByClassName('background-options')[0]
        //inverts opacity
    if (window.tsOptions[0].background.opacity === 1) {
        icon.style.color = 'white'
        window.tsOptions[0].background.opacity = 0
        window.tsOptions[2].background.opacity = 0
    } else {
        icon.style.color = 'black'
        window.tsOptions[0].background.opacity = 1
        window.tsOptions[2].background.opacity = 1
    }
    //reloads
    tsParticles.load("tsparticles", window.tsOptions[particleType])
}

function changeParticleType() {
    var icon = document.getElementsByClassName('background-options')[1]
        //rotates through our 3 particle types
    if (particleType === 0) {
        particleType = 1
        icon.innerText = 'filter_2'
    } else if (particleType === 1) {
        particleType = 0
        icon.innerText = 'filter_1'
    }
    //reloads
    tsParticles.load("tsparticles", window.tsOptions[particleType]);
}
const icons = document.querySelectorAll('.icon');
icons.forEach(icon => {
    icon.addEventListener('click', (event) => {
        icon.classList.toggle("open");
    });
});