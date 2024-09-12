
/*import*/
let gn = new General;


let ops = ["Pedra", "Papel", "Tesoura"];
let player_choice = "";

async function _round(t)
{
    while(player_choice == "") 
    {
        let r = gn.randomNumbers(1,3)
        document.getElementById("pc_choice_label").innerHTML = ops[r];
        await gn.sleep(20)
    }

    result(document.getElementById("pc_choice_label").innerHTML, player_choice)
}


function choice_pedra()
{
    let ax = document.getElementById("choice_pedra");
    // console.log(ax.getAttribute("id"));

    if (ax.getAttribute("id") == "choice_pedra")
    {
        ax.setAttribute("class", "choice_active")
        let arr = document.getElementsByClassName("choice");
        arr[0].disabled = true;
        arr[1].disabled = true;

        player_choice = "Pedra";
        // _round(75);
    }
}
function choice_papel()
{
    let ax = document.getElementById("choice_papel");
    // console.log(ax.getAttribute("id"));

    if (ax.getAttribute("id") == "choice_papel")
    {
        ax.setAttribute("class", "choice_active")
        let arr = document.getElementsByClassName("choice");
        arr[0].disabled = true;
        arr[1].disabled = true;

        player_choice = "Papel";
        // _round(75);
    }
}
function choice_tesoura()
{
    let ax = document.getElementById("choice_tesoura");
    // console.log(ax.getAttribute("id"));

    if (ax.getAttribute("id") == "choice_tesoura")
    {
        ax.setAttribute("class", "choice_active")
        let arr = document.getElementsByClassName("choice");
        arr[0].disabled = true;
        arr[1].disabled = true;
    
        player_choice = "Tesoura";
        // _round(75);
    }
}

let play = ()=>{
    location.reload();
}

let result = (result = "", player_choice = "")=>
{
    if (result.toLowerCase() === player_choice.toLowerCase())
    {
        console.log("you win");
    }
}


(function()
{
    _round(75)
})();
