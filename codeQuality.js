// level {1/2/3}

  // Level 1
const GET_daTA = async () => {
    const r = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const DATA = await r.json();
    return DATA;
}