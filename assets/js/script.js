const form = document.querySelector('#form-habits');
const nlwSetup = new NLWSetup(form);

const data = {
    run: ['01-01', '01-02', '01-06'],
    water: ['01-04', '01-05'],
    food: ['01-01', '01-03'],
};

nlwSetup.setData(data);
nlwSetup.load();