<template>
    <div>
        <v-btn class="mt-2" @click="addGameInstance('hello')">hello</v-btn>
        <input :value="name" @keydown="updateName($event.target.value)" />
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class NewGame extends Vue {
        private name = '';
    }
</script>
