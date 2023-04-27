import React, { useState } from 'react';

const UserForm2 = () => {
  const [users, setUsers] = useState([]);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState({ id: null, name: '', email: '', photo: null });
  const [previewPhoto, setPreviewPhoto] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.target;
    setCurrentUser({ ...currentUser, [name]: value });
  };

  const handlePhotoChange = e => {
    const file = e.target.files[0];
    setCurrentUser({ ...currentUser, photo: file });
    setPreviewPhoto(URL.createObjectURL(file));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (editing) {
      // Editar usuário existente
      const updatedUsers = users.map(user => (user.id === currentUser.id ? currentUser : user));
      setUsers(updatedUsers);
      setEditing(false);
    } else {
      // Cadastrar novo usuário
      const newUser = { ...currentUser, id: Date.now() };
      setUsers([...users, newUser]);
    }
    setCurrentUser({ id: null, name: '', email: '', photo: null });
    setPreviewPhoto('');
  };

  const handleEdit = user => {
    setEditing(true);
    setCurrentUser(user);
    setPreviewPhoto(URL.createObjectURL(user.photo));
  };

  const handleDelete = id => {
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <div>
      <h1>Cadastro de Usuário</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={currentUser.name}
          onChange={handleInputChange}
        />
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={currentUser.email}
          onChange={handleInputChange}
        />
        <label htmlFor="photo">Foto:</label>
        <input
          type="file"
          id="photo"
          name="photo"
          accept="image/*"
          onChange={handlePhotoChange}
        />
        {previewPhoto && (
          <img src={previewPhoto} alt="Preview" style={{ maxWidth: '100px', maxHeight: '100px' }} />
        )}
        <button type="submit">{editing ? 'Editar' : 'Cadastrar'}</button>
      </form>
      <h2>Usuários Cadastrados</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} ({user.email})
            {user.photo && (
              <img src={URL.createObjectURL(user.photo)} alt={user.name} style={{ maxWidth: '100px', maxHeight: '100px' }} />
            )}
            <button onClick={() => handleEdit(user)}>Editar</button>
            <button onClick={() => handleDelete(user.id)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserForm2;

