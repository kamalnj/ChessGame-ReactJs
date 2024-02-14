import { useAppContext } from "../../../../context/Context";
import { takeBack } from "../../../../reducer/actions/Move";

const TakeBack = () => {
    const {dispatch} = useAppContext();


    return (
        <div>
            <button onClick={ () => dispatch(takeBack())}>Take Back</button>
        </div>
    );
}

export default TakeBack;
