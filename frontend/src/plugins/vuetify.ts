import Vue from 'vue';
import Vuetify from 'vuetify';
import VueI18n from 'vue-i18n';

import 'vuetify/dist/vuetify.min.css';
import colors from 'vuetify/lib/util/colors';

import { messages } from '@/config/translation/translation';

Vue.use(Vuetify);
Vue.use(VueI18n);

const i18n = new VueI18n({
    locale: 'pl',
    messages
});

const opts = {
    theme: {
        themes: {
            light: {
                primary: colors.amber.lighten4,
                secondary: colors.orange.accent4,
                accent: colors.yellow.accent3
            }
        }
    },
    lang: {
        t: (key: string, ...params: Array<string | number>) =>
            String(i18n.t(key, params))
    }
};

export default new Vuetify(opts);
