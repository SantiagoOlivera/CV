


function generatePDF(
        person,
        work_experience,
        studies,
        idioms,
        knowledges,
        my_better_skills
    ){


    var image = new Image();

    var pdf = new jsPDF();

    pdf.text(20,20,'Text Message');
    pdf.addPage();
    pdf.text(20,20,'TEST PAGE 2!');

    pdf.save("Test.pdf");


}

