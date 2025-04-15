import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Registro: React.FC = () => {
  const [sexo, setSexo] = useState<string | null>(null);
  const [interesesMascota, setInteresesMascota] = useState<string[]>([]);
  const [form, setForm] = useState({
    nombre: '',
    usuario: '',
    email: '',
    password: '',
    confirmarPassword: ''
  });
  const [errors, setErrors] = useState<string[]>([]);
  const [fotosSubidas, setFotosSubidas] = useState<number>(0);

  const router = useRouter();

  const toggleInteresMascota = (tipo: string) => {
    setInteresesMascota((prev) =>
      prev.includes(tipo) ? prev.filter((i) => i !== tipo) : [...prev, tipo]
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: string[] = [];

    if (!form.nombre) newErrors.push('Nombre completo requerido.');
    if (!form.usuario) newErrors.push('Usuario requerido.');
    if (!validateEmail(form.email)) newErrors.push('Correo inválido.');
    if (form.password.length < 6) newErrors.push('La contraseña debe tener al menos 6 caracteres.');
    if (form.password !== form.confirmarPassword) newErrors.push('Las contraseñas no coinciden.');
    if (!sexo) newErrors.push('Debe seleccionar un sexo.');
    if (interesesMascota.length === 0) newErrors.push('Seleccione al menos un interés de mascota.');
    if (fotosSubidas < 2) newErrors.push('Debe subir al menos 2 fotos.');

    if (newErrors.length > 0) {
      setErrors(newErrors);
    } else {
      router.push('/Perfil');
    }
  };

  const handleIniciarSesion = () => {
    router.push('/Perfil');
  };

  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      minHeight: '100vh', backgroundColor: '#F9F2F5', fontFamily: 'DM Sans'
    }}>
      <div style={{
        backgroundColor: '#fff', borderRadius: '15px', padding: '40px',
        display: 'flex', gap: '30px', width: '90%', maxWidth: '1100px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)'
      }}>

        {/* Columna izquierda */}
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: '1rem', margin: 0, color: '#000' }}>Bienvenido/a</h1>
          <h2 style={{ fontSize: '1.8rem', margin: '5px 0', color: '#000' }}>Iniciar Registro</h2>
          <p style={{ color: '#555', marginBottom: '25px' }}>MatchPet te espera!</p>

          {errors.length > 0 && (
            <ul style={{ color: 'red', marginBottom: '15px' }}>
              {errors.map((err, idx) => <li key={idx}>{err}</li>)}
            </ul>
          )}

          <form onSubmit={handleSubmit}>
            {['Nombre Completo', 'Usuario', 'Email', 'Contraseña', 'Confirmar Contraseña'].map((label, idx) => {
              const name = label.toLowerCase().replace(/ /g, '');
              return (
                <div key={idx} style={{ marginBottom: '15px' }}>
                  <label style={{ color: '#C33764', display: 'block', marginBottom: '5px' }}>{label}</label>
                  <input
                    type={label.includes('Contraseña') ? 'password' : 'text'}
                    placeholder={`Ingrese ${label.toLowerCase()}`}
                    name={name}
                    value={(form as any)[name] || ''}
                    onChange={handleChange}
                    style={{
                      width: '100%', padding: '10px', border: '1px solid #D9D9D9',
                      borderRadius: '6px', color: '#999'
                    }}
                  />
                </div>
              );
            })}

            <button type="submit" style={{
              width: '100%', padding: '12px 0', marginTop: '10px',
              background: 'linear-gradient(to right, #C33764, #1D2671)',
              border: 'none', borderRadius: '25px', color: 'white', fontSize: '1rem', cursor: 'pointer'
            }}>
              Registrarme
            </button>
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
              <p style={{ fontSize: '0.9rem', marginBottom: '8px' }}>¿Ya tienes una cuenta?</p>
              <button
                type="button"
                onClick={handleIniciarSesion}
                style={{
                  padding: '10px 20px',
                  borderRadius: '25px',
                  background: 'linear-gradient(to right, #C33764, #1D2671)',
                  color: '#fff',
                  border: 'none',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >Iniciar Sesión</button>
            </div>
          </form>
        </div>

        {/* Columna derecha */}
        <div style={{ width: '350px' }}>
          <label style={{ color: '#C33764', fontWeight: '500' }}>Fecha de cumpleaños</label>
          <div style={{ display: 'flex', gap: '10px', margin: '10px 0 20px' }}>
            <input type="text" placeholder="XX" style={inputFechaStyle} />
            <input type="text" placeholder="XX" style={inputFechaStyle} />
            <input type="text" placeholder="XXXX" style={{ ...inputFechaStyle, width: '70px' }} />
          </div>

          <label style={labelStyle}>Sexo:</label>
          <div style={grupoBtnStyle}>
            {['Femenino', 'Masculino'].map((s) => (
              <button
                type="button"
                key={s}
                onClick={() => setSexo(s)}
                style={sexo === s ? activeBtnStyle : inactiveBtnStyle}
              >{s}</button>
            ))}
          </div>

          <label style={labelStyle}>Me interesan:</label>
          <div style={grupoBtnStyle}>
            {['Perros', 'Gatos'].map((tipo) => (
              <button
                type="button"
                key={tipo}
                onClick={() => toggleInteresMascota(tipo)}
                style={interesesMascota.includes(tipo) ? activeBtnStyle : inactiveBtnStyle}
              >{tipo}</button>
            ))}
          </div>

          <label style={labelStyle}>Intereses :</label>
          <button style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            border: '1px solid #D9D9D9', borderRadius: '999px', background: '#fff',
            padding: '10px 20px', marginBottom: '25px', cursor: 'pointer'
          }}>
            <span style={{ fontSize: '1.2rem' }}>➕</span> Añadir intereses
          </button>

          <label style={labelStyle}>Añade tus fotos de Perfil</label>
          <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
            {[1, 2].map((i) => (
              <div key={i} onClick={() => setFotosSubidas((prev) => prev + 1)} style={{
                backgroundColor: '#F0F0F0', borderRadius: '10px', padding: '20px',
                border: '2px dashed #D9D9D9', width: '70px', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'
              }}>
                📸
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8rem', color: '#777' }}>Debes subir al menos 2 fotos para empezar</p>
        </div>
      </div>
    </div>
  );
};

const inputFechaStyle: React.CSSProperties = {
  padding: '10px',
  width: '50px',
  border: '1px solid #D9D9D9',
  borderRadius: '6px',
  textAlign: 'center'
};

const labelStyle = {
  fontWeight: 500,
  color: '#C33764',
  marginBottom: '5px',
  display: 'block'
};

const grupoBtnStyle = {
  display: 'flex',
  gap: '10px',
  marginBottom: '20px'
};

const inactiveBtnStyle = {
  padding: '10px 20px',
  border: '1px solid #999',
  backgroundColor: '#fff',
  color: '#555',
  borderRadius: '10px',
  cursor: 'pointer'
};

const activeBtnStyle = {
  ...inactiveBtnStyle,
  backgroundColor: '#C33764',
  color: '#fff',
  borderColor: '#C33764'
};

export default Registro;
