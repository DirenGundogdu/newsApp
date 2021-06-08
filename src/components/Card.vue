<template>
  <div class="post-module">
    <div v-for="post in posts" :key="post">
      <div class="thumbnail">
        <img v-bind:src="post.urlToImage" alt="" />
      </div>

      <div class="post-content">
        <h3>{{ post.title }}</h3>
        <p class="description">
          {{ post.description }}
        </p>
        <button><a v-bind:href="post.url">URL</a></button>
      </div>
    </div>
  </div>
</template>

<script>
import getdatas from "./getdatas";

export default {
  name: "Card",

  data() {
    return {
      posts: [],
    };
  },

  created() {
    getdatas.getdata().then((res) => {
      this.posts = res.data.articles;

      console.log(this.posts);
    });
  },
};
</script>

<style scoped>
.post-module {
  border: 3px solid #000;
  width: 600px;
  height: 600px;
  display: flex;
  align-items: center;
}
img {
  border-radius: 10px;
  width: 230px;
  height: 230px;
}
.post-content {
  width: 300px;
  height: 100px;
}

button {
  background-color: #42b983;
  border: 2px solid #f0f0f0;
  border-radius: 5px;
  color: #000000;
  display: block;
  font-family: inherit;
  font-weight: bold;
  font-size: 16px;
  padding: 10px;
  width: 50%;
  float: right;
}
</style>
