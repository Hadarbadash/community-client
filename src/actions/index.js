import {createAction} from 'redux-actions';

export const addBadge = createAction('ADD_BADGE');

export const addBadgeAsync = createAction('ADD_BADGE_ASYNC');

export const getUserBadges = createAction('GET_USER_BADGES');

export const getUserBadgesSuccess = createAction('GET_USER_BADGES_SUCCESS');

export const getUserBadgesError = createAction('GET_USER_BADGES_ERROR');

export const addUserBadge = createAction('ADD_USER_BADGE');

export const removeUserBadge = createAction('REMOVE_USER_BADGE');

export const getUserNewsFeed = createAction('GET_USER_NEWS_FEED');

export const getUserNewsFeedSuccess = createAction('GET_USER_NEWS_FEED_SUCCESS');

export const getUserNewsFeedError = createAction('GET_USER_NEWS_FEED_ERROR');
