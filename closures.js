module.exports = {
    /**
     * Return an object with a next() property. Each time the next function
     * is called the value returned is one higher than the time before.
     *
     *  let c = closures.counter(2);
     *  c.next(); // return 3
     *  c.next(); // return 4
     *  c.next(); // return 5
     */
    counter: function (start) {
        
        return {
            next: function() {
                start++;

                return start;
            }
        }
    },

    /**
     * Return an object with a discount() property. The discount property should
     * accept an amount that the original price should be discounted by. This
     * should not affect the original amount!
     *
     *  let tot = closures.total(20);
     *  tot.discount(0.50); // return 10
     *  tot.discount(0.20); // return 16
     */
    total: function (amount) {
        return {
            discount: function(param) {
                let promo = amount * param;

                return amount - promo;
            }
        }
    },

    /**
     * Set the name of a user. Only valid names can be provided. A `valid` name is
     * one that matches the regex ^[A-Za-z ]+$.
     *
     *  let user = closures.user();
     *  user.setName('Francis Bacon');  // return true
     *  user.getName();                 // return 'Francis Bacon'
     *  user.setName('x123 hi');         // return false
     *  user.getName();                 // return 'Francis Bacon'
     */
    user: function () {
        return {
            userName: '',
            setName: function(name) {
                let regex = /^[A-Za-z ]+$/;
                if(regex.test(name)) {
                    //console.log('here');
                    userName = name;
                    return true;
                } else {
                    return false;
                }
            },

            getName: function() {
                return userName;
            }
        }
    },

    /**
     * Track the number of lives remaining in a game.
     *
     *  let lives = closures.lives(5);
     *  lives.died();
     *  console.log(lives.left()); // 4
     *  lives.died();
     *  console.log(lives.left()); // 3
     *  lives.restart();
     *  console.log(lives.left()); // 5
     */


    lives: function (start) {
        let currentlives = start;
        return {
            left: function() {
                return currentlives;
            },
            //take away one life everytime this function is called
            died: function() {
                currentlives -= 1;
                return currentlives;
            },
            //reset life to start everytime this function is called
            restart: function() {
                currentlives = start;
                return currentlives;
            }
        }
    },

    
    /**
     * Return a string that contains the 'message id' before the message text.
     * The message ID starts at one and increments with each record.
     *
     *  let logger = closures.messages();
     *  let msg = logger.record('first message');
     *  console.log(msg); // '[1] first message'
     *  msg = logger.record('second message');
     *  console.log(msg); // '[2] second message'
     */
    messages: function () {
        let count = 0;
        return {
            record: function(messageinfo) {
                count++;
                return '['+ count +']' + ' ' + messageinfo;
            }
        }    
    },

    /**
     * Create a pocket object that can contain COINS and TRINKETS. The pocket
     * allows users to buy() trinkets for 10 coins, or sell() trinkets for 5
     * coins. You can also return the number of coins() or trinkets().
     *
     * You can't have a negative number of coins or trinkets.
     *
     *  let pocket = closures.pocket(50);
     *  pocket.buy(); // buy for 10 coins
     *  console.log(pocket.coins()); // 40
     *  console.log(pocket.trinkets()); // 1
     *
     *  pocket.buy();
     *  console.log(pocket.coins()); // 30
     *  console.log(pocket.trinkets()); // 2
     *
     *  pocket.sell();
     *  console.log(pocket.coins()); // 35
     *  console.log(pocket.trinkets()); // 1
     */
    pocket: function (start) {
        let currenttotal = start;
        let buycount = 0;
        return {
            //10 coins equals 1 trinket. 
            coins: function() {
                if(currenttotal < 0) {
                    currenttotal = 0;
                } else {
                    return currenttotal;
                }
            },
            //You can buy 1 trinket for 10 coins
            buy: function() {
                currenttotal = currenttotal - 10;
                buycount++;
                return currenttotal;
            },
            // 1 trinket equals 10 coins.
            trinkets: function() {
                return buycount;
            }, 
            //sell 1 trinket for 5 coins
            sell: function() {
                currenttotal = currenttotal + 5;
                buycount--;
                return currenttotal;
            }
        }
        
    },

    /**
     * Return a function that accepts the value to multiply `val` by.
     *
     *  multiply(3)(5); // return 15
     */
    multiply: function (val) {
        return function(num) {
            return val * num;
        }
    },
};