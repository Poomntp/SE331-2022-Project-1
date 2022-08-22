<template>
  <div class="head_text">
    <h1>Vaccine status</h1>
  </div>
  <div class="events">
    <EventCard v-for="people in peoples" :key="people.id" :people="people" />
  </div>
  <div class="pagination">
    <router-link
      id="page-prev"
      :to="{ name: 'PeopleList', query: { page: page - 1 } }"
      rel="prev"
      v-if="page != 1"
    >
      Prev Page</router-link
    >

    <router-link
      id="page-next"
      :to="{ name: 'PeopleList', query: { page: page + 1 } }"
      rel="next"
      v-if="hasNextPage"
    >
      Next Page</router-link
    >
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'

// import axios from 'axios'
export default {
  name: 'PeopleList',
  props: {
    page: {
      type: Number,
      required: true
    }
  },
  components: {
    EventCard // register it as a child component
  },
  data() {
    return {
      peoples: null,
      totalPeoples: 0 // <--- Added this to store totalEvents
    }
  },

  // eslint-disable-next-line no-unused-vars
  beforeRouteEnter(routeTo, routeFrom, next) {
    EventService.getEvents(3, parseInt(routeTo.query.page) || 1)
      .then((response) => {
        next((comp) => {
          comp.peoples = response.data
          comp.totalPeoples = response.headers['x-total-count']
        })
      })
      .catch(() => {
        next({ name: 'NetworkError' })
      })
  },
  beforeRouteUpdate(routeTo) {
    EventService.getEvents(3, parseInt(routeTo.query.page) || 1)
      .then((response) => {
        this.peoples = response.data // <-----
        this.totalPeoples = response.headers['x-total-count'] // <-----
      })
      .catch(() => {
        return { name: 'NetworkError' }
      })
  },
  computed: {
    hasNextPage() {
      // First, calculate total pages
      let totalPages = Math.ceil(this.totalPeoples / 3) // 2 is events per page

      // Then check to see if the current page is less than the total pages.
      return this.page < totalPages
    }
  }
}
</script>
<style scoped>
body {
  display: flex;
  align-items: center;
  justify-content: center;
}
.head_text h1 {
  color: #ffff;
  font-size: 10em;
}
.events {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.pagination {
  position: relative;
  /* right: 0; */
  width: 100%;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 1);
  transition: 0.5s;
}
.pagination a {
  /* flex: 1; */
  text-decoration: none;
  color: #2c3e50;
}

.pagination:hover {
  text-shadow: none;
}

#page-prev {
  color: white;
  position: absolute;
  left: 15%;
}

#page-next {
  color: white;
  position: absolute;
  right: 15%;
}
</style>
