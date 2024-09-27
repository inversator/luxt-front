<template>
  <div>
    <h1>Centrifugo Connection Test</h1>
    <p>Status: {{ status }}</p>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Centrifuge } from 'centrifuge';

const status = ref('Connecting...');

onMounted(() => {
  const centrifugeObject = new Centrifuge(
    'ws://localhost:8000/connection/websocket',
    {
      token:
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaW5mbyI6eyJuYW1lIjoiVGVzdFVzZXJOYW1lIn19.6hFWDBrGOrBPWmBKsHesjuTxuSXN42DDV2KZG9-BaF0',
      // "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImV4cCI6MTcyMzYzMjcwN30.0dH_bkqr7r7ZeXqH9_LfzX4D9xiVt70bKfBR8UWOn_M"
    },
  );

  centrifugeObject.on('connect', (context) => {
    status.value = 'Connected';
  });

  centrifugeObject.on('disconnect', (context) => {
    status.value = 'Disconnected';
  });

  centrifugeObject.newSubscription('test', (message) => {
    console.log('Received message:', message);
  });

  centrifugeObject.connect();
});
</script>
<style scoped></style>
