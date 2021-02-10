<template>
  <div class="main">
    <div class="main-title">{{ msg }}</div>
    <div class="user-count">
      <div class="count">{{ count }}</div>
      Users
    </div>
    <div class="wrapper" v-if="!loading">
      <div v-for="user in users" :key="user.name" class="card">
        <div class="body-card">
          <div class="title">Name</div>
          <div class="name">{{ user.name }}</div>
          <div class="wrapper-card">
            <div>
              <div class="title">Email</div>
              <div class="email">{{ user.email }}</div>
            </div>
            <div class="wrapper-body">
              <div class="title">Phone</div>
              <div class="phone">{{ user.phone }}</div>
            </div>
            <div class="wrapper-body">
              <div class="title">Website</div>
              <div class="website">{{ user.website }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
import { SET_DATA } from "../mutation-types";

export default {
  name: "Users",
  props: {
    msg: String,
  },
  data: () => ({
    loading: true
  }),
  computed: {
    users() {
      return this.$store.getters.getData;
    },
    count() {
      return this.$store.getters.getCountData;
    },
    ...mapState(['lists'])
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        this.setData(response.data);
        this.loading = false
      })
      .catch(error => {
        console.log(error);
        this.loading = false
      });
  },
  methods: {
    setData(data) {
      this.$store.dispatch(SET_DATA, data);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  background-color: #f5f7fa;
  padding: 10px;
  font-family: 'Helvetica', sans-serif;
}
.count {
  color: #83dd8b;
  font-weight: 800;
  margin-right: 10px;
}
.user-count {
  border-bottom: 1px solid #e1e1e7;
  color: #646464;
  display: flex;
}

.name {
  font-size: 20px;
  color: #646464
}

.title {
  font-size: 14px;
  color: #D9D9E0;
}

.website {
  color: #83DD8B
}

.card {
  max-width: 600px;
  max-height: 400px;
  width: 100%;
  display: inline-block;
  margin: 10px 10px;
  padding: 10px 10px;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.1);
  background-color: #FFFFFF;
}

.wrapper-card {
  margin-top: 10px;
  display: flex;
}

.wrapper-body {
  margin-left: 70px;
}
</style>
