<template>
    <v-container class="fill-height back" fluid>
        <v-row justify="center">
            <v-col cols="6">
                <v-card class="pa-3 mx-auto" color="primary">
                    <v-form ref="form" @submit.prevent="createInstance">
                        <v-text-field
                            v-model="instanceName"
                            :counter="30"
                            :label="$vuetify.lang.t('$vuetify.gameName')"
                            required
                            outlined
                            color="secondary"
                        ></v-text-field>

                        <v-select
                            v-model="extensions"
                            :items="gameExtensions"
                            label="Exetensions"
                            required
                            multiple
                            outlined
                        ></v-select>

                        <v-btn type="submit" color="success" class="mr-4">
                            {{ $vuetify.lang.t('$vuetify.createInstance') }}
                        </v-btn>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
    import { Component, Vue, Inject } from 'vue-property-decorator';

    import { AppStore } from '@/config/rootStore';
    import { InstanceActions } from '@/modules/gameInstance/rxstore';

    @Component<NewGame>({})
    export default class NewGame extends Vue {
        @Inject('rxstore') public readonly rxStore!: AppStore;

        private readonly gameExtensions = ['basic'];

        private instanceName = '';
        private extensions = ['basic'];

        private createInstance(): void {
            this.rxStore.action$.next(
                InstanceActions.createInstanceRequest({
                    creatorId: 'abc2',
                    instanceName: this.instanceName,
                    extension: this.extensions[0]
                })
            );
        }
    }
</script>
