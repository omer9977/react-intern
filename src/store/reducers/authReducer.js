import { userValue } from "../initialValues/userValue";

export const LOGIN = "LOGIN"
export const LOGOUT = "LOGOUT"

const initialState = {
    userValue: userValue
}

export default function authReducer(state = initialState, { type, payload }) {
    switch (type) {
        case LOGIN:
            return {
                ...state,
                userValue: { user: payload }
            }

        case LOGOUT:
            return {
                ...state,
                userValue: {}
            }

        default:
            return state;
    }
}