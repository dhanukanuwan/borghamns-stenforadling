import domReady from '@roots/sage/client/dom-ready';
import 'bootstrap/js/dist/carousel';
import 'bootstrap/js/dist/collapse';
import 'lazysizes';
import pageSearch from './includes/search';
import mobileNav from './includes/mobileNav';

/**
 * Application entrypoint
 */
domReady(async () => {

  pageSearch();
  mobileNav();

});

/**
 * @see {@link https://webpack.js.org/api/hot-module-replacement/}
 */
if (import.meta.webpackHot) import.meta.webpackHot.accept(console.error);
