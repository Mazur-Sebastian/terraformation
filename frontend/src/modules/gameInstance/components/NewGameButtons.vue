<template>
    <v-row justify="center" class="pa-2">
        <v-btn class="ma-1 black--text font-weight-bold" color="secondary" to="/new-game"
            >{{ $vuetify.lang.t('$vuetify.newGame') }}
        </v-btn>
        <v-btn class="ma-1 black--text font-weight-bold" color="secondary">
            {{ $vuetify.lang.t('$vuetify.newPlayer') }}
        </v-btn>
    </v-row>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class NewGameButtons extends Vue {}
</script>
