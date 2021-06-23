export type EntitiesDisplayType = "mosaic" | "list";

export interface EntitiesFiltersState {
    displayType: EntitiesDisplayType;
    fullscreen: boolean;
}
