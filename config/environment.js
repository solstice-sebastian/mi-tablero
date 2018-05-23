/* eslint-disable func-names */

'use strict';

const dotenv = require('dotenv');

module.exports = function(environment) {
  const ENV = {
    modulePrefix: 'mi-tablero',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false,
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  const isProd = environment === 'production';
  const isMirage = environment === 'mirage';

  if (isProd) {
    // here you can enable a production-specific feature
  }

  /**
   * environment variables
   */
  dotenv.config({ path: `.env.${environment}` });
  ENV.VARS = Object.assign({}, process.env);

  /**
   * Content Security Policy
   */
  const connectSrc = [`'self'`];
  if (environment !== undefined && isMirage === false) {
    if (ENV.VARS.ALLOW_ORIGIN !== undefined) {
      connectSrc.push(`${ENV.VARS.ALLOW_ORIGIN}`);
    }
  }
  ENV.contentSecurityPolicy = {
    'default-src': "'none'",
    'script-src': "'self'",
    'font-src': "'self' http://fonts.gstatic.com",
    'connect-src': connectSrc,
    'img-src': "'self' data:",
    'media-src': "'self'",
    'style-src': "'self' 'unsafe-inline'",
  };

  /**
   * addons
   */
  ENV['ember-cli-mirage'] = {
    enabled: isMirage,
  };

  ENV['ember-paper'] = {
    insertFontLinks: false,
  };

  return ENV;
};
