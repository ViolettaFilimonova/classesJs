// class People{
//     static type = 'ANIMAL'
//     constructor(options) {
//         this.name = options.name
//         this.age = options.age
//     }
//     voice(){
//         console.log('VOICE')
//     }
// }
//
// const people = new People({
//     name: 'Nikita',
//     age: 23
// })
//
// class Men extends People{
//     static type = 'MEN'
//     constructor(d) {
//         super(d);
//         this.color = d.color
//     }
//     voice() {
//         super.voice();
//     }
//     get ageInfo(){
//         return this.age * 2
//     }
//     set ageInfo(num){
//         this.age = num
//     }
// }
// const men = new Men({
//     name: 'Kirill',
//     age: 27,
//     color: 'white'
// })

//
// class Component{
//     constructor(selector) {
//         this.$el = document.querySelector(selector)
//     }
//
//     hide(){
//         this.$el.style.display = 'none'
//     }
//     show(){
//         this.$el.style.display = 'block'
//     }
// }
//
// class Box extends Component{
//     constructor(options) {
//         super(options.selector)
//         this.$el.style.background = options.color
//         this.$el.style.width = this.$el.style.height = options.size
//     }
// }
//
// const box = new Box({
//     selector: '#box',
//     color: 'red',
//     size: '100px'
// })
//
// class Circle extends Box{
//     constructor(options) {
//         super(options);
//         this.$el.style.borderRadius = options.border
//     }
// }
//
// const circle = new Circle({
//     border: '50%',
//     color: 'green',
//     size: '120px',
//     selector: '#circle'
// })



class Clock {
    constructor({template}) {
        this.template = template
    }

    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();


          if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    stop() {
        clearInterval(timer);
    };

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    };

}

let clock = new Clock({template: 'h:m:s'});
// clock.start();

