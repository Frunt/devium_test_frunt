import {usersServices} from "../_services";
import {fail, success} from "../_helpers/respons.handeler";
import {usersConstants} from "../_constants";

export const usersActions = {
    login,
    logout
};

function login(data) {
    return dispatch => {
        usersServices.login(data).then(
            res => dispatch(success(res, usersConstants.LOGIN)),
            error => dispatch(fail(error))
        )
    }
}

function logout() {
    return dispatch => {
        usersServices.logout();

    }
}
