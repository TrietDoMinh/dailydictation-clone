// // src/config/passport.config.ts
// import * as passport from 'passport';
// import * as dotenv from 'dotenv';
// import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

// dotenv.config();

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//       callbackURL: 'http://localhost:5000/auth/google/callback',
//       scope: ['profile', 'email'],  // Thêm scope vào đây
//     },
//     async (_accessToken, _refreshToken, profile, done) => {
//       try {
//         console.log('Google Profile:', profile);
//         const googleUser = {
//           googleId: profile.id,
//           email: profile.emails![0].value,
//           username: profile.displayName,
//         };
//         done(null, googleUser);
//       } catch (error) {
//         console.error('GoogleStrategy Error:', error);
//         done(error as Error, undefined);
//       }
//     }
//   )
// );

// passport.serializeUser((user: any, done) => {
//   done(null, user);
// });

// passport.deserializeUser((user: any, done) => {
//   done(null, user);
// });



//CLONE VỀ RỒI BỎ COMMENT