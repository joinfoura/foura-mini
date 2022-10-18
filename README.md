# Foura Mini - Coding Test #

In this replica of our tech stack, you'll add a new field `user.lastName` and return it via an existing HTTP endpoint e.g.

```
Given User { id: 1, email: 'tester@joinfoura.com', firstName: 'Tester', lastName: 'Test' }
When I visit GET /users
Then I receive { users: [{ id: 1, email: 'tester@joinfoura.com', firstName: 'Tester', lastName: 'Test' }] }
```

### To pass this coding test ###

1. tests pass with `npm test`
2. linting passes with `npm run lint`
3. all changes have been committed to the `user/add_last_name` branch
4. the project has been compressed and emailed to Adam

### Setup ###

#### Node & Npm

1. install [nvm for linux](https://github.com/nvm-sh/nvm#installing-and-updating) or [nvm for windows](https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows)
2. `nvm install 14`
3. `nvm use 14`
4. `npm update`
5. `npm install npm@latest`

#### Code

1. `git clone git@github.com:joinfoura/foura-mini.git`
2. `npm install`
3. `git checkout -b user/add_last_name`

#### Database

1. `sudo apt install postgresql-13`
2. `sudo systemctl start postgresql@13-main`
3. `createuser --createdb --host=127.0.0.1 --port=5432 foura_developer`
4. `NODE_ENV=test npx sequelize-cli db:create`
5. `NODE_ENV=test npx sequelize-cli db:migrate`
