var app = new Vue({
            
    el: '#app',
    data(){
        return{
            Header: 'NASA MARS ROVER PHOTO',
            newdate: '2021-02-10',
            info:[],
            check:[],
            count: 1,
        } 
    },

    mounted() {
        axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date='+this.newdate+'&page=1&api_key=vzIPsA1gg6ssPjSfCKm9wNwTz0OFjRnbSX4isLbo')
        .then((response) => { 
        this.info = response.data.photos}).then(console.log(this.info));
    },

    methods: {

        Getdata:function(date,currentpage){
            this.count = 1;
            axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date='+date+ '&page='+ this.count +'&api_key=vzIPsA1gg6ssPjSfCKm9wNwTz0OFjRnbSX4isLbo')
            .then((response) => { 
            this.info = response.data.photos}).then(console.log(this.info))
        },

        PrevPage(date,currentpage)
        {
            this.count = this.count - 1;
            currentpage = currentpage -1;
            if(this.count <= 0){
                alert('This is the first page.')
                this.count = this.count + 1;
                currentpage = currentpage +1;
            }
            else{
                axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date='+this.newdate+ '&page='+ currentpage +'&api_key=vzIPsA1gg6ssPjSfCKm9wNwTz0OFjRnbSX4isLbo')
                .then((response) => { 
                this.info = response.data.photos}).then(console.log(this.info))
            }  
        },

        NextPage(date,currentpage)
        {
            this.count = this.count + 1;
            currentpage = currentpage + 1;
            
            axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date='+this.newdate+ '&page='+ currentpage +'&api_key=vzIPsA1gg6ssPjSfCKm9wNwTz0OFjRnbSX4isLbo')
            .then((response) => { 
            this.info = response.data.photos}).then(console.log(this.info))

            if(this.info.length < 25 || this.info.length == 0){
                alert('This is the last page.');
                this.count = this.count - 1;
                currentpage = currentpage -1;

                axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date='+this.newdate+ '&page='+ currentpage +'&api_key=vzIPsA1gg6ssPjSfCKm9wNwTz0OFjRnbSX4isLbo')
                .then((response) => { 
                this.info = response.data.photos}).then(console.log(this.info))
            }
        },
    },
});