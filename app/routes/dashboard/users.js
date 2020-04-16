const controller = require("../../../app/controllers/users.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    // app.get("/api/users", controller.allUsers);
    app.post("/api/users/add", controller.addUser);
    app.put("/api/users/update", controller.updateUser);
    app.get("/api/users/:id", controller.getMyUser);
}