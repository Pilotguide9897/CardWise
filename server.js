const path = require('path');
const cron = require('node-cron');
const dayjs = require('dayjs');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const { updateDeckQueues } = require('./utils/update-queues');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

// cron.schedule('0 1 * * *', () => {
cron.schedule('0 0 1 * * *', () => {
  console.log(
    'Running every day at 1AM AST',
    dayjs().format('DD/MM/YYYY HH:mm')
  );
  updateDeckQueues();
});

// run this on server start so at least some cards will be queued.
updateDeckQueues();

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: "shh don't tell",
  cookie: {
    maxAge: 60 * 60 * 1000,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log('🚀 Now listening on port: ', PORT);
  });
});
