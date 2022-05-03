---
title: Hooks
category: REACT
date: 2022-05-02
---

> React Hooks 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。

React 的核心是组件。v16.8 版本之前，组件的标准写法是类（class）。

**类组件的缺点：**

- 在组件之间复用状态逻辑很难。
- 复杂组件变得难以理解。
- 难以理解的 class。
- 大型组件很难拆分和重构，也很难测试。
- 业务逻辑分散在组件的各个方法之中，导致重复逻辑或关联逻辑。
- 组件类引入了复杂的编程模式，比如 render props 和高阶组件。

React 团队希望，组件不要变成复杂的容器，最好只是数据流的管道。开发者根据需要，组合管道即可。 组件的最佳写法应该是函数，而不是类。React Hooks 的设计目的，就是加强版函数组件，完全不使用"类"，就能写出一个全功能的组件。

**兼容性：**

- 完全可选的。 你无需重写任何已有代码就可以在一些组件中尝试 Hook。但是如果你不想，你不必现在就去学习或使用 Hook。
- 00% 向后兼容的。 Hook 不包含任何破坏性改动。
- 现在可用。 Hook 已发布于 v16.8.0。
- Hook 不会影响你对 React 概念的理解。
- 你可以渐进式的在你的项目中使用Hooks。

**Hook 使用规则**

- 只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用。
- 只能在 React 的函数组件中调用 Hook。不要在其他 JavaScript 函数中调用。

::: info

官方推荐使用钩子（函数），而不是类。因为钩子更简洁，代码量少，用起来比较"轻"，而类比较"重"。而且，钩子是函数，更符合 React 函数式的本质。

:::

::: warning

请注意，要启用 Hook，所有 React 相关的 package 都必须升级到 16.8.0 或更高版本。如果你忘记更新诸如 React DOM 之类的 package，Hook 将无法运行。

:::

## Basic Hooks

### useState

> 该Hooks是一个函数，用于为函数组件引入状态更新 state。它接收一个新的 initstate 值，返回一个 state，以及更新 state 的函数。

语法：

```text
const [state, setState] = useState(initialState|function);
```

参数：

- initialState：状态的初始值。
- function: 也可以是一个返回state的函数。

返回值：

- state：返回一个 新的state。
- setState：返回一个更新 state 的函数。

示例：

```javascript
function Counter() {
  // 声明一个叫 “count” 的 state 变量。
  const [count, setCount] = useState(0);
  return (
    <>
      Count: {count}
      <button onClick={() => setCount(count + 1)}>加1</button>
    </>
  );
}
```

> 在这里，我们通过在函数组件里调用`useState()`来给组件添加一些内部 state。React 会在重复渲染时保留这个 state。useState 会返回一对值：当前状态和一个让你更新它的函数，你可以在事件处理函数中或其他一些地方调用这个函数。它类似 class 组件的 this.setState，但是它不会把新的 state 和旧的 state 进行合并。

**声明多个 state 变量**

```javascript
function ExampleWithManyStates() {
  // 声明多个 state 变量！
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
  // ...
}
```

> `数组解构`的语法让我们在调用 useState 时可以给 state 变量取不同的名字。


**函数式更新**

如果新的 state 需要通过使用先前的 state 计算得出，那么可以将函数传递给 setState。该函数将接收先前的 state，并返回一个更新后的值。

```javascript
// “+” 和 “-” 按钮采用函数式形式，因为被更新的 state 需要基于之前的 state。
// 但是“重置”按钮则采用普通形式，因为它总是把 count 设置回初始值。
function Counter({initialCount}) {
  const [count, setCount] = useState(initialCount);
  return (
    <>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </>
  );
}
```

**惰性初始 state**

initialState 参数只会在组件的初始渲染中起作用，后续渲染时会被忽略。 如果初始 state 需要通过复杂计算获得，则可以传入一个函数，在函数中计算并返回初始的 state，此函数只在初始渲染时被调用：

```javascript
const [state, setState] = useState(() => {
  const initialState = someExpensiveComputation(props);
  return initialState;
});

```

::: info

1. 在初始渲染期间，返回的状态 (state) 与传入的第一个参数 (initialState) 值相同。
2. 在后续的重新渲染中，useState 返回的第一个值将始终是更新后最新的 state。
3. 如果你的更新函数返回值与当前 state 完全相同，则随后的重渲染会被完全跳过。
4. 与 class 组件中的 setState 方法不同，useState 不会自动合并更新对象。你可以用函数式的 setState 结合展开运算符来达到合并更新对象的效果。
    ```javascript
    const [state, setState] = useState({});
    setState(prevState => {
        // 也可以使用 Object.assign
        return {...prevState, ...updatedValues};
    });
    ```
   > 可以使用useReducer 代替此方案，它更适合用于管理包含多个子值的 state 对象。
5. 调用 State Hook 的更新函数并传入当前的 state 时，React 将跳过子组件的渲染及 effect 的执行。因为React会使用 Object.is 比较算法来比较 state。

:::


### useEffect

> useEffect 就是一个 Effect Hook，给函数组件增加了操作副作用的能力。它跟 class 组件中的 componentDidMount、componentDidUpdate 和 componentWillUnmount 具有相同的用途，只不过被合并成了一个 API。

语法：

```text
useEffect(()  =>  {
  // Async Action
  return () => { /* 做清理工作*/ }
}, [dependencies])
```

参数：

 - fn：一个用来执行副作用的回调函数。
 - dependencies：依赖。依赖发生变化，它就会被重新创建。

返回值：可选的，可省略。也可以返回一个清理函数，用来清理副作用。

::: info

副作用是指 DOM 操作、订阅、计时器、输出日志等操作。

:::

示例：

```javascript
const Person = ({ personId }) => {
  const [person, setPerson] = useState({});

  useEffect(() => {
    fetch('/url')
      .then(response => response.json())
      .then(data => {
        setPerson(data);
      });
  }, [personId]);

  return (
    <div>
      <p>{person.name}</p>
    </div>
  );
};
```

**清除 effect**

组件卸载时需要清除 effect 创建的诸如订阅或计时器 ID 等资源。要实现这一点，useEffect 函数需返回一个清除函数。

```javascript
useEffect(() => {
  const subscription = props.source.subscribe();
  return () => {
    // 清除订阅
    subscription.unsubscribe();
  };
});
```

> 为防止内存泄漏，清除函数会在组件卸载前执行。另外，如果组件多次渲染（通常如此），则在执行下一个 effect 之前，上一个 effect 就已被清除。

**effect 的执行时机**

useEffect 的函数会在浏览器完成`布局与绘制`之后，在一个延迟事件中被调用。因为绝大多数操作不应阻塞浏览器对屏幕的更新。

然而，并非所有 effect 都可以被延迟执行。例如，一个对用户可见的 DOM 变更就必须在浏览器执行下一次绘制前被同步执行，这样用户才不会感觉到视觉上的不一致。React 为此提供了一个额外的 useLayoutEffect Hook 来处理这类 effect。它和 useEffect 的结构相同，区别只是调用时机不同。

从 React 18 开始，当它是离散的用户输入（如点击）的结果时，或者当它是由 flushSync 包装的更新结果时，传递给 useEffect 的函数将在屏幕布局和绘制之前同步执行。

**effect 的条件执行**

默认情况下，effect 会在每轮组件渲染完成后执行。这样的话，一旦 effect 的依赖发生变化，它就会被重新创建。

然而，在某些场景下并不需要重新创建。比如，在上一示例中，我们不需要在每次组件更新时都创建新的订阅，而是仅需要在 source prop 改变时重新创建。

```javascript
useEffect(
  () => {
    const subscription = props.source.subscribe();
    return () => {
      subscription.unsubscribe();
    };
  },
  // effect 所依赖的数组，只有当 props.source 改变后才会重新创建订阅。
  [props.source],
);
```

**执行次数**

1. 如果没有传入第二个参数，那么react将在每次渲染中执行。
2. 如果想仅在组件挂载时执行(并非重新渲染时)，可以传递一个空数组（[]）作为第二个参数。这就告诉 React 你的 effect 不依赖于 props 或 state 中的任何值，所以它永远都不需要重复执行。
3. 如果传入一个依赖数组`[state]`，那么react将在state发生改变时执行useEffect。组件第一次渲染时，useEffect()也会执行。

::: info
1. 在函数组件主体内（这里指在 React 渲染阶段）改变 DOM、添加订阅、设置定时器、记录日志以及执行其他包含副作用的操作都是不被允许的，因为这可能会产生莫名其妙的 bug 并破坏 UI 的一致性。
2. 组件卸载时需要清除 effect 创建的诸如订阅或计时器 ID 等资源。
3. 依赖项数组不会作为参数传给 effect 函数。
4. 跟 useState 一样，你可以在组件中多次使用 useEffect。

:::

### useContext

> 如果需要在组件之间共享状态，可以使用useContext()。

语法：

```text
const value = useContext(MyContext);
```

参数：

- MyContext：一个 context 对象（React.createContext 的返回值）。当前的 context 值由上层组件中距离当前组件最近的 <MyContext.Provider> 的 value prop 决定。

返回值：返回该 context 的当前值。

```javascript
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext(themes.light);

function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}
```

> useContext(MyContext) 只是让你能够读取 context 的值以及订阅 context 的变化。你仍然需要在上层组件树中使用 <MyContext.Provider> 来为下层组件提供 context。

## Additional Hooks

### useReducer

> useReducer是useState 的替代方案。它接收一个形如 (state, action) => newState 的 reducer，并返回当前的 state 以及与其配套的 dispatch 方法。

React 本身不提供状态管理功能，通常需要使用外部库。这方面最常用的库是 Redux。 Redux 的核心概念是，组件发出 action 与状态管理器通信。状态管理器收到 action 以后，使用 Reducer 函数算出新的状态。Reducer 函数的形式是(state, action) => newState。

语法：

```text
const [state, dispatch] = useReducer(reducer, initialState, init);
```

参数：

- reducer：一个回调函数，并返回一个新的state。` (state, action) => newState`
- initialState：state的初始值。
- init：一个回调函数，返回一个state的初始值。

返回值：

- state：当前的 state
- dispatch：dispatch 方法。和Redux中使用的方式一样。

用 reducer 重写 useState 一节的计数器示例：

```javascript
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}
```

有两种不同初始化 useReducer state 的方式，你可以根据使用场景选择其中的一种。

**指定初始 state**

```javascript
  const [state, dispatch] = useReducer(
    reducer,
    {count: initialCount}
  );
```

**惰性初始化**

将 init 函数作为 useReducer 的第三个参数传入，这样初始 state 将被设置为 init(initialArg)。

```javascript
function init(initialCount) {
  return {count: initialCount};
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    case 'reset':
      return init(action.payload);
    default:
      throw new Error();
  }
}

function Counter({initialCount}) {
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  return (
    <>
      Count: {state.count}
      <button
        onClick={() => dispatch({type: 'reset', payload: initialCount})}>
        Reset
      </button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}
```

> 这么做可以将用于计算 state 的逻辑提取到 reducer 外部，这也为将来对重置 state 的 action 做处理提供了便利

**跳过 dispatch**

如果 Reducer Hook 的返回值与当前 state 相同，React 将跳过子组件的渲染及副作用的执行。

### useCallback

> 用于得到一个固定引用值的函数，通常用它进行性能优化。

语法：

```text
const memoizedCallback = useCallback(
  () => {
    // doSomething
  },
  []
);
```

参数：

- fn：一个内联回调函数，useCallBack会固定该函数的引用，只要依赖项没有发生改变，则始终返回之前函数的地址。
- dep：依赖数组。

返回值：返回一个 memoized 回调函数(缓存函数)。

示例：

```javascript
export default function UseCallbackPage(props) {
    const [count, setCount] = useState(0);
    
    const addClick = useCallback(() => {
        let sum = 0;
        for (let i = 0; i < count; i++) {
            sum += i;
        }
        return sum;
    }, [count]);
    const [value, setValue] = useState('');
    
    return (
        <div>
            <h3>UseCallbackPage</h3>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>add</button>
            <input value={value} onChange={event => setValue(event.target.value)}/>
            <Child addClick={addClick}/>
        </div>
    );
}

class Child extends PureComponent {
    render() {
        console.log('child render');
        const {addClick} = this.props;
        return (
            <div>
                <h3>Child</h3>
                <button onClick={() => console.log(addClick())}>add</button>
            </div>
        );
    }
}
```

> 每次在重新渲染时addClick的引用会发生改变，使用useCallback可以避免子组件Child重新渲染

::: info

1. useCallback(fn, deps) 相当于 useMemo(() => fn, deps)。
2. 依赖项数组不会作为参数传给回调函数。
3. 回调函数仅在某个依赖项改变时才会更新。
4. useCallback 的真正目的是在于缓存了每次渲染时内联回调的实例

:::

### useMemo

> 一种性能优化的手段。允许你通过「记住」上一次计算结果的方式在多次渲染的之间缓存计算结果。

语法：

```text
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

参数：

- fn：内联回调函数。
- dep：依赖项数组，仅在某个依赖项改变时才会调用memoized回调函数。

返回值：返回一个 memoized 值。

示例：

```javascript
export default function UseMemoPage(props) {
   const [count, setCount] = useState(0);
   
   const expensive = useMemo(() => {
      console.log('compute');
      let sum = 0;
      for (let i = 0; i < count; i++) {
         sum += i;
      }
      return sum;
      //只有count变化，这⾥才重新执⾏,避免额外的计算开销
   }, [count]);
   const [value, setValue] = useState('');
   
   return (
        <div>
           <h3>UseMemoPage</h3>
           <p>expensive:{expensive}</p>
           <p>{count}</p>
           <button onClick={() => setCount(count + 1)}> add </button>
           <input value={value} onChange={event => setValue(event.target.value)} />
        </div>
   );
}
```

::: info

1. 传入 useMemo 的函数会在渲染期间执行。请不要在这个函数内部执行与渲染无关的操作，诸如副作用这类的操作属于 useEffect 的适用范畴，而不是 useMemo。
2. 它仅会在某个依赖项改变时才重新计算 memoized 值。这种优化有助于避免在每次渲染时都进行高开销的计算。
3. 如果没有提供依赖项数组，useMemo 在每次渲染时都会计算新的值。
4. 依赖项数组不会作为参数传给“创建”函数。
5. useCallback(fn, deps) 相当于 useMemo(() => fn, deps)。

:::

### useRef

> useRef 返回一个可变的 ref 对象，其 .current 属性被初始化为传入的参数（initialValue）。返回的 ref 对象在组件的整个生命周期内持续存在。

语法：

```text
const refContainer = useRef(initialValue);
```

参数：

- initialValue：初始值。

返回值：返回一个可变的 ref 对象，其 .current 属性被初始化为传入的参数（initialValue）

本质：useRef 就像是可以在其 .current 属性中保存一个可变值的“盒子”。

示例：

```javascript
function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` 指向已挂载到 DOM 上的文本输入元素
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```

::: info

1. useRef 会在每次渲染时返回同一个 ref 对象。
2. useRef() 比 ref 属性更有用。它可以很方便地保存任何可变值，其类似于在 class 中使用实例字段的方式。

:::

::: warning

当 ref 对象内容发生变化时，useRef 并不会通知你。变更 .current 属性不会引发组件重新渲染。如果想要在 React 绑定或解绑 DOM 节点的 ref 时运行某些代码，则需要使用回调 ref 来实现。

:::

### useImperativeHandle

> 

### useLayoutEffect

> 

### useDebugValue

> 

### useDeferredValue

> 

### useTransition

> 

### useId

- 官方给出了关于 Hook 的常见问题。[传送门](https://zh-hans.reactjs.org/docs/hooks-faq.html)
- 官方api，[传送门](https://zh-hans.reactjs.org/docs/hooks-reference.html#additional-hooks)
