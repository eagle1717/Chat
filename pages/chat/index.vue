<template>
  <fragment>
    <ChatSidebar />
    <section>
      <select v-model="typeOfBussiness">
        Type of Bussiness
        <option>IT</option>
        <option>Restaurants</option>
        <option>Cars</option>
      </select>
      <button @click="$router.push({ name: 'chat-id', params: { id: 0 } })">
        Start new chat
      </button>
    </section>
  </fragment>
</template>

<script>
export default {
  layout: "chat",
  data() {
    return {
      typeOfBussiness: "IT",
    };
  },
};
</script>
