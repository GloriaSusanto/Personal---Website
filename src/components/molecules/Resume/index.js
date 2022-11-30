import React from 'react'

export const Resume = () => {
  return (
   <section id="resume" className="s-resume target-section">
  <div className="row s-resume__section">
    <div className="column large-3 tab-12">
      <h3 className="section-header-allcaps">Education</h3>
    </div>
    <div className="column large-9 tab-12">
      <div className="resume-block">
        <div className="resume-block__header">
          <h4 className="h3">SMP Kristen Eben Haezar 2</h4>
          <p className="resume-block__header-meta">
            <span className="resume-block__header-date">
              2014 - 2017
            </span>
          </p>
        </div>
      </div>
      <div className="resume-block">
        <div className="resume-block__header">
          <h4 className="h3">SMA NEGERI 1 MANADO</h4>
          <p className="resume-block__header-meta">
            <span className="resume-block__header-date">
              2017 - 2020
            </span>
          </p>
        </div>
      </div>
      <div className="resume-block">
        <div className="resume-block__header">
          <h4 className="h3">Universitas Klabat</h4>
          <p className="resume-block__header-meta">
            <span>Faculty of Computer Science majoring in Informatics</span> 
            <span className="resume-block__header-date">
              2020 - 2024
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="row s-resume__section">
    <div className="column large-3 tab-12">
      <h3 className="section-header-allcaps">Skills</h3>
    </div>
    <div className="column large-9 tab-12">
      <div className="resume-block">
        <ul className="skill-bars-fat">
          <li>
            <div className="progress percent85" />
            <strong>HTML</strong>
          </li>
          <li>
            <div className="progress percent85" />
            <strong>CSS</strong>
          </li>
          <li>
            <div className="progress percent65" />
            <strong>Javascript</strong>
          </li>
          <li>
            <div className="progress percent90" />
            <strong>Figma</strong>
          </li>
          <li>
            <div className="progress percent75" />
            <strong>Illustrator</strong>
          </li>
          <li>
            <div className="progress percent60" />
            <strong>Photoshop</strong>
          </li>
        </ul>
      </div>
    </div>
  </div> 
</section>

  )
}
