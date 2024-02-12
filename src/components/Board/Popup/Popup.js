import './Popup.css'
import { useAppContext } from '../../../context/Context'
import { Status } from '../../../Constant'
import { closPopup } from '../../../reducer/actions/popup'
import React from 'react'
import PromotionBox from './PromotionBox/PromotionBox'

const Popup = ({children}) => {

    const { appState : {status}, dispatch } = useAppContext();

    const onClosePopup = () => {
        dispatch(closPopup())
    }

    if (status === Status.ongoing)
        return null

    return <div className="popup">

{React.Children
            .toArray(children)
            .map (child => React.cloneElement(child, { onClosePopup }))}
    </div>
}

export default Popup