<template>
  <!-- app-main -->
  <div id="app-main">
    <div class="container mx-auto">
      <div class="row text-center mt-5 pt-5">
        <div class="col-6 mx-auto">
          <h1 class="font-weight-light">New project!</h1>
          <p class="lead text-justify mt-3">
            &emsp; Welcome to your new project, this is a pre-made template that usually
            the front-end web team needs...
          </p>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-6 mx-auto">
          <h1 class="font-weight-light">Git repository</h1>
          <p class="mt-3">
            <code>
              origin  git@gitlab.com:uth702/uth702_vue_boilerplate.git (fetch)
            </code>
          </p>
          <p>
            <code>
              origin  git@gitlab.com:uth702/uth702_vue_boilerplate.git (push)
            </code>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainComponent',
  data () {
    return {
      // local reactive data here...
    }
  }
}
</script>

<style lang='scss' scoped>
  @import '~scss/main.scss';
</style>
