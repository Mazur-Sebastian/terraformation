<template>
    <v-app>
        <router-view />
    </v-app>
</template>

<script lang="ts">
    import { Component, Vue, Provide } from 'vue-property-decorator';
    import { select } from '@rxsv/core';

    import { store, AppStore } from '@/config/rootStore';
    import { InstanceActions } from './modules/gameInstance/rxstore';

    @Component<App>({})
    export default class App extends Vue {
        @Provide('rxstore')
        private get rxStore(): AppStore {
            store.state$.subscribe();

            return store;
        }
    }
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');

    * {
        font-family: 'Lato', sans-serif;
    }
</style>
