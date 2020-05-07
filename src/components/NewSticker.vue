<template>
  <div id="NewSticker" class="content-square">
    <div class="content-square-header">
      Activate this sticker {{ $route.params.stickercode }}
    </div>
    <div class="content-square-desc">
      It appears that no one has used this sticker yet. You can be the first!
    </div>
    <div class="content-square-footer">
      <div class="content-square-actiontext">
        Tell us what book it is
      </div>
      <router-link :to="{ path: 'book' }" append>
        <div class="nextbutton" style="display:inline-block">
          <span> > </span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
//import BookSearch from './BookSearch'

export default {
  name: 'NewSticker',
  props: ['sticker'],
  methods: {
    enterBook() {

    }
  }
}
</script>