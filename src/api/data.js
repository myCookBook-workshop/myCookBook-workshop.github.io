import { getUserData } from '../util.js';

export const endpoints = {
    recipes: '/classes/Recipe',
    recipesDetails: (id) => `/classes/Recipe/${id}?include=owner`,
    recipesById: '/classes/Recipe/',
    comments: '/classes/Comment',
    commentsByRecipe: (recipeId) => `/classes/Comment?where=${createPointerQuery('recipe', 'Recipe', recipeId)}&include=owner&order=-createdAt`
}

export function createPointerQuery(propName, className, objectId) {
    return createQuery({[propName]: createPointer(className, objectId)});
}

export function createQuery(query) {
    return encodeURIComponent(JSON.stringify(query));
}

export function createPointer(className, objectId) {
    return {
        __type: 'Pointer',
        className,
        objectId
    };
}

export function addOwner(record) {
    const { id } = getUserData();
    record.owner = createPointer('_User', id);

    return record;
}