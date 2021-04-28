import React, { Component } from 'react'
import QRScanner from 'react-qr-reader'


export class Scanner extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: "no data"
        }
        this.onScan = this.onScan.bind(this);
    }
    onScan(data) {
        this.setState({ data: data });
    }
    onError(err) {
        console.error(err);
    }

    render() {
        return (
            <div style={{width:"100%",height:"40vh"}}>
                <QRScanner delay={300} onScan={this.onScan} onError={this.onError} style={{width:"300px",height:"300px",margin:"20px auto"}}/>
                <div style={{marginTop:"100px"}}>
                    {this.state.data}
                </div>
            </div>
        )
    }
}

export default Scanner
