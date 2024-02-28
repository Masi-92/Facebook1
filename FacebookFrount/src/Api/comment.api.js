

import myApi from "./api";

export const createComment = (body) => {
    return myApi.post("/comment", body);
}

