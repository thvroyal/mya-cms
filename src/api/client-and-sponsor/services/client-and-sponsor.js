'use strict';

/**
 * client-and-sponsor service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::client-and-sponsor.client-and-sponsor');
