// use for message send to user when user input not true  E:\tweeter-first\src\middlewares\users.middlewares.ts
export const USERS_MESSAGE = {
  VALIDATION_ERROR: 'Validation error',
  NAME_IS_REQUIRED: 'name is required',
  NAME_MUST_BE_IS_A_STRING: 'name must be string',
  NAME_LENGTH_MUST_BE_FROM_1_TO_100: "name length must be from 1 to 100",
  // email 
  EMAIL_ALREADY_EXIST: "email already exist",
  EMAIL_IS_INVALID: "email is invalid",
  // password 
  PASSWORD_IS_REQUIRED: "password is required",
  PASSWORD_MUST_BE_IS_STRING: "password must be is string",
  PASSWORD_LENGTH_MUST_BE_FROM_6_TO_50: "password length must be from 6 to 50",
  PASSWORD_MUST_BE_STRONG: "password must be 6, at least 1 lowercase, at least 1 uppercase , at lease symbols",
  // field confirm_password 
  CONFIRM_PASSWORD_IS_REQUIRED: "confirm password is required",
  CONFIRM_PASSWORD_MUST_BE_STRING: 'confirm password must be string',
  CONFIRM_PASSWORD_LENGTH_MUST_BE_FROM_6_TO_50: "password must be 6, at least 1 lowercase, at least 1 uppercase , at lease symbols ",
  CONFIRM_PASSWORD_MUST_BE_STRONG: "confirm password must be strong",
  CONFIRM_PASSWORD_MUST_BE_THE_AS_PASSWORD: "confirm password must be the as password",
  // field day_of_birth
  DAY_OF_BIRTH_MUST_BE_ISO8601: "day of birth must be ISO8601"
} as const
