"use strict";var createError=require("http-errors"),express=require("express"),expressGa=require("express-ga-middleware"),basicAuth=require("express-basic-auth"),path=require("path"),cookieParser=require("cookie-parser"),logger=require("morgan"),sassMiddleware=require("node-sass-middleware"),indexRouter=require("./routes/index"),webhooksRouter=require("./routes/webhooks"),displayRouter=require("./routes/display"),app=express();app.set("views",path.join(__dirname,"views")),app.set("view engine","ejs"),app.use(logger("dev")),app.use(express.json()),app.use(expressGa(process.env.GA_TRACKING_ID)),app.use(express.urlencoded({extended:!1})),app.use(cookieParser()),app.use(sassMiddleware({src:path.join(__dirname,"public"),dest:path.join(__dirname,"public"),indentedSyntax:!0,sourceMap:!0})),app.use(express.static(path.join(__dirname,"public"))),app.use("/",indexRouter),app.use("/webhooks",webhooksRouter),app.use("/display",displayRouter),app.use(function(e,r,s){s(createError(404))}),app.use(function(e,r,s,p){s.locals.message=e.message,s.locals.error="development"===r.app.get("env")?e:{},s.status(e.status||500),s.render("error")}),module.exports=app;
//# sourceMappingURL=app-min.js.map