import { rest } from "msw";

const baseURL = "https://mypp5-ba060e459767.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 3,
        username: "Malin",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 3,
        profile_image:
        "https://res.cloudinary.com/dqhoo921b/image/upload/v1/media/../default_profile_qdjgyp",
      })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
