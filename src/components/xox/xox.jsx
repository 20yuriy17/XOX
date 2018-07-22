import React , {Component} from 'react';
import XoxItem from '../xoxItem/xoxItem';
import xox from '../xox/xox.css';

class XoX extends Component {
    state = {
        seconds: 0,
        player: true,
        arrGame: [0,1,2,3,4,5,6,7,8],
        item:[
            {
                id: 0,
                text:''},
            {
                id: 1,
                text:''},
            {
                id: 2,
                text:''},
            {
                id: 3,
                text:''},
            {
                id: 4,
                text:''},
            {
                id: 5,
                text:''},
            {
                id: 6,
                text:''},
            {
                id: 7,
                text:''},
            {
                id: 8,
                text:''},

        ]
    };

    startTimer = () => {
        setInterval (() => {
            this.setState(() => {

                let seconds = this.state.seconds;
                seconds++;

                return {seconds};
            })
        }, 1000);
    };




    componentDidMount(){

         this.startTimer();
    };

    componentWillUpdate(){
         setTimeout(()=> {this.winner()},100);
    };

    componentWillUnmount(){
        clearInterval(this.interval)
    };



    randomStep = () => {
        if (this.state.arrGame.length === 0) {
            alert(`ничья, поробуй еще раз ))`);
            window.location.reload();
        }

        let r = Math.floor(Math.random()*this.state.arrGame.length);

        let id2 = this.state.arrGame[r];

        this.setState(
            () => {

            return this.state.item[id2].text = 'O';
            },

            () => {this.state.arrGame.splice(r,1)}

        );

    };

    winner = () => {
        let g = '';

        for(let i=0; i<2; i++){

            (i ? g = 'X' : g = 'O');

            if ((this.state.item[0].text=== g
                && this.state.item[1].text=== g
                && this.state.item[2].text=== g) ||

                (this.state.item[3].text=== g
                && this.state.item[4].text=== g
                && this.state.item[5].text===  g) ||

                (this.state.item[6].text===  g
                && this.state.item[7].text=== g
                && this.state.item[8].text=== g) ||

                (this.state.item[0].text=== g
                && this.state.item[3].text=== g
                && this.state.item[6].text=== g) ||

                (this.state.item[1].text=== g
                && this.state.item[4].text=== g
                && this.state.item[7].text=== g) ||

                (this.state.item[2].text=== g
                && this.state.item[5].text=== g
                && this.state.item[8].text=== g) ||

                (this.state.item[0].text=== g
                && this.state.item[4].text=== g
                && this.state.item[8].text=== g) ||

                (this.state.item[2].text=== g
                && this.state.item[4].text=== g
                && this.state.item[6].text=== g))
            {
                clearInterval(this.interval);
                alert(`Выиграл ${g} за ${this.state.seconds} секунд`);
                window.location.reload();
            }
        }
    };


    swichName = (event) => {

        let id = (event.target.dataset.liid);

        if (this.state.item[id].text === '') {

            this.setState( (prevState) => {
                return (this.state.player ? prevState.item[id].text = 'X' : prevState.item[id].text = 'O');
            });

            // let id3 = this.state.arrGame.indexOf(+id);
            let id3 = this.state.arrGame.indexOf(parseInt(id));

            this.setState(
                () => {this.state.arrGame.splice(id3,1)}
            );

            setTimeout(()=> {this.randomStep()},300);
        }



    };


    render(){

        let seconds = this.state.seconds;

        return(
            <div className='Main'>
                <XoxItem item={this.state.item} swichName={this.swichName} />
                <p>Время игры {seconds}</p>

            </div>
        )
    };
}

export default XoX;