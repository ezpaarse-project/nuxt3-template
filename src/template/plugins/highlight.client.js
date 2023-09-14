/* eslint-disable import/no-extraneous-dependencies */
import 'highlight.js/styles/stackoverflow-light.css';
import hljs from 'highlight.js/lib/core';
import json from 'highlight.js/lib/languages/json';
import bash from 'highlight.js/lib/languages/bash';
import javascript from 'highlight.js/lib/languages/javascript';

import hljsVuePlugin from '@highlightjs/vue-plugin';

import { defineNuxtPlugin } from '#imports';

export default defineNuxtPlugin((nuxtApp) => {
  hljs.registerLanguage('json', json);
  hljs.registerLanguage('bash', bash);
  hljs.registerLanguage('javascript', javascript);
  nuxtApp.vueApp.use(hljsVuePlugin);
});
