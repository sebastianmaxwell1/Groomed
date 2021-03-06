var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var Users = require('./models/user');
const dotenv = require('dotenv')
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens

dotenv.config()

// // passport.use(new LocalStrategy(Users.authenticate()));
// // passport.use(new LocalStrategy({ usernameField: 'email' }, Users.authenticate()));

// // passport.serializeUser(Users.serializeUser());
// // passport.deserializeUser(Users.deserializeUser());

// exports.getToken = function(user) {
//     return jwt.sign(user, dotenv.secretKey,
//         {expiresIn: 36000});
// };

// var opts = {};
// opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// opts.secretOrKey = dotenv.secretKey;

// exports.jwtPassport = passport.use(new JwtStrategy(opts,
//     (jwt_payload, done) => {
//         console.log("JWT payload: ", jwt_payload);
//         Users.findOne({_id: jwt_payload._id}, (err, user) => {
//             if (err) {
//                 return done(err, false);
//             }
//             else if (user) {
//                 return done(null, user);
//             }
//             else {
//                 return done(null, false);
//             }
//         });
//     }));

// exports.verifyUser = passport.authenticate('jwt', {session: false});
// exports.verifyAdmin = function(req, res, next) {
//     if(req.user.admin){
//         return next();
//     }
//     else {
//         err = new Error('You are not authorized to perform this operation');
//         err.status = 403;
//         return next(err);
//     }
// };