<template lang="">
    <div class="d-flex flex-column justify-center align-center mt-3 mb-3">
        <v-card width="300" class="ma-2">
            <v-card-title>
                {{ player.name }}
            </v-card-title>
            <v-card-text>
                <v-list>
                    <v-list-item v-for="(team, index) in player.teams" :key="team.name">
                        <v-list-item-content :style="displayed[index + 1] ? 'opacity: 1' : 'opacity: 0'" class="list-item">
                            <v-list-item-title class="font-weight-bold d-flex justify-space-between align-center">
                                <flag :iso="team.icon" />
                                {{ team.name }}
                                <v-rating
                                    v-model="team.rating"
                                    half-increments
                                    readonly
                                    color="amber"
                                    size="21"
                                >
                                </v-rating>
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-card-text>
        </v-card>
        <v-btn
            color="primary"
            @click="next"
            width="300"
        >
            Next
        </v-btn>
    </div>
</template>
<script>
export default {
    props: {
        player: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            displayed: {
                1: true,
                2: false,
                3: false,
                4: false,
                5: false
            },
            displayTurn: 2
        }
    },
    methods: {
        next() {
            if (this.displayTurn > 5) {
                return
            }
            this.displayed[this.displayTurn] = true
            this.displayTurn++;
        }
    },
    watch: {
        player: {
            handler() {
                this.displayed = {
                    1: true,
                    2: false,
                    3: false,
                    4: false,
                    5: false
                }
                this.displayTurn = 2
            },
            deep: true
        }
    }
}
</script>
<style lang="scss">
.list-item {
    transition: 2s ease-in-out;
}
</style>