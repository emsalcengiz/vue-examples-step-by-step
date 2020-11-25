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
            alert(point);
            


        },
        special_attack: function(){

        },
        heal_up: function(){

        },
        give_up: function(){

        },


    },
})