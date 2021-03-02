var app = new Vue({
            
    el: '#app',
    data(){
        return{
            Header: 'NASA MARS ROVER',
            newdate: 'YYYY-MM-DD',
            Today: new Date().toISOString().slice(0,10),
            shownophoto: false,
            info:[],
            page: 1,
            count: 0,
        } 
    },

    methods: {
        //When Date changed
        Getdata:function(date){

            //reset
            this.shownophoto = false
            this.page = 1

            axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date='+date+ '&page='+ this.page +'&api_key=vzIPsA1gg6ssPjSfCKm9wNwTz0OFjRnbSX4isLbo')
            .then((response) => { 
            this.info = response.data.photos}).then(console.log(this.info))

            this.count = 1
            
            //set delay 2sec to show the message if no photos
            setTimeout(() =>{
                this.shownophoto = true;
            }, 2000)
        },
        //For Previous Button
        PrevPage()
        {
            this.page = this.page - 1

            //Prevent the user click the previous button when the current page is the first page.
            if(this.page <= 0){
                alert('This is the first page.')
                this.page = this.page + 1
            }
            else{
                axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date='+this.newdate+ '&page='+ this.page +'&api_key=vzIPsA1gg6ssPjSfCKm9wNwTz0OFjRnbSX4isLbo')
                .then((response) => { 
                this.info = response.data.photos}).then(console.log(this.info))
            }  
        },
        //For Next Page Button
        NextPage()
        {
            this.page = this.page + 1
            
            axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date='+this.newdate+ '&page='+ this.page +'&api_key=vzIPsA1gg6ssPjSfCKm9wNwTz0OFjRnbSX4isLbo')
            .then((response) => { 
            this.info = response.data.photos}).then(console.log(this.info))
            
            //Check if next page is the last page.
            if(this.info.length < 25 || this.info.length == 0){
                alert('This is the last page.')
                this.page = this.page - 1

                axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date='+this.newdate+ '&page='+ this.page +'&api_key=vzIPsA1gg6ssPjSfCKm9wNwTz0OFjRnbSX4isLbo')
                .then((response) => { 
                this.info = response.data.photos}).then(console.log(this.info))
            }
        },
    },
});