<template>
    <div class="container">
        <div class="d-flex justify-center mb-7">
            <v-btn
                color="primary"
                size="large"
                @click="roll"
            >
                Roll
            </v-btn>
        </div>
        <div :class="!$vuetify.display.mobile ? 'd-flex justify-center align-center' : 'd-flex flex-column justify-center align-center' + ' mt-10'">
            <Player v-for="player in players" :player="player" :key="player.name"/>
        </div>
    </div>
</template>
<script>
import Player from '@/components/Player.vue';

export default {
    name: 'HomePage',
    components: {
        Player
    },
    data() {
        return {
            players: [
                { name: 'Mieszko', teams: [] },
                { name: 'Wiktor', teams: [] },
                { name: 'Maciek', teams: [] }
            ]
        }
    },
    methods: {
        roll() {
            this.players.forEach(player => {
                player.teams = [];
            });
            const teamsToRollCopy = [
                {
                    name: 'Argentina',
                    rating: 5,
                    icon: 'ar'
                },
                {
                    name: 'Croatia',
                    rating: 4,
                    icon: 'hr'
                },
                {
                    name: 'Czechia',
                    rating: 4,
                    icon: 'cz'
                },
                {
                    name: 'Denmark',
                    rating: 4,
                    icon: 'dk'
                },
                {
                    name: 'England',
                    rating: 5,
                    icon: 'gb-eng'
                },
                {
                    name: 'Finland',
                    rating: 3.5,
                    icon: 'fi'
                },
                {
                    name: 'France',
                    rating: 5,
                    icon: 'fr'
                },
                {
                    name: 'Germany',
                    rating: 5,
                    icon: 'de'
                },
                {
                    name: 'Ghana',
                    rating: 4,
                    icon: 'gh'
                },
                {
                    name: 'Hungary',
                    rating: 3.5,
                    icon: 'hu'
                },
                {
                    name: 'Iceland',
                    rating: 3.5,
                    icon: 'is'
                },
                {
                    name: 'Ireland',
                    rating: 3.5,
                    icon: 'ie'
                },
                {
                    name: 'Italy',
                    rating: 4.5,
                    icon: 'it'
                },
                {
                    name: 'Mexico',
                    rating: 4,
                    icon: 'mx'
                },
                {
                    name: 'Morocco',
                    rating: 4,
                    icon: 'ma'
                },
                {
                    name: 'Netherlands',
                    rating: 5,
                    icon: 'nl'
                },
                {
                    name: 'New Zealand',
                    rating: 2.5,
                    icon: 'nz'
                },
                {
                    name: 'Northern Ireland',
                    rating: 3,
                    icon: 'gb-nir'
                },
                {
                    name: 'Norway',
                    rating: 4,
                    icon: 'no'
                },
                {
                    name: 'Poland',
                    rating: 4,
                    icon: 'pl'
                },
                {
                    name: 'Portugal',
                    rating: 5,
                    icon: 'pt'
                },
                {
                    name: 'Qatar',
                    rating: 3,
                    icon: 'qa'
                },
                {
                    name: 'Romania',
                    rating: 3.5,
                    icon: 'ro'
                },
                {
                    name: 'Scotland',
                    rating: 4,
                    icon: 'gb-sct'
                },
                {
                    name: 'Spain',
                    rating: 5,
                    icon: 'es'
                },
                {
                    name: 'Sweden',
                    rating: 4,
                    icon: 'se'
                },
                {
                    name: 'Ukraine',
                    rating: 4,
                    icon: 'ua'
                },
                {
                    name: 'United States',
                    rating: 4,
                    icon: 'us'
                },
                {
                    name: 'Wales',
                    rating: 3.5,
                    icon: 'gb-wls'
                }
            ];
            this.players.forEach(player => {
                for (let i = 0; i < 5; i++) {
                    const randomIndex = Math.floor(Math.random() * teamsToRollCopy.length);
                    player.teams.push(teamsToRollCopy[randomIndex]);
                    teamsToRollCopy.splice(randomIndex, 1);
                }
            });
        }
    }
}
</script>
<style lang="scss">
.container {
    margin-top: 250px;
}
</style>