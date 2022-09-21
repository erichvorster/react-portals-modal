import React, { useState } from "react";
import Modal from "./Modal";
import "./index.css";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModel = function () {
    setIsOpen(true);
  };

  return (
    <div className="app">
      <h2 className="header">Modal</h2>

      {isOpen && (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          aperiam ducimus mollitia adipisci reprehenderit quis dicta. Iure
          eligendi autem voluptates incidunt quia. Consectetur dolorum tempora
          quis corrupti, delectus et? Odit itaque velit numquam ex quisquam vero
          inventore sed, ea molestias.
        </Modal>
      )}

      <div className="other-content">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem illo
        maxime tempore corporis voluptatum! Quam repellat perspiciatis ratione.
        Animi pariatur ducimus illo culpa cumque aliquid magni quae, iste modi
        placeat. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
        quos ex suscipit aperiam quod sint sapiente consequuntur asperiores
        facilis omnis? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Perspiciatis libero omnis maiores exercitationem hic saepe quas
        repellendus blanditiis distinctio debitis laudantium architecto, totam
        accusamus dolore perferendis repellat dolores quis optio ad? Dolorum
        consequatur quisquam, modi officiis sapiente totam neque quas nihil
        blanditiis porro soluta consequuntur nemo accusamus quae voluptates
        iusto eveniet laborum exercitationem alias numquam dignissimos nisi et.
      </div>
      <div className="button-wrapper" onClose={() => setIsOpen(false)}>
        <button className="open-button" onClick={() => openModel()}>
          Open Modal
        </button>
      </div>
    </div>
  );
};

export default App;
