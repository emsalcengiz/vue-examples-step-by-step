new Vue({
    el: "#app",
    data: {
        player_heal: 100,
        monster_heal: 100,
        game_is_on: false,
        game_logs: []

    },
    methods: {
        start_game: function(){
            this.game_is_on = true;

        },
        attack: function(){
            var point = Math.ceil(Math.random() * 10);
            // Math.ceil() fonksiyonu virgülden sonraki kısmı kesip tam sayı döndü
            // alert(point);
            this.monster_heal -= point;
            this.add_to_log({ turn: "P", text: "Oyuncu atağı (" + point + ")"});
            this.monster_attack();
            // console.log("M:" + this.monster_heal);
            // console.log("P:" + this.player_heal);
        },
        special_attack: function(){
            var point = Math.ceil(Math.random() * 25);
            this.monster_heal -= point;
            this.add_to_log({ turn: "P", text: " Özel Oyuncu atağı (" + point + ")"});
            this.monster_attack();

        },
        heal_up: function(){
            var point = Math.ceil(Math.random() * 20);
            this.player_heal += point;
            this.add_to_log({ turn: "P", text: "İLk yardım (" + point + ")"});
            this.monster_attack();

        },
        give_up: function(){
            this.player_heal = 0;
            // console.log("M:" + this.monster_heal);
            // console.log("p:" + this.player_heal);
            this.add_to_log({ turn: "P", text: "Oyuncu pes etti.." });


        },
        monster_attack: function(){
            var point = Math.ceil(Math.random() * 15);
            this.player_heal-=point;
            this.add_to_log({ turn: "M", text: "Canavar atağı.." });
            // console.log("M:" + this.monster_heal);
            // console.log("p:" + this.player_heal);

        },
        add_to_log: function(log){
            this.game_logs.push(log);

        },
    },
    watch: {
        player_heal: function(value){
            if (value < 0) {
                this.player_heal = 0 ;
                if (confirm("Oyunu kaybettiniz.. Tekrar denemek ister misin ?")) {
                    this.player_heal = 100;
                    this.monster_heal = 100;
                }
                
            } else if(value > 100) {
                this.player_heal = 100;
            }
        },
        monster_heal: function(value){
            if (value < 0) {
                this.monster_heal = 0 ;  
                if (confirm("Tebrikler oyunu kazandınız..")) {
                    this.player_heal = 100;
                    this.monster_heal = 100;
                    
                } 
            }
        },


    },
})