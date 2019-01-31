CREATE TABLE "USER_TOKENS" (
  "ID" INTEGER NOT NULL GENERATED BY DEFAULT AS IDENTITY (START WITH 1, INCREMENT BY 1),
  "USER_UUID" VARCHAR(255) NOT NULL,
  "NAME" VARCHAR(100) NOT NULL,
  "TOKEN_HASH" VARCHAR(255) NOT NULL,
  "CREATED_AT" BIGINT NOT NULL
);
CREATE UNIQUE INDEX "USER_TOKENS_TOKEN_HASH" ON "USER_TOKENS" ("TOKEN_HASH");
CREATE UNIQUE INDEX "USER_TOKENS_USER_UUID_NAME" ON "USER_TOKENS" ("USER_UUID", "NAME");