<template>
  <!-- <router-link class="event-link"> -->
  <router-link
    class="event-link"
    :to="{ name: 'PeopleDetail', params: { id: people.id } }"
  >
    <div class="box">
      <div class="event-card">
        <img src="../assets/account.png" />
        <h4>{{ people.name }} {{ people.surname }}</h4>
        <span>number of doses : {{ people.vaccine_status }}</span>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'EventCard',
  props: {
    people: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
body {
  float: right;
  width: 100%;
}

.box {
  position: relative;
  width: 300px;
  height: 300px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  margin: 20px;
  overflow: hidden;
}

.box::before {
  content: '';
  position: absolute;
  inset: -10px 100px;
  background: linear-gradient(315deg, #00ccff, #d400d4);
  transition: 0.5s;
  animation: animate 4s linear infinite;
}

.box:hover::before {
  inset: -20px 0px;
}

@keyframes animate {
  0% {
    transform: rotate(0deg);
  }
  0% {
    transform: rotate(360deg);
  }
}

.box::after {
  content: '';
  position: absolute;
  inset: 6px;
  background: #162052;
  border-radius: 50%;
  z-index: 1;
}

.event-card {
  position: absolute;
  inset: 30px;
  border: 6px solid #070a1c;
  z-index: 3;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.event-card img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.5s;
  pointer-events: none;
}

.box:hover .event-card img {
  opacity: 0;
}

.event-card h4 {
  position: relative;
  font-size: 1.5em;
  text-align: center;
  color: #fff;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  transition: 0.5s;
  opacity: 0;
}

.box:hover .event-card h4 {
  opacity: 1;
}

.event-card span {
  font-weight: 300;
  font-size: 1em;
  color: #fff;
}

/* @property --rotate {
  syntax: '<angle>';
  initial-value: 132deg;
  inherits: false;
} */
/* .event-card {
  background: #000000;
  width: 43vh;
  height: 65vh;
  padding: 3px;
  position: relative;
  border-radius: 6px;
  justify-content: center;
  display: flex;
  font-size: 1.5em;
  color: rgb(88, 199, 250/0%);
  cursor: pointer;
  margin-bottom: 18px;
  transition: 0.5s;
}

.event-card:hover {
  color: rgb(88, 199, 250/100%);
  transition: color 1s;
}

.event-card:hover:before,
.event-card:hover:after {
  animation: none;
  opacity: 0;
}

.event-card::before {
  content: '';
  width: 104%;
  height: 102%;
  border-radius: 8px;
  background-image: linear-gradient(
    var(--rotate),
    #5ddcff,
    #3c67e3 43%,
    #4e00c2
  );
  position: absolute;
  z-index: -1;
  top: -1%;
  left: -2%;
  animation: rotate 2.5s linear infinite;
}

.event-card::after {
  position: absolute;
  content: '';
  top: 11vh;
  left: 0;
  right: 0;
  z-index: -1;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  transform: scale(0.8);
  filter: blur(11vh);
  background-image: linear-gradient(
    var(--rotate),
    #5ddcff,
    #3c67e3 43%,
    #4e00c2
  );
  opacity: 1;
  transition: opacity 0.5s;
  animation: rotate 2.5s linear infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0 deg);
  }
  100% {
    transform: rotate(360 deg);
  }
} */
.event-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
