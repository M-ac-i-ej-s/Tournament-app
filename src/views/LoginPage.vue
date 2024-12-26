<template>
    <div class="d-flex justify-center align-center h-100 w-100">
        <v-card width="350">
            <v-card-text>
                <span class="d-flex justify-center">
                    <span>
                        <v-img :src="TrophyPhoto" width="200" class="mb-6"/>
                    </span>
                </span>
                <v-text-field
                    label="Username"
                    variant="outlined"
                    v-model="username"
                >
                </v-text-field>
                <v-text-field
                    label="Password"
                    variant="outlined"
                    :type="showPassword ? 'text' : 'password'"
                    v-model="password"
                >
                    <template v-slot:append-inner>
                        <v-icon @click="showPassword = !showPassword">
                            {{ showPassword ? 'mdi-eye-off' : 'mdi-eye' }}
                        </v-icon>
                    </template>
                </v-text-field>
                <v-btn
                    color="primary"
                    block
                    @click="login"
                >
                    Login
                </v-btn>
            </v-card-text>
        </v-card>
    </div>
</template>
<script>
import TrophyPhoto from '@/assets/trophy.png'
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default {
    name: 'LoginPage',
    data() {
        return {
            TrophyPhoto,
            username: '',
            password: '',
            showPassword: false
        }
    },
    methods: {
        login() {
            if (this.username === '3zjby' && this.password === 'karolToGej') {
                localStorage.setItem('user', this.username)
                this.$router.go({ name: 'Home' })
            } else {
                toast('Invalid username or password', {
                    type: 'error'
                })
            }
        }
    }
}
</script>
<style lang="scss">
</style>