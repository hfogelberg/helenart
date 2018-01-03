const IS_LOCAL = process.env.NODE_ENV !== "production";
const GOOGLE_CLIENT_ID =
  "117735353954-8cpgiuhrfol5rlunnq99nfrhfe96lu0o.apps.googleusercontent.com";
const GOOGLE_CALLBACK_URL = IS_LOCAL
  ? "http://localhost:8080/callback/google"
  : "vueoath.henrikfogelberg.com";
const API_ROOT_URL = IS_LOCAL
  ? "http://localhost:3000/api"
  : "https://pip.henrikfogelberg.com/api";
const CLOUDINARY_ROOT_URL = "http://res.cloudinary.com/golizzard/image/upload/";
const CLOUDINARY_CLOUD_NAME = "golizzard";
const CLOUDINARY_API_KEY = "925374862654622";
const CLOUDINARY_API_SECRET = "doHBawwQUw7L2vYVKq5Dl9wbdUE";

module.exports = {
  CLOUDINARY_ROOT_URL,
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  IS_LOCAL,
  GOOGLE_CLIENT_ID,
  GOOGLE_CALLBACK_URL,
  API_ROOT_URL
};
