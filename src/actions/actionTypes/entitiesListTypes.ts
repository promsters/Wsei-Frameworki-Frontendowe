import {EntitiesFiltersState, EntitiesOptionsState} from "../../entities/EntitiesList";

export const UPDATE_FILTERS = 'UPDATE_FILTERS';
export const UPDATE_OPTIONS = 'UPDATE_OPTIONS';

export interface IUserType {
    UPDATE_FILTERS: {
        data: Partial<EntitiesFiltersState>;
    },
    UPDATE_OPTIONS: {
        data: Partial<EntitiesOptionsState>;
    },
}
