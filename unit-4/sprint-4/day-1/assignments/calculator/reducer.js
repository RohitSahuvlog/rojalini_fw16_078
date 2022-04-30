const reducer = (state, action) => {
    switch (action.type) {
        case "Increment":{
            return {
                ...state,
                count:(state.count++),
            }
        }
        case "Decrement":{
            return {
                ...state,
                count:(state.count--),
            }
        }

    case "Addition":
    console.log(action)
      return {
        ...state,
        count: (state.count += action.payload),
      };

    case "Substration":
      return {
        ...state,
        count: (state.count -= action.payload),
      };

    case "Multiplication":
      return {
        ...state,
        count: (state.count *= action.payload),
      };

    case "Division":
      return {
        ...state,
        count: (state.count /= action.payload),
      };
        
        default : {
            return state;
        }  
    }
}

export {reducer};