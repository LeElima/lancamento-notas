<template>
    <div>
        <div>
            <GridList :headers="headersAlunos" :items="itemsAlunos">
                <template v-slot:top>
                    
                </template>
                <template v-slot:[`item.action`]="{item}">
                    {{ item.nomeAluno }}
                </template>
            </GridList>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import GridList from '@/components/GridList.vue';
export default Vue.extend({
    components:{
        GridList
    },
    data(){
        return{
            headersAlunos:[
                {
                    text:"Nome",
                    value:"nomeAluno"
                },
                {
                    text:"Sala",
                    value:"salaAluno"
                },
                {
                    text:"",
                    value:"action"
                }
            ],
            itemsAlunos:[
                {
                    nomeAluno:"Matheus",
                    salaAluno:"4ºB"
                }
            ]
        };
    },
})
</script>