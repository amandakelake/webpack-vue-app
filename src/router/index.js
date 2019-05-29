import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const HelloWord = async resolve => {
    const module = await import('../components/home/home.vue').catch(err =>
        console.error(`模块加载错误： ${err}`)
    );
    resolve(module);
};

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWord,
        },
    ],
});
