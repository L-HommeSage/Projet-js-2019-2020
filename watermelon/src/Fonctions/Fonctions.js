export function setItemLS(key, value) { //Set un item dans le LocalStorage
  localStorage.setItem(key,  JSON.stringify(value));
}
 
export function getItemLS(key) { //Get un item dans le LocalStorage
    return JSON.parse(localStorage.getItem(key));
  }

export function getBalance(user_id){  //Récupérer la balance du compte de l'utilisateur connecté 
    var balance;
    JSON.parse(localStorage.getItem("wallets")).map((index) => {
        if (user_id == index.user_id) {
            balance=index.balance;
        }
    })
    return balance;
}


