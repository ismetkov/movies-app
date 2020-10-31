import { ActionTypes } from './types';

export interface GetHandleChangeAction {
  type: ActionTypes.handeSearchTermChange;
  payload: string;
}

export interface GetHandleTabViewAction {
  type: ActionTypes.handeSetTabView;
  payload: string;
}

export const handleSearchInputChange = (
  data: string
): GetHandleChangeAction => ({
  type: ActionTypes.handeSearchTermChange,
  payload: data,
});

export const handleSetTabView = (data: string): GetHandleTabViewAction => ({
  type: ActionTypes.handeSetTabView,
  payload: data,
});
