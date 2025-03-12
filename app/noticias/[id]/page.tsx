import { notFound } from "next/navigation"

const noticias = [
    {
        id: 1,
        titulo: "Lista, consulta del Convenio de Revisión integral 2024",
        contenido: (
          <>
            El próximo 13 de febrero será sometido a consulta el Convenio de Revisión Integral 2024. 
            Esperamos contar con tu participación activa en este ejercicio democrático del SPAUJED. 
            Te compartimos el enlace para revisar el documento. <br />
            <a
              href="/documentos#5"
              className="text-blue-600 hover:text-blue-800"
            >
              Accede a los Convenios de Revisión
            </a>
          </>
        ),
        imagen: "/CONVOCATORIA-Consulta-contenido-de-convenio.png",
        fecha: "21 de enero de 2024",
        categoria: "Convenios y Contratos",
    },      
  {
    id: 2,
    titulo: "Beca «Lic. Hector Garcia Calderon>>",
    contenido: (
      <>
        Proceso vigente... <br />
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeKYHCoUS7ovUQnRwM3HDhMqyRiJcjLCJkAzUoB7vxs3wbMPw/closedform"
          target="_blank"
          className="text-blue-600 hover:text-blue-800"
        >
          Accede al formulario de beca
        </a>
      </>
    ),
    imagen: "/beca.png",
    fecha: "21 de enero de 2024",
    categoria: "Noticias y Eventos",
  },
  {
    id: 3,
    titulo: "Crédito hipotecario.",
    contenido: "",
    imagen: "/credito-hipotecario.png",
    fecha: "21 de enero de 2024",
    categoria: "Créditos y Beneficios",
  },
  {
    id: 4,
    titulo: "Préstamos De Caja De Ahorro",
    descripcion: "De diciembre de 2023 a febrero de 2024 están abiertas solicitudes de préstamo ...",
    contenido: (
      <>
        <p>
          De diciembre de 2023 a febrero de 2024 están abiertas solicitudes de préstamo con montos máximos de <strong>$100,000</strong> a través de la Caja de Ahorro, con interés del <strong>3%</strong> para ahorradores y <strong>4%</strong> para no ahorradores.
        </p>
        <p className="mt-4 font-bold">Los requisitos son los siguientes:</p>
        <ul className="list-disc pl-5">
          <li>Aval</li>
          <li>Llenado y firma de pagaré</li>
          <li>Último talón de cheque</li>
          <li>Capacidad de pago</li>
          <li>Identificación oficial</li>
        </ul>
      </>
    ),
    imagen: "/cajadeahorro.png",
    fecha: "21 de Enero de 2024",
    categoria: "Créditos y Beneficios",
  },
  {
    id: 5,
    titulo: "Crédito Vehicular",
    contenido: (
        <>
        <p>A partir del pasado 1 de agosto de 2023, los préstamos de automóvil tienen un monto máximo de 650 mil pesos, gracias a las gestiones del Comité Ejecutivo.</p>

        <p className="mt-4"> Seguimos trabajando en acciones que beneficien a todos los integrantes del SPAUJED, dando respuesta a sus peticiones y favoreciendo su patrimonio de la mejor manera. </p>
        </>
    ),
      
    imagen: "/creditovehicular.png",
    fecha: "21 de Enero de 2024",
    categoria: "Créditos y Beneficios",
  },
  {
    id: 6,
    titulo: "Excentos de pago",
    descripcion: "El equipo de nuestra ciudad ha logrado una gran victoria...",
    imagen: "/excentosdepago.png",
    fecha: "21 de Enero de 2024",
    categoria: "Créditos y Beneficios",
  },
  {
    id: 7,
    titulo: "Medidas compensatorias",
    contenido: (
      <>
        <p>Consulta el documento con información sobre las medidas compensatorias.</p>
      </>
    ),
    fecha: "21 de Enero de 2024",
    categoria: "Convenios y Contratos",
  },
  {
    id: 8,
    titulo: "Informes de Actividades",
    contenido: (
        <>
          <p>Cuadernillos de informes SPAUJED.</p>
        </>
      ),
    imagen: "/informesactividades.png",
    fecha: "21 de Enero de 2024",
    categoria: "Noticias y Eventos",
  },
  {
    id: 9,
    titulo: "Emplazamientos a Huelga",
    contenido: "Emplazamiento a huelga promovido por el sindicato de personal académico de la universidad Juárez del estado de Durango...",
    imagen: "/emplazamientohuelga.jpeg",
    fecha: "21 de Enero de 2024",
    categoria: "Noticias y Eventos",
  },
  {
    id: 10,
    titulo: "Convenios de Revisión",
    contenido: "Convenio que celebran por una parte el Sindicato de Personal Académico de la UJED representadoen este acto por su Secretario General el C. DR. ERIK IVAN HERNANDEZ COSAIN.",
    imagen: "/conveniosderevision.jpeg",
    fecha: "21 de Enero de 2024",
    categoria: "Convenios y Contratos",
  },
  {
    id: 11,
    titulo: "Estatutos SPAUJED",
    contenido: (
        <>
          <p>El SPAUJED, es una organización sindical para defensa de los intereses 
            sociales, económicos y académicos de los afiliados, constituida desde sus 
            orígenes por Personal Académico de la Universidad Juárez del Estado de Durango.
            </p>
        </>
      ),
    fecha: "21 de Enero de 2024",
    categoria: "Convenios y Contratos",
  },
  {
    id: 12,
    titulo: "Contrato Colectivo de Trabajo",
    contenido: (
        <>
          <p>La Universidad Juárez del Estado de Durango y el Sindicato de Personal 
            Académico de la UJED, reafirmando su respeto a los principios de autono- 
            mía universitaria y sindical.</p>
        </>
      ),
    imagen: "/contratocolectivo.png",
    fecha: "21 de Enero de 2024",
    categoria: "Convenios y Contratos",
  },
  {
    id: 13,
    titulo: "Inicia SPAUJED acopio de prendas invernales",
    contenido: (
        <>
          <p>Este lunes 8 de enero, el SPAUJED inició el acopio de prendas invernales para entregar a personas de escasos recursos.</p>
          <p className="mt-4"> La campana concluye el proximo 16 de enero y las prendas se recibirán en la Casa del Jubilado. </p>
        </>
      ),
    imagen: "/prendasinvernales.jpeg",
    fecha: "9 de Enero de 2024",
    categoria: "Noticias y Eventos",
  },
]

export default function NoticiaPage({ params }: { params: { id: string } }) {
    const noticia = noticias.find((n) => n.id === Number(params.id));

    if (!noticia) return notFound();

    return (
        <main className="container mx-auto px-4 py-8 pt-20">
            <h1 className="text-3xl font-bold">{noticia.titulo}</h1>
            <p className="text-gray-600 text-sm mb-4">
                {noticia.fecha} - <span className="font-bold">{noticia.categoria}</span>
            </p>

            {/* Verificar si la noticia es la de id 7 o id 11 para mostrar previsualización de documento */}
            {noticia.id === 7 ? (
                <div className="mb-6">
                    {/* Previsualización del documento de Google Drive para id=7 */}
                    <iframe
                        src="https://drive.google.com/file/d/10z9-FTnzdOB0VihFb5qv57RzfCKQtGto/preview"
                        width="100%"
                        height="500px"
                        allow="autoplay"
                    ></iframe>
                </div>
            ) : noticia.id === 11 ? (
                <div className="mb-6">
                    {/* Previsualización del documento de Google Drive para id=11 */}
                    <iframe
                        src="https://drive.google.com/file/d/1kVF78q1ZRfA-u2TF55l3CE6kCmgUSiE7/view"
                        width="100%"
                        height="500px"
                        allow="autoplay"
                    ></iframe>
                </div>
            ) : (
                // Para todas las demás noticias, se muestra la imagen
                <img
                    src={noticia.imagen}
                    alt={noticia.titulo}
                    className="w-full h-screen object-contain"
                />
            )}

            {/* Contenido de la noticia */}
            <p className="mt-6 text-lg">{noticia.contenido}</p>

            {/* Enlaces para la noticia con id=8 (Informes de Actividades) */}
            {noticia.id === 8 && (
                <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-4">Accede a los informes:</h3>
                    <div className="flex space-x-4">
                        <a
                            href="https://drive.google.com/file/d/1XJOsJEVihCVnyGNwsGu0SRre4qHboREh/view"
                            target="_blank"
                            className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-400"
                        >
                            Informe 2023 - 2024
                        </a>
                        <a
                            href="https://drive.google.com/file/d/1Lx0Z-eROtFxuSE9lCfGANMtG89GD8cuj/view"
                            target="_blank"
                            className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-400"
                        >
                            Informe 2022 - 2023
                        </a>
                        <a
                            href="https://drive.google.com/file/d/1K9TN0aImA9ZHEz1M67pOGwVD2p6yesE1/view"
                            target="_blank"
                            className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-400"
                        >
                            Informe 2021 - 2022
                        </a>
                    </div>
                </div>
            )}

            {/* Enlace para la noticia con id=9 (Emplazamientos a Huelga) */}
            {noticia.id === 9 && (
                <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-4">Accede al emplazamiento:</h3>
                    <a
                        href="https://drive.google.com/file/d/13pMpBOaRCRFYp_GhXG-XZXWiDGi7GysC/view"
                        target="_blank"
                        className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-400"
                    >
                        Emplazamiento 2023 - 2024
                    </a>
                </div>
            )}

            {/* Enlaces para la noticia con id=10 (Convenios de Revisión) */}
            {noticia.id === 10 && (
                <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-4">Accede a los convenios:</h3>
                    <div className="flex space-x-4">
                        <a
                            href="https://drive.google.com/file/d/1SFCA4kI4QHkTjeTcX0bcRykBbeL8xjqJ/view"
                            target="_blank"
                            className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-400"
                        >
                            Convenio 2024 - 2025
                        </a>
                        <a
                            href="https://drive.google.com/file/d/138BTTVPdEpejFcAmUewI1gZuEmtp7lSK/view"
                            target="_blank"
                            className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-400"
                        >
                            Convenio 2023 - 2024
                        </a>
                        <a
                            href="https://drive.google.com/file/d/14GFTUC9M_HTdXeybr1iQbhXDdmW9sArp/view"
                            target="_blank"
                            className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-400"
                        >
                            Convenio 2022 - 2023
                        </a>
                    </div>
                </div>
            )}

            {/* Enlaces para la noticia con id=12 (Contrato colectivo) */}
            {noticia.id === 12 && (
                <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-4">Accede a los contratos:</h3>
                    <div className="flex space-x-4">
                        <a
                            href="https://drive.google.com/file/d/1d-jsHP1n1TsZPRstPyCK5zyerpv6H4ih/view"
                            target="_blank"
                            className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-400"
                        >
                            Contrato colectivo 2024
                        </a>
                        <a
                            href="https://drive.google.com/file/d/1SmUQPI2z4pBqxS45Sfa-TMZ-aSitaxII/view"
                            target="_blank"
                            className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-400"
                        >
                            ontrato colectivo 2023
                        </a>
                        <a
                            href="https://drive.google.com/file/d/1SmUQPI2z4pBqxS45Sfa-TMZ-aSitaxII/view"
                            target="_blank"
                            className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-400"
                        >
                            Contrato colectivo 2022
                        </a>
                        <a
                            href="https://drive.google.com/file/d/1SmUQPI2z4pBqxS45Sfa-TMZ-aSitaxII/view"
                            target="_blank"
                            className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-400"
                        >
                            Contrato colectivo 2021
                        </a>
                    </div>
                </div>
            )}

        </main>
    );
}
