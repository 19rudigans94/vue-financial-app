function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function aggregateData(data, key) {
    console.log('Input data:', data);
    console.log('Key:', key);

    const aggregatedData = {};

    data.forEach(item => {
        let value = String(item[key]).trim().toLowerCase(); // Преобразуем в строку в нижнем регистре без пробелов

        console.log('Item:', item);
        console.log('Value:', value);

        // Проверка корректности данных
        if (!value || typeof item.amount !== 'number') {
            console.error(`Invalid data for key '${key}' in item:`, item);
            return; // Прерываем выполнение функции, если данные некорректны
        }

        if (aggregatedData.hasOwnProperty(value)) {
            aggregatedData[value] += item.amount;
        } else {
            aggregatedData[value] = item.amount;
        }
    });

    console.log('Aggregated data:', aggregatedData);

    const result = Object.keys(aggregatedData).map(category => ({
        [key]: category,
        amount: aggregatedData[category]
    }));

    console.log('Result:', result);

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
