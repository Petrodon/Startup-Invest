<template>
    <v-app>
        <v-container>
            <v-row justify="center">
                <v-col cols="8">
                    <v-img :src="startup.img"></v-img>
                </v-col>
            </v-row>
        </v-container>

        <v-container>
            <v-row justify="space-between">
                <v-col cols="3">
                    <v-text-field
                        label="Investimento"
                        v-model="money"
                        type="number"
                        outlined
                        required
                        :rules="moneyRules"
                        color="success"
                        @change="m_change()"
                    ></v-text-field>
                    <v-row justify="center">
                        <v-btn color="success">Investir</v-btn>
                    </v-row>
                </v-col>
                <v-col cols="7">
                    <v-card>
                        <v-card-title>Descrição</v-card-title>
                        <v-card-text>{{ startup.description }}</v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
import {mapState} from 'vuex'

export default {
    data: () => {
        return {
            moneyRules: [v => v>=0 || "Deve ser um valor válido"],
            money: 0,
            startup: {}
        }
    },
    computed: {
        ... mapState({
            startups: state => state.startups
        })
    },
    mounted: function () {
        for (var i=0; i < this.startups.length; i++) {
            if (this.startups[i]._id == this.id) {
                this.startup = this.startups[i]
            }
        }
    },
    props: {
        id: {
            type: String
        }
    },
    methods: {
        m_change() {
            if (this.money < 0) {
                this.money = 0
            }
        }
    }
}
</script>