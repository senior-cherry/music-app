<template>
  <div class="home">
    <div class="error" v-if="error">Could not fetch the data</div>
    <div v-if="documents">
      <ListView :playlists="documents" />
    </div>
  </div>
</template>

<script>
import getCollection from "@/composables/getCollection";
import ListView from "@/components/ListView.vue";

export default {
  name: "HomeView",
  components: { ListView },
  setup() {
    const { documents, error } = getCollection("playlists");

    return { documents, error };
  },
};
</script>
