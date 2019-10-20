import React, { Component } from 'react';
import axios from 'axios';
import {BASE_URL} from './utils.js';
import moment from 'moment';
class Home extends Component {
    componentWillMount() {
        console.log("")
        let url = this.props.location.search;
        url = url.substring(url.indexOf('=')+1);
        console.log(`${BASE_URL}/evento/${url}`);
        axios({
            url: `${BASE_URL}/evento/${url}`,
            method: 'get'
        }).then((res) => {
            console.log(res.data);
            this.setState({
                userName: res.data.usuario[0].nombre,
                audios: res.data.audios
            });
        }).catch((e) => {
            console.log("error aqui", e.code);
        })
    }
    render() {
        if(this.state){
            return (
                <div className="App">
                    <h1 className="Header">Alertas de {this.state.userName}</h1>
                    <div className="Audios" align="left">
                        {
                            this.state.audios.map((audio) => {
                                return (
                                    <div key={audio.liga} style={{ display: "block" }}>
                                        <audio className="Player" controls>
                                            <source
                                                src={`https://firebasestorage.googleapis.com/v0/b/integrador-seguridad.appspot.com/o/${audio.liga}?alt=media`}
                                                type="audio/wav"
                                            />
                                        </audio>
                                        <p>{moment(moment.utc(audio.fecha_hora_audio).toDate()).local().format('hh:mm:ss a')}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            );
        }
        return <div></div>
    }
}
export default Home;