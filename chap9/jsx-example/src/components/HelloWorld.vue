<template>
<div></div>
</template>

<script>
export default {
  name: 'HelloWorld',
  render(h) { // jsx 렌더 함수
    return (
      <div><div class="text-center"
              on-click={this.pressed}
              domPropsInnerHTML={this.msg}></div>
      </div>
    )
  },
  data() {
    return {
      welcome : '안녕하세요',
      msg: '<h${this.header}>안녕하세요 ${this.name}</h${this.header>'
    }
  },
  methods: {
    pressed() {
      alert('클릭됨')
    }
  },
  props: ['header', 'name'] // 헤더와 속성의 이름
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
