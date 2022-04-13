const questions = [
    {
        question: 'How many planet in our solar system',
        options: ['9', '10', '8', '11'],
        correctAnswer : '8'
    },

    {
        question: "russia's area in million",
        options: ['17', '20', '18', '15'],
        correctAnswer : '17'
    },
    {
        question: "which type of this car is japanese made",
        options: ['volvo','ferrari','bmw','nissan'],
        correctAnswer : 'nissan'
    },
    {
        question: "how much surface area does the water cover on earth planet",
        options: ['71%','61%','51%','81%'],
        correctAnswer : '71%'
    },
    {
        question: "the number of population in kurdistan is about in million",
        options: ['8','7','6','9'],
        correctAnswer : '7'
    },
];

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  while (currentIndex != 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

shuffle(questions);

const questionNode = document.querySelector('.question');
const a = document.querySelector('#a');
const b = document.querySelector('#b');
const c = document.querySelector('#c');
const d = document.querySelector('#d');
const aOption = document.querySelector('#aOption');
const bOption = document.querySelector('#bOption');
const cOption = document.querySelector('#cOption');
const dOption = document.querySelector('#dOption');

let counter = 0;
function putQuestion() { 
    let question = questions[counter];
    questionNode.textContent = question.question ;
    shuffle(question.options);
    a.value = question.options[0];
    b.value = question.options[1];
    c.value = question.options[2];
    d.value = question.options[3];
    aOption.textContent = question.options[0] ;
    bOption.textContent = question.options[1] ;
    cOption.textContent = question.options[2] ;
    dOption.textContent = question.options[3] ;
}
putQuestion();


const optionsNodes = document.querySelectorAll('input[name = answer]');
const button = document.querySelector('#confirm');

let totalSolve = 0;


button.addEventListener('click', (event) => {
    
        let SelectedAnswer = "";
        optionsNodes.forEach((option) => {
            if (option.checked) {
                SelectedAnswer = option.value;
                console.log(option.value);
            }
        }
    );
    
        let TrueAnswer = questions[counter].correctAnswer; 
        console.log(TrueAnswer);
    
              
        if (TrueAnswer == SelectedAnswer) {
            console.log(counter);            
            totalSolve++;
        }

    if (counter == questions.length - 1) {
        button.disabled = true;
        
    } else {
        counter++;
        uncheckAll();
        putQuestion();
    }     
});

function uncheckAll(){
    optionsNodes.forEach((option)=>{ option.checked = false });
}


 



