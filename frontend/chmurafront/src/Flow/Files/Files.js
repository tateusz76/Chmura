import React, {useState,useEffect} from 'react'
import axios from 'axios'
import './Files.css'
import Header from '../../Components/Header/Header'

function Files() {
    const [filename, setFilename] = useState('')
    const [files, setFiles] = useState([{}])
    const [status, setstatus] = useState('')


    let api = 'http://127.0.0.1:8000/chmura/api'


    const saveFile = () =>{

        let formData = new FormData();
        formData.append("file", filename)

        let axiosConfig = {
            headers: {
                'Content-Type': 'multpart/form-data'
            }
        }

        axios.post(api + '/files/', formData, axiosConfig).then(
            response =>{
                console.log(response)
                setstatus('Plik przesłany')
            }
        ).catch(error =>{
            console.log(error)
        })
    }

    const getFiles = () =>{

        axios.get(api + '/files/').then(
            response =>{
                setFiles(response.data)
            }
        ).catch(error =>{
            console.log(error)
        })

    }

    const handleDownload = (response, title) =>{
        console.log(response)
        const url = window.URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', title)
        document.body.appendChild(link)
        link.click()


    }

    const download = (url, title)=>{
        axios({
            method: 'get',
            url,
            responseType: 'arraybuffer'
        }).then((response)=>{
            handleDownload(response, title)
        }).catch((error)=> console.log(error))

    }

    useEffect (() =>{
        getFiles()
    }, [])


return (
  <div className="filesContainer">
    <Header/>
      <div className="row">
          <div>
              <h2>Prześlij pliki</h2>
      <form >
      <div className="form-group">
          <label htmlFor="exampleFormControlFile1">Wybierz plik</label>
          <input type="file" onChange={e => setFilename(e.target.files[0])} />
          </div>
          <button type="button" onClick={saveFile} className="sendButton">Wyślij</button>
          <br/>
          <br/>
          <br/>
          {status ? <h2>{status}</h2>:null}

      </form>
      </div>
          <div className="filesList">

            <h2>Lista plików i pobieranie</h2>

            <table className="table">
            <thead>
            <tr>
            <th scope="col">Nazwa pliku</th>
            <th scope="col">Pobierz</th>
            </tr>
            </thead>
            <tbody>

            {files.map(e => {
                return(
                    <tr>
                <td>{e.file}</td>
                <td><a href="" target="_blank"></a>
                
                <button onClick={()=> download(e.file, e.id)} className="sendButton">Pobierz</button>
                </td>
            </tr>

                  
              )
            })}

            </tbody>
            </table>
          </div>
      </div>
  </div>

    )
}

export default Files