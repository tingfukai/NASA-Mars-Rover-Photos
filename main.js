var app = new Vue({
            
    el: '#app',
    data(){
        return{
            message: 'NASA MARS ROVER PHOTO',
            newdate: '2021-02-10',
            info:[],
            count: 1,
        } 
    },

    mounted() {
        axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date='+this.newdate+'&page=1&api_key=vzIPsA1gg6ssPjSfCKm9wNwTz0OFjRnbSX4isLbo')
        .then((response) => { 
        this.info = response.data.photos}).then(console.log(this.info));
    },

    methods: {

        Getdata:function(date){
           
            axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date='+date+ '&page=1&api_key=vzIPsA1gg6ssPjSfCKm9wNwTz0OFjRnbSX4isLbo')
            .then((response) => { 
            this.info = response.data.photos}).then(console.log(this.info))

            
        }
        
    },

    




});