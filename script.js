let cells= document.querySelectorAll('.cell');
let currpla = true; //true for '0';
let msg = document.querySelector('#msg');
let winPat =[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
for (let cell of cells){
    cell.addEventListener('click', () => {
        if (currpla){
            cell.textContent='0';
            currpla = false;
            cell.disable
        }
        else {
            cell.textContent = 'X';
            currpla = true;
        }
        cell.disabled = true;
        checkwinner();
    })
}
let checkwinner = () => {
    for(let ind of winPat){
        let it1=cells[ind[0]].textContent;
        let it2=cells[ind[1]].textContent;
        let it3=cells[ind[2]].textContent;
        if (it1 === '' || it2 === '' || it3 === ''){
            continue;
        }
        else if(it1==it2 && it2==it3 && it3==it1)
            winnerfound(it1)
        }
}
let winnerfound = (it1) => {
    // disablecell
    for(let cell of cells){
        cell.disabled = true;
    }
    // showmsg
    msg.classList.remove('hide');
    msg.textContent+=' Winner is '+ it1;

}