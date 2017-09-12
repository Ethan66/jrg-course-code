/*实现的功能
on('topic', fn),
trigger('topic') ==> fn要执行
off('topic', fn) ==> fn移除*/

const app = {
    on: (topic, fn) => {
        // ?
    },
    trigger: (topic) => {
    // ?
    },
    off: (topic, fn) => {
        // ?
    },
};

const fn = () => {
    console.log('hello world');
}
app.on('click', fn);
app.trigger('click'); // 打印hello world