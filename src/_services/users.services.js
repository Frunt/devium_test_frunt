import {handleResponse} from "../_helpers/respons.handeler";
import {globals} from "../_helpers";
import {hex_md5} from "../_helpers/md5";

export const usersServices = {
    login,
    logout
};

// function login(data) {
//     const jsonBody = {
//         operation: 'plogin',
//         username: data.login,
//         password: hex_md5(data.password).toString()
//     };
//     const formData = new FormData();
//
//     for (let k in jsonBody) {
//         formData.append(k, jsonBody[k]);
//     }
//     const requestOptions = {
//         method: 'POST',
//         body: formData
//     };
//     return fetch(globals.vtigerUrl + 'webservice.php', requestOptions).then(handleResponse)
// }

// OLD
// function login(data) {
//     const requestOptions = {
//         method: 'get'
//     };
//     return fetch(globals.vtigerUrl + 'webservice.php?operation=getchallenge&username=' + data.login, requestOptions)
//       .then(handleResponse).then(res => {
//           console.log(res);
//           const jsonBody = {
//               'operation': 'login',
//               'username': data.login,
//               'accessKey': hex_md5(res.result.token + 'URlaqX15WNxXraQp').toString()
//           };
//
//           const formData = new FormData();
//
//           for (let k in jsonBody) {
//               formData.append(k, jsonBody[k]);
//           }
//
//           requestOptions.method = 'POST';
//           requestOptions.body = formData;
//           return fetch(
//             globals.vtigerUrl + 'webservice.php',
//             requestOptions).then(handleResponse)
//       })
// }

//NEW
function login(data) {
  return new Promise(function (resolve, reject) {
    if (data.login === 'reactdev' && data.password === '123456') {
      resolve(data.login);
    } else console.error('invalid credentials');
  })
}
// function login(data) {
//     const requestOptions = {
//         method: 'get'
//     };
//     return fetch(globals.vtigerUrl + 'webservice.php?operation=getchallenge&username=' + data.login, requestOptions)
//         .then(handleResponse);
// }

function logout() {
  localStorage.clear();
}
