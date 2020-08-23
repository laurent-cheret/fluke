import React, { Component } from "react";
import app from "./base.js";
import axios from "axios";



class Home extends Component {
    constructor(props) {
        super(props)


        this.state = {
            cryptos: [],
            query: "",
            people: [],
            crypto: []
        }
    }



    onChange = (e) => {
        e.preventDefault();
        const { value } = e.target;
        this.setState({
            query: value
        });

        this.search(value);
    };


    search = query => {
        let found = this.state.cryptos.find(element => element.CoinInfo.Name == this.state.query || element.CoinInfo.FullName == this.state.query)
        if (found) {
            this.setState({ people: found })
        }

    };


    componentDidMount() {
        //https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=BRL&api_key=1b77159fd738954a7062f9ac985943cc43c326c63b70cec8613ebb96d36b3468
        axios.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=100&tsym=BRL&api_key=1b77159fd738954a7062f9ac985943cc43c326c63b70cec8613ebb96d36b3468')
            .then(res => {
                const cryptos = res.data.Data
                console.log(cryptos);
                this.setState({ cryptos: cryptos })

            })


    }

    render() {
        return (
            < div className="home" >
                <header>
                    <h1>CRIPKE</h1>
                    <button onClick={() => app.auth().signOut()}>Sign out</button>
                </header>
                <form>
                    <div className="search"><input
                        type="text"
                        className="search-box"
                        placeholder=" Ex: ETH; BTC; Bitcoin; Litecoin..."
                        onChange={this.onChange}
                    //onKeyDown={}
                    />
                        <button onClick={e => this.onChange(e)}>Search</button></div>
                    <div className="search-card">{Object.keys(this.state.people).map((key) => {
                        if (key == "CoinInfo") {
                            return (<div className="coinInfo"><span className="name">{this.state.people[key].Name}</span>
                                <span className="valueChange">Últimas 24h: {this.state.people.DISPLAY.BRL.CHANGE24HOUR}</span>
                                <span className="valueChange">Último dia: {this.state.people.DISPLAY.BRL.CHANGEDAY}</span>
                                <span className="valueChange">Última hora: {this.state.people.DISPLAY.BRL.CHANGEHOUR}</span></div>)
                        }
                    })}</div>
                </form>

                <h2>Top List</h2>

                <div className="coins">
                    {Object.keys(this.state.cryptos).map((key) => {
                        while (key <= 9) {
                            return (
                                <div className="coin">
                                    <span className="index">{[+key + 1]}</span>
                                    <span className="name">{this.state.cryptos[key].CoinInfo.Name}</span>
                                    <span className="name">{this.state.cryptos[key].CoinInfo.FullName}</span>
                                    <span className="value">Preço: {this.state.cryptos[key].DISPLAY.BRL.PRICE}</span>
                                    <span></span>
                                    <span className="valueChange">Últimas 24h: {this.state.cryptos[key].DISPLAY.BRL.CHANGE24HOUR}</span>
                                    <span className="valueChange">Último dia: {this.state.cryptos[key].DISPLAY.BRL.CHANGEDAY}</span>
                                    <span className="valueChange">Última 1h: {this.state.cryptos[key].DISPLAY.BRL.CHANGEHOUR}</span>
                                </div>

                            )
                        }
                    })}
                </div>
                <div className="otherCoins">
                    {Object.keys(this.state.cryptos).map((key) => (
                        <div className="otherCoin">

                        </div>
                    ))}
                </div>
            </div >

        )
    }
}

export default Home;