let page = document.getElementById('buttonDiv');
const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];

(colors => {
    for (let item of colors) {
        let button = document.createElement('button');
        button.style.backgroundColor = item;
        button.addEventListener('click', () => {
            chrome.storage.sync.set({ color: item }, () => {
                console.log(`Color is ${item}`);
            })
        });
        page.appendChild(button);
    }
})(kButtonColors);