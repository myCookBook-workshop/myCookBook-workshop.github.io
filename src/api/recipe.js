import * as api from './api.js';
import { endpoints, addOwner } from './data.js';

const pageSize = 3;

export async function getRecentRecipes() {
    return api.get(endpoints.recent);
}

export async function getRecipes(page, query) {
    const data = await (() => {
        if (query) {
            query = {
                name: {
                    $text: {
                        $search: {
                            $term: query,
                            $caseSensitive: false
                        }
                    }
                }
            };
            return api.get(endpoints.recipeSearch(page, query, pageSize));
        } else {
            return api.get(endpoints.recipes(page, pageSize));
        }
    }) ();

    data.pages = Math.ceil(data.results.length / pageSize);

    return data;
}

export async function getrecipeById(id) {
    return api.get(endpoints.recipesDetails(id));
}

export async function createRecipe(recipe) {
    addOwner(recipe);

    return api.post(endpoints.createRecipe, recipe);
}

export async function updateRecipe(id, recipe) {
    return api.put(endpoints.recipesById + id, recipe);
}

export async function deleteRecipe(id) {
    return api.del(endpoints.recipesById + id);
}