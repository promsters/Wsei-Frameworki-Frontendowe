import {EntitiesFiltersState} from "../../entities/EntitiesList";

export const UPDATE_FILTERS = 'UPDATE_FILTERS';

export interface IUserType {
    UPDATE_FILTERS: {
        data: Partial<EntitiesFiltersState>;
    },
}
