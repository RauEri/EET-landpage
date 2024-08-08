import './nosotros.style.css'
import data from './info.data.json'

export default function Nosotros() {
    return (
        <div className='informacion-nosotros'>
            <div className='content-info'>
                <div className='encabezado'>
                    <h2>{data['target-1'].title}</h2>
                </div>
                <div className='body-info'>
                    <p>{data['target-1'].body}</p>
                </div>
            </div>
            <div className='content-info'>
                <div className='encabezado'>
                    <h2>{data['target-2'].title}</h2>
                </div>
                <div className='body-info'>
                    <p>{data['target-2'].body}</p>
                </div>
            </div>
            <div className='content-info'>
                <div className='encabezado'>
                    <h2>{data['target-3'].title}</h2>
                </div>
                <div className='body-info'>
                    <p>{data['target-3'].body}</p>
                </div>
            </div>
        </div>
    )
}