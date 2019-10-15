<template>
    <v-app>
        <v-container>
            
            <v-row>
                <v-col cols="3">
                    <v-text-field
                        label="Nome"
                        v-model="nome"
                        type="text"
                        outlined
                        required
                    ></v-text-field>
                </v-col>

                <v-col>
                    <v-text-field
                        label="Url da Imagem"
                        v-model="img"
                        type="text"
                        outlined
                        required
                    ></v-text-field>
                </v-col>
            </v-row>

            <v-row>
                <v-col>
                    <v-textarea
                        label="Description"
                        v-model="description"
                        type="text"
                        outlined
                        required
                        no-resize
                    ></v-textarea>
                </v-col>
            </v-row>

            <v-row justify="space-between">
                <v-col cols="6">
                  <v-combobox
                    v-model="type"
                    :items="types"
                    label="Selecione a área de atuação"
                  ></v-combobox>
                </v-col>

                <v-col cols="4">
                    <v-combobox
                    v-model="country"
                    :items="countries"
                    label="Selecione o país"
                  ></v-combobox>
                </v-col>
            </v-row>

        </v-container>
    </v-app>
</template>

<script>
export default {
    data: () => {
        return {
            nome: '',
            description: '',
            img: '',
            type: '',
            types: ['Hospedagem', 'Finanças', 'Tecnologia', 'Saúde'],
            countries: ["AF","AL","DZ","AS","AD","AO","AI","AQ","AG","AR","AM","AW","AU","AT","AZ","BS","BH","BD","BB","BY","BE","BZ","BJ","BM","BT","BO","BA","BW","BV","BR","IO","BN","BG","BF","BI","KH","CM","CA","CV","KY","CF","TD","CL","CN","CX","CC","CO","KM","CG","CD","CK","CR","CI","HR","CU","CY","CZ","DK","DJ","DM",'DO',"EC","EG","SV","GQ","ER","EE","ET","FK","FO","FJ","FI","FR","GF","PF","TF","GA","GM","GE","DE","GH","GI","GR","GL","GD","GP","GU","GT","GN","GW","GY","HT","HM","VA","HN","HK","HU","IS","IN","ID","IR","IQ","IE","IL","IT","JM","JP","JO","KZ","KE","KI","KP","KR","KW","KG","LA","LV","LB","LS","LR","LY","LI","LT","LU","MO","MK","MG","MW","MY","MV","ML","MT","MH","MQ","MR","MU","YT","MX","FM","MD","MC","MN","MS","MA","MZ","MM","NA","NR","NP","NL","AN","NC","NZ","NI","NE","NG","NU","NF","MP","NO","OM","PK","PW","PS","PA","PG","PY","PE","PH","PN","PL","PT","PR","QA","RE","RO","RU","RW","SH","KN","LC","PM","VC","WS","SM","ST","SA","SN","CS","SC","SL","SG","SK","SI","SB","SO","ZA","GS","ES","LK","SD","SR","SJ","SZ","SE","CH","SY","TW","TJ","TZ","TH","TL","TG","TK","TO","TT","TN","TR","TM","TC","TV","UG","UA","AE","GB","US","UM","UY","UZ","VU","VE","VN","VG","VI","WF","EH","YE","ZM","ZW"],
            country: ''
        }
    }
}
</script>
