<template>
<header>
  <div class="navbar navbar-default">
    <div class="navbar-header">
      <h1><router-link :to="{name: 'iMain'}">{{ sitename }}</router-link></h1>
    </div>
    <div class="nav navbar-nav navbar-right cart">
      <div v-if="!mySession">
        <button type="button" class="btn btn-default btn-lg" v-on:click="signIn">
          로그인
        </button>
      </div>
      <div v-else>
        <button type="button" class="btn btn-default btn-lg" v-on:click="signOut">
          <img src="mySession.photoURL" class="photo"/>
          로그아웃
        </button>
      </div>
    </div>
    <div class="nav navbar-nav navbar-right cart">
      <router-link
          active-class="active"
          tag="button" class="btn btn-default btn-lg" :to="{name: 'Form'}">
        <span class="glyphicon glyphicon-shopping-cart">{{cartItemCount}}</span> 체크아웃
      </router-link>
    </div>
  </div>
</header>
</template>

<script>
import firebase from 'firebase';
export default {
  name: 'my-header',
  data() {
    return {
      sitename: "Vue.js 애완용품샵"
    }
  },
  props: ['cartItemCount'],
  beforeCreate() {
    firebase.auth().onAuthStateChanged((user) => {
      this.$store.commit('SET_SESSION', user||false)
    });
  },
  methods: {
    showCheckout() {
      this.$router.push({name: 'Form'});
    },
    signIn() {
      let provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then((result) => {
        console.log("로그인!");
      }).catch(err => {
        console.error(err);
      })
    },
    signOut() {
      firebase.auth().signOut().then(() => {
        console.log('로그아웃');
      }).catch((err) => {
        console.log("로그아웃 에러!");
      })
    }
  },
  computed: {
    mySession() {
      return this.$store.getters.session;
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}

.router-link-exact-active {
  /* color: blue; */
  color: black;
}
</style>

