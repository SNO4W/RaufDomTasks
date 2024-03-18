//Меджнунов Рауф ИСиП(п)2/4
//Задание 1
function createDropdown (options, value) {
    let select = document.createElement('select');

    value = value || options[0].value;
    
    for (let i = 0; i < options.length; i++) {
        let option = document.createElement('option');
        option.value = options[i].value;
        option.innerHTML = options[i].label;
        select.append(option);

        if (options[i].value === value) {
            option.selected = true;
        }
    }
    return select;
}

let options = [
    { value: '1', label: 'Пункт 1' },
    { value: '2', label: 'Пункт 2' },
    { value: '3', label: 'Пункт 3' }
];

let value = '3';

let dropdown = createDropdown(options, value);
document.body.append(dropdown);

//Задание 2

function transformData(inputData) {
    let transformedData = [];
    let isArr = inputData !== null && typeof inputData.length === 'number';

    if (typeof inputData === 'object') {
        if (isArr === 'object') {
            for (let i = 0; i < inputData.length; i++) {
                let item = inputData[i];
                if (typeof item === 'object') {
                    transformedData.push(item);
                } else {
                    transformedData.push({ value: item, label: item });
                }
            }
        } 
        else {
            for (let key in inputData) {
                if (inputData[key] !== undefined) {
                    transformedData.push({ value: key, label: inputData[key] });
                }
            }
        }
    }

    return transformedData;
}

let inputData1 = [1, 2, 'три', 'четыре'];
let inputData2 = { value1: 'Значение 1', value2: 'Значение 2' };

let options1 = transformData(inputData1);
let options2 = transformData(inputData2);

let dropdown1 = createDropdown(options1);
let dropdown2 = createDropdown(options2);

document.body.append(dropdown1);
document.body.append(dropdown2);