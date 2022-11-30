import React from 'react'

export const About = () => {
  return (
    <section id="about" className="s-about target-section">
  <div className="row">
    
    <div className="column large-9 tab-12 s-about__content">
      <h3>About Me</h3>
      <p>
        Saya Gloria Susanto biasa dipanggil Gloria saya berkuliah di Universitas Klabat mengambil Fakultas Ilmu Komputer jurusan Informatika. Sekarang saya 
        sudah semester 5. 
      </p>
      <li> <i classname="bi bi-chevron-right"></i>
        <strong>Birthday:</strong>
        <span> 15 August 2002</span>
      </li>
      <li> <i classname="bi bi-chevron-right"></i>
        <strong>Age:</strong>
        <span> 20</span>
      </li>
      <li> <i classname="bi bi-chevron-right"></i>
        <strong>City:</strong>
        <span> Manado</span>
      </li>
      <li> <i classname="bi bi-chevron-right"></i>
        <strong>Degree:</strong>
        <span> S.Kom</span>
      </li>

     
      <hr /> 
      <div className="row s-about__content-bottom">
        <div className="column w-1000-stack">
          <h3>Contact Details</h3>
          <p>
            Gloria Susanto <br />
            Jl. Kembang Lorong Cempaka No. 8 <br />
            <a href="tel:+628991699438">+628991699438</a> <br />
            <a href="mailto:#0">sugarcomb08@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}
