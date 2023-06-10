const textNode = document.getElementById('appearing-text');
const text = 'At Mixer, we prioritize the utmost security, privacy, and anonymity of your cryptocurrency assets. Our primary focus is ensure that your crypto finances remain secure and untraceable. We achieve this by leveraging CoinJoin technology, which allows us to mix your digital currencies with other like - minded individuals who value anonymity. Through our platform, we enable you to regain and maintain your privacy while providing you with untraceable coins.';

let i = 0;
function typeText() {
    if (i < text.length) {
        textNode.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeText, 15); 
    }
}

window.addEventListener('load', typeText);
