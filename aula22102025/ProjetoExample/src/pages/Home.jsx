

export const Button = () => {


    return <>
        <Button onChange={function generica()} >
            Submit
        </Button>
    </>
}


////////////////////////////////////////////////
import "./style.css"
import Button from "algumlugar"

const HomePage = () => {


    function postDataonBackend(){

    }

    <>
        <div>
            <Button onChange={postDataonBackend()}>

            </Button>
        </div>
    </>
}

//////////////////////////

const ProfilePage = () => {


    function getDataonBackend(){

    }

    <>
        <div  >
            <Button onChange={getDataonBackend()}>

            </Button>
        </div>
    </>
}


///////////////////////////////////////////

