import React from 'react'
import { useDispatch } from 'react-redux'
import { Button, Menu } from 'semantic-ui-react'
import { openModal } from '../../app/common/modals/modalReducer'

function SignedOutMenu({setAuthenticated}) {
    const dispath = useDispatch();
    return (
        <Menu.Item position='right'>
            <Button onClick={() => dispath(openModal({modalType: 'LoginForm'}))} basic inverted content="Login" />
            <Button basic inverted content="Register" style={{marginLeft: '0.5em'}} />
        </Menu.Item>
    )
}

export default SignedOutMenu
