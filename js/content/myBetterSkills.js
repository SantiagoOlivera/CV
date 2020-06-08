var myBetterSkills = document.querySelector('#myBetterSkills');




function setMyBetterSkillsItemsHTMLText(myBetterSkillsItems){

    var myBetterSkillsHTMLText = '';

    var cont = 1;

    myBetterSkillsItems.forEach(

    

        element => {
        
            myBetterSkillsHTMLText = ` ${myBetterSkillsHTMLText} 

                    <div class="my-better-skills">

                    <div class="my-better-skills-container">

                        <div class="my-better-skills-item">

                            <div class="my-better-skills-icon">
                                <h1>${cont++}</h1>
                            </div>

                            <div class="my-better-skills-item-container">

                                

                                <div class="my-better-skills-title">
                                    <h1>
                                        <span idTranslate="${element.title[1]}">
                                            ${element.title[0]} 
                                        </span>
                                    </h1>
                                </div>
                                <div class="my-better-skills-description">
                                    <p>
                                        <span idTranslate="${element.description[1]}">
                                            ${element.description[0]}
                                        </span>
                                    </p>
                                </div>

                            </div>

                        </div>
                        
                    </div>

                </div>
            `;
    });


    myBetterSkills.innerHTML = `
        
        <h1>
            <span idTranslate="14">
                My Better Skills
            </span>
        </h1>

        ${myBetterSkillsHTMLText}

    `; 

}