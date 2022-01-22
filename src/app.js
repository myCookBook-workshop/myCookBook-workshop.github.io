// import * as recipeService from './api/recipe.js';
// import * as userService from './api/user.js';

// window.recipeService = recipeService;
// window.userService = userService;
// window.notify = notify;

import { page } from './lib.js';
import decorateContext from './middlewares/render.js';
import addSession from './middlewares/session.js';
import notify from './middlewares/notify.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { catalogPage } from './views/catalog.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';

page(addSession());
page(decorateContext());
page(notify());
page('/', homePage);
page('/login', loginPage);
page('/register', registerPage);
page('/catalog', catalogPage);
page('/details/:id', detailsPage);
page('/create', createPage);
page('/edit/:id', editPage);

page.start();

