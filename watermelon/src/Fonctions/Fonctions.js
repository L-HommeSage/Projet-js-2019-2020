export function setItemLS(key, value) {
  localStorage.setItem(key,  JSON.stringify(value));
}

export function getItemLS(key) {
    return JSON.parse(localStorage.getItem(key));
  }

export function getBalance(user_id)
{
    var balance;
    JSON.parse(localStorage.getItem("wallets")).map((index) => {
        if (user_id == index.user_id) {
            balance=index.balance;
        }
    })
    return balance;
}


