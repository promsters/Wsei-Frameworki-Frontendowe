import * as actionTypes from '../actions/actionTypes/userTypes';
import {User} from "../entities/User";

export interface IUserReducer {
    user: User;
    loading: boolean;
}

const defaultState = (): IUserReducer => ({
    user: {
        skills: {
            expertise: ["Mergers and acquisition", "Test123"],
            specialities: ["Cross border operation", "Transaction over 500M€/$"],
            admissions: ["Paris bar association", "Tunisian bar association"],
            counties: ["Tunisia"]
        }
    } as unknown as User,
    loading: true
});

export default (state = defaultState(), action: any) => {
    switch (action.type) {
        case actionTypes.GET_USER: {
            console.log(state);
            return {
                ...state,
                loading: false,
                user: {
                    ...state.user,
                    ...action.payload,
                    skills: {
                        ...state.user.skills,
                        ...(action.payload.skills || {})
                    }
                }
            }
        }

        case actionTypes.UPDATE_USER: {
            return {
                ...state,
                user: {
                    ...state.user,
                    ...action.payload.data,
                    address: {
                        ...state.user.address,
                        ...(action.payload.data.address || {})
                    },
                    company: {
                        ...state.user.company,
                        ...(action.payload.data.company || {})
                    },
                    skills: {
                        ...state.user.skills,
                        ...(action.payload.skills || {})
                    }
                }
            }
        }

        default: {
            return state;
        }
    }
};
