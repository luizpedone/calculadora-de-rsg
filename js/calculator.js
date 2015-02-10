calculateButton = document.getElementById('calculateButton');
resultPlaceholder = document.getElementById('resultPlaceholder');
var sheepItForm = $('#sheepItForm').sheepIt({
    separator: '',
    allowRemoveLast: true,
    allowRemoveCurrent: true,
    allowRemoveAll: false,
    allowAdd: true,
    allowAddN: false,
    maxFormsCount: 15,
    minFormsCount: 1,
    iniFormsCount: 3
});

calculateButton.addEventListener('click', function(){
    forms = sheepItForm.getForms();
    credits = grade = 0;

    for (x in forms) {
        credits = parseInt($('#workload_'+x).val()) + credits;
        grade = parseInt($('#grade_'+x).val()) * parseInt($('#workload_'+x).val()) + grade;
    }

    score = grade / credits;

    if (score) {
        resultPlaceholder.innerHTML = '<div class="alert alert-success">O seu RSG é: <h3>' + parseFloat(score).toFixed(1) + '</h3></div>';
    }
    else {
        resultPlaceholder.innerHTML = '<div class="alert alert-danger">Você deixou algum campo vazio. Preencha-o ou remova a disciplina para realizar o cáculo.</div>';
    }
});