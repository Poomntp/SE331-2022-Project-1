<template>
  <DoctorCommentForm @review-submitted="addReview" />
  <DoctorCommentView v-if="GStore.reviews" :reviews="GStore.reviews" />
  <p>{{ people.comment }}</p>
</template>

<script>
import DoctorCommentForm from '@/components/DoctorCommentForm.vue'
import DoctorCommentView from '@/components/DoctorCommentView.vue'

export default {
  props: ['people'],
  inject: ['GStore'],
  methods: {
    addReview(review) {
      this.GStore.reviews.push(review)
    }
  },
  components: {
    DoctorCommentForm,
    DoctorCommentView // register it as a child component
  }
}
</script>
