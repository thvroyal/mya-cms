'use strict';

/**
 * client-and-partner service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::client-and-partner.client-and-partner');
