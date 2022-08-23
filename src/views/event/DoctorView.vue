<template>
  <DoctorCommentForm @review-submitted="addReview" />
  <DoctorCommentView
    v-if="GStore.reviews"
    :reviews="GStore.people.new_docter_comment"
  />
</template>

<script>
import DoctorCommentForm from '@/components/DoctorCommentForm.vue'
import DoctorCommentView from '@/components/DoctorCommentView.vue'
import GStore from '@/store'

export default {
  props: ['people'],
  inject: ['GStore'],
  methods: {
    addReview(review) {
      this.GStore.reviews.push(review)
      GStore.people.new_docter_comment = GStore.reviews.filter(
        (review) => GStore.people.id == review.people_id
      )
      this.GStore.flashMessage = ' Add review successfully '
      setTimeout(() => {
        // After 3 seconds remove it
        this.GStore.flashMessage = ''
      }, 5000)
    }
  },
  components: {
    DoctorCommentForm,
    DoctorCommentView // register it as a child component
  }
}
</script>
