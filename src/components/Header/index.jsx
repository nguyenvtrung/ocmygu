import {Header} from '../../API'
function Title() {
    return ( 
        <div className="flex flex-col items-center text-lime-700 font-bold tracking-widest my-2 uppercase">
            <h1>{Header.title}</h1>
            <h4>{Header.content}</h4>
            <h5 className="border-b border-solid border-lime-70">{Header.wifi}9</h5>
        </div>
     );
}

export default Title;