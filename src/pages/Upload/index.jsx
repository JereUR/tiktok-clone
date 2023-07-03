import { useDropzone } from 'react-dropzone'
import styles from './styles.module.css'
import { useEffect } from 'react'
import clsx from 'clsx'

export default function Upload() {
  const onDrop = (e) => {
    console.log('Drop', e)
  }

  const { isDragAccept, isDragReject, getRootProps, getInputProps } =
    useDropzone({
      maxFiles: 1,
      accept: { 'video/mp4,video/x-m4v,video/*': [] },
      onDrop
    })

  useEffect(() => {
    if (isDragReject) navigator.vibrate(100)
  }, [isDragReject])

  const dndClassNames = clsx(styles.dnd, {
    [styles.dndReject]: isDragReject,
    [styles.dndAccept]: isDragAccept
  })

  const renderDndContent = () => {
    if (isDragReject) return <h4>Archivo no soportado</h4>
    if (isDragAccept) return <h4>¡Suelta el archivo para subirlo!</h4>

    return (
      <>
        <h4>Selecciona el video para cargar</h4>
        <h5>O arrastra y suelta un archivo</h5>
        <ul>
          <li>MP4 o WebM</li>
          <li>Resolución de al menos 720x1280</li>
          <li>Hasta 180 segundos</li>
        </ul>
      </>
    )
  }

  return (
    <div className={styles.upload}>
      <h1>Cargar video</h1>
      <p>Este video se publicará en el perfil de JereIDC</p>

      <form className={styles.form}>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <div className={dndClassNames}>
            <img
              src="https://sf16-scmcdn-va.ibytedtos.com/goofy/tiktok/web/node/_next/static/images/cloud_icon-6e07be44878e69ee3f7bff3b78405b76.svg"
              width="49"
            />
            {renderDndContent()}
          </div>
        </div>
        <label>
          leyenda
          <input type="text" placeholder="" />
        </label>
        <button> Publicar</button>
      </form>
    </div>
  )
}
