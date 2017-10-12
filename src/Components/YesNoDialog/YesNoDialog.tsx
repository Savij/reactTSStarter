import * as React from 'react';
import * as Modal from 'react-modal';
import { css } from 'aphrodite';
import { IDialogArg } from '../../models/IDialogArg';
import styles from './YesNoDialog.Styles';
const CloseButton = require('../../../assets/images/close-large.png');

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

export function YesNoDialog(props: {
    dialogArgs: IDialogArg;
    title: string;
    statement: string;
    question: string;
    positiveButtonText?: string;
    negativeButtonText?: string;
    onClose(isPositive: boolean, passthroughArgs: IDialogArg);
}) {
    const positiveText = props.positiveButtonText || 'Yes';
    const negativeText = props.negativeButtonText || 'No';
    return (
        <Modal
            contentLabel='Modal'
            isOpen={props.dialogArgs.showDialog}
            style={customStyles}>
            <div className={css(styles.container)}>
                <div className={`row ${css(styles.titleRow)}`}>
                    <div className='col-md-11'>
                        <h1 className={css(styles.titleText)}>{props.title}</h1>
                    </div>
                    <div className='col-md-1'>
                        <div><img onClick={() => props.onClose(false, props.dialogArgs)} src={CloseButton} /></div>
                    </div>
                </div>
                <div className={`row ${css(styles.statementRow)}`}>
                    <div className='col-md-12'>
                        <div>{props.statement}</div>
                    </div>
                </div>
                <div className={`row ${css(styles.questionRow)}`}>
                    <div className='col-md-12'>
                        <div>{
                            props.question.indexOf('\n') === -1 ?
                                props.question :
                                props.question.split('\n').map((text, index) => {
                                    return <div key={index}>{text}</div>;
                                })
                        }</div>
                    </div>
                </div>
                <div className={`row ${css(styles.buttonsRow)}`}>
                    <div className='col-md-12'>
                        <input className={`btn-sf btn-citrix-primary ${css(styles.positiveButton)}`} type='button' value={positiveText}
                            onClick={() => props.onClose(true, props.dialogArgs)} />
                        <input className={`btn-sf btn-citrix-secondary ${css(styles.positiveButton)}`} type='button' value={negativeText}
                            onClick={() => props.onClose(false, props.dialogArgs)} />
                    </div>
                </div>
            </div>
        </Modal>
    );
}