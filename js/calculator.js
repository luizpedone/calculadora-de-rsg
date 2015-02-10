calculateButton = document.getElementById('calcular');
resultOutputElement = document.getElementById('resultado');

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
    credits = multiplier = 0;

    for (x in forms) {
        credits = parseInt($('#carga_'+x).val()) + credits;
        multiplier = parseInt($('#conceito_'+x).val()) * parseInt($('#carga_'+x).val()) + multiplier;
    }

    score = multiplier / credits;

    if (score) {
        resultOutputElement.innerHTML = '<div class="alert alert-success">O seu RSG é: <h3>' + parseFloat(score).toFixed(1) + '</h3></div>';
    }
    else {
        resultOutputElement.innerHTML = '<div class="alert alert-danger">Você deixou algum campo vazio. Preencha-o ou remova a disciplina para realizar o cáculo.</div>';
    }
});