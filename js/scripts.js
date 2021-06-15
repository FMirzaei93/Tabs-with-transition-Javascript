window.onload = function() {

    let tabs = document.querySelectorAll('ul#tabs li');
    let pages = document.querySelectorAll('div#page div');
    let bubbles = document.querySelectorAll('ul#tabs li p');

    fitExpressionsToBubbles();

    for (let [index, tab] of tabs.entries()) {

        tab.onclick = function() {

            // To make the selected tab's bubble disappear after clicking on.
            bubbles[index].style.opacity = '0';


            // ******************** Tabs **********************

            for (let t of tabs) {
                //First deactivate all tabs
                t.classList.remove('active-tab');
            }
            //Then activate the selected tab
            tab.classList.add('active-tab');



            // ******************** Pages **********************

            for (let page of pages) {
                //First deactivate all pages
                page.classList.remove('active-page');
            }
            //Then activate the selected page
            pages[index].classList.add('active-page');
        }

        // ******************** Mouse Events **********************

        tab.onmouseover = function() {
            if (!tab.classList.contains('active-tab'))
                bubbles[index].style.opacity = '1';
        }

        tab.onmouseout = function() {
            bubbles[index].style.opacity = '0';
        }
    }


    function firstCoupleOfWords(numberOfWords) {

        let paragrapghsArray = document.querySelectorAll('div#page div span');
        var finalArray = [];
        for (i = 0; i < paragrapghsArray.length; i++) {

            var paragraphText = paragrapghsArray[i].innerText;
            var allWordsOfEachParagraphArray = paragraphText.split(" ");
            var finalExpression = '';

            for (j = 0; j < numberOfWords; j++) {
                if (j < numberOfWords - 1)
                    finalExpression += allWordsOfEachParagraphArray[j] + ' ';
                else finalExpression += allWordsOfEachParagraphArray[j] + '...'

            }
            finalArray.push(finalExpression);

        }
        return finalArray;

    }

    function fitExpressionsToBubbles() {

        var array = firstCoupleOfWords(15);
        for (i = 0; i < array.length; i++) {
            bubbles[i].innerText = array[i];
        }
    }


}