'use strict';

const assert = require('assert');

module.exports = function articleMetadataFromOpts (opts) {
  assert(typeof opts.isPreview === 'undefined' || typeof opts.isPreview === 'boolean');
  assert(typeof opts.isSponsored === 'undefined' || typeof opts.isSponsored === 'boolean');
  assert(typeof opts.maturityRating === 'undefined' || typeof opts.maturityRating === 'string');
  assert(typeof opts.isDevelopingStory === 'undefined' || typeof opts.isDevelopingStory === 'boolean');


  const obj = {
    isPreview: typeof opts.isPreview === 'boolean' ? opts.isPreview : true,
    isSponsored: !!opts.isSponsored
  };

  if (opts.sections && opts.sections.length > 0) {
    obj.links = { sections: opts.sections };
  }

  if (opts.maturityRating) {
    obj.maturityRating = opts.maturityRating;
  }

  if (opts.isDevelopingStory) {
    obj.isDevelopingStory = opts.isDevelopingStory;
  }

  return obj;
};
