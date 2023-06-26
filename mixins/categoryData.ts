import CategoryType from '~/types/categoryType'
import cate_img_1 from '~/assets/img/shop/banner/banner-sm-1.jpg'
import cate_img_2 from '~/assets/img/shop/banner/banner-sm-2.jpg'
import cate_img_3 from '~/assets/img/shop/banner/banner-sm-3.jpg'
import cate_img_4 from '~/assets/img/shop/banner/02/banner-1.webp'
import cate_img_5 from '~/assets/img/shop/banner/02/banner-2.webp'
import cate_img_6 from '~/assets/img/shop/banner/02/banner-3.webp'

export default {
  data () {
    return {
      categoryData: [
        // {
        //   id: 1,
        //   img: cate_img_1,
        //   parentTitle: this.$t('categories.lighting-chair'),
        //   children: [this.$t('categories.lighting'), this.$t('categories.chair')],
        // },
        // {
        //   id: 2,
        //   img: cate_img_2,
        //   parentTitle: this.$t('categories.decoration-accessories'),
        //   children: [this.$t('categories.decoration'), this.$t('categories.accessories')],
        // },
        // {
        //   id: 3,
        //   img: cate_img_3,
        //   parentTitle: this.$t('categories.clothing-oil'),
        //   children: [this.$t('categories.clothing'), this.$t('categories.oil')],
        // },
        // {
        //   id: 4,
        //   img: cate_img_4,
        //   parentTitle: this.$t('fashion-men.title'),
        //   children: [this.$t('categories.shirt')],
        //   smDesc: this.$t('fashion-men.desc'),
        // },
        // {
        //   id: 5,
        //   img: cate_img_5,
        //   parentTitle: this.$t('fashion-women.title'),
        //   children: [this.$t('categories.shoes')],
        //   smDesc: this.$t('fashion-women.desc'),
        // },
        // {
        //   id: 6,
        //   img: cate_img_6,
        //   parentTitle: this.$t('fashion-men.title'),
        //   children: ['Shirt'],
        //   smDesc: this.$t('fashion-men.desc'),
        // },
        {
          id: 1,
          img: cate_img_1,
          parentTitle: 'categories.lighting-chair',
          children: ['categories.lighting', 'categories.chair'],
        },
        {
          id: 2,
          img: cate_img_2,
          parentTitle: 'categories.decoration-accessories',
          children: ['categories.decoration', 'categories.accessories'],
        },
        {
          id: 3,
          img: cate_img_3,
          parentTitle: 'categories.clothing-oil',
          children: ['categories.clothing', 'categories.oil'],
        },
        {
          id: 4,
          img: cate_img_4,
          parentTitle: 'categories.fashion-men',
          children: ['categories.shirt'],
          smDesc: this.$t('fashion-men.desc'),
        },
        {
          id: 5,
          img: cate_img_5,
          parentTitle: 'categories.fashion-women',
          children: ['categories.shoes'],
          smDesc: this.$t('fashion-women.desc'),
        },
        {
          id: 6,
          img: cate_img_6,
          parentTitle: 'categories.fashion-men',
          children: ['categories.shirt'],
          smDesc: this.$t('fashion-men.desc'),
        },
      ] as CategoryType [],
    }
  },
}
