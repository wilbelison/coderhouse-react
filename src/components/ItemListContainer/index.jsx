import iconTrash from "../../assets/images/icon-trash.svg";

function ItemListContainer({ greeting }) {
  return (
    <div className="ItemListContainer">
      {greeting}
      <table>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Valor</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Super Mario World</td>
            <td>1</td>
            <td>R$ 99,99</td>
            <td>
              <button className="itemRemove">
                <img src={iconTrash} alt="Remover" />
              </button>
            </td>
          </tr>
          <tr>
            <td>The Legend of Zelda: A Link to the Past</td>
            <td>1</td>
            <td>R$ 99,99</td>
            <td>
              <button className="itemRemove">
                <img src={iconTrash} alt="Remover" />
              </button>
            </td>
          </tr>
          <tr>
            <td>Super Mario Kart</td>
            <td>1</td>
            <td>R$ 99,99</td>
            <td>
              <button className="itemRemove">
                <img src={iconTrash} alt="Remover" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ItemListContainer;
