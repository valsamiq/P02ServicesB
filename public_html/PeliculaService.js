app.service(
        "PeliculaService",function(){
            this.actores=[
                ["Harrison","Ford"],["Mary Sean","Young"]
            ];
            
            this.pelicula=[[["Harrison","Ford","26-04-1976","American"],["Mary Sean","Young","11-09-1965","American"]],"Blade Runer","Riddle Scott",1982];
            this.pelicula2=[[["Harrison","Ford","26-04-1976","American"],["Mark","Hamil","30-10-1981","American"]],"Star Wars","George Lucas",1977];
            this.peliculas=[this.pelicula,this.pelicula2];
        }
        );
