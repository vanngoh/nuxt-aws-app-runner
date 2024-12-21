<template>
  <div class="p-4 space-x-2">
    <div>Hello world</div>
    <UButton @click="getUser('1234')">Get All User</UButton>
    <div>{{ users }}</div>
  </div>
</template>

<script lang="ts" setup>
  const users = ref<any>({});
  const getUser = async (uid: string) => {
    const data = await $fetch(`/api/users/${uid}`);
    console.log(data);
    users.value = data;
  };
</script>
