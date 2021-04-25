import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone, faCheck, faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import App from './App.vue'

library.add([faPhone, faCheck, faAngleDown, faAngleUp]);

const app = createApp(App)
app.use(VueAxios, axios)
app.component("font-awesome-icon", FontAwesomeIcon)
app.mount('#app')
