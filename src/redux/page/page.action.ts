import { PageActionTypes } from "./page.actionTypes";

export const setUserDetails = (data: any) => ({
  type: PageActionTypes.PAGE_SET_DETAILS,
  payload: data,
});
