import React from 'react'
import '../css/Contact.css'

const Contact = () => {

  return (
    <>
    <section className="container-fluid contact-bg">
      <div className="row justify-content-center">
        <div className="col-lg-12 col-md-12 col-sm-12 col-12 d-flex justify-content-center"> 
          {/* This is a real google form */}
          <form action="https://docs.google.com/forms/d/e/1FAIpQLSdOiQjUVjtFM_afeNMkv5oWwKhYn-4PDQaJxWMXqQCS9VbSgQ/formResponse" target="_self" id="bootstrapForm" method="POST">
            <fieldset>
                <h2 className="title">Contactate con nosotros<br/><small></small></h2>
            </fieldset>
            {/* Field type: "short" id: "1813447519" */}
            <fieldset>
                <legend className="form__text d-flex justify-content-start" for="1813447519">Nombre</legend>
                <div className="form-group">
                    <input id="1055138227" type="text" name="entry.1055138227" className="form-control" placeholder="Nombre" required/>
                </div>
            </fieldset>
            {/* Field type: "short" id: "1061956812" */}
            <fieldset>
                <legend className="form__text d-flex justify-content-start" for="1061956812">E-mail</legend>
                <div className="form-group">
                    <input id="635995478" type="email" name="entry.635995478" className="form-control" placeholder="email" required/>
                </div>
            </fieldset>
            {/* Field type: "short" id: "1200893321" */}
            <fieldset>
                <legend className="form__text d-flex justify-content-start" for="1200893321">Teléfono</legend>
                <div className="form-group">
                    <input id="269808059" type="text" name="entry.269808059" className="form-control" placeholder="Teléfono" required/>
                </div>
            </fieldset>
            {/* Field type: "paragraph" id: "1033431950" */}
            <fieldset>
                <legend className="form__text d-flex justify-content-start" for="1033431950">Mensaje</legend>
                <div className="form-group">
                    <textarea id="357489913" name="entry.357489913" className="form-control" placeholder="Ingresá tu mensaje"></textarea>
                </div>
            </fieldset>
            <input type="hidden" name="fvv" value="1"/>
            <input type="hidden" name="fbzx" value="5380032353840637868"/>
            <input type="hidden" name="pageHistory" value="0"/>
            <input className="btn btn-success" type="submit" value="Enviar"/>
          </form>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact