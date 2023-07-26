<template>
  <section
    :class="`extra__info transition-3 ${showSidebar ? 'info-opened' : ''}`"
  >
    <div class="extra__info-inner">
      <div class="extra__info-close text-end" @click="showSidebar = false">
        <a
          @click.prevent="showSidebar = false"
          href="#"
          class="extra__info-close-btn"
        >
          <i class="fal fa-times"></i>
        </a>
      </div>

      <!-- side-mobile-menu start -->
      <nav class="side-mobile-menu d-block d-lg-none mm-menu">
        <ul>
          <template v-for="(menu, i) in mobile_menus" :key="i">
            <li
              v-if="menu.dropdownMenu"
              :class="`menu-item-has-children has-droupdown 
              ${activeMenu === menu.title ? 'active' : ''}`"
            >
              <a @click.prevent="handleOpenMenu(menu.title)">
               {{menu.title}}
              </a>
              <ul
                @click.prevent="showSidebar = false"
                :class="`sub-menu ${activeMenu === menu.title ? 'active' : ''}`"
              >
                <li v-for="(sub_m, index) in menu.dropdownMenu" :key="index">
                  <nuxt-link :to="localePath(`${sub_m.link}`)">
                   {{sub_m.title}}
                  </nuxt-link>
                </li>
              </ul>
            </li>

            <li v-if="!menu.dropdownMenu">
              <nuxt-link :to="localePath(`${menu.link}`)">{{ menu.title }}</nuxt-link>
            </li>
          </template>
        </ul>
      </nav>
      <!-- side-mobile-menu end -->
    </div>
  </section>

  <!--  body overlay  -->
  <div
    @click="showSidebar = false"
    :class="`body-overlay transition-3 ${showSidebar ? 'opened' : ''}`"
  ></div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import menuData from "~~/mixins/menuData";

// menu type
type MenuDataType = {
  title: string;
  link?: string;
  dropdown?: boolean;
  dropdownMenu?: {
    link: string;
    title: string;
  }[];
};

export default defineComponent({
  mixins: [menuData],
  data() {
    return {
      activeMenu: "",
      showSidebar: false,
    };
  },
  methods: {
    OpenOffcanvas() {
      this.showSidebar = true;
    },
    handleOpenMenu(navTitle: string) {
      if (navTitle === this.activeMenu) {
        this.activeMenu = "";
      } else {
        this.activeMenu = navTitle;
      }
    },
  },
  setup() {
    const { t } = useI18n()
    const localePath = useLocalePath()
    const mobile_menus = ref<MenuDataType[]>([
      {
        title: t('nav.home.title'),
        dropdown: false,
        link: "/"
      },
      {
        title: t('nav.shop.title'),
        dropdown: false,
        link: "/shop"
      },
      {
        title: t('menu.other-pages'),
        dropdown: true,
        dropdownMenu: [
          { link: "/wishlist", title: t('menu.wish-list') },
          { link: "/cart", title: t('menu.cart') },
          { link: "/checkout", title: t('menu.checkout') },
          { link: "/register", title: t('menu.create-account') },
          { link: "/login", title: t('login.title') },
        ],
      },
      {
        title: t('nav.blog.title'),
        dropdown: false,
        link: "/blog"
      },
      {
        title: t('nav.contact'),
        dropdown: false,
        link: "/contact",
      },
    ]);
    return { mobile_menus, localePath };
  },
});
</script>
