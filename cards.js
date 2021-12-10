let data = {
    equal_count:0,
    equal_price:0,
    card: {
        count:0,
        price:250,
    },
    card1:{
        count:0,
        price:500,
    },
    card2:{
        count:0,
        price:650,
    }
};

Vue.component( 'result', {
    data: function () {
        return data
    },
    template:`<div>
                <p>Общее количество товара: {{ equal_count }}</p>
                <p>Общая стоимость: {{ equal_price }}</p>
                <button v-on:click="equal">Произвести подсчет</button>
              </div>`,
    methods: {
        equal: function () {
            this.equal_count = this.card.count + this.card1.count + this.card2.count;
            this.equal_price = this.card.count * this.card.price + this.card1.count * this.card1.price + this.card2.count * this.card2.price;
        },
        func_equal_price: function () {

        }
    }
});

Vue.component( 'card', {
    data: function () {
        return data
    },
    template:`<div class="card">
                <img src="https://avatars.mds.yandex.net/i?id=ec7f9d6955e98dde268f418b427ba134-4421334-images-thumbs&n=13&exp=1" alt="">
                <p>Цена: {{ card.price }}</p>
                <button v-on:click="count_plus">+</button>
                <span class="">{{ card.count }}</span>
                <button v-on:click="count_minus">-</button>
              </div>`,
    methods: {
        count_plus: function() {
            this.card.count++;
        },
        count_minus: function() {
            if(this.card.count>0) this.card.count--;
        }
    }
});

Vue.component( 'card1', {
    data: function () {
        return data
    },
    template:`<div class="card">
                <img src="https://ae01.alicdn.com/kf/H4921250a0de647c5a259c2de8558208b7/-.jpg_q50.jpg" alt="">
                <p>Цена: {{ card1.price }}</p>
                <button v-on:click="count_plus">+</button>
                <span class="">{{ card1.count }}</span>
                <button v-on:click="count_minus">-</button>
              </div>`,
    methods: {
        count_plus: function() {
            this.card1.count++;
        },
        count_minus: function() {
            if(this.card1.count>0) this.card1.count--;
        }
    }
});

Vue.component( 'card2', {
    data: function () {
        return data
    },
    template:`<div class="card">
                <img src="https://ae01.alicdn.com/kf/HTB19p9oweySBuNjy1zdq6xPxFXat/-.jpg" alt="">
                <p>Цена: {{ card2.price }}</p>
                <button v-on:click="count_plus">+</button>
                <span class="">{{ card2.count }}</span>
                <button v-on:click="count_minus">-</button>
              </div>`,
    methods: {
        count_plus: function() {
            this.card2.count++;
        },
        count_minus: function() {
            if(this.card2.count>0) this.card2.count--;
        }
    }
});
