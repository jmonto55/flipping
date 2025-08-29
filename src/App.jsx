import './App.css'
import scrapeVideo from './assets/scrape.mp4'
import processVideo from './assets/filters.mp4'
import scriptsImage from './assets/scripts.png'

function App() {
  return (
    <div className="container">
      <div className="header">
        <h1 className="title">Creación Base de Datos de Propiedades</h1>
        <br />
        <p className="subtitle">Flujo de trabajo para extracción, procesamiento y análisis de datos de propiedades</p>
      </div>

      <div className="process-flow">
        <div className="step">
          <div className="step-number">1</div>
          <h3 className="step-title">
            <span className="icon">🌐</span>
            Extracción de Datos de Portales Digitales
          </h3>
          <p className="step-description">
            Recopilación automatizada de información de propiedades desde múltiples portales inmobiliarios digitales.
          </p>
          <div className="data-sources">
            <div className="data-source">Metrocuadrado</div>
            <div className="data-source">Fincaraiz</div>
            <div className="data-source">Ciencuadras</div>
          </div>
          <div>
          </div>
          <h3 className="step-title">
            <span className="icon">🔧</span>
            Herramientas
          </h3>
          <div className="step-details">
            <span className="tag">APIs de portales</span>
            <span className="tag">Web Scraping</span>
            <span className="tag">Postman</span>
          </div>
        </div>

        <div className="arrow"></div>

        <div className="video-container">
          <video 
            className="process-video"
            controls
            muted
            loop
          >
            <source src={scrapeVideo} type="video/mp4" />
            Tu navegador no soporta la reproducción de video.
          </video>
        </div>

        <div className="arrow"></div>

        <div className="step">
          <div className="step-number">2</div>
          <h3 className="step-title">
            <span className="icon">🔄</span>
            Procesamiento y Unificación de Datos
          </h3>
          <p className="step-description">
            Transformación y normalización de los datos extraídos para crear una tabla unificada con los campos deseados.
          </p>
          <div className="data-sources-tools">
            <div className="data-source-tool">Python</div>
            <div className="data-source-tool">Scripts</div>
            <div className="data-source-tool">Excel</div>
          </div>
          <h3 className="step-title">
            <span className="icon">⚙️</span>
            Estrategias
          </h3>
          <div className="step-details">
            <span className="tag">Limpieza de datos</span>
            <span className="tag">Unificación</span>
            <span className="tag">Validación</span>
            <span className="tag">Creación de tablas</span>
          </div>
        </div>

        <div className="arrow"></div>

        <div className="image-container">
          <img 
            className="process-image"
            src={scriptsImage} 
            alt="Scripts de procesamiento de datos"
          />
        </div>

        <div className="arrow"></div>

        <div className="step">
          <div className="step-number">3</div>
          <h3 className="step-title">
            <span className="icon">📊</span>
            Análisis y Filtrado en Excel
          </h3>
          <p className="step-description">
            Implementación de filtros avanzados y clasificación de propiedades según criterios específicos para análisis detallado.
          </p>
          <div className="data-sources-excel">
            <div className="data-source-excel">Filtros Avanzados</div>
            <div className="data-source-excel">Clasificación</div>
            <div className="data-source-excel">Análisis Estadístico</div>
          </div>
          <h3 className="step-title">
            <span className="icon">🎯</span>
            Funcionalidades Clave
          </h3>
          <div className="step-details">
            <span className="tag">Métricas y precios promedio</span>
            <span className="tag">Segmentación por tamaño en m²</span>
            <span className="tag">Exclusión de propiedades {">"} 3.5M m²</span>
          </div>
        </div>

        <div className="arrow"></div>

        <div className="video-container">
          <video 
            className="process-video"
            controls
            muted
            loop
          >
            <source src={processVideo} type="video/mp4" />
            Tu navegador no soporta la reproducción de video.
          </video>
        </div>

        <div className="arrow"></div>

        <div className="step">
          <div className="step-number">4</div>
          <h3 className="step-title">
            <span className="icon">📋</span>
            Lista Curada de Propiedades
          </h3>
          <p className="step-description">
            Llamada telefónica para verificar datos y aplicar checklist de valoración previa a la visita.
          </p>
          <div className="checklist">
            <div className="checklist-item">
              <span className="checklist-question">¿Tiene escritura pública?</span>
              <span className="checklist-status ok">OK</span>
            </div>
            <div className="checklist-item">
              <span className="checklist-question">¿El valor del metro cuadrado te deja margen?</span>
              <span className="checklist-status alert">ALERTA</span>
            </div>
            <div className="checklist-item">
              <span className="checklist-question">¿Es un piso 4 o 5 sin ascensor?</span>
              <span className="checklist-status alert">ALERTA</span>
            </div>
            <div className="checklist-item">
              <span className="checklist-question">¿Está ubicado en un callejón?</span>
              <span className="checklist-status ok">OK</span>
            </div>
            <div className="checklist-item">
              <span className="checklist-question">¿Es sótano, semisótano o subnivel?</span>
              <span className="checklist-status ok">OK</span>
            </div>
            <div className="checklist-item">
              <span className="checklist-question">¿Tiene vista al exterior?</span>
              <span className="checklist-status ok">OK</span>
            </div>
            <div className="checklist-item">
              <span className="checklist-question">¿Está cerca de algún establecimiento que pueda afectar la venta?</span>
              <span className="checklist-status ok">OK</span>
            </div>
          </div>
          <h3 className="step-title">
            <span className="icon">🏠</span>
            Propiedades Óptimas Programadas
          </h3>
          <p className="step-description">
            De las <b>6</b> propiedades programadas, visitamos todas menos <b>1</b> debido a que ya había sido vendida.
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
