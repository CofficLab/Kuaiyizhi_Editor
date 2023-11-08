import { defineCustomElement } from 'vue'
import IndexPageVue from './components/IndexPage.ce.vue'

customElements.define('x-index-page', defineCustomElement(IndexPageVue))