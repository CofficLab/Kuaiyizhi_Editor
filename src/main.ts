import { defineCustomElement } from 'vue'
import IndexPageVue from './components/IndexPage.vue'

customElements.define('y-index-page', defineCustomElement(IndexPageVue))
