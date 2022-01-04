import React, { useEffect, useState } from 'react';
import api from './services/api';

export default function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    //utilizando a importação da api
    api
      //utilizando um método chamado, passando endpoint (url). Ao final a requisição será enviada para esta url
      .get('/users/gustavoguanabara')
      // método utilizado pelo axios para esperar retorno da solicitação
      .then((response) => setUser(response.data))
      //  caso haja algum erro com a solicitação, o método catch()será responsável por tratar e exibir o erro
      .catch((err) => {
        console.error('Ops, ocorreu um erro: ' + err);
      });
  }, []);

  return (
    <div className="App">
      <p>Usuário: {user?.login}</p>
      <p>Biografia: {user?.bio}</p>
    </div>
  );
}
