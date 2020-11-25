new Vue({
    el: "#app",
    data: {
        player_heal: 100,
        monster_heal: 100,
        game_is_on: false,

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
            this.monster_attack();
            // console.log("M:" + this.monster_heal);
            // console.log("P:" + this.player_heal);
        },
        special_attack: function(){
            var point = Math.ceil(Math.random() * 25);
            this.monster_heal -= point;
            this.monster_attack();

        },
        heal_up: function(){
            var point = Math.ceil(Math.random() * 20);
            this.player_heal += point;
            this.monster_attack();

        },
        give_up: function(){
            this.player_heal = 0;
            // console.log("M:" + this.monster_heal);
            // console.log("p:" + this.player_heal);


        },
        monster_attack: function(){
            var point = Math.ceil(Math.random() * 15);
            this.player_heal-=point;
            // console.log("M:" + this.monster_heal);
            // console.log("p:" + this.player_heal);

        },
    },
})