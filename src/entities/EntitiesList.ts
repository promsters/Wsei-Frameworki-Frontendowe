export type EntitiesDisplayType = "mosaic" | "list";
export type EntitiesSortMode = "asc" | "desc";

export interface EntitiesFiltersState {
    keyword: string | null;
    sort: EntitiesSortMode;
}

export interface EntitiesOptionsState {
    displayType: EntitiesDisplayType;
    fullscreen: boolean;
}
