const subjectsSelect = document.querySelector('#calculator-form-subjects');

let k=0;

const subjectsMultiSelect = new Choices(subjectsSelect, {
    allowSearch: false,
    silent: false,
    renderChoiceLimit: -1,
    maxItemCount: -1,
    removeItems: true,
    removeItemButton: true,
    editItems: false,
    duplicateItemsAllowed: false,
    delimiter: ",",
    paste: true,
    searchEnabled: false,
    searchChoices: true,
    searchResultLimit: -1,
    position: "auto",
    resetScrollPosition: true,
    shouldSort: true,
    shouldSortItems: false,
    placeholder: true,
    noChoicesText: "Немає доступних опцій",
    itemSelectText: "Натисніть для вибору",
    classNames: {
      containerInner: "choices__inner tech-input-container",
      input: "choices__input",
    },
});

const calculatorForm = document.querySelector('.calculator-form');  

calculatorForm.addEventListener('submit',function(event){
    event.preventDefault();
    k = 0;
    //Selectors    
    const lessonPlace = document.querySelector('#calculator-form-input-place input:checked');
    const howMuch = document.querySelector('#calculator-form-input-much input:checked');
        
    //Values    
    const subjectsValue = getSubjectsSum(subjectsMultiSelect.getValue());
    const lessonPlaceValue = convertPlaceToPrice(lessonPlace.value);
    const howMuchValue = convertMuchToPrice(howMuch.value);
    const totalSum = ((subjectsValue  + lessonPlaceValue * k) *  howMuchValue) * 4;
    renderSum(totalSum);

});

//const forHour = document.querySelector('#for-hour-btn1');
//forHour.addEventListener('click', function(event) {
//    event.preventDefault();
//    forHour.textContent='ddd'
//});

//const requestReceivedModal = document.querySelector('#request-received');






function getSubjectsSum(subjectsArr) {
    let totalSum = 0;
    
    subjectsArr.forEach(function(tech) {
        totalSum = totalSum + extractPriceFromValue(tech.value);
        k=k+1;
    })
    return totalSum;
}

function extractPriceFromValue(str) {
    const price = str.match(/:\d+/);  
    if (price) {
      return Number(price[0].slice(1)) || 0;
    }  
    return 0;
  }


function convertPlaceToPrice(option) {
    if (option === 'your') {
        return 20;
    }
    return 0;
}

function convertMuchToPrice(option) {
    if (option === 'two') {
        return 2;
    }
    return 1;
}

function renderSum(sum) {
    const costElement = document.querySelector('.calculator-form-total-cost');
    costElement.textContent = 'Підрахунок';    
    setTimeout(function(){
        setTimeout(function(){
            setTimeout(function(){
                setTimeout(function(){        
                    costElement.textContent = sum + ' грн/міс';
                },500);        
                costElement.textContent = 'Підрахунок...';
            },500);
            costElement.textContent = 'Підрахунок..';
        },500);
        costElement.textContent = 'Підрахунок.';
    },500);
    
}


