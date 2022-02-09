<template>
  <div class="">
    
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

        <!-- Вынести футер в отдельный компонент
            
            сложное дз: сделать страницу 404


         -->

          <template v-slot:footer>
            <div class="card-stats">
              <div
                v-for="(stat, index) in item.info"
                :key="index"
                class="one-third"
              >
                <div class="stat-value">{{ stat.value }}</div>
                <div class="stat">{{ stat.title }}</div>
              </div>
            </div>
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

// Импорт css карусели
import 'vue3-carousel/dist/carousel.css'

import { Carousel, Slide, Navigation } from 'vue3-carousel'

export default {
  components: {
    Card,
    Carousel,
    Slide,
    Navigation
  },
  data() {
    return {
      items: items,

    }
  }
}
</script>