import { notify } from "../lib/notify.js";

export default function Initialize() {
    return function(ctx, next) {
        ctx.notify = notify;

        next();
    }
}