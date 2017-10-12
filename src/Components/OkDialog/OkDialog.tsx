import * as React from 'react';
import * as Modal from 'react-modal';
import { css } from 'aphrodite';
import styles from '../OkDialog/OkDialog.Styles';

const customStyles: any = {
    content: {
        top: '20%',
        left: 'auto',
        right: 'auto',
        bottom: 'auto',
        padding: 0,
        background: 'transparent',
        display: 'table',
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        border: 'none',
        borderRadius: 'none'
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        overflow: 'hidden',
        zIndex: 7000
    }
};

export function OkDialog(props: {
    showDialog: boolean,
    statement: string,
    buttonText?: string,
    title?: string,
    onClose()
}) {
    const buttonText = props.buttonText || 'Ok';
    return (
        <Modal
            contentLabel='Modal'
            isOpen={props.showDialog}
            style={customStyles}>
            <div className={css(styles.container)}>
                <div className={`row ${css(styles.titleRow)}`}>
                    <div className='col-md-11'>
                        <h1 className={css(styles.titleText)}>{props.title}</h1>
                    </div>
                </div>
                <div className={css(styles.mainBody)}>
                    <div className={`row ${css(styles.statementRow)}`}>
                        <div className='col-md-12'>
                            <div>{
                                props.statement.indexOf('\n') === -1 ?
                                    props.statement :
                                    props.statement.split('\n').map((text, index) => {
                                        return <div key={index}>{text}</div>;
                                    })
                            }</div>
                        </div>
                    </div>
                    <div className={`row ${css(styles.buttonsRow)}`}>
                        <div className='col-md-12'>
                            <input className={`btn-sf btn-citrix-primary ${css(styles.okButton)}`} type='button' value={buttonText} onClick={props.onClose}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
}