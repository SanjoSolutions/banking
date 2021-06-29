import express from "express";
import type { IVerifyOptions } from "passport-local";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";

export function createApp() {
  const app = express();

  // passport.use(new LocalStrategy(
  //   function (
  //     username: string,
  //     password: string,
  //     done: (error: any, user?: any, options?: IVerifyOptions) => void,
  //   ) {
  //     User.findOne({ username: username }, function (error, user) {
  //       if (error) { return done(error); }
  //       if (!user) {
  //         return done(null, false, { message: "Incorrect username." });
  //       }
  //       if (!user.validPassword(password)) {
  //         return done(null, false, { message: "Incorrect password." });
  //       }
  //       return done(null, user);
  //     });
  //   },
  // ));

  app.get("/", function (request, response) {
    response.send("Hello World");
  });

  app.post(
    "/login",
    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/login",
      failureFlash: true,
    }),
  );

  app.get("/logout", function (request, response) {
    request.logout();
    response.redirect("/");
  });

  return app
}
