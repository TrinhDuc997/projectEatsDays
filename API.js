
export const apiGetData = async (req) => {
    let res = {}
    await fetch(`http://10.0.2.2:5000/getLoaiMonAn`)
      .then((response) => {
          return response.json()
        })
      .then((responseJson) => {
        res = responseJson.recordset
      })
      .catch((error) =>{
        console.error(error);
      });
      return res
}

export const apiLogin = async  (req) => {
    let resData = {}
    await fetch('http://10.0.2.2:5000/login',{
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin", 
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        redirect: "follow",
        referrer: "no-referrer", 
        body: JSON.stringify({data:req})
    })
      .then((response) => {
        resData = response
          return response.json()
        })
      .then((responseJson) => {
        resData = responseJson
      })
      .catch((error) =>{
        console.error(error);
      });
      return resData.recordset
}
export const apiGetGoodFoodDays = async (req) => {
  let res = {}
    await fetch(`http://10.0.2.2:5000/goodFoodDays`)
      .then((response) => response.json())
      .then((responseJson) => {
        res =  responseJson.recordset
      })
      .catch((error) =>{
        console.error(error);
      });
      return res
}
//API creat new meal 
export const apiCrateNewMeal = async (req) => {
  let res = {}
    await fetch(`http://10.0.2.2:5000/newMeal`)
      .then((response) => response.json())
      .then((responseJson) => {
      })
      .catch((error) =>{
        console.error(error);
      });
}
// API get dish suggestions
export const apiGetDishSuggestions = async (req) => {
    let res = {}
    await fetch(`http://10.0.2.2:5000/getDishSuggestions`)
      .then((response) => {
          return response.json()
        })
      .then((responseJson) => {
        res = responseJson.recordset
      })
      .catch((error) =>{
        console.error(error);
      });
      return res
}
// API get dish session
export const apiGetDishSession = async (req) => {
    let res = {}
    await fetch(`http://10.0.2.2:5000/getDishSession`)
      .then((response) => {
          return response.json()
        })
      .then((responseJson) => {
        res = responseJson.recordset
      })
      .catch((error) =>{
        console.error(error);
      });
      return res
}

