<template>
    <v-parallax height="1000" :src="require('../assets/mars_nasa.jpg')">
        <v-container class="back fill-height" fluid>
            <v-row justify="center">
                <h1 class="display-3 font-weight-bold orange--text">
                    {{ $vuetify.lang.t('$vuetify.terraformingTitle') }}
                </h1>
            </v-row>
            <new-game-buttons />
        </v-container>
    </v-parallax>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    import NewGameButtons from '@/modules/gameInstance/components/NewGameButtons.vue';

    @Component({
        components: {
            NewGameButtons
        }
    })
    export default class Dashboard extends Vue {
        private name = '';
    }
</script>
