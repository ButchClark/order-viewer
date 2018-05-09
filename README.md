# Build based upon:
https://daveceddia.com/create-react-app-express-backend/

# Running project:
Once the project is set up, yarn'ed, etc, start it in two steps.
## Server side -
From main project directory, run the following command.  Notice it sets an environment variable to start the express server listening on port 3001.  By default the React client side will start listening on port 3000 (below).

*PORT=3001 node bin/www*

## Client side -
cd into client directory

*yarn start*
