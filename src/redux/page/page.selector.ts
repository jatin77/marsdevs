import { createSelector } from "reselect";

const selectPage = (state: any) => state.page;

export const selectCurrentUser = createSelector([selectPage], (data) => data);
