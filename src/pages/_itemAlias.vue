<template>

  <div class="view-sm isCenter">
    <div class="wrapper-person">
    <div v-if="item">
      <img :src="item.img" :alt="item.descr" />
      <h1 style="color: #ffffff" class="title">{{ item.title }}</h1>
      <p>{{ item.descr }}</p>

      <div class="card-stats">
        <div v-for="(stat, index) in item.info" :key="index" class="one-third">
          <div class="stat-value">{{ stat.value }}</div>
          <div class="stat">{{ stat.title }}</div>
        </div>
      </div>

      <router-link to="/" class="btn btnPrimary">Back home</router-link>
    </div>
  </div>
  </div>

  
</template>

<script>
// Импорт массивая items
import items from '@/seeders/items'

export default {
  data() {
    return {
      item: null
    }
  },

  created() {
    const alias = this.$route.params.itemAlias
    const item = items.find(el => el.alias === alias)

    // Проверяем, если item есть, то переопределяем null на объект
    if (item) {
      this.item = item
      // Иначе редирект на 404
    } else {
      this.$router.push({
        name: '404',
        params: { pathMatch: this.$route.path.substring(1).split('/') },
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper-person {
  text-align: center;
}

.card-stats {
  border-radius: 50px;
  margin: 30px 0;
}
</style>