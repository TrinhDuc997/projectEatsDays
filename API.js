
export const apiGetData = (req) => {
    return fetch(`http://10.0.2.2:5000/api?data=${JSON.stringify(req)}`)
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson.recordset
      })
      .catch((error) =>{
        console.error(error);
      });
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