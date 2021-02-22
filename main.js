var app = new Vue({
            
    el: '#app',
    data(){

        var inputdata = {}
        inputdata.mydate = '2015-06-03';
        
        return{
            message: 'NASA MARS ROVER PHOTO',
            newdate: inputdata,
            info:'',
            image:'',
            photo_id:'',
            camera:'',
        } 
    },

    methods: {

        Getdata:function(date){
           
            axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date='+date.mydate+'&api_key=vzIPsA1gg6ssPjSfCKm9wNwTz0OFjRnbSX4isLbo')
            .then((response) => { 
            this.info = response.data.photos}).then(console.log(this.info))

        }
        
    },

    




});