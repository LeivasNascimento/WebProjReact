import React, { Component } from "react"
import { Link } from 'react-router-dom'

export class FetchProduto extends Component {
    static displayName = "Produtos";

    constructor() {
        super();
        this.state = { produtos: [], loading: true }
    }

    componentDidMount() {
        this.populaProdutoData();
    }

    async populaProdutoData() {
        const response = await fetch('api/Produto');
        const data = await response.json();
        this.setState({ produtos: data, loading: false });
    }

    static handleEdit(id) {
        window.location.href = "/produto/edit/" + id;
    }

    handleNew() {
        window.location.href = "/add-produto";
    }

    static handleDelete(id) {
        if (!window.confirm("você deseja deletar o produto : " + id + " ?")) {
            return;
        } else {
            fetch('api/produto/' + id, { method: 'delete' })
                .then(json => {
                    window.location.href = "fetch-produto";
                    alert('item excluído com sucesso!');
                })
        }
    }

    static renderProdutosTabela(produtos) {
        return (
            <table className='table table-striped' aria-labelledby="tableLabel">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Descrição</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        produtos.map(prod =>
                            <tr key={prod.id}>
                                <td>
                                    {prod.id}
                                </td>
                                <td>
                                    {prod.descricao}
                                </td>
                                <td>
                                    <button className="btn btn-sucess" onClick={(id) => this.handleEdit(prod.id)}>
                                        Editar </button> &nbsp;
                                        <button className="btn btn-danger" onClick={(id) => this.handleDelete(prod.id)}>
                                        Deletar </button>
                                </td>
                            </tr>
                        )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading ?
            <p><em> Carregando ... </em> </p>
            : FetchProduto.renderProdutosTabela(this.state.produtos);

        return (

            <div>
                <div>
                    <h1 id="tableLabel"> Produtos </h1>
                    <p>Tela de Listagem de Produtos</p>
                    <p>
                        <Link onClick={this.handleNew}>
                            Cadastrar Produto
                        </Link>
                    </p>

                </div>
                {contents}
            </div>
        )
    }
}