//models/produto.js
module.exports = (sequelize, DataTypes) => {
  const Produto = sequelize.define('Produtos',{
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    preco: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  })

  return Produto

}