import store from '../store/index.js';


const savedState = JSON.parse(localStorage.getItem('financial_app_state'));
if (savedState) {
    store.replaceState(savedState);
}

store.subscribe((mutation, state) => {
    localStorage.setItem('financial_app_state', JSON.stringify(state));
});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function aggregateData(data, key) {

    const aggregatedData = {};

    data.forEach(item => {
        let value = String(item[key]).trim().toLowerCase();

        if (!value || typeof item.amount !== 'number') {
            return;
        }

        if (aggregatedData.hasOwnProperty(value)) {
            aggregatedData[value] += item.amount;
        } else {
            aggregatedData[value] = item.amount;
        }
    });

    const result = Object.keys(aggregatedData).map(category => ({
        [key]: category,
        amount: aggregatedData[category]
    }));

    return result;
}




function debounce(func, wait, immediate) {
    let timeout;
    return function () {
        const context = this,
            args = arguments;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

export { getRandomColor, aggregateData, debounce };
