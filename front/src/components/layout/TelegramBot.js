import React from "react";
import {API_URL} from '../../config';
import {Preloader} from '../Preloader';
import imgCup from '../img/back_cup.png';
import '../../css/telegram-mail.css';

export  default class TelegramBot extends React.Component {

    constructor(props) {
        super(props); //

        //
        this.state = {
            error: null, //
            isLoaded: true, //
            message: {
                body: "",
                name: "",
                tel: ""
            }

        }
    }

    onChange(el){
        //
        const message = this.state.message;
        message[el.target.name]= el.target.value;
        this.setState({message: message});
    }

    send(){
        this.setState({isLoaded: false});
        fetch(API_URL + "sendTelegram",
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(this.state.message)
            })
            .then(res=> {
                console.log("Result: ");
                console.log(res);
                return res.json();
            })
            .then(data =>{
                console.log(data);
                this.setState({isLoaded: true});
            })
            .catch(err=>{
                this.setState({error: err, isLoaded: true});
            });
        alert('Спасибо за сообщение!');
    }

    //
    render(){
        if(this.state.error) return this.renderError(); //   -
        if(!this.state.isLoaded) return this.renderLoading(); //
        return this.renderData();
    }

    //
    renderData(){
        return (
            <div className="telegramBlock">
                <div>
                    <img src={imgCup} className="telegramImg" alt='alt' />
                </div>
                <div className="telegramBody">
                    <form>
                        <h4>У вас возникли вопросы? <br /> Свяжитесь с нашим менеджером!</h4>
                        <div>                        
                            <input type="text" name="name" onChange={this.onChange.bind(this) } placeholder="Ваше имя" className="formTelegram" id="recipient-name" />
                        </div>
                        <div>                        
                            <input type="text" name="tel" onChange={this.onChange.bind(this) } placeholder="Ваш номер телефона" className="formTelegram" id="recipient-name" />
                        </div>
                        <div>                        
                            <textarea name="body" rows="8" cols="45" onChange={this.onChange.bind(this) } placeholder="Ваше сообщение" className="formTelegramText" id="message-text"></textarea>
                        </div>
                        <div>
                        <button type="button" onClick={this.send.bind(this) } className="btnMail">Отправить</button>
                        </div> 
                    </form>
                </div>
                
            </div>
        );
    }

    //
    renderLoading(){
        return (
            <Preloader />
        )
    }

    //
    renderError(){
        return (
            <div className="alert alert-danger" role="alert">
                Error: {this.state.error.message}
            </div>
        );
    }





}