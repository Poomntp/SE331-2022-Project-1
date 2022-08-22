<template>
  <form class="review-form" @submit.prevent="onSubmit">
    <div class="title">
      <h2>COMMENT</h2>
    </div>
    <div class="half">
      <div class="item">
        <label for="name">NAME</label>
        <input id="name" v-model="name" />
      </div>
    </div>
    <div class="full">
      <label for="review">MESSAGE</label>
      <textarea id="review" v-model="review"></textarea>
    </div>
    <div class="action">
      <input type="submit" value="Submit" />
    </div>
  </form>
</template>

<script>
import GStore from '@/store'
export default {
  inject: ['GStore'],
  name: 'DoctorCommentForm',
  data() {
    return {
      people_id: '',
      name: '',
      review: ''
    }
  },
  methods: {
    onSubmit() {
      if (this.name === '' || this.review === '') {
        alert('Review is incomplete. Please fill out every field.')
        return
      }
      let productReview = {
        people_id: GStore.people.id,
        name: this.name,
        review: this.review
      }
      this.$emit('review-submitted', productReview)
      this.people_id = ''
      this.name = ''
      this.review = ''
    }
  }
}
</script>

<style>
h3 {
  color: black;
}

form {
  background: rgba(27, 31, 34, 0.8);
  width: 640px;
  margin: 50px auto;
  max-width: 97%;
  border-radius: 4px;
  padding: 55px 30px;
  color: white;
}

form .title h2 {
  letter-spacing: 6px;
  border-bottom: 1px solid white;
  display: inline-block;
  padding-bottom: 8px;
  margin-bottom: 32px;
}

form .half {
  display: flex;
  justify-content: space-between;
}

form .half .item {
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  width: 48%;
}

form .half .item input {
  border-radius: 4px;
  border: 1px solid white;
  outline: 0;
  padding: 16px;
  width: 100%;
  height: 44px;
  background: transparent;
  font-size: 17px;
}

form .full {
  margin-bottom: 24px;
}

form .full textarea {
  background: transparent;
  border-radius: 4px;
  border: 1px solid white;
  outline: 0;
  padding: 12px 16px;
  width: 100%;
  height: 200px;
  font-size: 17px;
}

form .action {
  margin-bottom: 32px;
}

form .action input {
  background: transparent;
  border-radius: 4px;
  border: 1px solid white;
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  height: 44px;
  letter-spacing: 3px;
  outline: 0;
  padding: 0 20px 0 22px;
  margin-right: 10px;
}

form .action input[type='submit'] {
  background: white;
  color: black;
}

form .half .item input:focus,
form .full textarea:focus,
form .action input[type='reset']:hover,
form .icons a:hover {
  background: rgba(255, 255, 255, 0.075);
}

@media (max-width: 480px) {
  form .half {
    flex-direction: column;
  }
  form .half .item {
    width: 100%;
  }
  form .action {
    display: flex;
    flex-direction: column;
  }
  form .action input {
    margin-bottom: 10px;
    width: 100%;
  }
}
</style>
