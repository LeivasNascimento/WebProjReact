
import React, { Component } from "react"
import { Link } from 'react-router-dom'

export class AddProduto extends Component {

    constructor(props) {
        super(props);
        //this.state({ produtos : [], loading : true })
        this.state({ title: "", produto: new Produto(), loading: true });
        this.inicialize();
    }

    async inicialize() {
        var id = this.props.match.params["id"];
        if (id > 0) {
            const response = await fetch('api/Produto/' + id);
            const data = await response.json();
            this.setState({ title: "Edit", produto: data, loading: false });
        } else {
            this.state({ title: "Create", produto: new Produto(), loading: false });
        }
    }

    static renderCreateForm() {
        return
        (
            <form onSubmit={this.handleSalvar}>
                <div className="form-group row">
                    <input type="hidden" name="id" value={this.state.produto.id} />
                </div>
                <div className="form-group row">
                    <div className="col-md-6">
                        <input className="form-control" type="text" name="descricao" defaultValue={this.state.produto.descricao} required />
                    </div>
                </div>

                <div className="form-group">
                    <button type="submit" className="btn btn-success" value={this.state.produto.id}>Salvar</button>
                    <button className="btn btn-danger" onClick={this.handleCancel}>Cencelar</button>
                </div>
            </form> 
        );
    }

    static handleCancel(event) {
        event.preventDefault();
        this.props.history.push("fetch-produto");
    }

    static handleSalvar(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        if (this.state.produto.id) {
            const response1 = fetch('api/Produto/' + this.state.produto.id, { method: "PUT", body: data });
            this.props.history.push("fetch-produto");
        } else {
            const response2 = fetch('api/Produto/', { method: "POST", body: data });
            this.props.history.push("fetch-produto");
        }
    }

    render() {
        let contents = this.state.loading ?
            <p><em> Carregando ... </em> </p>
            : AddProduto.renderCreateForm();

        return (
                <div>
                    <h1> {this.state.title} </h1>
                    <p>
                        {title == "Edit" ?
                            Cadastrar : Editar}
                            Produto
                    </p>
                    {contents}
                </div>
            )
    }
}