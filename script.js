const {createApp } = vue;

createApp({
    data(){
        return{
            urlApi:'server.php';
            arrDiscs : [

            ]
        }
    },
    methotds:{
        getDiscs(){
            axios.get('urlApi')
            .then(response=>this.arrDiscs = response.data);
        },
    },
    created(){
        this.getDisc();
    }
}).mount('#app')