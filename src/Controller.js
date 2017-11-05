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
    var calculator = new Calculator();

    forms = sheepItForm.getForms();

    for (x in forms) {
        calculator.addCourse({
          'workload': parseInt($('#workload_'+ x).val()),
          'grade': parseInt($('#grade_'+x).val())
        });
    }

    score = calculator.calculateScore();

    if (score) {
        resultPlaceholder.innerHTML = '<div class="alert alert-success">O seu RSG é: <h3>' + score + '</h3></div>';
    } else {
        resultPlaceholder.innerHTML = '<div class="alert alert-danger">Você deixou algum campo vazio. Preencha-o ou remova a disciplina para realizar o cáculo.</div>';
    }
});
