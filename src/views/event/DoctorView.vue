<template>
  <DoctorCommentForm @review-submitted="addReview" />
  <DoctorCommentView v-if="GStore.reviews" :reviews="GStore.reviews" />
</template>

<script>
import DoctorCommentForm from '@/components/DoctorCommentForm.vue'
import DoctorCommentView from '@/components/DoctorCommentView.vue'

export default {
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
