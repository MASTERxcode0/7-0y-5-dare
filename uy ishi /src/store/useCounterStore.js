import { create } from "zustand";

const useCounterState = create((set) => {
	return {
		counter: [],
		add: function (value) {
			set( function(state){
				let copide = [...state.counter];
				copide.push(value);
				return { counter: copide };
			});
		},
		remove: function (id) {
			set(function(state){
				let copide = [...state.counter];
				let filtered = copide.filter((item) => item.id !== id);
				return { counter: filtered };
			});
		},
		edite: function (value) {
			set(function (state) {
				let copide = [...state.counter];
				copide = copide.map((c) => {
					if (c.id == value.id) {
						c = value;
					}
                    return c;
				});
				return { counter: copide };
			});
		},
        clear: function(){
            set({counter:[]})
        }
	};
});

export default useCounterState;
