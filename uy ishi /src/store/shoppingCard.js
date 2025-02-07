import { create } from "zustand";

const useShoppingCardState = create((set) => {
    return {
        shoppingCard: [],
        add: function (value) {
            set( function(state){
                let copide = [...state.shoppingCard];
                copide.push(value);
                return { shoppingCard: copide };
            });
        },
        remove: function (id) {
            set(function(state){
                let copide = [...state.shoppingCard];
                let filtered = copide.filter((item) => item.id !== id);
                return { shoppingCard: filtered };
            });
        },
        edite: function (value) {
            set(function (state) {
                let copide = [...state.shoppingCard];
                copide = copide.map((c) => {
                    if (c.id == value.id) {
                        c = value;
                    }
                    return c;
                });
                return { shoppingCard: copide };
            });
        },
        clear: function(){
            set({shoppingCard:[]})
        }
    };
}); 

export default useShoppingCardState;