const generate = document.getElementById('cube')

/**
 * Event listener for the generate button.
 * Fetches a random advice from the API and updates the DOM with the advice and its ID.
 */
generate.addEventListener('click',()=>{
    url='https://api.adviceslip.com/advice'
    /**
     * Fetches the advice from the API and returns a promise that resolves to the JSON data.
     * @returns {Promise<Object>} A promise that resolves to the JSON data containing the advice and its ID.
     */

    fetch(url).then(response=>response.json()).then(data=>{
        changeDom(data)
    })
})

/**
* Updates the DOM with the advice and its ID.
* @param {Object} data - The JSON data containing the advice and its ID.
*/
const changeDom=(data)=>{
    const advice=document.getElementById('advice')
    const level=document.getElementById('level')
    level.innerText = data['slip']['id']
    advice.innerText=data['slip']['advice']
    
}
