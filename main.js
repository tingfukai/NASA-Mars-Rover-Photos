var app = new Vue({
            
    el: '#app',
    data: {
        message: 'NASA MARS ROVER PHOTO',
        newdate:'',
        info:[],
        image:'',
        
    },

    mounted(){
        axios
        .get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=pZkX9pBMnDGZCJwYkzETQJEyui5dvlMi7VXs5R3T')
        .then(response => (this.info = response.data.photos))
        .catch((error => {console.log(error)}))
    },


});