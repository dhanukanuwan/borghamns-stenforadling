import domReady from '@roots/sage/client/dom-ready';
import 'bootstrap';
import 'lazysizes';
import pageSearch from './includes/search';

/**
 * Application entrypoint
 */
domReady(async () => {

  pageSearch();

});

/**
 * @see {@link https://webpack.js.org/api/hot-module-replacement/}
 */
if (import.meta.webpackHot) import.meta.webpackHot.accept(console.error);
