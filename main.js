var app = new Vue({
            
    el: '#app',
    data(){

        var inputdata = {}
        inputdata.mydate = '06-03-2015';
        
        return{
            message: 'NASA MARS ROVER PHOTO',
            newdate: inputdata,
            info:[],
            image:'',
        } 
    },

    mounted(){
        axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=vzIPsA1gg6ssPjSfCKm9wNwTz0OFjRnbSX4isLbo')
        .then((response) => {
        this.info = response.data.photos})
    },




});