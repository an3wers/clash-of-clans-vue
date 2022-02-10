<template>
  <div class="view-sm isCenter">
    <carousel :itemsToShow="1" :itemsToScroll="1" :wrapAround="true">
      <slide class="card__wrapper" v-for="item in items" :key="item.id">
        <Card
          :name="`${item.lvl} lvl`"
          :title="item.title"
          :imgUrl="item.img"
          :link="`/${item.alias}`"
        >
          <!-- Descr передается в слот в Card.vue -->
          <template v-slot:body>
            {{ item.descr }}
          </template>

          <template v-slot:footer>
            <!-- Дз. Компонент футер карточки -->
            <card-footer :item="item"></card-footer>
          </template>
        </Card>
      </slide>

      <template #addons>
        <navigation />
      </template>
    </carousel>
  </div>
</template>

<script>
import Card from '@/components/UI/Card'
import items from '@/seeders/items.js'
import CardFooter from '@/components/UI/CardFooter'

// Импорт css карусели
import 'vue3-carousel/dist/carousel.css'

import { Carousel, Slide, Navigation } from 'vue3-carousel'

export default {
  components: {
    Card,
    Carousel,
    Slide,
    Navigation,
    CardFooter
  },
  data() {
    return {
      items: items
    }
  }
}
</script>